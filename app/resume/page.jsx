"use client"

import {FaHtml5,FaCss3,FaNodeJs,FaReact,FaJs} from "react-icons/fa"
import {SiTailwindcss ,SiNextdotjs} from "react-icons/si";
import {Tabs,TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"

const about ={
  title:"About me",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam praesentium ad sunt quas sed nihil ipsum eveniet provident sequi, dolorem voluptatem consectetur vero pariatur tempora omnis odit. Doloremque, eius quidem!",
  info:[{
    fieldName :"name",
    fieldValue:"Nutan Gupta"
  },{
    fieldName :"Phone",
    fieldValue:"+91-8107748701"
  },{
    fieldName :"Email",
    fieldValue:"gnutan181@gmail.com"
  },{
    fieldName :"Expericence",
    fieldValue:"1+ Experience"
  },{
    fieldName :"Freelance",
    fieldValue:"Available"
  },{
    fieldName :"Language",
    fieldValue:"English ,Hindi"
  },
  
]

}
// experience
const experience = {
  icon:'/assets/resume/badge.svg',
  title:"My experience",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam praesentium ad sunt quas sed nihil ipsum eveniet provident sequi, dolorem voluptatem consectetur vero pariatur tempora omnis odit. Doloremque, eius quidem!",
  items:[
    {
      company:"Corhaven Technologies Pvt. Ltd",
      position:"Full stack developer",
      duration:"June 2024 - present"
    },
    {
      company:"Xapotech Solution Pvt Ltd",
      position:"Freelance Web Developer",
      duration:"Feb 2024 - May 2024"
    },
  ]
}
const education = {
  icon:'/assets/resume/cap.svg',
  title:"My education",
  description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam praesentium ad sunt quas sed nihil ipsum eveniet provident sequi, dolorem voluptatem consectetur vero pariatur tempora omnis odit. Doloremque, eius quidem!",
  items:[
    {
      institution:"Croma campus Pvt ltd",
      degree:"Mern stack developer",
      duration:"2023"
    },
    {
      institution:"Jaipur Engneering Collage and Research Centre",
      degree:"B.Tech in Electrical Engneering",
      duration:"2021"
    },
  ]
}
const skills = {
  title:"My skills",
  description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem odit ad perspiciatis enim error doloremque inventore nesciunt sapiente, neque dolor! Molestiae itaque autem mollitia tempore sequi. Quidem minus velit culpa.",
  skillList:[
    {
      icon : <FaHtml5 />,
      name :"html 5"
    },
      {
      icon : <FaCss3 />,
      name :"Css3"
    },  {
      icon : <FaJs />,
      name :"JavaScript"
    },  {
      icon : <FaReact />,
      name :"React Js"
    },  {
      icon : <SiTailwindcss />,
      name :"Tailwind V4"
    },  {
      icon : <SiNextdotjs />,
      name :"Next js"
    }, {
      icon : <FaNodeJs />,
      name :"html t"
    }, 
  ]
}
import {Tooltip,TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {motion} from "framer-motion"
 function Resume() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,
      transition:{delay:2.4,duration:0.4,
        ease:"easeIn"
      }
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0" 
    >
      <div className="container mx-auto">
        <Tabs
        defaultvalue="experience"
        className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger> 
            <TabsTrigger value="skills">Skills</TabsTrigger>
             <TabsTrigger value="about">About Me</TabsTrigger> 
          </TabsList>
          <div className="min-h-[70vh] w-full">
            
          <TabsContent value="experience" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">

              <h3 className="text-4xl font-bold">
                {experience.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item,index)=>{
return <li key={index} className="bg-[#232329]
h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1
">
  <span className="text-accent lg:mx-4">{item.duration}</span>
  <h3 className="text-xl max-w-[260px] min-h-[60px]
  text-center lg:mx-4 lg:text-left">{item.position}</h3>
  <div className="flex items-center gap-3">

    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
    <p>{item.company}</p>
  </div>
</li>
                  })}
                </ul>

              </ScrollArea>
            </div>
          </TabsContent>
          {/* education */}
          <TabsContent value="education" className="w-full">
          <div className="flex flex-col gap-[30px] text-center xl:text-left">

              <h3 className="text-4xl font-bold">
                {education.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item,index)=>{
return ( <li key={index} className="bg-[#232329]
h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1
">
  <span className="text-accent lg:mx-4">{item.duration}</span>
  <h3 className="text-xl max-w-[260px] min-h-[60px]
  text-center lg:text-left lg:mx-4">{item.degree}</h3>
  <div className="flex items-center gap-3">

    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
    <p>{item.institution}</p>
  </div>
</li>)
                  })}
                </ul>

              </ScrollArea>
            </div>
          </TabsContent>
          {/* skills */}
          <TabsContent value="skills" className="w-full">
          {/* <div className="flex flex-col gap-[30px] text-center xl:text-left">

              <h3 className="text-4xl font-bold">
                {skills.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {skills.description}
              </p>
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {skills.skillList.map((item,index)=>{
return ( <li key={index} className="bg-[#232329]
h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1
">
  <span className="text-accent lg:mx-4">{item.duration}</span>
  <h3 className="text-xl max-w-[260px] min-h-[60px]
  text-center lg:text-left lg:mx-4">{item.degree}</h3>
  <div className="flex items-center gap-3">

    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
    <p>{item.institution}</p>
  </div>
</li>)
                  })}
                </ul>

              </ScrollArea>
            </div>
             */}
             <div className="flex flex-col gap-[30px] sm:px-2"
             >
             <h3 className="text-4xl font-bold sm:mx-2">{skills.title}</h3>
              
             <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
             <ul className="grid grid-cols-2 sm:grid-cols-3 sm:mx-3 md:grid-cols-4 xl:gap-[30px] " >
              {skills.skillList.map((skill,index)=>{
return <li key={index}>
  <TooltipProvider delayDuration={100} >
<Tooltip>
  <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
    <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
  </TooltipTrigger>
  <TooltipContent>
    <p className="capitalize">
  {skill.name}
    </p>
  </TooltipContent>
</Tooltip>
  </TooltipProvider>

  </li>
              })}
             </ul>
             </div>
          </TabsContent>
{/* about */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">

              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item,index)=>{
                  return (
                    <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-lg">{item.fieldValue}</span>

                    </li>
                  )
                })}
              </ul>
            </div>
     
          </TabsContent>
          </div>
        </Tabs>

      </div>
      
    </motion.div>
  )
}

export default Resume
