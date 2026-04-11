import React, {type ComponentProps} from 'react';
import OriginalDocItem from '@theme-original/DocItem';

type Props = ComponentProps<typeof OriginalDocItem>;

export default function DocItem(props: Props): React.JSX.Element {
    return <OriginalDocItem {...props} />;
}
