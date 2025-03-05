import React from 'react'
import Option from '../Option'
import { ClockIcon } from '@heroicons/react/24/outline'

export default function MacbookProcess () {
  return (
    <div className=' w-[612px] h-[512px] rounded-xl bg-[#232323] border-[#333333] border shadow-sm hover:shadow-PrimaryGold duration-300'>

        <div className='w-full h-[12px] px-5 py-5 flex gap-2'>
            <div className=' w-[12px] h-[12px] rounded-full bg-red-500'></div>
            <div className=' w-[12px] h-[12px] rounded-full bg-yellow-500'></div>
            <div className=' w-[12px] h-[12px] rounded-full bg-green-500'></div>
        </div>

        <div className=' w-full h-8/10 py-6 px-7 '>
            <div className=' w-full h-[360px] mb-10 bg-Secondarybg rounded-xl'>
                <div className=' px-3 py-4 w-full h-[50px] flex justify-between'>
                    <p className=' px-2 font-Helvetica font-medium text-PrimaryGold'>Question 7/30</p>
                    <div className=' mr-2 w-[79px] h-[28px] bg-PrimaryGold rounded-2xl flex justify-center items-center gap-1.5'>
                        <ClockIcon className = "size-4 text-white" />
                        <p className='text-white '>12:01</p>
                    </div>
                </div >
                <div className=' px-5 py-3 text-white font-Helvetica font-medium w-full h-[15px]'> 
                    <p>Q7. Which of the following is a non-preemptive scheduling algorithm?</p>
                </div>
                <div className=' flex flex-col gap-4 px-3 py-8 '>
                    <Option OptionA="A." OptionDesc="FCFS ( First Come First Serve ) " />
                    <Option OptionA="B." OptionDesc="SJF  ( Shortest Job First ) " />
                    <Option OptionA="C." OptionDesc="RR ( Round Robin ) " />
                    <Option OptionA="D." OptionDesc="Multilevel Queue" />
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