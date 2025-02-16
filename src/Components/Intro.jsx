// import React from 'react'
// import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import {BsFillPersonLinesFill} from 'react-icons/bs'
// import TechStack from './TechStack'
// import { Link } from 'react-router-dom'
// import { HashLink } from 'react-router-hash-link';


// const Intro = () => {
//   return (
//     <section id="Home" className='lg:mt-20 mt-20 max-w-screen min-w-full px-4'>
//     <div className='flex justify-center items-center w-auto'>
//       <div className='flex flex-col lg:flex-row w-11/12 lg:w-8/12 lg:h-[550px] justify-center lg:justify-between items-center'>
//         <div className='block lg:hidden py-4'>
//           {/* Add any content for mobile view if needed */}
//         </div>
//         <div className='w-full lg:w-8/12'>
//           {/* Div for intro */}
//           <header className='text-6xl flex flex-col items-center lg:place-items-start font-extrabold mt-10'>
//             <span>Hi,</span>
//             <span>I'm Danish,</span>
//             <span>A Web Developer</span>
//           </header>
//           <article className='flex justify-center lg:justify-normal py-8'>
//             <p className='text-gray-500 text-lg font-semibold'>
//               I'm a Web Developer with hands-on experience in designing & implementing highly-responsive user interface components by deploying React concepts. Proficient in translating designs & wireframes into high-quality code, and writing application interface code via Javascript and ReactJS workflows. Adept at monitoring & maintaining frontend and backend performance and troubleshooting & debugging the same to bolster overall performance.
//             </p>
//           </article>
//           <div className='flex justify-center lg:justify-normal text-4xl gap-x-3 pb-2'>
//           <Link to="https://www.linkedin.com/in/danish-suhail-a16032205/" target='_blank' smooth aria-label="LinkedIn">
//                 <AiFillLinkedin className='hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer' />
//               </Link>
//               <Link to="https://github.com/Danish-Suhail" target='_blank' smooth aria-label="GitHub">
//                 <AiFillGithub className='hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer' />
//               </Link>
//               <a href="/Resume.Danish.pdf" target='_blank' download aria-label="Download Resume">
//                 <BsFillPersonLinesFill className='hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer' />
//               </a>
//               <HashLink
//                 to="#Projects"
//                 smooth
//                 duration={500}
//                 className="group text-white text-sm px-3 flex items-center rounded-md bg-black hover:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
//                 aria-label="Projects"
//               >
//                 Projects
//                 <span className="group-hover:rotate-90 duration-300">
//                   <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
//                 </span>
//               </HashLink>
//             </div>
//           </div>
//           <div className='hidden lg:block'>
//             {/* Add any content for desktop view if needed */}
//           </div>
//         </div>
//       </div>
//       <div className='flex justify-center items-center mt-4 mb-12'>
//         <div className='flex w-8/12 gap-x-9'>
//           <p className='text-gray-500 text-lg font-semibold flex justify-center items-center'>Tech Stack</p>
//           <div className='bg-gray-500 w-[1px]'></div>
//           <TechStack />
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Intro


import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import TechStack from './TechStack';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Intro = () => {
  return (
    <section id="Home" className='w-full py-28 bg-gradient-to-r from-gray-50 to-white'>
      <div className='max-w-6xl mx-auto px-4'>
        {/* Intro Section */}
        <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
          <h3 className='font-bold text-lg text-blue-600 uppercase tracking-wider'>
            Welcome to My Portfolio
          </h3>
          <h1 className='font-extrabold text-5xl mt-4 text-gray-900'>
            Hi, I'm <span className='text-blue-600'>Danish</span>
          </h1>
          <h2 className='font-extrabold text-4xl mt-2 text-gray-700'>
            A Web Developer
          </h2>
          <p className='text-gray-600 text-lg mt-6 max-w-2xl'>
            I'm a Web Developer with hands-on experience in designing & implementing highly-responsive user interface components using React. Proficient in translating designs & wireframes into high-quality code, and writing application interface code via JavaScript and ReactJS workflows. Adept at monitoring & maintaining frontend and backend performance and troubleshooting & debugging to bolster overall performance.
          </p>

          {/* Social Links and Projects Button */}
          <div className='flex justify-center lg:justify-start items-center gap-6 mt-8'>
            <Link
              to="https://www.linkedin.com/in/danish-suhail-a16032205/"
              target='_blank'
              aria-label="LinkedIn"
              className='text-gray-700 hover:text-blue-600 transition-colors duration-300'
            >
              <AiFillLinkedin size={28} />
            </Link>
            <Link
              to="https://github.com/Danish-Suhail"
              target='_blank'
              aria-label="GitHub"
              className='text-gray-700 hover:text-blue-600 transition-colors duration-300'
            >
              <AiFillGithub size={28} />
            </Link>
            <a
              href="/Resume.Danish.pdf"
              target='_blank'
              download
              aria-label="Download Resume"
              className='text-gray-700 hover:text-blue-600 transition-colors duration-300'
            >
              <BsFillPersonLinesFill size={28} />
            </a>
            <HashLink
              to="#Projects"
              smooth
              duration={500}
              className='flex items-center px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300'
              aria-label="Projects"
            >
              Projects
              <MdOutlineKeyboardArrowRight size={20} className='ml-2' />
            </HashLink>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className='flex flex-col items-center mt-16'>
          <p className='text-gray-600 text-lg font-semibold mb-6'>Tech Stack</p>
          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default Intro;