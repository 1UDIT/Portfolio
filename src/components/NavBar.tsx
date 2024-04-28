"use client"

import Link from 'next/link'
import React from 'react' 
import { Button } from './ui/button';
import ThemeSwitcher from './ThemeSwitcher';

export default function NavBar() {
    return (
        <nav className=" w-full sticky top-0 inset-x-0 top-0 z-50 bg-white shadow dark:bg-gray-950">
            <div className="container px-4 md:px-6">
                <div className="flex h-14 items-center">
                    <Link className="mr-auto flex items-center gap-2 text-lg font-semibold" href="#"> 
                        <span>Name</span>
                    </Link>
                    <nav className="ml-auto flex items-center space-x-4">
                        <Link
                            className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
                            href="/"
                        >
                            Home
                        </Link> 
                        <Link
                            className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
                            href="/Skill"
                        >
                            Skill
                        </Link>
                        <Link
                            className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
                            href="/Project"
                        >
                            Project
                        </Link>
                        <Link
                            className="font-medium text-sm border-b-2 border-transparent transition-colors hover:text-gray-900 hover:border-gray-100 dark:hover:text-gray-50 dark:hover:border-gray-800"
                            href="/Contact"
                        >
                            Contact
                        </Link>
                        <ThemeSwitcher/>

                    </nav>
                </div>
            </div>
        </nav>
    )
} 