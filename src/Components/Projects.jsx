import React from 'react'
import memoir from '../Assets/portfolio/memoir.jpeg'
import UniChat from '../Assets/portfolio/UniChat.jpeg'
import airbnb from '../Assets/portfolio/airbnb.png'


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
      source_code_link: "https://github.com/iamhiteshverma/UniChat.git/" , 
      demo_code_link: "https://unichat-messanger.netlify.app/"
    },
  ];

  return (
    <div id='Projects' className='flex items-center justify-center w-full px-4 h-auto mt-10'>
        <div className='lg:w-8/12 w-11/12'>
            <div>
                <h3 className='font-extrabold text-lg text-blue-500 mb-16'>Projects</h3>
                <h1 className='font-extrabold text-3xl my-5'>Each project is a unique piece of development🧩</h1>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 gap-x-20 px-12 sm:px-0 w-12/12 my-16">
                {portfolios.map(({ id, src , source_code_link, demo_code_link}) => (
                <div key={id} className="shadow-md shadow-gray-200 rounded-lg p-3 border">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-200 hover:scale-105"
                  />
                  <div className="flex items-center justify-center">
                    <button onClick={() => window.open(demo_code_link, "_blank")} className="w-1/2 px-6 py-2 m-4 hover:text-blue-500 duration-200 hover:scale-105">
                      Demo
                    </button>
                    <button onClick={() => window.open(source_code_link, "_blank")} className="w-1/2 px-6 py-2 m-4 hover:text-blue-500 duration-200 hover:scale-105">
                      Code
                    </button>
                  </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects