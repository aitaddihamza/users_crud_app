import { Navigate, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import GuestLayout from "./layouts/GuestLayout";
import Users from "./views/user/Users";
import Dashboard from "./views/user/Dashboard";
import UserForm from "./views/user/UserForm";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Navigate to="/users" />,
            },
            {
                path: "/users",
                element: <Users />,
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/new",
                element: <UserForm key="createUser" />,
            },
            {
                path: "/edit/:id",
                element: <UserForm key="editUser" />,
            },
        ],
    },
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
        ],
    },
]);

export default router;
