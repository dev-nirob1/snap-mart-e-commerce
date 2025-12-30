import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../zems/Front/Layout/MainLayout";
import frontRoutes from "../zems/Front/frontRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [...frontRoutes]
    }
])