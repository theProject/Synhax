import { createContext } from "react";

// Define the structure of the context
interface DataContextType {
  HTMLval: string;
  CSSval: string;
  JSval: string;
  setHTMLval: (val: string) => void;
  setCSSval: (val: string) => void;
  setJSval: (val: string) => void;
}

// Create the context with a default value of null
export const DataContext = createContext<DataContextType | null>(null);
