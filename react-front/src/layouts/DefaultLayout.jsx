import React from "react";
import { Outlet } from "react-router";

const DefaultLayout = () => {
    return (
        <div>
            <h1>Default layout </h1>
            <Outlet />
        </div>
    );
};

export default DefaultLayout;
