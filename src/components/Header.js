import React, {useEffect, useState} from 'react'
/// import nav links
import { navLinks } from '../constants/navLinks'
/// import react icon
import {BsBag} from 'react-icons/bs'
/// import style
import styles from '../constants/style'
/// import Image
import close from "../assets/close.svg"
import Logo from '../assets/logo-white.png'
import menu from '../assets/menu.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const [isActive, setIsActive] = useState(false)
  /// ///Here header color change on scroll
  /// When the user scrolls the page, the event listener callback function is executed. Inside the callback function, it checks if the window.scrollY value is greater than 60. If it is, the setIsActive function is called with the argument true, otherwise it is called with the argument false.

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY){
        setIsActive(true)
      }else {
        setIsActive(false)
      }
    }

    window.addEventListener('scroll', handleScroll) 
  }, [])
  
  
  
  return (
    <nav 
     className={`${styles.paddingX} w-full transition fixed top-0 z-20 ${isActive ? "bg-slate-800 " : "bg-primary"} transition `}>
        <div className='flex items-center flex-row justify-between'>

          {/* Logo */}
          <div>
            <img className='w-[90px]' alt='' src={Logo}/>
          </div>
          
          {/* Menu */}
          <ul className='flex-row items-center justify-end sm:flex hidden justify-items-end'>
            {navLinks.map((nav, index) => (
              <li className={`font-poppins text-white text-[14px] text-right ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} cursor-pointer  hover:text-slate-300 transition-all`} key={nav.id}>
                <Link to={nav.path}>{nav.title}</Link>
              </li>
            ))}
          </ul>

          {/* Cart logo */}
          <div className='absolute sm:relative font-poppins flex sm:top-0 right-16 top-9'>
              <BsBag className='text-xl text-white relative'/><span className='absolute rounded-full px-1 text-[12px] bottom-2 right-3 bg-slate-100 black'>0</span>
          </div>
          
          {/* Mobile menu image */}
          
          {/* if state is !prev "close img" displays" : menu is displayed(which is the default) */}
          <div className='sm:hidden flex justify-end items-center'>
            <img className='p-2 transition-all' alt='' onClick={() => setToggle((prev) => 
               !prev
              )} src={toggle ? close : menu }/>
          </div>
          {/* Mobile menu */}
          {/* if state is !prev "sidebar displays" : sidebar is hidden(which is the default) */}
          <div className={`${toggle ? "flex" : "hidden"} ${isActive ? "bg-slate-800 " : "bg-primary"}sm:hidden w-full leading-10 p-6 rounded-sm top-24 absolute bg-primary transition duration-300 cursor-pointer text-white `}>
            <ul>
            {navLinks.map((nav, index) => (
              <li className={`font-poppins text-white text-[14px] items-center justify-center  cursor-pointer hover:text-slate-300  transition-all`} key={nav.id}>
                <Link to={nav.path}>{nav.title}</Link>
              </li>
              
            ))}
            </ul>
          </div>
        </div>
    </nav>
  )
}

export default Header