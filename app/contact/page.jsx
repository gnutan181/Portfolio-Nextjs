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
import { useState } from "react"

const Contact = () => {
   const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Email sent successfully!');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
    }
    setLoading(false);
  };
 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
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
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
<h3 className="text-4xl text-accent">Let's work together</h3>
 {status && (
                  <p className={`${status.includes('success') ? 'text-green-500' : 'text-red-500'}`}>
                    {status}
                  </p>
                )}
{/* <p className="text-white/60">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor error imptus commodi?</p> */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input 
                    type="text" 
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    placeholder="Firstname" 
                    required
                  />
                  <Input 
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    placeholder="Lastname"
                    required
                  />
                  <Input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    required
                  />
                  <Input 
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                    required
                  />
                </div>
{/* slect */}
<Select name="service"
                  value={formData.service}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, service: value }))}
                >
  <SelectTrigger className="w-full">
    <SelectValue placeholder="Select a service">

    </SelectValue>
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel> Select a Service</SelectLabel>
        <SelectItem value='Frontend development'>Frontend development</SelectItem>
        <SelectItem value='Backend development'>Backend development</SelectItem> 
         <SelectItem value='Full Stack development'>Full Stack development</SelectItem>
         <SelectItem value='DevOps'>DevOps</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>
   <Textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="h-[200px]"
                  placeholder="Type your message here"
                  required
                />
   <Button 
                  type="submit" 
                  size='md' 
                  className="max-w-40"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send message'}
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
