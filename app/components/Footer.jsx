import React from 'react'

const Footer = () => {
  return (
    <footer className='lg:flex justify-between lg:px-20 outfit py-10 font-thin px-10 text-start  bg-black text-white'>
        <div className='space-y-5 pb-5 lg:pb-0'>
            <div className='space-y-5'>
                <h1 className='text-3xl font-semibold text-cyan-300'>HeadStarter</h1>
                <p>Our mission is to give future tech leaders direction,standardization,consistency and transpirancy</p>
            </div>
            <div className=''>
                <p  className='pb-5'>Contact with us:</p>
                <i className='bi bi-discord text-2xl pe-3'></i>
                <i className='bi bi-instagram text-2xl '></i>
            </div>
        </div>
        <div className='space-y-5'>
            <div>
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
            </div>
        </div>
    </footer>
  )
}

export default Footer