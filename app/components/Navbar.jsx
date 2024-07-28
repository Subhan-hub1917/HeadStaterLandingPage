'use client';
import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { AnimatePresence, motion } from 'framer-motion'
import { UserButton } from '@clerk/nextjs';
const Navbar = () => {
  const [menu,setMenu]=useState(false)
  const toggleMenu=()=>{
    setMenu(!menu)
  }
  
  const email = "mhamza191703@gmail.com";
  const subject = "I Wanna Join Your Team";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;
  
  return (
  <div className='z-50 outfit backdrop-blur-lg lg:overflow-x-hidden fixed top-0 left-0 w-screen px-16 py-5'>
    <div className='z-40 flex relative items-center justify-between bg-transparent text-white'>
        <div className='flex'>
            <img src="" />
            <h1 className='lg:text-3xl text-xl font-bold'>RUSH Solutions</h1>
        </div>
        <div className='hidden lg:flex space-x-5'>
<<<<<<< HEAD
{/*             <p className='text-md font-medium'>Info</p>
            <p className='text-md font-medium text-center'>Wall of Love<i className='bi bi-heart'></i></p> */}
=======
            <p className='text-md font-medium'>Info</p>
            <p className='text-md font-medium text-center'>Wall of Love<i className='bi bi-heart'></i></p>
        </div>
        <div className='z-40'>
            <button className='hidden lg:block p-2 font-medium'> <UserButton /></button>
            <button className='block lg:hidden border p-1 font-medium border-cyan-500 relative' onClick={toggleMenu} >Menu</button>
            <AnimatePresence mode='wait'>
              { menu && <motion.div initial={{translateY:-100,opacity:0}} animate={{translateY:0,opacity:1}} exit={{translateY:-100,opacity:0}} transition={{duration:0.3,ease:'linear'}} className='z-0 absolute top-12 left-0 block text-lg text-center bg-cyan-500 rounded-2xl w-full '>
                  <p><a href={gmailUrl} target='_blank'  rel="noopener noreferrer">Join-Us</a></p>
                  <p>Team</p>
                  {/* <i className='bi bi-heart'></i> */}
              </motion.div>}
            </AnimatePresence>
>>>>>>> 08de3ca (Clerk Authentication Added)
        </div>
      <div className='relative z-40'>
  <button className='hidden lg:block border p-3 font-medium border-cyan-500 bg-transparent text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1'>
    Join-Us
  </button>
  <button className='block lg:hidden border p-2 font-medium border-cyan-500 bg-transparent text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 relative' onClick={toggleMenu}>
    Menu
  </button>
  <AnimatePresence mode='wait'>
    {menu && (
     <motion.div
  initial={{ translateY: -100, opacity: 0 }}
  animate={{ translateY: 0, opacity: 1 }}
  exit={{ translateY: -100, opacity: 0 }}
  transition={{ duration: 0.3, ease: 'linear' }}
  className="z-0 absolute top-12 left-0 text-lg text-center bg-transparent bg-opacity-80 backdrop-blur-md rounded-2xl w-auto shadow-lg p-4 max-w-xs"
>
  <p>
    <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:underline">
      Join Waitlist
    </a>
  </p>
  <p className="text-white font-medium mt-2">Team</p>
</motion.div>

    )}
  </AnimatePresence>
</div>

      
    </div>
  </div> 
  )
}

export default Navbar
