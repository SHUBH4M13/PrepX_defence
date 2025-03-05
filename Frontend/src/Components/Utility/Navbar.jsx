import React from 'react'

export default function Navbar() {
    return (
        <div className=' z-10 w-full h-[64px] flex bg-darkbg justify-between items-center py-10 border-[#00000002]  shadow-black shadow-5xl border-b-2 animate-fade-in-up'>
            <div className=' flex justify-center items-center px-20'>
                <p className=' font-Helvetica text-PrimaryGold text-2xl font-semibold'>PrepX</p>
            </div>

            <div className=' flex justify-center items-center px-20 gap-7.5 '>
                <p className=' text-dullwhite hover:text-PrimaryGold font-Helvetica duration-300 cursor-pointer'>Home</p>
                <p className=' text-dullwhite hover:text-PrimaryGold font-Helvetica duration-300 cursor-pointer'>Exams</p>
                <div className='' >
                    <button className='border-dullwhite hover:border-PrimaryGold  border-2 w-[81px] h-[36px]  rounded-lg duration-300  hover:text-PrimaryGold  text-center text-dullwhite font-Helvetica  '>Login</button>
                </div>
                <div className=' bg-PrimaryGold hover:bg-hovergold flex w-[81px] h-[36px] justify-center items-center rounded-lg duration-300 '>
                    <button className=' font-Helvetica text-center text-white '>Sign Up</button>
                </div>
            </div>

        </div>
    )
}
