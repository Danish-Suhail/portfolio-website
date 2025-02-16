import React from 'react';
import memoir from '../Assets/portfolio/memoir.jpeg';
import UniChat from '../Assets/portfolio/UniChat.jpeg';
import airbnb from '../Assets/portfolio/airbnb.png';

const Projects = () => {
  const portfolios = [
    {
      id: 1,
      src: memoir,
      source_code_link: "https://github.com/Danish-Suhail/Memoir",
      demo_code_link: "https://memoir-blogs.vercel.app/"
    },
    {
      id: 2,
      src: airbnb,
      source_code_link: "https://github.com/Danish-Suhail/airbnb-clone",
      demo_code_link: "https://danish-booking-app.vercel.app/"
    },
    {
      id: 3,
      src: UniChat,
      source_code_link: "https://github.com/iamhiteshverma/UniChat.git/",
      demo_code_link: "https://unichat-messanger.netlify.app/"
    },
  ];

  return (
    <section id='Projects' className='w-full py-20 bg-gradient-to-r from-gray-50 to-white'>
      <div className='max-w-6xl mx-auto px-4'>
        {/* Heading Section */}
        <div className='text-center mb-12'>
          <h3 className='font-bold text-lg text-blue-600 uppercase tracking-wider'>
            My Work
          </h3>
          <h1 className='font-extrabold text-4xl mt-4 text-gray-900'>
            Each Project is a Unique Piece of Development 🧩
          </h1>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {portfolios.map(({ id, src, source_code_link, demo_code_link }) => (
            <div
              key={id}
              className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2'
            >
              <img
                src={src}
                alt={`Project ${id}`}
                className='rounded-t-xl w-full h-48 object-cover'
              />
              <div className='p-6'>
                <div className='flex justify-between items-center'>
                  <button
                    onClick={() => window.open(demo_code_link, "_blank")}
                    className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300'
                  >
                    Demo
                  </button>
                  <button
                    onClick={() => window.open(source_code_link, "_blank")}
                    className='px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-300'
                  >
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;