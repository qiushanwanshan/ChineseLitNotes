import React, {useEffect, useState} from 'react';
import {useLocation} from '@docusaurus/router';
import './CustomFooter.css';

const BUSUANZI_API = 'https://cdn.busuanzi.cc/api.php';

function formatBusuanziField(value: unknown): string {
    if (value == null) {
        return '—';
    }
    return String(value);
}

const CustomFooter: React.FC = () => {
    const location = useLocation();
    const [sitePv, setSitePv] = useState('加载中...');
    const [pagePv, setPagePv] = useState('加载中...');

    useEffect(() => {
        let cancelled = false;
        setPagePv('加载中...');

        fetch(BUSUANZI_API, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                url: window.location.href,
                referrer: document.referrer,
            }),
        })
            .then((r) => r.json())
            .then((data: Record<string, unknown>) => {
                if (cancelled) {
                    return;
                }
                setSitePv(formatBusuanziField(data.busuanzi_site_pv));
                setPagePv(formatBusuanziField(data.busuanzi_page_pv));
            })
            .catch((e) => {
                console.error(e);
                if (cancelled) {
                    return;
                }
                setPagePv('加载中...');
                setSitePv('加载中...');
            });

        return () => {
            cancelled = true;
        };
    }, [location.pathname, location.search, location.hash]);

    return (
        <footer className="footer-custom">
            <div className="footer-copyright">
                Copyright © {new Date().getFullYear()} 中文系考试Wiki.
            </div>
            <div className="footer-busuanzi">
                本站访问量 <span>{sitePv}</span> 次 丨
                本页阅读量 <span>{pagePv}</span> 次
            </div>
        </footer>
    );
};


export default CustomFooter;
