import React from 'react'
import Animation1 from "./images/1Animation.gif"
import Animation2 from "./images/2Animation.gif"
import AbstractWavesLines from "./images/AbstractWavesLines.gif"
import Logo2 from "./images/Logo2.svg"

export default function Section2() {
  return (
    <div  className='bg-[#161616] columns-3 gap-5  absolute '>
      <div>
      <img src={Animation1} alt='Animation1' className=' py-28 relative' />
      </div>
      <div className=' text-center py-96 relative'>
        <h2 className='text-gray-300 font-serif text-3xl pb-7'>How it works ?</h2>
        <p  className='text-white font-serif text-xl'>Hyperion finds the best strategies by analyzing 30M+
          <br></br> wallets over 25+ key metrics.</p>
          <img src={AbstractWavesLines} alt='AbstractWavesLines' className=' absolute pt-28 m-auto items-center' />
          <img src={Logo2} alt='Logo2' className='  m-auto relative items-center mt-40' />

      </div>
      <div>
      <img src={Animation2} alt='Animation2' className=' relative  py-36 ' />
      </div>
    </div>
  )
}
