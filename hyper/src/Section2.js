import React from 'react'
import Animation1 from "./images/1Animation.gif"
import Animation2 from "./images/2Animation.gif"

export default function Section2() {
  return (
    <div  className='bg-[#161616]' >

      <img src={Animation1} alt='Animation1' className=' py-28' />
      <img src={Animation2} alt='Animation2' className='float-right w-[35%] h-[35%] ' />

    </div>
  )
}
