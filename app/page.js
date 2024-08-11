"use client";
// import { translation } from "@huggingface/inference";
import Demo from '../public/Demo.mp4'
import { carouselItems, project } from "./constants/constants";
import { motion } from "framer-motion";
import 'react-multi-carousel/lib/styles.css'; 
import Carousel from "react-multi-carousel";
export default function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

  const email = "mhamza191703@gmail.com";
  const subject = "I Wanna Join Your Team";
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}`;
  
  return (
    <main className="overflow-hidden outfit bg-indigo-950 text-white">
      {/* Intro */}
      <section className="bg-gradient-to-b from-black to-indigo-950 pt-40 font-thin text-center w-screen py-8 overflow-y-hidden" >
        <motion.div className="space-y-5"  initial={{opacity:0,translateX:'-100%'}} animate={{opacity:1,translateX:'0%'}} transition={{duration:0.4,ease:'anticipate'}}>
          <div className="text-3xl font-semibold">
           <h1>Revolutionizing Content Creation</h1>
          <h1>With</h1>
          <h1 className="text-cyan-300 text-5xl font-extrabold shadow-md">
          Sleek Social
          </h1>
          </div>
          <div className="inline-block w-2/3 py-2">
            <p className="text-xl font-semibold text-gray-300">
              Generate <span className="text-cyan-300 font-bold">Multiple</span> Posts for <span className="text-cyan-300 font-bold">Multiple</span> platforms in <span className="text-cyan-300 font-bold">Multiple</span> Languages;
            </p>
          </div>
        <div className="lg:space-x-10 space-y-5 lg:space-y-0  block lg:flex text-center justify-center font-semibold">
        <button className="relative inline-block border border-cyan-500 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:from-cyan-500 hover:to-cyan-700 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
                  <a  href='https://www.linkedin.com/in/mdothamza' target='_blank' className="relative z-10">Join us for Upcoming Products</a>
        </button>
        <button className="border border-cyan-500 bg-indigo-950 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1">
          <a href='https://sleeksocial.streamlit.app/' target='_blank' className='relative z-10'>Try Application</a>
        </button>
          </div>
        </motion.div>
      </section>
      {/* Demo Section */}
      <section className="bg-gradient-to-b from-indigo-950 to-black  flex items-center justify-center py-10">
        <video className='rounded-2xl lg:w-1/2 w-2/3 border border-slate-700' autoPlay muted loop>
          <source  src={Demo} type='video/mp4'/>
        </video>
      </section>
      {/* Carousel */}
      <section className="bg-gradient-to-b from-black to-indigo-950 z-0 overflow-x-hidden text-center p-5">
        <p className="p-5 font-thin">Our Dream Team is HERE</p>
        {/* <div className="overflow-hidden flex space-x-20 p-5"> */}
        <Carousel 
           responsive={responsive}
           infinite={true}
           arrows={false}
           transitionDuration={2000}
           autoPlay={true}    
           autoPlaySpeed={100}    
           className='md:mx-20 lg:mx-52'
          >
          {
            carouselItems.map((item)=>(
              <div className=' rounded-lg border border-slate-700 me-2 '>
                <img  className="w-full object-cover bg-black rounded-lg mix-blend-overlay " src={item.image} alt='RUSH Solutions'></img>
                <h1 className="text-xl lg:text-3xl font-extrabold text-slate-100">{item.company}</h1>
                <h1 className="text-xl font-medium text-slate-100">{item.title}</h1>
                <a href={item.portfolio} target='_blank' className=" font-thin text-slate-100">Portfolio<i className='ms-2 bi bi-arrow-up-right'></i></a>
                
              </div>
            ))
          }
          </Carousel>
          {/* </div>   */}
      </section>
      {/* Projects Section */}
       <div className="flex flex-col items-center justify-center text-center py-32">
  <div className="text-3xl font-semibold">
    <h1>Upcoming Products</h1>
    <h1>By</h1>
    <h1 className="text-cyan-300 text-5xl font-extrabold shadow-md">
      RUSH Solutions
    </h1>
  </div>
</div>

      <motion.section initial={{opacity:0,translateY:100}} whileInView={{opacity:1,translateY:0}} viewport={{once:true}} transition={{duration:0.7,ease:'linear'}} className="flex flex-col items-center justify-center py-8 bg-gradient-to-b from-indigo-950 to-black">
        <div className="w-3/2 lg:w-1/2 rounded-3xl lg:p-3 m-5 lg:m-0 p-3 bg-indigo-950 border border-slate-700">
         
          {
            project.map((info)=>(
              <div className="flex items-center justify-between py-3" key={info.date}>
                <div><p className="text-sm lg:text-sm font-light">{info.date}</p><h1 className="text-lg lg:text-2xl font-bold">{info.week}</h1></div>
                <div className="text-2xl lg:text-3xl font-bold px-9 text-cyan-300">{info.task}</div>
                {
                  info.link!=='/'
                  ?
                <a href={info.link} target='_blank' className="text-sm lg:text-sm font-medium border border-slate-700 p-1">{info.to_do}</a> 
                  :
                <a target='_blank' className="text-sm lg:text-sm font-medium border border-slate-700 p-1">{info.to_do}</a> 

              }
              </div>
            ))
          }
        </div>
      </motion.section>
    </main>  
  );
}
