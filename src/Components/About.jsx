// import React from 'react'

// const About = () => {
//   return (
//     <div id='About' className='flex justify-center items-center bg-gradient-to-r from-gray-300 from-10% to-white bg-gray-100 w-full sm:h-[80vh] lg:min-h-full px-4 py-4'>
//             <div className='w-11/12 lg:w-8/12 lg:py-0 py-4'>
//                 <h3 className='font-extrabold text-lg text-blue-500 mb-16'>ABOUT ME</h3>
//                 <h1 className='font-extrabold text-3xl my-8'>A dedicated Front-end Developer
//                     based in India 📍</h1>
//                 <p className='text-gray-500 text-lg font-semibold'>Hello World! I'm Danish Suhail, a Web Developer ,I love combining the worlds of logic and creative design to make eye-catching, accessible, and user- friendly websites and applications. I've worked on many projects using various technologies such as Javascript, ReactJS, Tailwind CSS, Firebase, MongoDB. I've backend skills in NodeJS and ExpressJS, also worked on cloud technology such as AWS buckets and RESTAPI.</p>
//                 <br></br>
//                 <p className='text-gray-500 text-lg font-semibold'>Technology leads, society follows. The move towards increasing inclusivity and diversity in the industry through representation is of importance to me.
//                 I'm excited to make the leap and continue refining my skills with the right company. Drop me a line in the contact form below.
//                 </p>
//             </div>
//     </div>
//   )
// }

// export default About

import React from 'react';

const About = () => {
  return (
    <section id='About' className='w-full py-20 bg-gradient-to-r from-gray-50 to-white'>
      <div className='max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12'>
        {/* Text Content */}
        <div className='lg:w-1/2'>
          <h3 className='font-bold text-lg text-blue-600 uppercase tracking-wider'>
            About Me
          </h3>
          <h1 className='font-extrabold text-4xl mt-4 text-gray-900'>
            A Dedicated Front-end Developer Based in Vilnius, Lithuania 📍
          </h1>
          <p className='text-gray-600 text-lg mt-6'>
            Hello World! I'm Danish Suhail, a Web Developer. I love combining the worlds of logic and creative design to make eye-catching, accessible, and user-friendly websites and applications. I've worked on many projects using various technologies such as JavaScript, ReactJS, Tailwind CSS, Firebase, and MongoDB. I also have backend skills in NodeJS and ExpressJS, and I've worked with cloud technologies like AWS buckets and REST APIs.
          </p>
          <p className='text-gray-600 text-lg mt-6'>
            Technology leads, society follows. The move towards increasing inclusivity and diversity in the industry through representation is of importance to me. I'm excited to make the leap and continue refining my skills with the right company. Drop me a line in the contact form below.
          </p>
        </div>

        {/* SVG Illustration */}
        <div className='lg:w-1/2 flex justify-center'>
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 500 500"
  className="w-full max-w-[400px] text-blue-600" // Tailwind classes for styling
>
  {/* Laptop */}
  <path
    fill="currentColor"
    d="M100 320h300v40H100z"
  />
  <path
    fill="#e2e8f0" // Tailwind gray-200
    d="M120 120h260v200H120z"
  />
  <path
    fill="#1e3a8a" // Tailwind blue-900
    d="M130 130h240v180H130z"
  />

  {/* Code Brackets */}
  <path
    fill="#fff"
    d="M160 200l-20-20 40-40-40-40 20-20 60 60zM240 260l20 20-40 40 40 40-20 20-60-60z"
  />

  {/* Server/Cloud Elements */}
  <circle cx="260" cy="160" r="10" fill="#38bdf8" /> {/* Tailwind sky-400 */}
  <circle cx="290" cy="160" r="10" fill="#38bdf8" />
  <path
    fill="#38bdf8"
    d="M340 230h40v40h-40z"
  />

  {/* Animated Circles (Add pulse animation) */}
  <circle cx="380" cy="100" r="20" fill="currentColor" className="opacity-20" />
  <circle cx="380" cy="100" r="15" fill="currentColor" className="opacity-30" />
  <circle cx="380" cy="100" r="10" fill="currentColor" className="opacity-40" />
</svg>
        </div>
      </div>
    </section>
  );
};

export default About;