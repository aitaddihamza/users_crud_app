import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <h1 className="text-center font-medium text-xl text-green-600 cursor-pointer">
                Register
            </h1>
            <form className="flex flex-col max-w-2xl mx-auto gap-4 shadow-md px-4 pb-[4rem] pt-8 ">
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
