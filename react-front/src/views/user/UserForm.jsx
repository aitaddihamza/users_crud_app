import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useValue } from "../../Context";
import axiosClient from "../../api/axios-client";

const UserForm = () => {
    const [errors, setErrors] = useState(null);
    const [user, setUser] = useState({
        id: "",
        name: "",
        email: "",
    });
    const { token, getUsers, setNotification } = useValue();
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const { id } = useParams();

    if (id) {
        useEffect(() => {
            axiosClient
                .get("/users/" + id)
                .then(({ data }) => {
                    console.log(data.user);
                    setUser(data.user);
                    setLoading(false);
                })
                .catch((err) => {
                    setLoading(false);
                    console.log(err);
                });
        }, []);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors(null);
        if (id) {
            try {
                const response = await axiosClient.put(
                    "/users/" + user.id,
                    user
                );
                getUsers();
                navigate("/users");
                setNotification(response.data.message);
            } catch (err) {
                if (err.response && err.response.status === 422) {
                    setErrors(err.response.data.errors);
                }
            }
        } else {
            try {
                const response = await axiosClient.post("/users", user);
                console.log(response.data.message);
                getUsers();
                navigate("/users");
                setNotification(response.data.message);
            } catch (err) {
                if (err.response && err.response.status === 422) {
                    setErrors(err.response.data.errors);
                }
            }
        }
    };
    return (
        <div>
            {loading && <p>Loading...</p>}
            {!loading && (
                <form
                    className="flex flex-col m-4 gap-4 shadow-md px-8 pb-[4rem] pt-8 mt-4"
                    onSubmit={handleSubmit}
                >
                    <h1 className="text-xl font-medium text-[#333]">
                        Create a new user{" "}
                    </h1>
                    {errors && (
                        <ul className="bg-red-600 rounded text-white flex flex-col gap-1 p-1">
                            {Object.keys(errors).map((key) => (
                                <li key={key}>{errors[key][0]}</li>
                            ))}
                        </ul>
                    )}
                    <input
                        onChange={(e) =>
                            setUser({ ...user, name: e.target.value })
                        }
                        value={user.name}
                        className="p-2 border border-solid rounded focus:placeholder-transparent focus:outline focus:outline-green-500"
                        placeholder="Name"
                    />
                    <input
                        value={user.email}
                        onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                        }
                        type="email"
                        className="p-2 border border-solid rounded focus:placeholder-transparent focus:outline focus:outline-green-500"
                        placeholder="Email"
                    />
                    <input
                        onChange={(e) =>
                            setUser({ ...user, password: e.target.value })
                        }
                        type="password"
                        className="p-2 border border-solid rounded focus:placeholder-transparent focus:outline focus:outline-green-500"
                        placeholder="Password"
                    />
                    <input
                        onChange={(e) =>
                            setUser({
                                ...user,
                                password_confirmation: e.target.value,
                            })
                        }
                        type="password"
                        className="p-2 border border-solid rounded focus:placeholder-transparent focus:outline focus:outline-green-500"
                        placeholder="Password Confirmation"
                    />
                    <div className="flex gap-4 items-center mt-2">
                        <button className="btn-primary w-24 mx-auto">
                            Save
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default UserForm;
