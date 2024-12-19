import React, { useState } from 'react';
import { Box, styled, Tooltip } from '@mui/material';
import { CloseFullscreen } from '@mui/icons-material';
import Monaco from './Monaco';

interface EditorBoxProps {
  lang: 'html' | 'css' | 'javascript';
  boxName: 'HTML' | 'CSS' | 'JS';
  logo: React.ReactNode;
}

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
  flex-grow: 1;
  transition: all 0.3s ease; /* Smooth resizing */
  &:focus-within {
    border: 1px solid rgba(255, 255, 255, 0.9);
  }
`;

const EditorBox: React.FC<EditorBoxProps> = ({ lang, boxName, logo }) => {
  const [flexEnlarge, setFlexEnlarge] = useState(true);

  return (
    <EditorBoxDiv
      style={{
        flexGrow: flexEnlarge ? 1 : 0,
        width: flexEnlarge ? "auto%" : "40px", // Control width for horizontal collapsing
        height: "100%", // Ensure height is fixed - could control height collapsinmg if needed too
        transition: "all 0.3s ease", // Smooth transition
      }}
    >
      <Header>
        <Heading>
          <Box component="span" style={{ display: 'flex' }}>
            {logo}
          </Box>
          {boxName}
        </Heading>
        <Tooltip title={flexEnlarge ? "Collapse" : "Expand"} arrow>
          <CloseFullscreen
            style={{ cursor: 'pointer', padding: '5px' }}
            onClick={() => setFlexEnlarge(!flexEnlarge)}
            titleAccess={flexEnlarge ? "Collapse" : "Expand"} // Accessibility title
          />
        </Tooltip>
      </Header>
      <Monaco
  lang={lang}
  boxName={boxName}
  style={{
    width: flexEnlarge ? '100%' : '10px', // Dynamic width control
    height: "500px", // Ensure it matches the parent height
    overflow: flexEnlarge ? 'visible' : 'hidden',  
  }}
/>

    </EditorBoxDiv>
  );
};

export default EditorBox;
