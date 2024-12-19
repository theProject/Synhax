import React from 'react';
import { AppBar, Toolbar, styled } from '@mui/material';

const Container = styled(AppBar)`
  background: #060606;
`;

const ToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const Header: React.FC = () => {
  return (
    <Container position="static">
      <ToolBar>
        {/* Simplified Header */}
      </ToolBar>
    </Container>
  );
};

export default Header;
