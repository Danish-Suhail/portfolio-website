import css from '../Assets/css.png'
import html from '../Assets/html.png'
import javascript from '../Assets/javascript.png'
import react from '../Assets/react.png'
import tailwind from '../Assets/tailwind.png'
import node from '../Assets/node.png'
import github from '../Assets/github.png'
import mongo from '../Assets/mongo.png'


import React from 'react'

const TechStack = () => {
  
const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
    },
    {
      id: 4,
      src: react,
      title: "React",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
    },
    {
      id: 6,
      src: node,
      title: "NodeJS",
    },
    {
      id: 7,
      src: github,
      title: "GitHub",
    },
    {
      id: 8,
      src: mongo,
      title: "MongoDB",
    },
  ];

  return (
      <div className='rounded-full'>
        <div className="grid grid-cols-3 md:grid-cols-8 sm:grid-cols-4 gap-x-6 cursor-pointer">
          {techs.map(({ id, src, title }) => (
            <div key={id} className='py-2'>
            <div className='p-[6px] sm:p-[10px] md:[10px] lg:p-3 rounded-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
              <img src={src} alt={title} className="mx-auto w-[40px] bg-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}
export default TechStack;