// DataContext.ts
import { createContext, Dispatch, SetStateAction } from 'react';

interface DataContextType {
  HTMLval: string;
  CSSval: string;
  JSval: string;
  setHTMLval: Dispatch<SetStateAction<string>>;
  setCSSval: Dispatch<SetStateAction<string>>;
  setJSval: Dispatch<SetStateAction<string>>;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);
