import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex items-center justify-center h-auto w-full px-4 bg-stone-900 py-12'>
        <div className='lg:w-8/12 w-11/12 text-gray-200 text-lg font-extrabold flex justify-between'>
            <p>Copyright © 2023. All rights are reserved</p>
            <div className='flex text-4xl gap-x-3'>
              <Link to= "https://www.linkedin.com/in/danish-suhail-a16032205/" target='_blank' smooth>
                <AiFillLinkedin className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'/>
              </Link>
              <Link to= "https://github.com/Danish-Suhail" target='_blank' smooth>
                <AiFillGithub className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'/>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Footer