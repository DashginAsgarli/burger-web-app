import React from 'react'
import burger2 from '../assets/burger2.svg'
import burger3 from '../assets/burger3.svg'
import burger4 from '../assets/burger4.svg'
import burger5 from '../assets/burger5.svg'

const burgers = [
    { id: 1, name: 'Triple Patty', price: '8$', image: burger2, highlight: true },
    { id: 2, name: 'Single Patty', price: '4$', image: burger3, highlight: false },
    { id: 3, name: 'Crispy Zinger', price: '5$', image: burger4, highlight: false },
    { id: 4, name: 'Double Patty', price: '5$', image: burger5, highlight: false },
];

function BurgerPatty() {
    return (
        <div className="bg-black py-10 px-6 md:px-15  lg:px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-nowrap lg:grid lg:grid-cols-4 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory gap-6 no-scrollbar pb-10">
                    {burgers.map((burger) => (
                        <div key={burger.id} className={`    flex-shrink-0 w-[280px] sm:w-[320px] lg:w-full snap-center     flex flex-col items-center rounded-[2rem] p-8 transition-all duration-300    ${burger.highlight ? 'bg-[#FF4D00]' : 'bg-[#3D0C02]'}  `}>
                            <div className="mb-6">
                                <img src={burger.image} alt={burger.name} className="w-48 h-40 object-contain drop-shadow-2xl" />
                            </div>

                            <h2 className="text-[#FFD700] text-5xl font-black mb-2 italic italic-font">
                                {burger.price}
                            </h2>

                            <div className="text-center">
                                <h3 className="text-yellow-400 text-2xl font-bold uppercase leading-tight">
                                    {burger.name}
                                </h3>
                                <p className="text-white text-lg font-light uppercase tracking-widest mb-3">
                                    BURGER
                                </p>
                            </div>

                            <p className="text-gray-200 text-sm text-center opacity-80 leading-relaxed mb-4">
                                Lorem Ipsum is simply <br /> dummy text of.
                            </p>
                        </div>
                    ))}
                </div>

                <div className='flex lg:hidden justify-center gap-2'>
                    {burgers.map((_, i) => (
                        <div key={i} className='w-2 h-2 rounded-full bg-[#FFD700]/30'></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BurgerPatty