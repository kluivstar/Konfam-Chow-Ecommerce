import React from 'react'
/// import styles
import styles from '../constants/style'
/// import constant
import { footerLinks } from '../constants/navLinks'
/// import logo
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className='sm:px-20 sm:py-20 p-5 flex-col bg-slate-800'>
      <div className='flex flex-col md:flex-row justify-between w-full'>

        {/* Logo */}
        <div className='flex flex-col items-start justify-start align-start pl-0 ml-0'>
          <div className="items-start justify-start text-left">
            <img alt="hello" className='w-[20%] sm:w-[20%] ' src={logo}/>
            <h3 className="text-slate-400 font-poppins text-[12px]">Taste busters</h3>
          </div>

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