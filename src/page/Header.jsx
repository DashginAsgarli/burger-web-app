import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className='fixed top-0 left-0 w-full z-[100] bg-white/1 backdrop-blur-md flex items-center justify-between px-6 md:px-20 lg:px-[112px] py-[15px]  md:py-[25px] transition-all'>
            <img src={logo} alt="Logo" className='h-[35px] lg:h-auto' />
            <div className='lg:hidden'>
                <button onClick={() => setIsOpen(!isOpen)} className='text-[35px] flex items-center'>
                    {isOpen ? <IoClose /> : <IoMenu />}
                </button>
            </div>
            <ul className={`raleway-font flex flex-col lg:flex-row gap-6 lg:gap-20 text-[17px] text-[#212121]     bg-[#FFD700] items-center px-10 rounded-[25px] lg:rounded-[35px]    absolute lg:static top-[70px] left-6 right-6 z-50 py-8 lg:py-0 lg:h-[40px]    transition-all duration-300 ease-in-out shadow-2xl lg:shadow-none    ${isOpen ? 'flex opacity-100' : 'hidden lg:flex'}`}>
                <li className='cursor-pointer border-b lg:border-none border-black/10 w-full text-center lg:w-auto pb-2 lg:pb-0'>Home</li>
                <li className='cursor-pointer border-b lg:border-none border-black/10 w-full text-center lg:w-auto pb-2 lg:pb-0'>Burgers</li>
                <li className='cursor-pointer border-b lg:border-none border-black/10 w-full text-center lg:w-auto pb-2 lg:pb-0'>Live Kitchen</li>
                <li className='cursor-pointer w-full text-center lg:w-auto'>Menu</li>

                <div className='flex lg:hidden w-full gap-2 bg-white/40 px-4 py-2 rounded-full items-center mt-4'>
                    <input type="text" placeholder='Search...' className='bg-transparent outline-none w-full text-[#212121] placeholder:text-[#212121]/60' />
                    <IoSearch className='text-[20px]' />
                </div>
            </ul>

            <div className='hidden lg:flex gap-0 text-[18px] text-[#212121] bg-[#FFD700] h-[40px] items-center px-4 rounded-[35px]'>
                <input type="text" placeholder='Search' className='outline-none bg-transparent placeholder:text-[#212121] w-[150px]' />
                <IoSearch className='ml-2' />
            </div>
        </header>
    );
}

export default Header;