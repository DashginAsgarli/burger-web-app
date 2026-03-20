import React from 'react'
import only3 from '../assets/only3.svg'
import deal1 from '../assets/deal1.svg'
import deal2 from '../assets/deal2.svg'
import { useCart } from '../context/CartContext'

function DealsSection() {
    const { addToCart, cart } = useCart()
    const getQty = (id) => cart.find(i => i.id === id)?.qty || 0
    const deals = [
        {
            id: 1,
            title: 'Deal 1 Single Patty Burger',
            img: only3
        },
        {
            id: 2,
            title: 'Deal 2 Double Patty Burger',
            img: deal1
        },
        {
            id: 3,
            title: 'Deal 3 Triple Patty Burger',
            img: deal2
        },
    ]
    return (
        <>
            <section className='py-15 lg:py-24 px-6 md:px-15 lg:px-28'>
                <h2 className='impact-font text-[30px] md:text-[50px] lg:text-[63px] text-[#FFD700] text-center uppercase'>
                    CRISPY DEALS OF BURGERS
                </h2>
                <p className='raleway-font text-[16px] md:text-[25px] lg:text-[18px] font-extralight mt-2 lg:mt-4 text-center mb-10 lg:mb-20'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting Industry.
                </p>
                <div className='flex flex-nowrap lg:flex-row overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory gap-6 lg:justify-between no-scrollbar pb-10 lg:pb-0'>
                    {deals.map((deal, index) => (
                        <div key={index} className='min-w-70 sm:min-w-78 lg:min-w-0 lg:w-78 snap-center shrink-0 lg:shrink'>
                            <div className='relative group'>
                                <img src={deal.img} alt={deal.title} className='w-full h-auto object-contain lg:hover:scale-105 transition-transform duration-300' />
                            </div>

                            <p className='impact-font text-[28px] lg:text-[35px] text-[#FFD700] text-center my-4 lg:my-6 leading-[1.1] uppercase'>
                                {deal.title}
                            </p>

                            <button onClick={() => addToCart(deal)} className='raleway-font text-[16px] lg:text-[20px] text-[#212121] bg-[#FFD700] py-2 lg:py-1 px-8 rounded-[35px] transition-all duration-300 hover:bg-[#e6c200] hover:scale-105 active:scale-95 cursor-pointer text-center block mx-auto'>    {getQty(deal.id) > 0 ? `In cart: ${getQty(deal.id)} ✓` : 'Order Now'}</button>
                        </div>
                    ))}
                </div>

                <div className='flex lg:hidden justify-center gap-2 mt-2'>
                    {deals.map((_, i) => (
                        <div key={i} className='w-2 h-2 rounded-full bg-[#FFD700]/30'></div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default DealsSection
