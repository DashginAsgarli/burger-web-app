import React from 'react';
import { FaStar, FaArrowRight } from "react-icons/fa";
import burgeruper from '../assets/burgeruper1.svg';

function MobileApp() {
    const profiles = [
        "https://randomuser.me/api/portraits/men/1.jpg",
        "https://randomuser.me/api/portraits/women/2.jpg",
        "https://randomuser.me/api/portraits/men/3.jpg",
        "https://randomuser.me/api/portraits/women/4.jpg"
    ];

    return (
        <section className='bg-black min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 md:px-[90px] lg:px-[112px] py-[80px] items-center overflow-hidden'>

            <div className='lg:col-span-7 relative flex justify-center items-center'>
                <div className='absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] bg-red-600 rounded-full blur-[130px] opacity-50 -z-10 animate-pulse'></div>

                <img src={burgeruper} alt="Burger App Mobile" className='w-[65%]  md:w-[60%] lg:w-[70%] max-w-[500px] lg:max-w-[765px] drop-shadow-[0_20px_90px_#9b1c1c] object-contain z-10' />
            </div>

            <div className='lg:col-span-5 text-center lg:text-left space-y-6'>
                <div className='space-y-1'>
                    <h1 className='impact-font text-[#FFD700] text-3xl md:text-5xl lg:text-5xl xl:text-6xl  tracking-tight leading-tight'>
                        Download <br />
                        Our Mobile App
                    </h1>
                    <p className='text-[#FFD700] text-xl md:text-3xl lg:text-3xl xl:text-4xl font-light opacity-90'>
                        Fast Home Delivery
                    </p>
                </div>

                <div className='flex items-center justify-center lg:justify-start -space-x-3 py-2'>
                    {profiles.map((url, index) => (
                        <img key={index} src={url} alt="user" className='w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-black object-cover' />
                    ))}
                    <div className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FFD700] flex items-center justify-center border-2 border-black z-10 cursor-pointer hover:scale-110 transition-transform'>
                        <FaArrowRight className='text-black' />
                    </div>
                </div>

                <button className='bg-[#FFD700] raleway-font text-[#212121] font-bold py-2 px-6 md:py-3 md:px-10 rounded-full text-sm md:text-lg shadow-lg hover:bg-[#e6c200] transition-all transform hover:-translate-y-1 active:scale-95 '>
                    Download Here
                </button>

                <div className='flex flex-wrap justify-center lg:justify-start items-center gap-10 pt-4'>
                    <div>
                        <span className='text-[#FFD700] text-3xl md:text-4xl font-bold block'>4.5</span>
                        <div className='flex text-[#FFD700] gap-1'>
                            {[...Array(4)].map((_, i) => <FaStar key={i} />)}
                        </div>
                    </div>

                    <div>
                        <span className='text-[#FFD700] text-3xl md:text-4xl font-bold block'>900K</span>
                        <span className='text-[#FFD700] opacity-80 text-xs md:text-sm uppercase tracking-widest'>Downloading</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default MobileApp;