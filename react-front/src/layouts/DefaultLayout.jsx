import { Outlet, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useValue } from "../Context";
import { useEffect } from "react";
import axiosClient from "../api/axios-client";
import dashboardPng from "../images/dashboard.png";

const DefaultLayout = () => {
    const { token, user, setToken, notification } = useValue();
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) navigate("/login");
        axiosClient.get("/user").then(({ data }) => {
            console.log(data);
        });
    }, []);

    const logout = () => {
        localStorage.removeItem("accessToken");
        navigate("/login");
    };

    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex  flex-1">
                <aside className="bg-green-500 flex  flex-col p-4 gap-8 w-1/6">
                    <figure className="w-[100px] ">
                        <img className="w-[100%]" src={dashboardPng} alt="" />
                    </figure>
                    <ul className="flex flex-col gap-2">
                        <li className="flex">
                            <Link
                                to="/dashboard"
                                className=" p-2 hover:rounded hover:bg-green-600 hover:shadow-md text-white transition-all duration-300 flex-1"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li className="flex">
                            <Link
                                to="/users"
                                className=" p-2 hover:rounded hover:bg-green-600 hover:shadow-md text-white transition-all duration-300 flex-1"
                            >
                                Users
                            </Link>
                        </li>
                    </ul>
                </aside>
                <section className="flex-1">
                    <header className="bg-white flex items-center justify-end  pr-4 gap-8  shadow-md py-4">
                        {notification && (
                            <p className="p-2 rounded text-white bg-green-500">
                                {notification}
                            </p>
                        )}
                        <h1 className="cursor-pointer hover:underline text-[#333] font-medium">
                            {user.name}
                        </h1>
                        <button
                            className="btn-primary"
                            onClick={() => logout()}
                        >
                            Logout
                        </button>
                    </header>
                    <Outlet />
                </section>
            </div>
        </div>
    );
};

export default DefaultLayout;
