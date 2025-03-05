import React from 'react'
import Option from '../Option'
import { ClockIcon } from '@heroicons/react/24/outline'

export default function MacbookProcess () {
  return (
    <div className=' w-[363px] md:w-[612px] h-[552px] md:h-[512px] rounded-xl bg-[#232323] border-[#333333] border shadow-sm hover:shadow-PrimaryGold duration-300'>

        <div className='w-full h-[12px] px-5 py-5 flex gap-2'>
            <div className=' w-[12px] h-[12px] rounded-full bg-red-500'></div>
            <div className=' w-[12px] h-[12px] rounded-full bg-yellow-500'></div>
            <div className=' w-[12px] h-[12px] rounded-full bg-green-500'></div>
        </div>

        <div className=' w-full h-/10 py-6 px-7 '>
            <div className=' w-full sm:h-[400px] md:h-[360px] bg-Secondarybg rounded-xl'>
                <div className=' px-3 py-4 w-full h-[50px] flex justify-between'>
                    <p className=' px-2 font-Helvetica font-medium text-PrimaryGold'>Question 7/30</p>
                    <div className=' mr-2 w-[79px] h-[28px] bg-PrimaryGold rounded-2xl flex justify-center items-center gap-1.5'>
                        <ClockIcon className = "size-4 text-white" />
                        <p className='text-white '>12:01</p>
                    </div>
                </div >
                <div className=' px-5 py-3 text-white font-Helvetica font-medium w-full h-[15px]'> 
                    <p>Q7. Which is the highest mountain peak in India?</p>
                </div>
                <div className=' flex flex-col justify-evenly gap-5  px-3 sm:py-8 py-10'>
                    <Option OptionA="A." OptionDesc="Mount Everest" />
                    <Option OptionA="B." OptionDesc="K2 (Mount Godwin-Austen)" />
                    <Option OptionA="C." OptionDesc="Kanchenjunga" />
                    <Option OptionA="D." OptionDesc="Nanda Devi" />
                </div>
            </div>
        </div>

        <div className=' flex justify-between px-10'>
            <button  className=' h-[35px] w-[85px] bg-PrimaryGold rounded-lg font-Helvetica font-small text-white hover:bg-hovergold duration-300'> Previous </button>
            <button className=' h-[35px] w-[65px] bg-PrimaryGold rounded-lg font-Helvetica font-small text-white  hover:bg-hovergold duration-300 '> Next </button>
        </div>

    </div>
  )
}