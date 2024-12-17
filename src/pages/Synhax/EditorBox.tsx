import React, { useState } from "react";
import { Box, styled } from "@mui/material";
import { CloseFullscreen } from "@mui/icons-material";
import Monaco from "./Monaco";

// Define the props type for EditorBox
interface EditorBoxProps {
  logo: React.ReactNode; // Logo SVG or any React element
  boxName: "HTML" | "CSS" | "JS"; // Editor name (restricted to these values)
  lang: string; // Syntax highlighting language for Monaco
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
  flex-grow: 1;
  &:focus-within {
    border: 1px solid rgba(255, 255, 255, 0.9);
  }
`;

const EditorBox: React.FC<EditorBoxProps> = ({ logo, boxName, lang }) => {
  // State to toggle editor box resizing
  const [flexEnlarge, setFlexEnlarge] = useState<boolean>(true);

  return (
    <EditorBoxDiv style={flexEnlarge ? undefined : { flexGrow: 0 }}>
      {/* Header Section */}
      <Header>
        <Heading>
          <Box
            component="span"
            sx={{
              display: "flex",
            }}
          >
            {logo}
          </Box>
          {boxName}
        </Heading>
        {/* Fullscreen Toggle */}
        <CloseFullscreen
          sx={{ cursor: "pointer", padding: "5px" }}
          onClick={() => setFlexEnlarge(!flexEnlarge)}
        />
      </Header>

      {/* Monaco Editor */}
      <Monaco lang={lang} boxName={boxName} />
    </EditorBoxDiv>
  );
};

export default EditorBox;
