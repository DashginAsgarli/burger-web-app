import React from 'react'
import { CgProfile } from "react-icons/cg";
import { FaStar } from "react-icons/fa";
import Burger1 from '../assets/burger1.svg'

function HomePage() {
  return (
    <>
      <section className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 px-6 md:px-[90px] lg:px-[112px] pb-[40px] pt-[80px] items-center'>

        <div className='order-first lg:order-last flex justify-center mt-4 lg:mt-0'>
          <img src={Burger1} alt="Burger" className='h-[250px] sm:h-[400px] md:h-[400px] lg:h-[650px] drop-shadow-[0_20px_100px_#9b1c1c] object-contain' />
        </div>

        <div className='text-center lg:text-left'>
          <div className='text-[30px] md:text-[40px] mt-1 lg:mt-[88px] font-light'>Speical`</div>

          <div className='leading-tight'>
            <div className='impact-font text-[40px] md:text-[70px] lg:text-[90px] font-mono text-[#FFD700]'>
              DOUBLE PATTY
            </div>
            <div className='impact-font text-[30px] md:text-[50px] lg:text-[63px] text-[#FFD700]'>
              BEEF CHEEZE BURGER
            </div>
          </div>

          <p className='raleway-font text-[16px] md:text-[25px] lg:text-[18px] font-extralight mt-2 lg:mt-4'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
          </p>

          <button className='raleway-font text-[16px] md:text-[25px] text-[#212121] bg-[#FFD700] py-[3px] px-[30px] rounded-[35px] my-[15px] lg:my-[25px] transition-all duration-300 ease-in-out hover:bg-[#e6c200] hover:scale-105 active:scale-95 cursor-pointer'>
            Order Now
          </button>

          <div className='flex items-center justify-center lg:justify-start gap-2 mb-[15px] lg:mb-[20px]'>
            <CgProfile className='text-[30px] lg:text-[45px]' />
            <div className='text-[20px]'>Charles</div>
          </div>

          <div className='flex justify-center lg:justify-start gap-2 text-[20px] md:text-[25px] text-[#FFD700]'>
            {[1, 2, 3, 4, 5].map((item) => (
              <FaStar key={item} />
            ))}
          </div>
        </div>

      </section>
    </>
  )
}

export default HomePage