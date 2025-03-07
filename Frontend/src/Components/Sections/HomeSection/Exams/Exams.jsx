import React from 'react'
import GoldHeading from '../../../Utility/GoldHeading'
import ExamCard from '../../../Cards/ExamCard'

export default function Exams() {
  return (

    <div className=' bg-darkbg px-10  '>

      <div className='bg-darkbg w-full'>
        <GoldHeading
          heading="Mission Selection"
          semiheading="Choose Your Battleground"
          text1="Select your target exam and begin specialized preparation with our tailored mock"
          text2="tests designed by defence experts."
        />
      </div>

      <div className=' flex justify-center'>
        <div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  '>
          <ExamCard
          title = "NDA"
          subtitle = "National Defence Academy"
          description = "Prepare for tri-service academy entry with comprehensive mock tests covering mathematics, general ability, and intelligence."
           />
           <ExamCard
          title = "NDA"
          subtitle = "National Defence Academy"
          description = "Prepare for tri-service academy entry with comprehensive mock tests covering mathematics, general ability, and intelligence."
           />
           <ExamCard
          title = "NDA"
          subtitle = "National Defence Academy"
          description = "Prepare for tri-service academy entry with comprehensive mock tests covering mathematics, general ability, and intelligence."
           />
           <ExamCard
          title = "NDA"
          subtitle = "National Defence Academy"
          description = "Prepare for tri-service academy entry with comprehensive mock tests covering mathematics, general ability, and intelligence."
           />
           <ExamCard
          title = "NDA"
          subtitle = "National Defence Academy"
          description = "Prepare for tri-service academy entry with comprehensive mock tests covering mathematics, general ability, and intelligence."
           />
           <ExamCard
          title = "NDA"
          subtitle = "National Defence Academy"
          description = "Prepare for tri-service academy entry with comprehensive mock tests covering mathematics, general ability, and intelligence."
           />
        </div>
      </div>



    </div>

  )
}
