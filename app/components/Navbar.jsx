'use client';
import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { UserButton } from '@clerk/nextjs';
const Navbar = () => {
 
  return (
  <div className='z-50 outfit backdrop-blur-lg lg:overflow-x-hidden fixed top-0 left-0 w-screen px-5 lg:px-16 py-5'>
    <div className='z-40 flex relative items-center justify-between bg-transparent text-white'>
        <div className='flex'>
            <img src="" />
            <h1 className='lg:text-3xl text-xl font-bold'>RUSH Solutions</h1>
        </div>

        <div className='z-40'>
            <button className='block p-2 font-medium'> <UserButton /></button>
            {/* <button className='block lg:hidden border p-1 font-medium border-cyan-500 relative' onClick={toggleMenu} >Menu</button>
            <AnimatePresence mode='wait'>
              { menu && <motion.div initial={{translateY:-100,opacity:0}} animate={{translateY:0,opacity:1}} exit={{translateY:-100,opacity:0}} transition={{duration:0.3,ease:'linear'}} className='z-0 absolute top-12 left-0 block text-lg text-center bg-cyan-500 rounded-2xl w-full '>
                  <p><a href={gmailUrl} target='_blank'  rel="noopener noreferrer">Join-Us</a></p>
                  <p>Team</p>
                   <i className='bi bi-heart'></i>
              </motion.div>}
            </AnimatePresence>  */}
        </div>  
    </div>
  </div> 
  )
}

export default Navbar
