import { Link } from "react-router-dom";
import { useValue } from "../../Context";
import avatarPng from "../../images/ava.png";

const Dashboard = () => {
    const { users } = useValue();
    const usersCount = users.length;
    return (
        <div className="p-8 flex justify-between gap-2 items-center">
            <div className="flex items-center p-2 rounded bg-white-500 text-black  text-xl text-center  font-medium w-[200px] shadow-sm border border-solid ">
                <figure className="w-[60px]">
                    <img src={avatarPng} className="" />
                </figure>
                <h1 className="w-1/2">
                    {usersCount} users
                    <p>
                        <Link
                            className="text-sm text-blue-500 hover:underline"
                            to="/users"
                        >
                            see more
                        </Link>
                    </p>
                </h1>
            </div>
        </div>
    );
};

export default Dashboard;
