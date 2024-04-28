'use client'

import Image from 'next/image'; 
import Typewriter from 'typewriter-effect';  

export default function Home() { 
 
  return (
    <div className="grid grid-cols-2 gap-4 dark:text-white">
      <div className='py-20 text-center'>
        <h1 className="text-4xl">
          Hi There! I&apos;m Udit Sharma
          <span className="animate-wave inline-block" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>
        <h1 className="text-4xl">
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
      </div>
      <div>
        <Image src={ "/img/userIcon.png"}
          priority={true}
          width={500}
          height={100}
          alt="userIcon" style={{ height:"250" }} />

      </div>
    </div>
  );
}
