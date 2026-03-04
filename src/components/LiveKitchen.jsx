import React from 'react'
import frame from '../assets/frame.svg'
import { PiPlayCircleThin } from "react-icons/pi";

function LiveKitchen() {
    return (
        <>
            <section className='px-[4vw] lg:px-[8vw] relative flex justify-center items-center overflow-hidden'>
                <img src={frame} alt="Live Kitchen" className='w-full h-auto min-h-[65vh] md:min-h-0 object-cover rounded-[5vw] md:rounded-[1vw] shadow-xl' />

                <div className='absolute inset-0 flex flex-col md:flex-row justify-center md:justify-between items-center px-[6vw] md:ml-[10vw] md:mr-[5vw] py-[2vh]'>
                    <div className='text-[#FFD700] leading-none mb-[2vh] md:mb-0 shrink-0 flex flex-col items-center'>
                        <PiPlayCircleThin className='text-[28vw] md:text-[15vw] lg:text-[12vw] xl:text-[10.5rem]' />
                        <p className='text-center text-[5.5vw] md:text-[3vw] lg:text-[2.5rem] mt-[0.5vh] font-medium'>
                            Watch Now
                        </p>
                    </div>

                    <div className='flex justify-center md:block w-full md:w-auto'>
                        <ul className='space-y-[0.8vh] md:space-y-[1vh] inline-block text-left'>
                            <li className='text-[7.5vw] md:text-[4vw] lg:text-[3.5rem] impact-font text-[#FFD700] mb-[1vh] uppercase text-center md:text-left'>
                                LIVE KITCHEN
                            </li>

                            {["Texas", "Florida", "California", "North Carolina", "Colorado"].map((city, index) => (
                                <li key={index}
                                    className='raleway-font text-[4.2vw] md:text-[1.8vw] lg:text-[1.35rem] text-white flex items-center transition-colors cursor-pointer hover:text-[#FFD700]'>
                                    <PiPlayCircleThin className='inline mr-[2vw] md:mr-[1vw] text-[#FFD700] text-[5.5vw] md:text-[2vw] lg:text-[1.8rem]' />
                                    Live {city}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LiveKitchen