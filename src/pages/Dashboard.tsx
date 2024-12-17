import { useState } from "react";
import Header from "../layout/MainLayout/Header/Header";
import { Box, Typography } from "@mui/material";
import Editor from "@monaco-editor/react";
import "./Dashboard.css";

const Dashboard = () => {
    const [htmlCode, setHtmlCode] = useState<string>("<div>Hello, world!</div>");
    const [cssCode, setCssCode] = useState<string>("body { color: red; }");
    const [jsCode, setJsCode] = useState<string>("console.log('Hello World');");
    const [output, setOutput] = useState<string>("");

    const [layout, setLayout] = useState<string>("default");

    const generateOutput = () => {
        const compiledOutput = `
            <html>
            <head>
                <style>${cssCode}</style>
            </head>
            <body>
                ${htmlCode}
                <script>${jsCode}</script>
            </body>
            </html>
        `;
        setOutput(compiledOutput);
    };

    const handleLayoutChange = (newLayout: string) => {
        setLayout(newLayout);
    };

    const renderEditor = (title: string, language: string, value: string, onChange: (v: string) => void) => (
        <Box className="editor-wrapper">
            <Typography className="editor-title">{title}</Typography>
            <Editor
                height="100%"
                language={language}
                theme="vs-dark"
                value={value}
                onChange={(v) => onChange(v || "")}
            />
        </Box>
    );

    return (
        <>
            <Header generateOutput={generateOutput} onChangeLayout={handleLayoutChange} />
            <Box className={`dashboard-container ${layout}`}>
                {/* HTML Editor */}
                {renderEditor("HTML", "html", htmlCode, setHtmlCode)}
                {/* CSS Editor */}
                {renderEditor("CSS", "css", cssCode, setCssCode)}
                {/* JS Editor */}
                {renderEditor("JavaScript", "javascript", jsCode, setJsCode)}
                {/* Output */}
                <Box className="output-wrapper">
                    <Typography className="editor-title">Output</Typography>
                    <iframe title="Output" srcDoc={output} className="output-frame"></iframe>
                </Box>
            </Box>
        </>
    );
};

export default Dashboard;
