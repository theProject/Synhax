import React, { useState, useEffect, useContext } from 'react';
import { Box } from '@mui/material';
import { DataContext } from '../contexts/DataContext';

const Results: React.FC = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('DataContext must be used within a DataProvider');
  }

  const { HTMLval, CSSval, JSval } = context;

  const [src, setSrc] = useState<string>('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(`
        <html>
          <body>${HTMLval}</body>
          <style>${CSSval}</style>
          <script>${JSval}</script>
        </html>
      `);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [HTMLval, CSSval, JSval]);

  return (
    <Box sx={{ height: '374px', overflow: 'hidden' }}>
      <iframe
        srcDoc={src}
        title="Output"
        sandbox="allow-popups allow-scripts"
        width="100%"
        height="100%"
        className="iframe-style"
      />
    </Box>
  );
};

export default Results;
