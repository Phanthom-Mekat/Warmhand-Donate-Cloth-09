import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import DonationCampaign from "../pages/DonationCampaign";
import DonationDetails from "../pages/DonationDetails";
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        path: "auth",
        element: <AuthLayout/>,
        children: [
          {
            path: "/auth/login",
            element: <Login />,
          },
          {
            path: "/auth/register",
            element: <Register />,
          },
        ],
      },

    {
        path: "*",
        element: <h1>404</h1>,
    }
]);

export default router;