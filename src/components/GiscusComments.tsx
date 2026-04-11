import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useColorMode} from '@docusaurus/theme-common';
import Giscus from '@giscus/react';
import type {GiscusProps} from '@giscus/react';

export type GiscusCustomFields = Pick<
    GiscusProps,
    'repo' | 'repoId' | 'category' | 'categoryId'
>;

export default function GiscusComments(): React.JSX.Element | null {
    const {siteConfig} = useDocusaurusContext();
    const {colorMode} = useColorMode();
    const giscus = siteConfig.customFields?.giscus as GiscusCustomFields | undefined;

    if (!giscus?.repoId || !giscus?.categoryId) {
        return null;
    }

    const theme = colorMode === 'dark' ? 'noborder_dark' : 'noborder_light';

    return (
        <BrowserOnly fallback={<div className="margin-top--xl text--center text--muted">评论加载中…</div>}>
            {() => (
                <div className="margin-top--xl margin-bottom--lg">
                    <h2 className="anchor anchorWithStickyNavbar" id="comments">
                        评论
                    </h2>
                    <Giscus
                        id="giscus-thread"
                        repo={giscus.repo}
                        repoId={giscus.repoId}
                        category={giscus.category}
                        categoryId={giscus.categoryId}
                        mapping="pathname"
                        strict="0"
                        reactionsEnabled="1"
                        emitMetadata="0"
                        inputPosition="top"
                        theme={theme}
                        lang="zh-CN"
                        loading="lazy"
                    />
                </div>
            )}
        </BrowserOnly>
    );
}
