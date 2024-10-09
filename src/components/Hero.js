import React from 'react'
import heroImg from '../assets/heroImg.png'
import style from '../constants/style'

const Hero = () => {
  return (
    <section className='bg-gray-200'>
      <div className={`container flex flex-col sm:gap-20 sm:flex-col md:flex-col justify-between lg:flex-col xl:flex-row ${style.paddingX} ${style.paddingY}`}>
        {/*Hero Text */}
        <div className='sm:pt-28'>
            <div  className={`hero-text ${style.heading} pt-0 sm:pt-18 m-auto text-left sm:text-left mt-20 xl:leading-16`}>
              <h1>Bite into <span className='text-orange-600 font-semibold'>Bliss!</span> Unleash the Taste Blast
              </h1>
            </div>
            <p className='text-gray-800 text-[15px] sm:px-10 text-left sm:text-left sm:-ml-10'>At Konfam Chow, our burgers are more than just a meal - they're an experience! Crafted with the freshest ingredients, every bite of our signature burgers bursts with flavor. </p>
            <button className='hidden xl:block bg-slate-800  text-white rounded px-5 py-2 hover:bg-slate-600 font-poppins text-[16px] mt-5'>Explore

            </button>
        </div>

        {/* Hero Img */}
        <div className={`hero-text ${style.heading}  ${style.paddingY} xl:mt-5`}>
            <img className='w-1/1 lg:w-[50%]mb-10 relative z-[5]  sm:mb-0' src={heroImg} alt=""/>
            
            {/* Gradient */}
            <div className='absolute z-[0] w-[50%] h-[50%] right-10 bottom-0 blue__gradient md:bottom-0 md:absolute'>

            {/* Explore Button */}
            </div>
            <button className='flex m-auto sm:hidden bg-slate-800 text-white rounded px-10 hover:bg-slate-600 text-[16px] mt-10'>Explore Menu</button>
        </div>
      </div>
    </section>
  )
}

export default Hero