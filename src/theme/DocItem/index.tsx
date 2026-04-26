import React, {type ComponentProps} from 'react';
import OriginalDocItem from '@theme-original/DocItem';
import BrowserOnly from '@docusaurus/BrowserOnly';
import GiscusComments from '@site/src/components/GiscusComments';

type Props = ComponentProps<typeof OriginalDocItem>;

export default function DocItem(props: Props): React.JSX.Element {
    return (
        <>
            <OriginalDocItem {...props} />
            <BrowserOnly fallback={null}>
                {() => (
                    <div className="container padding-bottom--lg">
                        <GiscusComments />
                    </div>
                )}
            </BrowserOnly>
        </>
    );
}
