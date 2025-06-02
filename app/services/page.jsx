"use client"
import {BsArrowDownRight} from "react-icons/bs"
import Link from "next/link"
import {motion} from "framer-motion"
// import { useState } from "react"

const services = [  
  {  
    num: "01",  
    title: "Full-Stack Development",  
    description: "Build and managed high-performance web apps combining MERN/Next.js, AWS, Nginx and CI/CD Pipelines, proven by 40% faster API responses in RuPayLender (Redis caching) and 35% reduced load times via clustering. Delivered end-to-end solutions like AI Career Coach, eCommerce and fintech platforms with 99% uptime." ,
    href: ""  
  },  
  {  
    num: "02",  
    title: "Frontend Optimization",  
    description: "Craft pixel-perfect responsive UIs with React 19, Next.js, animations (Framer Motion) and Tailwind CSS. Reduced load times by 30% in AI projects via lazy loading and optimized state management (Zod, Context API).performance tuning: Achieved 90/70 Lighthouse scores in web apps via code-splitting, lazy loading, and reducing bundle size by 40%. ",  
    href: ""  
  },  
  {  
    num: "03",  
    title: "Backend & DevOps",  
    description: "Design robust RESTful APIs with Node.js, Express, MongoDb and  Prisma ORM with Neon DB, handling 1k+ daily requests at <200ms latency. Built secure systems with Redis caching, Inngest cron jobs, and database optimization, achieving 99% uptime in stress-tested environments.Scaled backend systems handling 500MB+ PDF uploads (streams/Multer). Slashed server costs by 35% with worker threads, reverse proxies, and Prisma query optimization**. Automated security (OWASP ZAP) cutting risks by 60%.",  
    href: ""  
  },  
  {  
    num: "04",  
    title: "AI-Powered Solutions and Automation",  
    description: "Integrate Google Gemini and LLMs for AI-driven features like resume builders, chatbots, and real-time code analysis. Achieved 95% accuracy in AI-generated content ( resume builder, cover letters, quizzes) with prompt engineering and validation layers (Zod). Automated financial report generation (RuPayLender) and Industy insights weekly reports.",  
    href: ""  
  },  
];  
const Services = () => {
  return (
   <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 px-4" >
    <div className="container mx-auto" >
      <motion.div 
      initial={{opacity:0}}
      animate={{
        opacity:1,
        transition:{
          delay:2,duration:0.2,ease:"easeIn"
        },
      }}
       className="grid grid-cols-1 md:grid-cols-2 gap-[60px] auto-rows-fr"
      >
  {services.map((service,index)=>{
    return( <div key={index} className="flex-1 flex flex-col  justify-center gap-6 group h-full py-0">
      <div className="w-full flex justify-between items-center ">

      <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-accent active:text-accent transition-all duration-500" >
        {service.num}
      </div>
      <Link href={service.href}
      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent active:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 active:-rotate-45">
        <BsArrowDownRight className="text-primary text-3xl"/>
      </Link>
    </div>
    {/* title */}
    <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent active:text-accent transition-all duration-500">{service.title}</h2>
    {/* description */}
    <p className="text-white/60">{service.description}</p>
    {/* border */}
    <div className="border-b border-white/20 w-full"></div>
      </div>)
  })}
      </motion.div>
    </div>
   </section>
  )
}

export default Services
