"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "@/components/ui/select"

import {FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'
const info=[
  {
    icon:<FaPhoneAlt />,
    title:'Phone',
    description:'(+91) 8107748701',
  },
  {
    icon:<FaEnvelope />,
    title:'Email',
    description:'gnutan181@gmail.com',
  },
  {
    icon:<FaMapMarkerAlt />,
    title:'Address',
    description:'Delhi',
  }
]
import {motion} from "framer-motion"

const Contact = () => {
  return (
    <div className="px-3">

   <motion.section initial={{opaccity:0}}
   animate={{
    opacity:1,
    transition:{delay:2.4,duration:0.4,ease:"easeIn"}

   }}
   className="py-6"
   >
<div className="container mx-auto h-full">
  <div className="flex flex-col xl:flex-row gap-[30px]">
    <div className="xl:w-[54%] order-2 xl:order-none"> 
      <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
<h3 className="text-4xl text-accent">Let's work together</h3>
<p className="text-white/60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor error imptus commodi?</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6"> 
  <Input type="firstname" placeholder="Firstname" />
  <Input type="lastname" placeholder="Lastname" />
  <Input type="email" placeholder="Email address" />
  <Input type="phone" placeholder="Phone number" />
</div>
{/* slect */}
<Select>
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select a service">

    </SelectValue>
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel> Select a Service   </SelectLabel>
        <SelectItem value='est'>Frontend development</SelectItem>
        <SelectItem value='cst'>Backend development</SelectItem> 
         <SelectItem value='mst'>Full Stack development</SelectItem>
         <SelectItem value='mst'>DevOps</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
<Textarea className="h-[200px]"
placeholder="Type your message here"
/>
<Button size='md' className="max-w-40">
  Send message
</Button>



      </form>
    </div>
    <div className="flex-1 flex items-center xl:justify-evenly order-1 xl:order-none mb-8 xl:mb-0">
      <ul>
        {info.map((Item,index)=>{
          return <li key={index} className="flex items-center gap-6 py-3">
            <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center "> 
              <div className="text-[28px]">{Item.icon}</div>
            </div>
            <div className="flex-1">
            <p className="text-white/60">{Item.title}</p>
            <h3 className="text-xl">{Item.description}</h3>
            </div>
          </li>
        })}
      </ul>
    </div>
  </div>

</div>
   </motion.section>
   </div>
  )
}

export default Contact
