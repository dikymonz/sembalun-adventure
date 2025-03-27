import React, { useEffect, useState } from 'react'
import {assets} from '../assets/assets'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu]= useState(false)

useEffect(()=>{
    if(showMobileMenu){
        document.body.style.overflow = 'hodden'
    }else{
        document.body.style.overflow = 'auto'
    }
    return ()=>{
        document.body.style.overflow = 'auto'  
    };
},[showMobileMenu])

  return (
    <motion.div
    initial={{opacity: 0, x:-100}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true}}
    className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 ls:px-32 bg-tranparent'>
            <img src={assets.logo} alt="" className="w-60 h-auto cursor-pointer" />
            <ul className='hidden md:flex gap-7 text-white'>
                <a href="/" className='cursor-pointer hover:text-gr-400 hover:font-bold hover:underline underline-offset-4 under transition-all ease-in-out'>Home</a>
                <a href="#Packnpm i react-type-animationages" className='cursor-pointer hover:text-gr-400 hover:font-bold hover:underline underline-offset-4 under transition-all ease-in-out'>Packages</a>
                <a href="#Galeri" className="cursor-pointer hover:text-gr-400 hover:font-bold hover:underline underline-offset-4 transition-all ease-in-out">Galeri</a>
                <a href="#About" className='cursor-pointer hover:text-gr-400 hover:font-bold hover:underline underline-offset-4 under transition-all ease-in-out'>About</a>

            </ul>
            <button 
    className='hidden md:block bg-white px-8 py-2 rounded-full hover:bg-blue-500 hover:text-white transition-all ease-in-out'  
    onClick={() => window.open('https://wa.me/6287777335813', '_blank')}>
    WhatsApp</button>
            <img  onClick={()=> setShowMobileMenu(true)} src={assets.menu_icon} className='md:hidden w-7 cursor-pointer' alt="" />
        </div>
        {/* mobile-menu */}
        <div className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
            <div className='flex justify-end p-6 cursor-pointer'>
                <img  onClick={()=> setShowMobileMenu(false)} src={assets.cross_icon} className='w-6' alt="" />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                <a onClick={()=> setShowMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block hover:font-bold transition-all ease-in-out'>Home</a>
                <a onClick={()=> setShowMobileMenu(false)} href="#Packages" className='px-4 py-2 rounded-full inline-block hover:font-bold transition-all ease-in-out'>Packages</a>
                <a onClick={()=> setShowMobileMenu(false)} href="#Galeri" className='px-4 py-2 rounded-full inline-block hover:font-bold transition-all ease-in-out'>Galery</a>
                <a onClick={()=> setShowMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block hover:font-bold transition-all ease-in-out'>About</a>
                
            </ul>
        </div>
    </motion.div>
  )
}

export default Navbar