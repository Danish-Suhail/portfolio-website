import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {BsFillPersonLinesFill} from 'react-icons/bs'
import TechStack from './TechStack'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';


const Intro = () => {
  return (
    <div id = "Home" className='lg:mt-20 mt-20 max-w-screen min-w-full px-4 '>
        <div className='flex justify-center items-center w-auto'>
            <div className='flex flex-col lg:flex-row w-11/12 lg:w-8/12 lg:h-[550px] justify-center lg:justify-between items-center'>
                <div className='block lg:hidden py-4'>
                </div>
                <div className='w-full lg:w-8/12'>  
                {/* Div for intro */}
                    <div className='text-6xl flex flex-col items-center lg:place-items-start font-extrabold mt-10'>
                        <span>Hi,</span>
                        <span>I'm Danish,</span>
                        <span>A Web Developer</span>
                    </div>
                    <div className='flex justify-center lg:justify-normal py-8'>
                    <span className='text-gray-500 text-lg font-semibold'>I'm a Web Developer with hands-on experience in designing & implementing highly-responsive user interface components by deploying React concepts. Proficient in translating designs & wireframes into high-quality code, and writing application interface code via Javascript and ReactJS workflows. Adept at monitoring & maintaining frontend and backend performance and troubleshooting & debugging the same to bolster overall performance.</span>
                    </div>
                    <div className='flex justify-center lg:justify-normal text-4xl gap-x-3 pb-2'> 
                        <Link to= "https://www.linkedin.com/in/danish-suhail-a16032205/" target='_blank' smooth>
                        <AiFillLinkedin className='hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'/>
                        </Link>
                        <Link to= "https://github.com/Danish-Suhail" target='_blank' smooth>
                        <AiFillGithub className='hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'/>
                        </Link>
                        <Link to= "/Danish_Resume.pdf" target='_blank' download='true' smooth>
                        <BsFillPersonLinesFill className='hover:text-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'/>
                        </Link>
                        <HashLink
                        to="#Projects"
                        smooth
                        duration={500}
                        className="group text-white text-sm px-3 flex items-center rounded-md bg-black hover:bg-blue-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer"
                        >
                        Projects
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                        </span>
                        </HashLink>
                    </div>
                </div>
                <div className='hidden lg:block'>
                </div>
            </div>
        </div>
            <div className='flex justify-center items-center mt-4 mb-12'>
                <div className='flex w-8/12 gap-x-9'>
                <p className='text-gray-500 text-lg font-semibold flex justify-center items-center'>Tech Stack</p>
                <div className='bg-gray-500 w-[1px]'></div>
                    <TechStack />
                </div>
            </div>
        </div>
  )
}

export default Intro