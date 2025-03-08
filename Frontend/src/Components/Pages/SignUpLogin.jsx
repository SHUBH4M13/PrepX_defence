import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignUpLogin() {
    const [isLogin, setIsLogin] = useState(true);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");

    const toggleMode = () => {
        setIsLogin(!isLogin);
        setFormData({ email: "", password: "", confirmPassword: "" });
        setError("");
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password || (!isLogin && !formData.confirmPassword)) {
            setError("All fields are required.");
            return;
        }
        if (!isLogin && formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        setError("");
        alert(`${isLogin ? "Logging in" : "Signing up"} with email: ${formData.email}`);
    };

    return (
        <div className="bg-darkbg min-h-screen flex justify-center items-center p-4">
            <div className="bg-Secondarybg rounded-xl w-full max-w-[450px] sm:w-[450px] p-6 shadow-lg">
                <div className="text-center">
                    <p className="font-bold text-white text-2xl">Welcome to PrepX</p>
                    <p className="py-2 text-dullwhite">{isLogin ? "Sign in to continue" : "Create an account"}</p>
                </div>

                <div className="flex justify-evenly mt-4">
                    <div
                        className={`w-1/2 text-center border-b-2 pb-2 cursor-pointer ${
                            isLogin ? "border-PrimaryGold text-PrimaryGold" : "border-dullwhite text-dullwhite"
                        }`}
                        onClick={() => setIsLogin(true)}
                    >
                        Login
                    </div>
                    <div
                        className={`w-1/2 text-center border-b-2 pb-2 cursor-pointer ${
                            !isLogin ? "border-PrimaryGold text-PrimaryGold" : "border-dullwhite text-dullwhite"
                        }`}
                        onClick={() => setIsLogin(false)}
                    >
                        Sign Up
                    </div>
                </div>

                <form className="flex flex-col mt-6 space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <p className="text-dullwhite  text-sm">Email</p>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:border-PrimaryGold bg-transparent text-white"
                        />
                    </div>

                    <div>
                        <p className="text-dullwhite  text-sm">Password</p>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:border-PrimaryGold bg-transparent text-white"
                        />
                    </div>

                    {!isLogin && (
                        <div>
                            <p className="text-dullwhite text-sm">Confirm Password</p>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:border-PrimaryGold bg-transparent text-white"
                            />
                        </div>
                    )}

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        className="bg-PrimaryGold cursor-pointer  text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition-all"
                    >
                        {isLogin ? "Login" : "Sign Up"}
                    </button>
                </form>

                {isLogin && (
                    <p className="text-right text-sm text-PrimaryGold mt-2 cursor-pointer hover:underline">
                        Forgot Password?
                    </p>
                )}

                <div className="mt-4 flex items-center justify-center">
                    <button
                        className="flex items-center w-full justify-center cursor-pointer gap-2 border border-gray-600 py-2 px-4 rounded-md text-white hover:border-PrimaryGold duration-300 transition-all"
                    >
                        <FcGoogle className="text-2xl" />
                        {isLogin ? "Login" : "Sign Up"} with Google
                    </button>
                </div>
            </div>
        </div>
    );
}
