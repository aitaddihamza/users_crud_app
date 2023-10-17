import { Link } from "react-router-dom";

const Users = () => {
    return (
        <div className="bg-white shadow-md m-2 p-4">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-medium text-[#333]">All users </h1>
                <Link className="btn-primary" to="/new">
                    New User
                </Link>
            </div>
            <table className="flex flex-col gap-4">
                <thead className="flex justify-between items-center border p-2">
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created at </th>
                    <th className="flex justify-center items-center  w-1/5">
                        Actions{" "}
                    </th>
                </thead>
                <tbody className="flex flex-col gap-2">
                    <tr className="flex justify-between items-center border p-2">
                        <td>1</td>
                        <td>hamza</td>
                        <td>hamza@example.com</td>
                        <td>2023-10-15</td>
                        <td className="flex justify-center items-center gap-1 w-1/5">
                            <Link
                                to="/edit/:1"
                                className="text-white bg-blue-600 rounded p-2"
                            >
                                edit
                            </Link>
                            <button className="text-white rounded p-2 bg-red-600">
                                remove
                            </button>
                        </td>
                    </tr>
                    <tr className="flex justify-between items-center border p-2">
                        <td>1</td>
                        <td>hamza</td>
                        <td>hamza@example.com</td>
                        <td>2023-10-15</td>
                        <td className="flex justify-center items-center gap-1 w-1/5">
                            <Link
                                to="/edit/:1"
                                className="text-white bg-blue-600 rounded p-2"
                            >
                                edit
                            </Link>
                            <button className="text-white rounded p-2 bg-red-600">
                                remove
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Users;
