'use client'

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { FaReact, FaNode } from "react-icons/fa";
import { SiCss3, SiExpress, SiHtml5, SiJavascript, SiMongodb, SiNextdotjs, SiPandas, SiPython, SiReactquery, SiReacttable, SiRedux, SiShadcnui, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { DiDocker, DiMysql } from 'react-icons/di';

const tech = [
  {
    id: 0,
    icon: <SiJavascript key="FaReact" color='#fdee1fff' className='w-12 h-12 mb-3' />,
    text: "JavaScript"
  },
  {
    id: 1,
    icon: <FaReact key="FaReact" color='#61dafb' className='w-12 h-12 mb-3' />,
    text: "React"
  },
  {
    id: 2,
    icon: <SiNextdotjs key="FaReact" color='#61dafb' className='w-12 h-12 mb-3' />,
    text: "Next.js"
  },
  {
    id: 3,
    icon: <FaNode key="FaNode" className='w-12 h-12 mb-3' color='#5bac46' />,
    text: "Node.js"
  },
  {
    id: 4,
    icon: <SiTypescript key="FaNode" className='w-12 h-12 mb-3' color='#007acc' />,
    text: "TypeScript"
  },
  {
    id: 5,
    icon: <DiMysql key="FaNode" className='w-12 h-12 mb-3' color='#007acc' />,
    text: "Mysql"
  },
  {
    id: 6,
    icon: <SiMongodb key="FaNode" className='w-12 h-12 mb-3' color='#5bac46' />,
    text: "MongoDB"
  },
  {
    id: 7,
    icon: <SiTailwindcss key="FaNode" className='w-12 h-12 mb-3' color='#007acc' />,
    text: "TailwindCSS"
  },
  {
    id: 8,
    icon: <SiExpress key="FaNode" className='w-12 h-12 mb-3' color='black' />,
    text: "Express.js"
  },
  {
    id: 9,
    icon: <SiPython key="FaNode" className='w-12 h-12 mb-3' color='#007acc' />,
    text: "Python"
  },
  {
    id: 10,
    icon: <SiPandas key="FaNode" className='w-12 h-12 mb-3' color='#007acc' />,
    text: "Python"
  },
  {
    id: 11,
    icon: <SiShadcnui key="FaNode" className='w-12 h-12 mb-3' color='#ffffffff' />,
    text: "Shadcn/UI"
  },
  {
    id: 12,
    icon: <SiHtml5 key="FaNode" className='w-12 h-12 mb-3' color='#ffffffff' />,
    text: "HTML5"
  },
  {
    id: 13,
    icon: <SiCss3 key="FaNode" className='w-12 h-12 mb-3' color='#ffffffff' />,
    text: "CSS3"
  },
  {
    id: 14,
    icon: <SiReactquery key="FaNode" className='w-12 h-12 mb-3' color='#f76c6cff' />,
    text: "React Query"
  },
  {
    id: 15,
    icon: <SiReacttable key="FaNode" className='w-12 h-12 mb-3' color='#f76c6cff' />,
    text: "React Table"
  },
  {
    id: 16,
    icon: <SiRedux key="FaNode" className='w-12 h-12 mb-3' color='#ffffffff' />,
    text: "Redux"
  },
]

export default function Home() {

  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    link.click();
  };

  return (
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full items-center">
      <section className='snap-start min-h-screen  '>
        <div className='h-full w-full flex flex-col md:flex-row justify-between items-center gap-6 min-h-screen '>
          <div className="max-w-xl text-4xl pt-9 ">
            Hi There! I&apos;m <span className='font-bold text-[#ff6600]'>Udit Sharma</span>
            <span className="animate-wave inline-block" role="img" aria-labelledby="wave">
              👋🏻
            </span>
            <h1 className="text-xl md:text-2xl mb-8">
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer",
                    "Full Stack Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className='flex flex-wrap gap-4 mb-8'>
              <Button
                className='bg-[#ff6600] px-6 py-6 rounded-lg text-white hover:bg-[#e65c00] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6600]/20 text-xl'>
                Hire Me
              </Button>
              <Button
                onClick={downloadFile}
                className='hover:bg-[#ff6600] bg-transparent border-2 border-[#ff6600] px-6 py-6 rounded-lg hover:text-white text-[#ff6600]
                             hover:bg-[#e65c00] transition-all duration-300 hover:shadow-lg hover:shadow-[#ff6600]/20 text-xl transition-all duration-300'>
                Download Resume
              </Button>
            </div>
          </div>
          <div className='relative'>
            <div className='w-72 h-84 md:w-80 md:h-80 lg:w-96 lg:h-96'>
              <Image src={"/img/userIcon.png"}
                priority={true}
                width={350}
                height={100}
                alt="userIcon" style={{ height: "250" }} />
            </div>

          </div>
        </div>
      </section>
      <section className='snap-start min-h-screen'>
        <h1 className='text-4xl md:text-5xl font-bold mb-6 text-[#ff6600]'>About Me</h1>
        <p className='mb-5'>
          Hi, I'm <span className='font-bold'> Udit Sharma</span>, Software Developer with 3+ years of
          experience in building responsive and performance-driven web applications using React,
          Next.js, SQL, Express, and Node.js,.
          Passionate about clean UI architecture, efficient state management, and delivering seamless user experiences through modern frontend technologies.
        </p>
      </section>
      <section className='snap-start min-h-screen'>
        <h1 className='text-4xl md:text-5xl font-bold mb-6 text-[#ff6600] text-center mb-8'>Tech Stack</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center'>
          {
            tech.map((value) =>
              <div key={value.id}
                className='flex flex-col
                 items-center dark:bg-gray-700 bg-slate-300 dark:bg-slate-900
                 p-4 rounded-xl border 
                 border-gray-800 hover:border-[#ff6600]/50 hover:-translate-y-1 transition-all duration-300 w-28'>
                {value.icon}
                <p className='text-sm font-medium dark:text-gray-300 text-black text-center'>{value.text}</p>
              </div>
            )
          }
        </div>
      </section>

    </div >
  );
}
