import React from 'react'
import { Link } from 'react-router-dom';

const Contact = () => {

    const details = [
        {
          id: 1,
          title: "Location",
          det: "Delhi, India",
          src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTlYQx2R4hSo2huGyYF08HizJzG8rpPjvg-E5PmgrfD89U1jVHt",
          link: "https://www.google.com/maps/place/Delhi/@28.6437954,76.8130408,10z/data=!3m1!4b1!4m6!3m5!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.7040592!4d77.1024902!16zL20vMDlmMDc?entry=ttu"
        },
        {
          id: 2,
          title: "Email",
          det: "danishsuhail007@gmail.com",
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMaLu9XBvEl5Vm4nf0kc0x5qD3yumNK6t7tsZwCty5FDiCHDwn",
          link: 'mailto:danishsuhail007@gmail.com'
        }
    ];


  return (
    <div id='Contact' className='flex items-center justify-center h-auto w-full px-4 mt-10 py-20 bg-gradient-to-r from-gray-300 from-10% to-white bg-gray-100'>
        <div className='lg:w-8/12 w-11/12'>
            <div>
                <h3 className='font-extrabold text-lg text-blue-500'>Contacts</h3>
                <h1 className='font-extrabold text-3xl mt-4 mb-14'>Don't be shy! Hit me up! 👇</h1>
            </div>
            <div className=" flex flex-col md:flex-row cursor-pointer">
              {details.map(({ id, src, title, det, link }) => (
            <div key={id} className='flex gap-x-5'>
              <img src={src} alt={title} className="w-16 p-3 my-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white rounded-full" />
              <div className='flex flex-col text-lg mr-20'>
                <p className='font-extrabold'>{title}</p>
                <Link to={link} target='_blank' smooth>
                  <p className='text-gray-500 text-lg font-semibold hover:text-blue-500'>{det}</p>
                </Link>
              </div>
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Contact