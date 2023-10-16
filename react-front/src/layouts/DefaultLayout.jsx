import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <div className="flex  flex-1">
                <aside className="bg-green-500 flex  flex-col p-4  py-[4rem] gap-8 w-1/5">
                    <figure>Dashboard image</figure>
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
                        <h1 className="cursor-pointer hover:underline text-[#333] font-medium">
                            Jack
                        </h1>
                        <button className="btn-primary">Logout </button>
                    </header>
                    <h1>Default layout </h1>
                    <Outlet />
                </section>
            </div>
        </div>
    );
};

export default DefaultLayout;
