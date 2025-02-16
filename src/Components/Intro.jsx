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