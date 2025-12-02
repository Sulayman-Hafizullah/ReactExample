import React, {useState} from 'react';

interface Props {
    maxChars?: number;
    children: string;
}

const ExpandableText = ({maxChars = 100, children}: Props) => {

    if (children.length <= maxChars) {
        return <>{children}</>
    }

    const [isExpanded, setExpanded] = useState(false);


    return <>

        <p>{isExpanded ? children.substring(0, maxChars) + "..." : children}
            <button onClick={() => setExpanded(!isExpanded)}>{isExpanded ? 'More' : 'Less'}</button>
        </p>

    </>
}

export default ExpandableText;