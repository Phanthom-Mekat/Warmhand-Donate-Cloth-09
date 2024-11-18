import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            }
        ]
    },
    {
        path: "/about",
        element: <h1>About</h1>,
    },
    {
        path: "/contact",
        element: <h1>Contact</h1>,
    },
    {
        path: "*",
        element: <h1>404</h1>,
    }
]);

export default router;