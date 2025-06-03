"use client"

import {FaHtml5,FaCss3,FaNodeJs,FaReact,FaJs, FaAws} from "react-icons/fa"
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
      name :"HTML5"
    },
      {
      icon : <FaCss3 />,
      name :"CSS3"
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
      name :"Node Js"
    }, 
    // {
    //   icon : <FaNodeJs />,
    //   name :"Express Js"
    // }, 
    // {
    //   icon : <FontAwesomeIcon icon="fa-solid fa-database" />,
    //   name :"MongoDB"
    // },
    {
      icon : <FaAws />,
      name :"AWS"
    },  
    // {
    //   icon : <FaNodeJs />,
    //   name :"Nginx"
    // },  
    // {
    //   icon : <FaNodeJs />,
    //   name :"Docker"
    // },  
    // {
    //   icon : <FaNodeJs />,
    //   name :"C++"
    // },  
    // {
    //   icon : <FaNodeJs />,
    //   name :"Prisma Orm"
    // }, 
    // {
    //   icon : <FaNodeJs />,
    //   name :"SQL"
    // }, 
  ]
}

import {Tooltip,TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import {motion} from "framer-motion"
const skillsData = [
  {
    title: "Frontend Development",
    items: [
      {
        name: "React.js / Next.js",
        description: "Built AI Career Coach with SSR, dynamic routing, and 40% faster page loads via code-splitting."
      },
      {
        name: "Tailwind CSS / ShadCn UI",
        description: "Shipped responsive UIs with 90% Lighthouse scores (RuPayLender) and WCAG-compliant themes."
      },
      {
        name: "State Management",
        description: "Context API + Zod for form validation, reducing user errors by 30% in eCommerce apps."
      },
      {
        name: "Data Visualization",
        description: "Recharts for interactive dashboards (salary trends, loan analytics)."
      }
    ]
  },
  {
    title: "Backend Development",
    items: [
      {
        name: "Node.js / Express",
        description: "Scaled APIs handling 1k+ RPM (RuPayLender) with 200ms latency via Redis caching."
      },
      {
        name: "Databases",
        description: "MongoDB (MERN), PostgreSQL (Prisma), and query optimization (35% faster searches)."
      },
      {
        name: "Authentication",
        description: "Clerk, JWT, and OAuth2 for secure role-based access (0 vulnerabilities in audits)."
      },
      {
        name: "DevOps",
        description: "Dockerized apps, CI/CD pipelines (Vercel), and load testing with k6."
      }
    ]
  },
  {
    title: "AI & Performance Engineering",
    items: [
      {
        name: "AI Integrations",
        description: "Google Gemini for resume builders (95% accuracy) and real-time code analysis."
      },
      {
        name: "WebSockets",
        description: "Real-time chat/collaboration (Socket.io + Redis pub/sub)."
      },
      {
        name: "Performance",
        description: "Achieved 40% faster API responses (Redis) and 50% smaller bundles (lazy loading)."
      }
    ]
  },
  {
    title: "Security & Scalability",
    items: [
      {
        name: "OWASP Compliance",
        description: "Automated scans (ZAP) and Helmet.js, reducing risks by 60%."
      },
      {
        name: "Scalable Architectures",
        description: "Clustering, worker threads, and PDF stream processing (500MB+ files)."
      },
      {
        name: "Payment Systems",
        description: "CashFree integrations with PCI-DSS compliance."
      }
    ]
  }
];


 function Resume() {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1,
      transition:{delay:2.4,duration:0.4,
        ease:"easeIn"
      }
    }}
    // className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0" 
          className="min-h-screen w-full overflow-x-hidden px-4 py-12 xl:py-0"

    >
      {/* <div className="container mx-auto"> */}
            <div className="container mx-auto max-w-[1200px]">

        <Tabs
        defaultValue="experience"
        className=" flex flex-col xl:flex-row gap-[60px] "
        >
          {/* <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 "> */}
                    <TabsList className="flex flex-col w-full xl:w-[280px] shrink-0 mx-auto xl:mx-0 gap-6">

            <TabsTrigger value="experience" className="hover:text-accent">Experience</TabsTrigger>
            <TabsTrigger value="education" className="hover:text-accent">Education</TabsTrigger> 
            <TabsTrigger value="skills" className="hover:text-accent">Skills</TabsTrigger>
             <TabsTrigger value="about" className="hover:text-accent">About Me</TabsTrigger> 
          </TabsList>
          {/* <div className="min-h-[70vh] w-full"> */}
                    <div className="flex-1 min-h-[70vh] w-full max-w-full overflow-x-hidden">

            {/*  experience */}
          <TabsContent value="experience" className="w-full sm:mx-5">
            <div className="flex flex-col gap-[30px] text-center xl:text-left">

              <h3 className="text-4xl font-bold">
                {experience.title}
              </h3>
              {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {experience.description}
              </p> */}
              <ScrollArea className="h-[400px]">
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item,index)=>{
return <li key={index} className="bg-[#232329] mx-auto sm:mx-5
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
              {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {education.description}
              </p> */}
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
      
          <TabsContent value="skills" className="w-full">
  <div className="flex flex-col gap-[30px] xs:text-center ">
    <h3 className="text-4xl font-bold mx-4 xl:mx-0" >{skills.title}</h3>
    {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p> */}
    <div className="text-white/100 mx-4 xl:mx-0">
      {skillsData.map((category, index) => (
        <div key={index}>
          <h3 className="text-accent text-xl">{category.title}</h3>
          {category.items.map((item, itemIndex) => (
            <div key={itemIndex}>
              <span>{item.name}: </span>
              <span className="text-gray-400">{item.description}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
    <ul className="grid grid-cols-2  sm:grid-cols-3 sm:mx-3 mx-4 xl:mx-0 gap-5 md:grid-cols-4 xl:gap-[30px]">
      {skills.skillList.map((skill, index) => (
        <li key={index}>
          <TooltipProvider delayDuration={100} skipDelayDuration={500}>
            <Tooltip>
              <TooltipTrigger 
                className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group
                           active:scale-95 active:bg-[#2d2d35] transition-all duration-100"
                style={{ minWidth: '48px', minHeight: '48px' }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="text-6xl group-hover:text-accent transition-all duration-300">
                  {skill.icon}
                </div>
              </TooltipTrigger>
              <TooltipContent side="top" align="center">
                <p className="capitalize">{skill.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      ))}
    </ul>
  </div>
</TabsContent>
{/* about */}
          <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">

              <h3 className="text-4xl font-bold">{about.title}</h3>
              {/* <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p> */}
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
