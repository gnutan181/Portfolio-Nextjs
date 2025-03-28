"use client"

import {motion} from "framer-motion"
import {Swiper , SwiperSlide} from "swiper/react"
import "swiper/css"
import img1 from "@/assets/assets/work/thumb1.png"
import img2 from "@/assets/assets/work/thumb2.png"

import img3 from "@/assets/assets/work/thumb3.png"


import {BsArrowUpRight , BsGithub} from "react-icons/bs"
import { Tooltip, TooltipContent,TooltipProvider,TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import WorkSliderbtns from "@/components/WorkSliderbtns"
const projects =[
  {
    num:'01',
    category:'frontend',
    title: "project 1",
    description :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, similique, nobis amet saepe sapiente sunt quas neque expedita fuga error recusandae commodi iste consectetur magnam assumenda voluptatum? Veritatis, reprehenderit quam!",
    stack:[
      {name:"Html 5"}, {name:"Css 5"}, {name:"Javascript"}, {name:"REactjs"}
    ],
    image:img1,
    live:"",
    github:"",
  },
  {
    num:'02',
    category:'fullstack',
    title: "project 2",
    description :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, similique, nobis amet saepe sapiente sunt quas neque expedita fuga error recusandae commodi iste consectetur magnam assumenda voluptatum? Veritatis, reprehenderit quam!",
    stack:[
      {name:"Next js"}, {name:"Css 5"}, {name:"Javascript"}, {name:"REactjs"}
    ],
    image:img2,
    live:"",
    github:"",
  },{
    num:'32',
    category:'frontend',
    title: "project 3",
    description :"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, similique, nobis amet saepe sapiente sunt quas neque expedita fuga error recusandae commodi iste consectetur magnam assumenda voluptatum? Veritatis, reprehenderit quam!",
    stack:[
      {name:"Html 5"}, {name:"Css 5"}, {name:"Javascript"}, {name:"Reactjs"}
    ],
    image:img3,
    live:"",
    github:"",
  },
]
const Work = () => {
  
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
        <div className="w-full xl:w-[60%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">

            <div className="flex flex-col gap-[30px] h-[50%]">
        {/*  num */}
        <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
          {project.num}
        </div>
        {/* project catagory */}
        <h2 className="text-white-[42x] font-bold leading-none group-hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
        {/* description */}
        <p className="text-white/60 ">{project.description}</p>

        <ul className="flex gap-4">
          {project.stack.map((item,index)=>{
            return <li key={index} className="text-xl text-accent"> {item.name}
            {/* remove the last commen */}
            {index !== project.stack.length -1 && ","}</li>
          })}
        </ul>
        {/* border */}
        <div className="border border-white/20">
        </div>

    
      {/*link  buttons */}
      <div className="flex items-center gap-4">
        {/* github project button  */}
        <Link href={project.live}>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
          </TooltipTrigger>
           <TooltipContent>
            <p>Live project</p>
           </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        </Link>
        <Link href={project.github}>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
          <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
          <BsGithub className="text-white text-3xl group-hover:text-accent" />
          </TooltipTrigger>
           <TooltipContent>
            <p>Github repository</p>
           </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        </Link>
      </div>
             </div> 
              </div>
{/* Swipper */}
             <div className="w-full xl:w-[40%]">
      <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" 
      onSlideChange={(swiper)=>handleSlideChange(swiper)}
      onSwiper={(swiper) => console.log(swiper)}

      >
        {projects.map((project,index)=>{
          return (
             <SwiperSlide key={index} className="w-full" >
            <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
            {/* overlay */}
            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
            {/* Image */}
            <div className="relative w-full h-full">
              <Image src={project.image} fill className="object-cover" alt="project_image"></Image>
            </div>
            </div>
            
          </SwiperSlide>)
          // {project}
        })}
        <WorkSliderbtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max
        xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
      </Swiper>
               </div>
     
        </div>
    </div>
  </motion.section>
  </div>)
}

export default Work
