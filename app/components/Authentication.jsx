'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import {SignInButton,SignUpButton } from '@clerk/nextjs'
const Authentication = () => {
  const [login,setLogin]=useState(false)


  return (
    <div className='overflow-hidden'>
    {
    login 
    ?
    (
      <AnimatePresence mode='wait' >
        <motion.section key="signup" initial={{translateY:'-100%'}} animate={{translateY:'0%'}} transition={{duration:0.5,ease:'anticipate'}} exit={{translateY:'-100%'}} className='outfit h-screen bg-gradient-to-b from-indigo-950 to-black overflow-hidden flex justify-center items-center'>
          <div className='w-full lg:w-1/3 flex flex-col rounded-lg mx-20 px-5 space-y-5 justify-center items-center text-center'>
              <Image src='/signup.png' width={700} height={300} alt='Rush Solutions' className='h-80 w-80'></Image>
              <SignUpButton mode='modal' forceRedirectUrl='/'>
                <button className='flex text-lg lg:text-2xl border border-slate-500 rounded-lg px-6 py-3 text-red-100 font-medium hover:bg-white hover:text-indigo-950'><i className=' bi bi-google me-1'></i>Signup With Google</button>
                </SignUpButton>
              <div className=' text-sm lg:text-lg'>Already have an account ?<button className='ms-1 underline underline-offset-2' onClick={()=>setLogin(!login)}>Login</button></div>
          </div>
        </motion.section>
      </AnimatePresence>  
    )
    :
    (
      // <AnimatePresence mode='wait' className='overflow-hidden'>
      <motion.section key="login" initial={{translateY:'-100%',opacity:0}} animate={{translateY:'0%',opacity:1}} transition={{duration:0.4,ease:'anticipate'}} exit={{translateY:'-100%',opacity:0}} className='outfit h-screen bg-gradient-to-b from-indigo-950 to-black overflow-hidden flex justify-center items-center'>
        <div className='w-full lg:w-1/3 flex flex-col rounded-lg mx-20 px-5 space-y-5 justify-center items-center text-center'>
          <Image src='/login.png' width={700} height={300} alt='Rush Solutions' className='h-80 w-80'></Image>
          <SignInButton  mode='modal' forceRedirectUrl='/' >
            <button className='flex text-lg lg:text-2xl border border-slate-500 rounded-lg px-6 py-3 text-red-100 font-medium  hover:bg-white hover:text-indigo-950'><i className=' bi bi-google me-1'></i>Login With Google</button>
            </SignInButton>
          <div className=' text-sm lg:text-lg'>Don't have an account ?<button className='ms-1 underline underline-offset-2' onClick={()=>setLogin(!login)}>Signup</button></div>
      </div>
      </motion.section>
      //  </AnimatePresence>
    )
}
    </div>
  )
}
export default Authentication