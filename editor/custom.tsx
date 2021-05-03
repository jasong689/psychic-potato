import React, { useState } from "react";
import { NodeViewWrapper, NodeViewContent } from '@tiptap/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";

export default ({ children }) => {
    const [expanded, setExpanded] = useState(true);

    return (
    <NodeViewWrapper className="talking-point">
        <div className="pointer" onClick={() => setExpanded(!expanded)}>
            <FontAwesomeIcon icon={expanded ? faCaretDown : faCaretRight} />
        </div>
        <NodeViewContent className={`talking-point-content${expanded ? " visible" : ""}`} />
    </NodeViewWrapper>
    )
}