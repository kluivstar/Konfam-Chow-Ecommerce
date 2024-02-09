import React from 'react'
/// import styles
import styles from '../constants/style'
/// import constant
import { footerLinks } from '../constants'
/// import logo
import logo from '../assets/logo-white.png'

const Footer = () => {
  return (
    <footer className='sm:px-20 sm:py-20 p-5 flex-col bg-primary'>
      <div className='flex flex-col md:flex-row justify-between w-full'>
        {/* Logo */}
        <div className='flex flex-col justify-start'>
          <img className='w-[25%] sm:w-[25%] object-contain justify-start' src={logo}/>
          <h3 className={`${styles.paragraph}`}>Taste busters</h3>
        </div>
        {/* Links */}
        <div className='flex flex-row justify-between flex-wrap flex-[1.5] w-full'>
          {footerLinks.map((footer)=> 
          <div className='flex flex-col min-w-[150px]' key={footer.key}>
            <h3 className={`text-slate-200 font-bold leading-10`}>{footer.title}</h3>
            <ul>
              {footer.links.map((link)=> 
              <li className={`${styles.paragraph} cursor-pointer hover:text-white leading-6 text-dimWhite text-[14px]`}>
                {link.name}
              </li>
              )}
            </ul>
          </div>
          )}
          
        </div>
      </div>
    </footer>
  )
}

export default Footer