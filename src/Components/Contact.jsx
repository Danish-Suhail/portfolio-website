import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const details = [
        {
            id: 1,
            title: "Location",
            det: "Delhi, India",
            src: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-map-pin"
                >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                </svg>
            ),
            link: "https://www.google.com/maps/place/Delhi/@28.6437954,76.8130408,10z/data=!3m1!4b1!4m6!3m5!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.7040592!4d77.1024902!16zL20vMDlmMDc?entry=ttu"
        },
        {
            id: 2,
            title: "Email",
            det: "danishsuhail007@gmail.com",
            src: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-mail"
                >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
            ),
            link: 'mailto:danishsuhail007@gmail.com'
        }
    ];

    return (
        <section id='Contact' className='flex items-center justify-center h-auto w-full px-4 py-20 bg-gradient-to-br from-blue-50 to-gray-50'>
            <div className='max-w-6xl w-full px-4'>
                <div className='text-center mb-16'>
                    <h3 className='font-bold text-lg text-blue-600 uppercase tracking-widest'>
                        Get in Touch
                    </h3>
                    <h1 className='font-extrabold text-4xl mt-4 text-gray-900'>
                        Let's Work Together! 💡
                    </h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto'>
                    {details.map(({ id, src, title, det, link }) => (
                        <Link
                            key={id}
                            to={link}
                            target='_blank'
                            className="group relative flex items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
                        >
                            <div className='flex-shrink-0'>
                                <div className='w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-white group-hover:from-blue-700 group-hover:to-blue-500 transition-colors duration-300'>
                                    {React.cloneElement(src, {
                                        className: "w-6 h-6 stroke-current"
                                    })}
                                </div>
                            </div>
                            <div className='ml-6'>
                                <h3 className='text-lg font-bold text-gray-900 mb-1'>{title}</h3>
                                <p className='text-gray-600 group-hover:text-blue-600 transition-colors duration-300'>
                                    {det}
                                </p>
                            </div>
                            <div className='absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-200 transition-all duration-300 pointer-events-none' />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;