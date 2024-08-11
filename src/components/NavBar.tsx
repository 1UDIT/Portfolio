"use client"

import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { AnimatePresence, motion, useCycle } from "framer-motion"
import ThemeSwitcher from './ThemeSwitcher';
import Image from 'next/image';


export default function NavBar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <nav className=" w-full sticky top-0 inset-x-0 top-0 z-50 bg-white shadow dark:bg-gray-950">
            <div className="container px-4 md:px-6">
                <div className="flex h-14 items-center ">
                    <Link className="mr-auto flex items-center gap-2 text-lg font-semibold" href="/" key="HomePage">
                        <span><Image src={"/img/logo.webp"} width={20} height={20} alt='Logo'/></span>
                    </Link>
                    <nav className="ml-auto flex items-center space-x-4 md:contents  hidden dark:text-white text-gray-950">
                        <Link
                            className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
                            href="/"
                            key="Home"
                        >
                            Home
                        </Link>
                        <Link
                            className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
                            href="/Skill"
                            key="Skill"
                        >
                            Skill
                        </Link>
                        <Link
                            className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
                            href="/Project"
                            key="Project"
                        >
                            Project
                        </Link>
                        <Link
                            className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
                            href="/Contact"
                            key="Contact"
                        >
                            Contact
                        </Link>
                        <ThemeSwitcher />
                    </nav>
                    <div className="menu-toggle md:hidden" onClick={() => setIsOpen(value => !value)}>
                        <div className="hamburger dark:bg-white dark:after:bg-white dark:before:bg-white after:bg-gray-950 before:bg-gray-950 bg-gray-950">   </div>
                    </div>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.ul
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -100 }}
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
                                        href="/Skill"
                                        key="Skill"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Skill
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
                                    <Link
                                        className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
                                        href="/Contact"
                                        key="Contact"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Contact
                                    </Link>
                                </li>
                                <ThemeSwitcher />
                            </motion.ul>
                        )}
                    </AnimatePresence>

                </div>
            </div>
        </nav>
    )
} 