import React from "react";
import ReactDOM from "react-dom/client";
import MainComponent from "./MainComponent"; // Ensure the path and name are correct
import DataProvider from "./contexts/DataProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <DataProvider>
      <MainComponent />
    </DataProvider>
  </React.StrictMode>
);
