import { Link, useNavigate } from "react-router-dom";
import { useValue } from "../../Context";
import { useEffect } from "react";
import axiosClient from "../../api/axios-client";

const Users = () => {
    const { getUsers, users, loading, setLoading, setNotification } =
        useValue();
    const navigate = useNavigate();

    useEffect(() => {
        getUsers();
    }, []);

    const deleteUser = async (id) => {
        setLoading(true);
        try {
            const response = await axiosClient.delete("/users/" + id);
            setNotification(response.data.message);
            getUsers();
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white shadow-md m-2 p-4">
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-medium text-[#333]">All users </h1>
                <Link className="btn-primary" to="/new">
                    New User
                </Link>
            </div>
            {loading && <p>Loading...</p>}
            {!loading && users && (
                <table className="flex flex-col gap-4">
                    <thead>
                        <tr className="flex justify-between items-center border p-2">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created at </th>
                            <th className="flex justify-center items-center  w-1/5">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="flex flex-col gap-2">
                        {users.map((user) => (
                            <tr
                                key={user.id}
                                className="flex justify-between items-center border p-2"
                            >
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.created_at}</td>
                                <td className="flex justify-center items-center gap-1 w-1/5">
                                    <Link
                                        to={"/edit/" + user.id}
                                        className="text-white bg-blue-600 rounded p-2"
                                    >
                                        edit
                                    </Link>
                                    <button
                                        className="text-white rounded p-2 bg-red-600"
                                        onClick={() => deleteUser(user.id)}
                                    >
                                        remove
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Users;
