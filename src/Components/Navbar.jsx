import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FaTimes, FaBars } from 'react-icons/fa';
import Logo from '../Assets/Logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      to: '#Home',
      link: 'Home',
    },
    {
      id: 2,
      to: '#About',
      link: 'About',
    },
    {
      id: 3,
      to: '#Projects',
      link: 'Projects',
    },
    {
      id: 4,
      to: '#Contact',
      link: 'Contact',
    },
  ];

  return (
    <nav className='w-full fixed top-0 z-50 bg-gradient-to-r from-white to-gray-100 shadow-md'>
      <div className='max-w-6xl mx-auto px-4 flex justify-between items-center py-3'>
        {/* Logo */}
        <HashLink to='#Home' smooth aria-label='Home'>
          <img
            className='h-10 w-10'
            src={Logo}
            alt='Danish Suhail Logo'
          />
        </HashLink>

        {/* Desktop Links */}
        <div className='hidden md:flex gap-8 text-lg font-semibold'>
          {links.map(({ id, link, to }) => (
            <HashLink
              key={id}
              to={to}
              smooth
              className='text-gray-700 hover:text-blue-600 transition-colors duration-300'
              aria-label={link}
            >
              {link}
            </HashLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div
          onClick={() => setNav(!nav)}
          className='md:hidden cursor-pointer text-gray-700 z-20'
          aria-label={nav ? 'Close Menu' : 'Open Menu'}
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {/* Mobile Menu */}
        {nav && (
          <div className='fixed inset-0 bg-gray-100 bg-opacity-95 flex flex-col justify-center items-center z-10'>
            <ul className='space-y-6 text-center'>
              {links.map(({ id, link, to }) => (
                <li key={id}>
                  <HashLink
                    to={to}
                    smooth
                    onClick={() => setNav(false)}
                    className='text-3xl text-gray-700 hover:text-blue-600 transition-colors duration-300'
                    aria-label={link}
                  >
                    {link}
                  </HashLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;