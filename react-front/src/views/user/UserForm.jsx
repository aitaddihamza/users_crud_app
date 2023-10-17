import { useState } from "react";
import { Link } from "react-router-dom";

const UserForm = () => {
    const handleSubmit = () => {};
    const [errors, setErrors] = useState(null);
    return (
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
                className="p-2 border border-solid rounded focus:placeholder-transparent focus:outline focus:outline-green-500"
                placeholder="Name"
            />
            <input
                type="email"
                className="p-2 border border-solid rounded focus:placeholder-transparent focus:outline focus:outline-green-500"
                placeholder="Email"
            />
            <input
                type="password"
                className="p-2 border border-solid rounded focus:placeholder-transparent focus:outline focus:outline-green-500"
                placeholder="Password"
            />
            <input
                type="password"
                className="p-2 border border-solid rounded focus:placeholder-transparent focus:outline focus:outline-green-500"
                placeholder="Password Confirmation"
            />
            <div className="flex gap-4 items-center mt-2">
                <button className="btn-primary w-24 mx-auto">Save</button>
            </div>
        </form>
    );
};

export default UserForm;
