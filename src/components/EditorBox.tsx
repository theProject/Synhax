import React from 'react';
import { Box, styled, Tooltip } from '@mui/material';
import { CloseFullscreen } from '@mui/icons-material';
import Monaco from './Monaco';

// Props for each EditorBox
interface EditorBoxProps {
  lang: 'html' | 'css' | 'javascript'; // Language of the editor
  boxName: 'HTML' | 'CSS' | 'JS'; // Name of the editor
  logo: React.ReactNode; // Logo to display
  isExpanded: boolean; // Whether the box is expanded
  onExpand: () => void; // Function to toggle expansion
}

// Styled components
const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  padding: 9px 12px;
  align-items: center;
  gap: 0.25rem;
`;

const Header = styled(Box)`
  display: flex;
  background-color: #060606;
  color: #aaaebc;
  justify-content: space-between;
  font-weight: 500;
  align-items: center;
  padding-right: 5px;
`;

const EditorBoxDiv = styled(Box)`
  flex: 2;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-width: 1px 1px;
  border-top-color: transparent;
  border-bottom-color: transparent;
  transition: all 0.3s ease; /* Smooth resizing */
  &:focus-within {
    border: 1px solid rgba(255, 255, 255, 0.9);
  }
`;

// Individual EditorBox component
const EditorBox: React.FC<EditorBoxProps> = ({ lang, boxName, logo, isExpanded, onExpand }) => {
  return (
    <EditorBoxDiv
      style={{
        flexGrow: isExpanded ? 1 : 0, // Expand or collapse based on isExpanded
        width: isExpanded ? 'auto' : '125px', // Dynamic width
        height: '100%',
        transition: 'all 0.3s ease',
      }}
    >
      <Header>
        <Heading>
          <Box component="span" style={{ display: 'flex' }}>
            {logo}
          </Box>
          {boxName}
        </Heading>
        <Tooltip title={isExpanded ? 'Collapse' : 'Expand'} arrow>
          <CloseFullscreen
            style={{ cursor: 'pointer', padding: '5px' }}
            onClick={onExpand} // Notify parent to expand this box
          />
        </Tooltip>
      </Header>
      <Monaco
        lang={lang}
        boxName={boxName}
        style={{
          width: isExpanded ? '100%' : '10px', // Adjust Monaco editor width
          height: '500px',
          overflow: isExpanded ? 'visible' : 'hidden',
        }}
      />
    </EditorBoxDiv>
  );
};

export default EditorBox;
