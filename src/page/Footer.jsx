import React from 'react'
import logo from '../assets/logo.svg'
import { FiPlayCircle } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <section className=' md:px-15 lg:px-28 text-[#212121]'>
                <div className='flex flex-col md:flex-row justify-between gap-10 md:gap-10 lg:gap-15 bg-[#FFD700] px-6 lg:px-12 pt-14 pb-3 text-[18px]'>

                    <div className='w-full md:w-72'>
                        <img src={logo} alt="Logo" />
                        <p className='my-5'>Your Complain Register Here</p>
                        <div className='flex flex-col'>
                            <textarea placeholder='Write your complain here...' className='bg-[#D32F2F] rounded-[10px] p-5 h-38 resize-none outline-none mb-4'></textarea>
                            <button className='bg-[#D32F2F] hover:bg-[#9b1c1c] rounded-[7px] text-[22px] p-2'>Submit</button>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between'>
                        <div className='grid grid-cols-3 md:flex gap-4 md:gap-8 lg:gap-20 text-[13px] sm:text-[15px] md:text-[18px]'>
                            <ul className='leading-loose'>
                                <li className='font-bold text-[#D32F2F]'>Home</li>
                                <li>Burgers</li>
                                <li>Burgers Deals</li>
                                <li>Live Kitchens</li>
                                <li>Burgers App</li>
                            </ul>
                            <ul className='leading-loose'>
                                <li className='font-bold'>Menus</li>
                                <li>Single Burger</li>
                                <li>Double Burger</li>
                                <li>Triple Burger</li>
                                <li>Zinger Burger</li>
                            </ul>
                            <ul className='leading-loose'>
                                <li className='font-bold'>Live</li>
                                <li><FiPlayCircle className='inline mr-1 text-[#D32F2F]' />Texas</li>
                                <li><FiPlayCircle className='inline mr-1 text-[#D32F2F]' />Florida</li>
                                <li><FiPlayCircle className='inline mr-1 text-[#D32F2F]' />Calif.</li>
                                <li><FiPlayCircle className='inline mr-1 text-[#D32F2F]' />Colo.</li>
                            </ul>
                        </div>

                        <div className='flex justify-center md:justify-end mt-10 md:mt-15 gap-5'>
                            {[<FaSquareInstagram key="1" />, <FaSquareXTwitter key="2" />, <FaTwitter key="3" />].map((icon, index) => (
                                <div key={index} className='text-[30px] text-[#D32F2F] hover:text-[#9b1c1c] transition-colors duration-300 cursor-pointer'>
                                    {icon}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className='w-full h-12 bg-[#D32F2F]'></div>
            </section>
        </>
    )
}

export default Footer