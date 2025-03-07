import React from 'react'
import Navbar from '../Utility/Navbar'
import HeroText from '../Sections/HomeSection/HeroText'
import NumbersStrap from '../Sections/HomeSection/NumbersStrap'
import Feature from '../Sections/HomeSection/Features/Feature'
import Exams from '../Sections/HomeSection/Exams/Exams'
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div className='bg-darkbg w-full '>
      <Navbar />
      <Analytics />
      <HeroText />
      <div className=' flex justify-center items-center'>
        <NumbersStrap />
      </div>
      <Feature />
      <Exams/>
    </div>
  )
}

