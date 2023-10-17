import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosClient from "../../api/axios-client";
import { useValue } from "../../Context";

const Register = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const [errors, setErrors] = useState(null);
    const { setUser, setToken } = useValue();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        };
        setErrors(null);
        try {
            const response = await axiosClient.post("/register", payload);
            const data = response.data;
            setUser(data.user);
            setToken(data.token);
            navigate("/dashboard");
        } catch (err) {
            if (err.response.status === 422) {
                const data = err.response.data;
                setErrors(data.errors);
            }
        }
    };

    return (
        <div>
            <h1 className="text-center font-medium text-xl text-green-600 cursor-pointer">
                Register
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
                    ref={nameRef}
                    className="p-2 border border-solid rounded focus:placeholder-transparent focus:outline focus:outline-green-500"
                    placeholder="Name"
                />
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
                <input
                    ref={passwordConfirmationRef}
                    type="password"
                    className="p-2 border border-solid rounded focus:placeholder-transparent focus:outline focus:outline-green-500"
                    placeholder="Password Confirmation"
                />
                <div className="flex gap-4 items-center mt-2">
                    <button className="btn-primary w-24 ">Register</button>
                    <p className="text-gray-500 flex items-center gap-2">
                        Already registered ?
                        <Link
                            to="/login"
                            className="hover:underline text-green-600"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;
