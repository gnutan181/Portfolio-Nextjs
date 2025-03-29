"use client"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Stairs from "./Stairs"
import {motion} from "framer-motion"
const StairTransition = () => {
    const pathname = usePathname()

  return (
    <>
<<<<<<< HEAD
   <AnimatePresence mode="wait">StairTransition
=======
   <AnimatePresence mode="wait">
>>>>>>> 333c3f0 (Resolved merge conflicts)
    <div key={pathname}>
        <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
            <Stairs />
        </div>
        <motion.div 
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none " initial={{opacity :1 }}  
        animate={{
        opacity:0,
        transition:{
  delay:1, 
<<<<<<< HEAD
  duration: 0.4,
=======
  duration: 0.2,
>>>>>>> 333c3f0 (Resolved merge conflicts)
   ease :"easeInOut"
        }}} 
        />
    </div>
   </AnimatePresence>
    </>
  )
}

export default StairTransition
