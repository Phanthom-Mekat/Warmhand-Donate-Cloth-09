import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import DonationCampaign from "../pages/DonationCampaign";
import DonationDetails from "../pages/DonationDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>,
            },
            {
                path:"/donation",
                element:<DonationCampaign/>
            },
            {
                path:"/details/:id",
                element:<DonationDetails />
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