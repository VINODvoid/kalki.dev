"use client";

import { motion } from "framer-motion";
import { useState } from 'react'
import Image from "next/image";
import Link from "next/link";
;
import NavLink from "./navLink";



const lists = [
    {
        url: "/",
        title: "Home"
    },
    {
        url: "/about",
        title: "About"
    },
    {
        url: "/portfolio",
        title: "Portfolio"
    },
    {
        url: "/contact",
        title: "Contact"
    }
]

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor: "rgb(255,255,255)",
        },
    };
    const centerVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
        },
    };

    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor: "rgb(255,255,255)",
        },
    };

    const listVariants = {
        closed: {
            x: "100vw",
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            },
        },
    };

    const listItemVariants = {
        closed: {
            x: -10,
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        },
    };
    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            <div className="hidden md:flex gap-4 w-1/3">
            {lists.map((link) => (
            <NavLink link={link} key={link.title} />
        ))}
            </div>
            <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
            <Link
            href="/"
            className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
            <span className="text-white mr-1">KALKI</span>
            <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
            </span>
        </Link>
            </div>
            <div className=" hidden md:flex gap-4 w-1/3">
                <Link href="https://github.com/VINODvoid">
                    <Image src="/github.png" alt="github" width={24} height={24} />
                </Link>
                <Link href="https://dribbble.com/kalkivoid">
                    <Image src="/dribble.png" alt="dribble" width={24} height={24} />
                </Link>
                <Link href="https://www.instagram.com/kalki__kal/">
                    <Image src="/instagram.png" alt="instagram" width={24} height={24} />
                </Link>
                <Link href="https://www.linkedin.com/in/kalkikal/">
                    <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
                </Link>
                <Link href="https://twitter.com/kalki_kal">
                    <Image src="/twitter.png" alt="twitter" width={24} height={24} />
                </Link>


            </div>
            <div className="md:hidden">
                {/* MENU BUTTON */}
                <button
                    className="w-10 h-8 flex flex-col justify-between z-50 relative"
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <motion.div
                        variants={topVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left"
                    ></motion.div>
                    <motion.div
                        variants={centerVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded"
                    ></motion.div>
                    <motion.div
                        variants={bottomVariants}
                        animate={open ? "opened" : "closed"}
                        className="w-10 h-1 bg-black rounded origin-left"
                    ></motion.div>
                </button>
                {/* MENU LIST */}
                {open && (
                    <motion.div
                        variants={listVariants}
                        initial="closed"
                        animate="opened"
                        className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
                    >
                        {lists.map((list) => (
                            <motion.div
                                variants={listItemVariants}
                                className=""
                                key={list.title}
                            >
                                <Link href={list.url}>{list.title}</Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    );
}

export default Navbar;
