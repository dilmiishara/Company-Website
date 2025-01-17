import React from 'react'
import { assets } from '../assets/assets'

const TopNavbar = () => {
  return (
    <div className='absolute top-0 left-0 w-full z-10 bg-primary'>
        <div className='container mx-auto flex justify-between items-center py-6'>
            <img src={assets.logo} alt="" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="#services" className='cursor-pointer hover:text-gray-400'>SERVICES</a>
                <a href="#about" className='cursor-pointer hover:text-gray-400'>ABOUT US</a>
                <a href="#contact" className='cursor-pointer hover:text-gray-400'>CONTACT US</a>
                <a href="#careers" className='cursor-pointer hover:text-gray-400'>CAREERS</a>
            </ul>
        </div>
    </div>
  )
}

export default TopNavbar
