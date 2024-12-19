// DataProvider.tsx
import React, { useState, ReactNode } from 'react';
import { DataContext } from './DataContext';

interface DataProviderProps {
  children: ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [HTMLval, setHTMLval] = useState<string>('');
  const [CSSval, setCSSval] = useState<string>('');
  const [JSval, setJSval] = useState<string>('');

  return (
    <DataContext.Provider value={{ HTMLval, CSSval, JSval, setHTMLval, setCSSval, setJSval }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
