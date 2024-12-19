import Editor, { OnChange } from '@monaco-editor/react';
import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../contexts/DataContext';

interface MonacoProps {
  boxName: 'HTML' | 'CSS' | 'JS';
  lang: string;
}

const Monaco: React.FC<MonacoProps> = ({ boxName, lang }) => {
  const { HTMLval, CSSval, JSval, setHTMLval, setCSSval, setJSval } = useContext(DataContext)!;

  const [localValue, setLocalValue] = useState<string>(() => {
    const saved = localStorage.getItem(boxName);
    if (saved) {
      try {
        return JSON.parse(saved) as string; // Explicitly cast to string
      } catch {
        return ''; // Fallback if parsing fails
      }
    }
    return '';
  });

  const handleEditorChange: OnChange = (value) => {
    if (typeof value !== 'string') return; // Ensure value is a string
    setLocalValue(value);
    switch (boxName) {
      case 'HTML':
        setHTMLval(value);
        break;
      case 'CSS':
        setCSSval(value);
        break;
      case 'JS':
        setJSval(value);
        break;
      default:
        throw new Error('Invalid boxName');
    }
  };

  useEffect(() => {
    const saved = localStorage.getItem(boxName);
    if (saved) {
      try {
        setLocalValue(JSON.parse(saved) as string); // Explicitly cast to string
      } catch {
        setLocalValue(''); // Fallback if parsing fails
      }
    }
  }, [boxName]);

  useEffect(() => {
    const currentValue = (() => {
      switch (boxName) {
        case 'HTML':
          return HTMLval;
        case 'CSS':
          return CSSval;
        case 'JS':
          return JSval;
        default:
          return '';
      }
    })();

    if (currentValue) {
      localStorage.setItem(boxName, JSON.stringify(currentValue));
    }
  }, [HTMLval, CSSval, JSval, boxName]);

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
