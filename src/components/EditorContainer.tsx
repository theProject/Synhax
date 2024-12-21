import React, { useState } from 'react';
import { Box } from '@mui/material';
import EditorBox from './EditorBox';

const EditorContainer: React.FC = () => {
  const [expandedBox, setExpandedBox] = useState<'html' | 'css' | 'javascript' | null>(null);

  // Callback to set the expanded box
  const handleExpand = (box: 'html' | 'css' | 'javascript') => {
    setExpandedBox((prev) => (prev === box ? null : box)); // Collapse if already expanded
  };

  return (
    <Box display="flex">
      <EditorBox
        lang="html"
        boxName="HTML"
        logo={<div>HTML Logo</div>}
        isExpanded={expandedBox === 'html'} // Expand if this is the active box
        onExpand={() => handleExpand('html')} // Notify parent to expand this box
      />
      <EditorBox
        lang="css"
        boxName="CSS"
        logo={<div>CSS Logo</div>}
        isExpanded={expandedBox === 'css'} // Expand if this is the active box
        onExpand={() => handleExpand('css')} // Notify parent to expand this box
      />
      <EditorBox
        lang="javascript"
        boxName="JS"
        logo={<div>JS Logo</div>}
        isExpanded={expandedBox === 'javascript'} // Expand if this is the active box
        onExpand={() => handleExpand('javascript')} // Notify parent to expand this box
      />
    </Box>
  );
};

export default EditorContainer;
