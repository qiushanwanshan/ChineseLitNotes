import React, {useEffect, useState} from 'react';
import {useLocation} from '@docusaurus/router';
import './CustomFooter.css';

const VERCOUNT_API = 'https://events.vercount.one/api/v2/log';
const VERCOUNT_TIMEOUT_MS = 5000;
const UV_COOKIE_PREFIX = 'vercount_uv_';

type CountValue = number | null;

type VercountStats = {
    sitePv: CountValue;
    pagePv: CountValue;
};

function parseCount(value: unknown): CountValue {
    if (typeof value === 'number' && Number.isFinite(value) && value >= 0) {
        return value;
    }
    if (typeof value === 'string' && value.trim() !== '') {
        const parsed = Number(value);
        if (Number.isFinite(parsed) && parsed >= 0) {
            return parsed;
        }
    }
    return null;
}

function readStatsFromPayload(payload: unknown): VercountStats {
    if (!payload || typeof payload !== 'object') {
        return {sitePv: null, pagePv: null};
    }

    const root = payload as Record<string, unknown>;
    const nested =
        root.data && typeof root.data === 'object'
            ? (root.data as Record<string, unknown>)
            : null;
    const source = nested ?? root;

    return {
        sitePv: parseCount(source.site_pv),
        pagePv: parseCount(source.page_pv),
    };
}

function uvCookieName(): string {
    const host = window.location.host || 'unknown-host';
    return `${UV_COOKIE_PREFIX}${host.replace(/[^a-zA-Z0-9_-]/g, '_')}`;
}

function readCookie(name: string): string | null {
    const match = document.cookie
        .split('; ')
        .find((part) => part.startsWith(`${name}=`));
    return match ? match.slice(name.length + 1) : null;
}

function consumeNewVisitor(): boolean {
    const name = uvCookieName();
    const isNewUv = readCookie(name) !== '1';
    if (isNewUv) {
        document.cookie = `${name}=1; path=/; max-age=31536000; samesite=lax`;
    }
    return isNewUv;
}

const CustomFooter: React.FC = () => {
    const location = useLocation();
    const [stats, setStats] = useState<VercountStats>({
        sitePv: null,
        pagePv: null,
    });

    useEffect(() => {
        const pageUrl = window.location.href;
        if (!pageUrl.startsWith('http')) {
            setStats({sitePv: null, pagePv: null});
            return;
        }

        let cancelled = false;
        const controller = new AbortController();
        const timeoutId = window.setTimeout(
            () => controller.abort(),
            VERCOUNT_TIMEOUT_MS,
        );

        fetch(VERCOUNT_API, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                url: pageUrl,
                isNewUv: consumeNewVisitor(),
            }),
            signal: controller.signal,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                return response.json();
            })
            .then((data: unknown) => {
                if (!cancelled) {
                    setStats(readStatsFromPayload(data));
                }
            })
            .catch(() => {
                if (!cancelled) {
                    setStats({sitePv: null, pagePv: null});
                }
            })
            .finally(() => {
                window.clearTimeout(timeoutId);
            });

        return () => {
            cancelled = true;
            controller.abort();
            window.clearTimeout(timeoutId);
        };
    }, [location.pathname, location.search]);

    const {sitePv, pagePv} = stats;
    const hasStats = sitePv != null || pagePv != null;

    return (
        <footer className="footer-custom">
            <div className="footer-copyright">
                Copyright © {new Date().getFullYear()} 中文系考试Wiki.
            </div>
            {hasStats && (
                <div className="footer-vercount">
                    {sitePv != null && (
                        <>
                            本站访问量 <span>{sitePv}</span> 次
                        </>
                    )}
                    {sitePv != null && pagePv != null && ' 丨 '}
                    {pagePv != null && (
                        <>
                            本页阅读量 <span>{pagePv}</span> 次
                        </>
                    )}
                </div>
            )}
        </footer>
    );
};

export default CustomFooter;
