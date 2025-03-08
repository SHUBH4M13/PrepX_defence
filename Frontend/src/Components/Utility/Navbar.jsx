import React from 'react'
import { Bars3Icon, XMarkIcon  , ArrowLeftIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { useNavigate } from 'react-router';


export default function Navbar() {

    const navigate = useNavigate();

    const [ToggleNav, setToggleNav] = useState(false);

    function changeToggle() {
        setToggleNav((prev) => !prev)
    }

    const GoToLogin = () => {
        navigate("/login")
    }

    const GoTosignup = () => {
        navigate("/signup")
    }


    return (
        <div className=' z-10 w-full h-[64px] flex bg-darkbg justify-between items-center py-10 border-[#00000002]  shadow-black shadow-5xl border-b-2 animate-fade-in-up'>
            <div className=' flex justify-center items-center px-10 sm:px-20'>
                <p className=' font-Helvetica text-PrimaryGold text-2xl font-semibold'>PrepX</p>
            </div>

            <div className=' hidden sm:flex sm:justify-center sm:items-center sm:px-8 sm:gap-6 '>
                <p className=' text-dullwhite hover:text-PrimaryGold font-Helvetica duration-300 cursor-pointer'>Home</p>
                <p className=' text-dullwhite hover:text-PrimaryGold font-Helvetica duration-300 cursor-pointer'>Exams</p>
                <div className='' >
                    <button onClick={GoToLogin} className='border-dullwhite hover:border-PrimaryGold cursor-pointer border-2 w-[81px] h-[36px]  rounded-lg duration-300  hover:text-PrimaryGold  text-center text-dullwhite font-Helvetica'>
                        Login
                    </button>
                </div>
                <div className=' bg-PrimaryGold hover:bg-hovergold flex w-[81px] h-[36px] justify-center items-center rounded-lg duration-300 '>
                    <button onClick={GoTosignup} className=' font-Helvetica text-center text-white cursor-pointer '>Sign Up</button>
                </div>
            </div>

            <div className=' px-10 sm:hidden' onClick={changeToggle}>
                {ToggleNav ? (<XMarkIcon />) : (<Bars3Icon className=' text-white/55 size-8 hover:text-PrimaryGold' />)}
            </div>

            {ToggleNav && (
    <div className="fixed top-0 left-0 w-full h-full bg-darkbg flex justify-center items-center z-50">
        <div className="flex flex-col gap-6 text-center">
            <p className="text-dullwhite hover:text-PrimaryGold font-Helvetica duration-300 cursor-pointer text-xl">
                Home
            </p>
            <p className="text-dullwhite hover:text-PrimaryGold font-Helvetica duration-300 cursor-pointer text-xl">
                Exams
            </p>
            <button onClick={GoToLogin} className="border-dullwhite hover:border-PrimaryGold border-2 w-[120px] h-[45px] rounded-lg duration-300 hover:text-PrimaryGold text-center text-dullwhite font-Helvetica cursor-pointer">
                Login
            </button>
            <button onClick={GoTosignup} className="bg-PrimaryGold hover:bg-hovergold flex w-[120px] h-[45px] justify-center items-center rounded-lg duration-300 font-Helvetica text-white cursor-pointer">
                Sign Up
            </button>
            
            <button onClick={changeToggle} className="bg-PrimaryGold hover:bg-hovergold flex w-[120px] h-[45px] justify-center items-center rounded-lg duration-300 gap-2 font-Helvetica text-white">
                Back 
                <ArrowLeftIcon className=' size-4'/>
            </button>
        </div>
    </div>
)}

        </div>
    )
}
