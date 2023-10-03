import React from 'react'

const About = () => {
  return (
    <div id='About' className='flex justify-center items-center bg-gradient-to-r from-gray-300 from-10% to-white bg-gray-100 w-full sm:h-[80vh] lg:min-h-full px-4 py-4'>
            <div className='w-11/12 lg:w-8/12 lg:py-0 py-4'>
                <h3 className='font-extrabold text-lg text-blue-500 mb-16'>ABOUT ME</h3>
                <h1 className='font-extrabold text-3xl my-8'>A dedicated Front-end Developer
                    based in India 📍</h1>
                <p className='text-gray-500 text-lg font-semibold'>Hello World! I'm Danish Suhail, a Web Developer ,I love combining the worlds of logic and creative design to make eye-catching, accessible, and user- friendly websites and applications. I've worked on many projects using various technologies such as Javascript, ReactJS, Tailwind CSS, Firebase, MongoDB. I've backend skills in NodeJS and ExpressJS, also worked on cloud technology such as AWS buckets and RESTAPI.</p>
                <br></br>
                <p className='text-gray-500 text-lg font-semibold'>Technology leads, society follows. The move towards increasing inclusivity and diversity in the industry through representation is of importance to me.
                I'm excited to make the leap and continue refining my skills with the right company. Drop me a line in the contact form below.
                </p>
            </div>
    </div>
  )
}

export default About