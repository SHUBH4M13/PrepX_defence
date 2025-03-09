import React from 'react'
import GoldHeading from '../../../Utility/GoldHeading'
import ExamCard from '../../../Cards/ExamCard'
import { useNavigate } from 'react-router';

export default function Exams() {

  const Navigate = useNavigate();

  const GoToNDA = () => {
    Navigate("/NDA")
  }

  return (

    <div className=' bg-darkbg '>

      <div className='bg-darkbg w-full px-10' >
        <GoldHeading
          heading="Mission Selection"
          semiheading="Choose Your Battleground"
          text1="Select your target exam and begin specialized preparation with our tailored mock"
          text2="tests designed by defence experts."
        />
      </div>

      <div className=' flex justify-center items-center'>
        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  '>

          <div onClick={GoToNDA}>
            <ExamCard
              title="NDA"
              subtitle="National Defence Academy"
              description="Prepare for tri-service academy entry with comprehensive mock tests covering mathematics, general ability, and intelligence."
            />
          </div>

          <ExamCard
            title="CDS"
            subtitle="Combined Defence Services"
            description="Practice with our CDS mock tests covering English, general knowledge, and elementary mathematics in exam format."
          />
          <ExamCard
            title="AFCAT"
            subtitle="Air Force Common Admission Test"
            description="Soar through AFCAT preparation with our specialized tests covering general awareness, verbal, and numerical ability."
          />
          <ExamCard
            title="CAPF"
            subtitle="Central Armed Police Forces"
            description="Prepare for CAPF AC with our specialized tests focusing on general studies, mental ability, and numerical aptitude."
          />
          <ExamCard
            title="INET"
            subtitle="Indian Navy Entrance Test"
            description="Navigate through INET preparation with our comprehensive tests for mathematics, English, general science and reasoning."
          />
          <ExamCard
            title="SSB"
            subtitle="Services Selection Board"
            description="Master SSB interviews with our specialized preparation modules covering psychological tests, GTO tasks, and interview simulations."
          />
        </div>
      </div>

    </div>

  )
}
