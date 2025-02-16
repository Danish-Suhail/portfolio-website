import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import {FaTimes, FaBars} from 'react-icons/fa'
import Logo from '../Assets/Logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
          id: 1,
          to: "#Home",
          link: "Home"
        },
        {
          id: 2,
          to:"#About",
          link: "About",
        },
        {
          id: 3,
          to: "#Projects",
          link:"Projects"
        },
        {
          id: 4,
          to: "#Contact",
          link:"Contact"
        },
      ];



  return (
    <nav className='flex items-center justify-center shadow-md bg-gradient-to-r from-white from-10% to-gray-300 bg-gray-100 rounded-lg w-full py-3 fixed top-0 z-50'>
    <div className='flex justify-between w-11/12 py-2 mt-2'>
        <div>
            <HashLink to='#Home' smooth aria-label="Home">
                <img className='h-[33px] w-[33px] bg-gray-100' src={Logo} alt='Danish Suhail Logo' />
            </HashLink>
        </div>
        <div className='flex gap-x-8 mx-6 text-[18px] justify-center items-center font-semibold'>
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-black md:hidden"
                aria-label={nav ? "Close Menu" : "Open Menu"}
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {links.map(({ id, link, to }) => (
                <div key={id} className='hover:text-blue-500 cursor-pointer hidden md:block'>
                    <HashLink to={to} smooth aria-label={link}>
                        {link}
                    </HashLink>
                </div>
            ))}
            {nav && (
                        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gray-100 transition-transform duration-300 ease-in-out transform">
                            {links.map(({ id, link, to }) => (
                                <li
                                    key={id}
                                    className="px-4 cursor-pointer capitalize py-6 text-4xl"
                                >
                                    <HashLink
                                        onClick={() => setNav(!nav)}
                                        to={to}
                                        smooth
                                        duration={500}
                                        aria-label={link}
                                    >
                                        {link}
                                    </HashLink>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
  )
}

export default Navbar