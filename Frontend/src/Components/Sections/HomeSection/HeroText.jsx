import React from 'react'
import { ArrowRightIcon, PlusIcon } from '@heroicons/react/24/solid'
import TickInfoCard from '../../Utility/TickInfoCard'
import MacbookProcess from './MacBookProcess'

export default function HeroText() {
    return (
        <div className=' bg-darkbg w-full flex flex-col lg:flex-row gap-4 md:gap-2 py-16'>

            <div className='  px-16 flex flex-col animate-fade-in-left'>

                <div>
                    <div>

                        <div className='flex  justify-center items-center' >
                            <h1 className=' text-4xl text-center sm:text-left sm:text-6xl font-Helvetica text-PrimaryGold font-bold'>Conquer</h1>
                            <h1 className=' px-3 text-4xl text-center sm:text-left sm:text-6xl font-Helvetica text-white font-bold '>
                                Defence
                            </h1>
                        </div>
                        <div>
                            <h1 className='text-4xl  text-center sm:text-left sm:text-6xl  font-Helvetica font-bold text-white'>
                                Exams
                            </h1>
                            <h1 className='text-4xl text-center sm:text-left  sm:text-6xl  font-Helvetica font-bold text-white underline decoration-darkgreen decoration-4 underline-offset-auto'>
                                With Precision
                            </h1>
                        </div>
                        <div>
                            <p className=' py-5 text-xl text-center sm:text-left text-white/90 font-Helvetica '> Prepare for NDA, CDS, AFCAT, and more with military-grade mock tests designed to ensure your success. Train like a warrior,
                                succeed like a champion. </p>
                        </div>
                    </div>

                    <div className=' flex justify-center gap-5 py-5 '>
                        <div className='  bg-PrimaryGold px-4 sm:px-10 font-Helvetica font-bold hover:bg-hovergold duration-300 rounded-xl flex justify-center items-center'>
                            <button className=' text-darkbg p-2.5 sm:p-6 font-Helvetica font-bold  text-md rounded-xl'>Start Training Now</button>
                            <ArrowRightIcon className='size-8 sm:size-4 font-bold text-Secondarybg' />
                        </div>

                        <div className=' px-2 border-darkgreen border-2 font-Helvetica rounded-xl flex justify-center hover:border-PrimaryGold duration-300 hover:bg-Secondarybg items-center '>
                            <button className=' text-white p-2.5 sm:p-6 font-Helvetica rounded-xl text-md'>Explore Features</button>
                            <PlusIcon className='size-8 sm:size-4 font-bold text-white' />
                        </div>

                    </div>

                    <div className=' px-10 sm:px-20 sm:py-3 '>
                        <div className=' flex gap-8 justify-center lg:justify-start '>
                            <TickInfoCard text=" AI based results" />
                            <TickInfoCard text=" AI based results" />
                        </div>
                    </div>

                </div>
                
            </div>

            <div className=' flex justify-center lg:justify-start animate-fade-in-right'>
                <MacbookProcess />
            </div>

        </div>
    )
}
