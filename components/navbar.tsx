"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navlink";



const lists = [
    {
        url:"/",
        title:"Home"
    },
    {
        url:"/about",
        title:"About"
    },
    {
        url:"/blog",
        title:"Blog"
    },
    {
        url:"/contact",
        title:"Contact"
    }
]
const Navbar = () => {
    const [open , setOpen] = useState(false)
    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
            <div className="hidden md:flex gap-4 w-1/3">
                {
                    lists.map(link =>(
                        <NavLink link={link} key={link.title}/>
                    ))
                }
            </div>
        <div className="md:hidden  lg:flex w-1/3 justify-center">
            <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                <span className="text-white mr-1">Kalki</span>
                <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.Dev</span>
            </Link>
        </div>
        <div className=" hidden md:flex gap-4 w-1/3">
            <Link href="https://github.com/VINODvoid">
                <Image src="/github.png" alt="github" width="24" height="24"/>
            </Link>
            <Link href="https://dribbble.com/kalkivoid">
                <Image src="/dribble.png" alt="dribble" width="24" height="24"/>
            </Link>
            <Link href="https://www.instagram.com/kalki__kal/">
                <Image src="/instagram.png" alt="instagram" width="24" height="24"/>
            </Link>
            <Link href="https://www.linkedin.com/in/kalkikal/">
                <Image src="/linkedin.png" alt="linkedin" width="24" height="24"/>
            </Link>
            <Link href="https://twitter.com/kalki_kal">
                <Image src="/twitter.png" alt="twitter" width="24" height="24"/>
            </Link>

            
        </div>
        <div className="md:hidden">
            <Menu size={42} className="w-10 h-8 cursor-pointer z-50 relative " onClick={()=>(setOpen((prev)=> !prev))}/>
            { open && 
            <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl ">
                { lists.map( link => (
                    <Link href={link.url} key={link.title}>{link.title}</Link>
                )) }
            </div>
            }
        </div>
        </div>
    );
}

export default Navbar;
