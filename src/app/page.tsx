'use client'

import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div className="grid grid-cols-2 gap-4 dark:text-white">
      <div className='py-9 text-center'>
        <h1 className="heading">
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>
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
      </div>
      <div>02</div>
    </div>
  );
}
