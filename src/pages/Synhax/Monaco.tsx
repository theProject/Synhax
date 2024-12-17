import Editor from "@monaco-editor/react";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "./contexts/DataContext";

// Define props for the component
interface MonacoProps {
  boxName: "HTML" | "CSS" | "JS"; // Restrict boxName to these values
  lang: string; // Language for syntax highlighting (e.g., "html", "css", "javascript")
}

const Monaco = ({ boxName, lang }: MonacoProps) => {
  const dataContext = useContext(DataContext);

  if (!dataContext) {
    throw new Error("Monaco must be used within a DataProvider");
  }

  const { HTMLval, CSSval, JSval, setHTMLval, setCSSval, setJSval } = dataContext;

  // A map to dynamically access setter functions
  const setterMap: Record<"HTML" | "CSS" | "JS", (val: string) => void> = {
    HTML: setHTMLval,
    CSS: setCSSval,
    JS: setJSval,
  };

  // State to manage the editor's local value
  const [localValue, setLocalValue] = useState<string>(() => {
    const saved = localStorage.getItem(boxName);
    return saved ? (JSON.parse(saved) as string) : "";
  });

  // Update local state on mount
  useEffect(() => {
    const saved = localStorage.getItem(boxName);
    if (saved) {
      setLocalValue(JSON.parse(saved) as string);
    }
  }, [boxName]);

  // Save to localStorage whenever the context value changes
  useEffect(() => {
    const value = boxName === "HTML" ? HTMLval : boxName === "CSS" ? CSSval : JSval;
    localStorage.setItem(boxName, JSON.stringify(value));
  }, [HTMLval, CSSval, JSval, boxName]);

  // Handle changes in the editor
  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setLocalValue(value);
      setterMap[boxName](value); // Call the appropriate setter dynamically
    }
  };

  return (
    <Editor
      theme="vs-dark"
      height="85%"
      defaultValue={localValue}
      defaultLanguage={lang}
      onChange={handleEditorChange}
    />
  );
};

export default Monaco;
