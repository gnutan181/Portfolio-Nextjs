"use client"
import React from 'react'
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import { usePathname } from 'next/navigation'
import {CiMenuFries} from "react-icons/ci"
import Link from 'next/link'
import { Trophy } from 'lucide-react'

const links =[
    {
        name : 'home',
        path: '/'
    },
    {
        name : 'services',
        path: '/services'
    },    {
        name : 'resume',
        path: '/resume'
    },    {
        name : 'work',
        path: '/work'
    },    {
        name : 'contact',
        path: '/contact'
    },
]

const MobileNav = () => {
    const pathname = usePathname()
    // console.log(pathname)
  return <Sheet>
    <SheetTrigger className="flex justify-center items-center">
      <CiMenuFries className="text-[32px] text-accent" />  
    </SheetTrigger>
    <SheetContent className="flex flex-col">

        {/* <div>
           
        </div> */}
        {/* nav */}
        <div className="mt-10 text-center text-2xl flex flex-row flex-start gap-2 justify-center items-center py-5">
        <Trophy width="40px" height="30px" className='text-accent' />
            <Link href="/">
            <h1 className='text-4xl font-semibold'>Nutan<span className='text-accent'>.</span></h1>
            </Link>
           
        </div>
        <nav
        className='mt-6 flex flex-col justify-center items-center gap-8'
        >
            {links?.map((link,index)=>{
            return<Link href={link.path} key={index}
            className={`${link.path === pathname ? "text-accent border-b-2 border-accent":"text-white "} text-xl capitalize hover:text-accent transition-all}`}
            >
                {link.name}
            </Link>
        })}
            </nav>
    </SheetContent>
  </Sheet>
}

export default MobileNav
