import React from 'react'
import { ArrowRightIcon , PlusIcon } from '@heroicons/react/24/solid'

export default function HeroText() {
    return (
        <div className=' bg-darkbg w-full flex py-16'>

            <div className='  px-16 flex flex-col '>

                <div>

                    <div className=' flex ' >
                        <h1 className=' text-6xl font-Helvetica text-PrimaryGold font-bold'>Conquer</h1>
                        <h1 className=' px-3 text-6xl font-Helvetica text-white font-bold '>
                            Defence
                        </h1>
                    </div>
                    <div>
                        <h1 className=' text-6xl font-Helvetica font-bold text-white'>
                            Exams
                        </h1>
                        <h1 className=' text-6xl font-Helvetica font-bold text-white underline decoration-darkgreen decoration-4 underline-offset-auto'>
                            With Precision
                        </h1>
                    </div>
                    <div>
                        <p className=' py-5 text-lg text-white/90 font-Helvetica '> Prepare for NDA, CDS, AFCAT, and more with military-grade <br /> mock tests designed to ensure your success. Train like a warrior,<br />
                            succeed like a champion. </p>
                    </div>
                </div>

                <div className=' flex gap-3 '>
                    <div className='  bg-PrimaryGold w-auto px-10 font-Helvetica font-bold hover:bg-hovergold duration-300 rounded-xl flex justify-center items-center'>
                        <button className=' text-darkbg p-6 font-Helvetica font-bold rounded-xl'>Start Training Now</button>
                        <ArrowRightIcon className='size-4 font-bold text-Secondarybg'/>
                    </div>

                    <div className='  border-darkgreen border-2 w-auto px-10 font-Helvetica rounded-xl flex justify-center hover:border-PrimaryGold duration-300 hover:bg-Secondarybg items-center '>
                        <button className=' text-white p-6 font-Helvetica rounded-xl'>Explore Features</button>
                        <PlusIcon className='size-4 font-bold text-white'/>
                    </div>

                </div>

            </div>

            <div>
                XYz==
            </div>

        </div>
    )
}
