import React from 'react'
import heroImg from '../assets/heroImg.png'
import style from '../constants/style'

const Hero = () => {
  return (
    <section className='bg-gray-200'>
      <div className={`container flex flex-col sm:flex-col md:flex-col justify-between lg:flex-col ${style.paddingX} ${style.paddingY}`}>
        {/*Hero Text */}
        <div className={`hero-text ${style.heading} pt-0 sm:pt-28 leading-2 m-auto text-center`}>
            <h1>Bite into <span className='text-orange-600 font-semibold'>Bliss!</span> Unleash the Taste Blast</h1>
            <button class='hidden xl:block text-black'>Explore

            </button>
        </div>

        {/* Hero Img */}
        <div className={`hero-text ${style.heading}  ${style.paddingY} sm:px-16 `}>
            <img className='w-1/1 lg:w-[50%]mb-10 relative z-[5] sm:mb-0' src={heroImg} alt=""/>
            
            {/* Gradient */}
            <div className='absolute z-[0] w-[50%] h-[50%] right-10 bottom-0 blue__gradient md:bottom-0 md:absolute'>

            {/* Explore Button */}
            </div>
            <button className='flex m-auto sm:hidden bg-slate-800 text-white rounded px-10 hover:bg-slate-600 text-[16px]'>Explore Menu</button>
        </div>
      </div>
    </section>
  )
}

export default Hero