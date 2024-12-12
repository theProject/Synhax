import React from "react";
import ReactDOM from "react-dom/client";
import MainComponent from "./MainComponent"; // Updated import to reflect the new file name

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MainComponent />
  </React.StrictMode>
);
