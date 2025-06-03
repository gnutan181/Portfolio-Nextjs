"use client"

import {motion} from "framer-motion"
import {Swiper , SwiperSlide} from "swiper/react"
import "swiper/css"


import {BsArrowUpRight , BsGithub} from "react-icons/bs"
import { Tooltip, TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip"

import { useState } from "react"
import WorkSliderbtns from "@/components/WorkSliderbtns"
import YouTubePlayer from "@/components/YouTubePlayer"


const projects =[
  {
    num:'01',
    category:'Full Stack development + DevOps',
    title: "RupayLender – Full-Stack Service Marketplace with Wallet & API Integrations",
    description :"A multi-service platform offering digital financial services (Loans, Insurance, Credit Cards, CA filing, Travel bookings, etc.) for B2B Vendors, B2C customers and Tellecallers with controlable admin and subadmin panel; built with MERN stack.",
    stack:[
      {name:"Html 5"}, {name:"Css 5"}, {name:"Javascript"}, {name:"Reactjs"}
      ,{name:"Expressjs"},{name:"MongoDb"},{name:"Nodejs"},{name:"Material UI"},{name:"tailwind"}
         ,{name:"AWS"}  ,{name:"Nginx"}   ,{name:"Docker"},{name:"Cashfree payment"},{name:"Redis"}
    ],
   
    video:"pe6kO-ftr4k",
    live:"https://www.rupaylender.com",
    github:"",
  },{
    num:'02',
    category:'Full Stack development + Ai Integration',
    title: "AI-powered Resume Builder, Interview Practice, and Job Market Insights Platform",
    description :"A full-stack, AI-integrated career development platform built to help users craft ATS-optimized resumes, generate custom cover letters, and prepare for interviews with real-time AI assistance. It also provides up-to-date salary benchmarks and in-demand skill trends tailored to user profiles.",
    stack:[
      {name:"Html 5"}, {name:"Css 5"}, {name:"ShadCn"}, {name:"Javascript"}, {name:"Reactjs"},
        {name:"Nextjs"}, {name:"Clerk Authentication"}, {name:"Prisam"}, {name:"Neon Db"},
          {name:"Google Gemini Api"}, {name:"INNGEST Cron jobs"},{name:"Vercel"}
    ],
   
    video:'UWGJ7HJr-U0',
    live:"https://ai-carrrier-coach.vercel.app/",
    github:"https://github.com/gnutan181/Ai-carrrier-coach",
  },
  {
    num:'03',
    category:'Nextjs + Ai Voice Agent',
    title: "AI Voice Mock Interviewer",
    description :"This Web-Application leverages the Google Gemini API for dynamic question generation and response analysis, while Vapi.js (Voice Agent) enables realistic voice-based interactions. Firebase handles user authentication and session storage. It simulates real-world behavioral interviews, assessing competencies like leadership and problem-solving, and provides instant AI-generated feedback on structure (STAR method), clarity, and tone.",
    stack:[
      {name:"Html 5"}, {name:"Css 5"},{name:"Tailwind"}, {name:"Javascript"}, {name:"Typescript"},{name:"Nextjs"}
      ,{name:"Google Gemini Api"},{name:"Vapijs - Voice Agent"},{name:"Firebase"},
         {name:"Vercel"},
    ],
    
    video:'/videos/rupay.mp4',
    live:"https://prepwise-nu.vercel.app/",
    github:"https://github.com/gnutan181/prepwise",
  }
]
// components/ExternalLink.jsx
const ExternalLink = ({ href, children, className = '' }) => {
  if (!href) return null;
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer nofollow"
      className={className}
    >
      {children}
    </a>
  );
};


const Work = () => {
    const [swiperInstance, setSwiperInstance] = useState(null);

  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper)=>{
    console.log("swiper",swiper)
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex])
  }
  
  return ( 
    <div className="px-3">

     
  <motion.section initial={{opacity:0}} 
  animate={{ opacity : 1,
    transition: {delay : 2.4, duration : 0.4, ease :"easeIn"},}
  } 
  className="min-h-[80vh] flex flex-col justify-center py-8 xl:px-8">
    <div className="container mx-auto ">


    <div className="flex flex-col xl:flex-row xl:gap-[30px]">

      {/* text */}
        <div className="w-full xl:w-[40%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">

            <div className="flex flex-col gap-[30px] h-[50%]">
        {/*  num */}
        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
          {project.num}
        </div>
        {/* project catagory */}
        <h2 className="text-white-[42x] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
        {/* description */}
        <p className="text-white/60 ">{project.description}</p>

        <ul className="flex flex-wrap gap-2 max-w-[90%] overflow-x-auto pb-27 no-scrollbar">
  {project.stack.map((item,index)=>{
    return (
      <li 
        key={index} 
        className="text-sm text-accent bg-white/10 px-3 py-1 rounded-full whitespace-nowrap"
      >
        {item.name}
      </li>
    )
  })}
</ul>
        {/* border */}
        <div className="border border-white/20">
        </div>

    
      {/*link  buttons */}
   
      <div className="flex items-center gap-4">
  {/* Live project button */}
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger>
        <ExternalLink
          href={project.live}
          className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
        >
          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
        </ExternalLink>
      </TooltipTrigger>
      <TooltipContent>
        <p>Live project</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>

  {/* GitHub button */}
  <TooltipProvider delayDuration={100}>
    <Tooltip>
      <TooltipTrigger>
        <ExternalLink
          href={project.github}
          className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group"
        >
          <BsGithub className="text-white text-3xl group-hover:text-accent" />
        </ExternalLink>
      </TooltipTrigger>
      <TooltipContent>
        <p>GitHub repository</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
</div>
             </div> 
              </div>
{/* Swipper */}
             <div className="w-full xl:w-[60%] relative">
      <Swiper spaceBetween={30} slidesPerView={1} 
      // className="xl:h-auto mb-12 "
         className="xl:h-auto aspect-video" 
      onSlideChange={(swiper)=>handleSlideChange(swiper)}
      onSwiper={(swiper) => setSwiperInstance(swiper)}

      >
        {projects.map((project,index)=>{
          return (
             <SwiperSlide key={index} className="w-full" >
            {/* <div className="h-[550px] relative group flex justify-center items-center bg-pink-50/20"> */}
                      <div className="relative aspect-video w-full"> {/* Updated container */}

            {/* overlay */}
            {/* <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-[1] pointer-events-none"></div> */}
        
               <div className="absolute inset-0 bg-black/10 z-[1] pointer-events-none"></div>

             <div className="relative w-full h-full">
  <YouTubePlayer videoId={project.video} />
</div>
            </div>
            
          </SwiperSlide>)
          // {project}
        })}
      </Swiper>
 
          <div className="mt-6 flex justify-center">
      <WorkSliderbtns 
        containerStyles="flex gap-2 items-center justify-center" 
        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
        swiper={swiperInstance}
      />
    </div>
               </div>
     
        </div>
    </div>
  </motion.section>
  </div>)
}

export default Work
