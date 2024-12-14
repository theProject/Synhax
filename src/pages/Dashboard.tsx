import { useState } from "react";
import { Typography, Box } from "@mui/material";
import { Responsive, WidthProvider } from "react-grid-layout";
import Editor from "@monaco-editor/react";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import "./Dashboard.css";
import Header from "../layout/MainLayout/Header/Header";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
    const [htmlCode, setHtmlCode] = useState("<!DOCTYPE html>\n<html>\n<body>\n</body>\n</html>");
    const [cssCode, setCssCode] = useState("body {\n    font-family: Arial, sans-serif;\n}");
    const [jsCode, setJsCode] = useState("console.log('Hello, World!');");
    const [output, setOutput] = useState("");

    const generateOutput = () => {
        const iframeContent = `
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
        setOutput(iframeContent);
    };

    const layout = [
        { i: "htmlEditor", x: 0, y: 0, w: 4, h: 12 },
        { i: "cssEditor", x: 4, y: 0, w: 4, h: 12 },
        { i: "jsEditor", x: 8, y: 0, w: 4, h: 12 },
        { i: "outputFrame", x: 0, y: 12, w: 12, h: 8 },
    ];

    return (
        <div>
            <Header generateOutput={generateOutput} />
            <div className="dashboard">
                <Box className="dashboard-container">
                    <ResponsiveGridLayout
                        className="layout"
                        layouts={{ lg: layout }}
                        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480 }}
                        cols={{ lg: 12, md: 10, sm: 6, xs: 4 }}
                        rowHeight={30}
                        isResizable={true}
                        isDraggable={false} 
                        compactType={null}
                    >
                        {/* HTML Editor */}
                        <div key="htmlEditor" className="editor-container">
                            <Typography variant="h6" className="editor-title">
                                HTML Editor
                            </Typography>
                            <Editor
                                height="100%"
                                language="html"
                                theme="vs-dark"
                                value={htmlCode}
                                onChange={(value) => setHtmlCode(value || "")}
                            />
                        </div>

                        {/* CSS Editor */}
                        <div key="cssEditor" className="editor-container">
                            <Typography variant="h6" className="editor-title">
                                CSS Editor
                            </Typography>
                            <Editor
                                height="100%"
                                language="css"
                                theme="vs-dark"
                                value={cssCode}
                                onChange={(value) => setCssCode(value || "")}
                            />
                        </div>

                        {/* JavaScript Editor */}
                        <div key="jsEditor" className="editor-container">
                            <Typography variant="h6" className="editor-title">
                                JavaScript Editor
                            </Typography>
                            <Editor
                                height="100%"
                                language="javascript"
                                theme="vs-dark"
                                value={jsCode}
                                onChange={(value) => setJsCode(value || "")}
                            />
                        </div>

                        {/* Output Frame */}
                        <div key="outputFrame" className="editor-container">
                            <Typography variant="h6" className="editor-title">
                                Output
                            </Typography>
                            <iframe
                                srcDoc={output}
                                title="Output"
                                className="output-frame"
                            ></iframe>
                        </div>
                    </ResponsiveGridLayout>
                </Box>
            </div>
        </div>
    );
};

export default Dashboard;
