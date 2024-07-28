"use client";
import React from 'react'
import { motion } from 'framer-motion'
const Footer = () => {
  return (
    <motion.footer  initial={{opacity:0,translateY:100}} whileInView={{opacity:1,translateY:0}} viewport={{once:true}} transition={{duration:0.5,ease:'linear'}} className='lg:flex justify-between lg:px-20 outfit py-10 font-thin px-10 text-start  bg-black text-white'>
        <div className='space-y-5 pb-5 lg:pb-0'>
            <div className='space-y-5'>
                <h1 className='text-3xl font-semibold text-cyan-300'>RUSH Solutions</h1>
                <p>Our mission is to build solutions</p>
            </div>
           <div className=''>
    <p className='pb-5'>Contact with us:</p>
    <a href="https://www.linkedin.com/in/mdothamza" className='pe-3'>
        <i className='bi bi-linkedin text-2xl'></i>
    </a>
    <a href="https://github.com/Subhan-hub1917">
        <i className='bi bi-github text-2xl'></i>
    </a>
</div>

        </div>
        <div className='space-y-5'>
{/*             <div>
                <h1 className='text-lg font-bold'>Community</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elt amet consectetur adipisicing elt amet consectetur adipisicing el</p>
            </div>
            <div>
                <h1 className='text-lg font-bold'>Community</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elt amet consectetur adipisicing elt amet consectetur adipisicing el</p>
            </div>
            <div>    
                <h1 className='text-lg font-bold'>Community</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elt amet consectetur adipisicing elt amet consectetur adipisicing el</p>
            </div> */}
        </div>
    </motion.footer>
  )
}

export default Footer
