import React from 'react'

export default function NumbersStrap() {
    return (
        <div className=' px-8 '>
        <div className=' hidden sm:bg-Secondarybg sm:rounded-lg sm:animate-fade-in-bottom 
        sm:w-fit sm:h-fit sm:flex lg:px-16 sm:py-6 sm:justify-between sm:gap-16 '>

            <div className=' flex flex-col items-center justify-center  md:px-5'>
                <p className=' text-PrimaryGold font-Helvetica text-xl lg:text-3xl font-semibold'>10+</p>
                <p className='text-center text-white/50 font-Helvetica text-sm lg:text-md' >Exam Categories</p>
            </div>

            <div className=' w-[1px] bg-white/20'></div>

            <div className=' flex flex-col items-center justify-center'>
                <p className=' text-PrimaryGold font-Helvetica text-xl lg:text-3xl  font-semibold'>10+</p>
                <p className='text-center text-white/50 font-Helvetica text-sm lg:text-md' >Exam Categories</p>
            </div>

            <div className=' w-[1px] bg-white/20'></div>


            <div className=' flex flex-col items-center justify-center md:px-5'>
                <p className=' text-PrimaryGold font-Helvetica text-xl lg:text-3xl    font-semibold'>10+</p>
                <p className='text-center text-white/50 font-Helvetica text-sm lg:text-md' >Exam Categories</p>
            </div>

        </div>
        </div>
    )
}
