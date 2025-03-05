import React from 'react'
import Navbar from '../Utility/Navbar'
import HeroText from '../Sections/HomeSection/HeroText'
import NumbersStrap from '../Sections/HomeSection/NumbersStrap'
import Feature from '../Sections/Features/Feature'
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <div className='bg-darkbg w-full '>
      <HeroText />
      {/* <Analytics />
      <div className=' flex justify-center items-center'>
        <NumbersStrap />
      </div>
      <Feature /> */}
    </div>
  )
}

