import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import axiosClient from "../../api/axios-client";
import { useValue } from "../../Context";

const Login = () => {
    const [errors, setErrors] = useState(null);
    const emailRef = useRef();
    const passwordRef = useRef();

    const { setUser, setToken } = useValue();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };
        setErrors(null);
        axiosClient
            .post("/login", payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
                navigate("/dashboard");
            })
            .catch(({ response }) => {
                if (response && response.status === 422) {
                    setErrors(
                        response.data.errors
                            ? response.data.errors
                            : { name: [response.data.message] }
                    );
                }
            });
    };
    return (
        <div>
            <h1 className="text-center font-medium text-xl text-green-600 cursor-pointer">
                Login
            </h1>
            <form
                className="flex flex-col max-w-2xl mx-auto gap-4 shadow-md px-4 pb-[4rem] pt-8 "
                onSubmit={handleSubmit}
            >
                {errors && (
                    <ul className="bg-red-600 rounded text-white flex flex-col gap-1 p-1">
                        {Object.keys(errors).map((key) => (
                            <li key={key}>{errors[key][0]}</li>
                        ))}
                    </ul>
                )}
                <input
                    ref={emailRef}
                    type="email"
                    className="p-2 border border-solid rounded focus:placeholder-transparent focus:outline focus:outline-green-500"
                    placeholder="Email"
                />
                <input
                    ref={passwordRef}
                    type="password"
                    className="p-2 border border-solid rounded focus:placeholder-transparent focus:outline focus:outline-green-500"
                    placeholder="Password"
                />
                <div className="flex gap-4 items-center mt-2">
                    <button className="btn-primary w-24 ">Login</button>
                    <p className="text-gray-500 flex items-center gap-2">
                        Not registered ?
                        <Link
                            to="/register"
                            className="hover:underline text-green-600"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Login;
