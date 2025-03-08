import React from 'react'
import { useNavigate } from 'react-router'

export default function TestCard( props ) {

    const Navigate = useNavigate();

    function GoToTestMCQ(){
        Navigate(`/${props.ExamCode}`)
    }

    return (

        <div className=' px-15  flex justify-center cursor-pointer '>
            <div className=' px-10 py-5  rounded-xl  bg-Secondarybg w-[340px] md:w-[650px] lg:w-[750px] md:h-fit h-fit   xl:w-5/6 sm:h-[240px] gap-10 shadow-PrimaryGold hover:shadow-xs duration-300 flex '>
                <div className=' w-[150px] h-[130px] hidden sm:block'>
                    <img src = {props.ExamPhoto } alt="" />
                </div>

                <div className=' h-full w-[1px] bg-dullwhite/55 '> </div>

                <div className=' w-full flex flex-col items-center gap-5 '>
                    <h3 className=' font-Helvetica text-center text-2xl text-white '>{props.ExamSet}</h3>

                    <ul>
                        <li>
                            <p className=' text-dullwhite '>{props.ExamRule1}</p>
                        </li>
                        <li>
                        <p className=' text-dullwhite '>{props.ExamRule2}</p>
                        </li>
                        <li>
                        <p className=' text-dullwhite '>{props.ExamRule3}</p>
                        </li>
                        <li className= 'hidden '>
                        <p >{props.ExamCode}</p>
                        </li>
                    </ul>


                    <button 
                    type='button'
                    onClick={GoToTestMCQ}
                    className="mt-3 bg-PrimaryGold text-black font-semibold py-2 px-5 rounded-lg 
                        hover:bg-yellow-500 transition-all duration-300 w-full md:w-auto cursor-pointer">
                        Start Test
                    </button>


                </div>

            </div>
        </div>
    )
}
