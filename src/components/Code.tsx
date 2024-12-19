import React from 'react';
import { Box, styled } from '@mui/material';
import EditorBox from './EditorBox';

const CodeBoxes = styled(Box)`
  display: flex;
  gap: 0.8rem;
  border: 1px solid rgb(108, 108, 108);
  border-width: 1px 0px;
  background-color: black;
  box-sizing: border-box;
`;

const CodeboxDiv = styled(Box)`
  padding: 0;
  margin: 0;
  padding-bottom: 20px;
  background-color: black;
`;

const HTMLlogo = <svg>{/* SVG content */}</svg>;
const CSSlogo = <svg>{/* SVG content */}</svg>;
const JSlogo = <svg>{/* SVG content */}</svg>;

const Code: React.FC = () => {
  return (
    <CodeboxDiv>
      <CodeBoxes>
        <EditorBox lang="html" boxName="HTML" logo={HTMLlogo} />
        <EditorBox lang="css" boxName="CSS" logo={CSSlogo} />
        <EditorBox lang="javascript" boxName="JS" logo={JSlogo} />
      </CodeBoxes>
    </CodeboxDiv>
  );
};

export default Code;
