import axios from "axios";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";

export default function Login() {

    const Navigate = useNavigate();

    const GoToSignup = () => {
        Navigate("/signup")
    }

    const GoToHome = () => {
        Navigate("/")
    }

    const [data, setdata] = useState({
        username: "",
        password: "",
    });

    const [error, seterror] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setdata({
            ...data,
            [name]: value,
        });
        seterror(""); // Reset error when user types
    };

    const HandleSubmit = async (e) => {
        e.preventDefault();

        let NewError = "";

        if (!data.username || !data.password) {
            NewError = "Please fill all the Required Fields";
            seterror(NewError);
            return;
        }

        const res = await axios.post("http://localhost:8080/login" , data ,{
            headers: {
                "Content-Type": "application/json",
            },
        })

        try {
            if(res.status ===  200)  {
                console.log(res.data);
                GoToHome();
            }
        } catch (error) {
            console.log(error);
            seterror("No User Found")
        }

        // If no error, then API call 
    
    };

    return (
        <div className="bg-darkbg min-h-screen flex justify-center items-center p-4">
            <div className="bg-Secondarybg rounded-xl w-full max-w-[450px] sm:w-[450px] p-6 shadow-lg">
                <div className="text-center">
                    <p className="font-bold text-white text-2xl">Welcome to PrepX</p>
                    <p className="py-2 text-dullwhite">Login to continue</p>
                </div>

                <div className="flex justify-evenly mt-4">
                    <div className="w-1/2 text-center border-b-2 pb-2 cursor-pointer border-PrimaryGold text-PrimaryGold">
                        Login
                    </div>
                    <div onClick = {GoToSignup} className="w-1/2 text-center border-b-2 pb-2 cursor-pointer border-dullwhite text-dullwhite  hover:border-white hover:text-white ">
                        Sign Up
                    </div>
                </div>

                <form className="flex flex-col mt-6 space-y-4" onSubmit={HandleSubmit}>
                    <div>
                        <p className="text-dullwhite text-sm">Username</p>
                        <input
                            type="text"
                            name="username"
                            value={data.username} // Fixed error here
                            onChange={handleChange} // Added onChange handler
                            placeholder="Enter Username"
                            className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:border-PrimaryGold bg-transparent text-white"
                        />
                    </div>

                    <div>
                        <p className="text-dullwhite text-sm">Password</p>
                        <input
                            type="password"
                            name="password"
                            value={data.password} // Added missing value
                            onChange={handleChange} // Added onChange handler
                            placeholder="Enter password"
                            className="w-full p-2 border border-gray-600 rounded-md focus:outline-none focus:border-PrimaryGold bg-transparent text-white"
                        />
                    </div>

                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="button"
                        onClick={HandleSubmit}
                        className="bg-PrimaryGold cursor-pointer text-black font-semibold py-2 rounded-md hover:bg-yellow-500 transition-all"
                    >
                        Login
                    </button>
                </form>

                <p className="text-right text-sm text-PrimaryGold mt-2 cursor-pointer hover:underline">
                    Forgot Password?
                </p>

                <div className="mt-4 flex items-center justify-center">
                    <button className="flex items-center w-full justify-center cursor-pointer gap-2 border border-gray-600 py-2 px-4 rounded-md text-white hover:border-PrimaryGold duration-300 transition-all">
                        <FcGoogle className="text-2xl" />
                        Login By Google
                    </button>
                </div>
            </div>
        </div>
    );
}
