import {
    createBrowserRouter,
} from "react-router-dom";
import InnerLayout from "../components/layouts/InnerLayout";
import Login from "../pages/Login";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <InnerLayout />,
    },
    {
        path: "/login",
        element: <Login />,
    },
]);