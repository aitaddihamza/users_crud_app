import { Outlet } from "react-router-dom";

const GuestLayout = () => {
    return (
        <div className="p-4 mt-8">
            <Outlet />
        </div>
    );
};

export default GuestLayout;
