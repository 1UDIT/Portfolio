"use client"

import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { AnimatePresence, motion, useCycle } from "framer-motion"
import ThemeSwitcher from './ThemeSwitcher';


export default function NavBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav className="bg-white dark:bg-black w-full sticky top-0 inset-x-0 top-0 z-50 shadow border-b-2 border-[#ff6600] p-3">
            <div className="container px-4 md:px-6">
                <div className="flex justify-between items-center max-w-7xl mx-auto">
                    <Link className="items-center gap-2 text-lg font-semibold" href="/" key="HomePage">
                        {/* <span><Image src={"/img/logo.webp"} width={20} height={20} alt='Logo'/></span> */}
                        <span className='dark:text-[#ff6600] text-red-700 text-2xl font-bold'>US</span>
                    </Link>
                    <nav className="space-x-8 hidden md:flex items-center text-md bg-transparent">
                        <Link
                            className="font-medium border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-500 dark:hover:text-[#ff6600] dark:hover:border-gray-800"
                            href="/"
                            key="Home"
                        >
                            Home
                        </Link>
                        <Link
                            className="font-medium border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-500 dark:hover:text-[#ff6600] dark:hover:border-gray-800"
                            href="/Project"
                            key="Project"
                        >
                            Project
                        </Link>
                        {/* <Link
                            className="font-medium border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-500 dark:hover:text-[#ff6600] dark:hover:border-gray-800"
                            href="/Contact"
                            key="Contact"
                        >
                            Contact
                        </Link> */}
                    </nav>
                    <ThemeSwitcher className='hidden md:block' />
                    <div className="menu-toggle md:hidden" onClick={() => setIsOpen(value => !value)}>
                        <div
                            className="hamburger bg-foreground text-foreground before:bg-foreground after:bg-foreground"></div>

                    </div>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.ul
                                initial={{ opacity: 0, x1: -200 }}
                                animate={{ opacity: 1, x1: 10 }}
                                exit={{ opacity: 0, x1: -100 }}
                                transition={{ duration: 0.5 }}
                                className="menu md:hidden  items-center dark:text-white text-gray-950  mt-4  gap-4 md:mt-0 h-screen bg-gray-800 flex flex-col justify-center dark:bg-gray-950">
                                <li>
                                    <Link
                                        className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
                                        href="/"
                                        key="Home"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
                                        href="/Project"
                                        key="Project"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Project
                                    </Link>
                                </li>
                                <li>
                                    {/* <Link
                                        className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
                                        href="/Contact"
                                        key="Contact"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Contact
                                    </Link> */}
                                </li>
                                <ThemeSwitcher className='block md:hidden' />
                            </motion.ul>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </nav>
    )
} 