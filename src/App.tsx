import { RouterProvider } from "react-router-dom";
import LayoutContextProvider from "./contexts/LayoutContextProvider";
import DataProvider from "./contexts/DataProvider"; // Import DataProvider
import router from "./router/router";

function App() {
    return (
        <LayoutContextProvider>
            <DataProvider> 
            <RouterProvider router={router} />    
            </DataProvider>
        </LayoutContextProvider>
    );
}

export default App;
