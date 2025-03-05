import React from 'react'

export default function GoldHeading(props) {
    return (
        <div className=' flex flex-col gap-2 items-center  '>

            <div className=' w-fit h-fit flex justify-center items-center gap-4 py-10 '>
                <div className=' bg-PrimaryGold h-[2px] w-[48px] '></div>
                <p className=' text-PrimaryGold font-Helvetica text-md text-center font-bold uppercase'>{props.heading}</p>
                <div className=' bg-PrimaryGold h-[2px] w-[48px] '></div>
            </div>

            <div className=' flex justify-center items-center '>
               <h1 className='text-6xl font-Helvetica text-center font-bold text-white underline decoration-darkgreen decoration-4 underline-offset-8'>{props.semiheading}</h1>
            </div>

        </div>

    )
}
