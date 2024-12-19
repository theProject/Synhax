import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layout/MainLayout/MainLayout";
import { About, Dashboard, Settings, Projects } from "@/pages"; // Assuming Projects is a module containing project-related pages
import MonacoEditorPage from "@/components/MonacoEditorPage"; // Import the Monaco editor page component

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/settings",
                children: [
                    {
                        path: "/settings/users",
                        element: <Settings.Users />,
                    },
                    {
                        path: "/settings/system",
                        element: <Settings.System />,
                    },
                ],
            },
            {
                path: "/projects",
                children: [
                    {
                        path: "/projects/new",
                        element: <MonacoEditorPage />, // Route for launching the Monaco editor
                    },
                    {
                        path: "/projects/project2",
                        element: <Projects.Project2 />, // Placeholder for another project page
                    },
                ],
            },
        ],
    },
    {
        path: "/editor",
        element: <MonacoEditorPage />, // Direct route for Monaco Editor
    },
]);

export default router;
