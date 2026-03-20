import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/logo.svg'
import { IoMenu, IoClose, IoCartOutline } from "react-icons/io5"
import { CgProfile } from "react-icons/cg"
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'
import AuthModal from '../components/AuthModal'
import CartDrawer from '../components/CartDrawer'
import SearchBar from '../components/SearchBar'

const navLinks = [
    { label: 'Home', section: 'home' },
    { label: 'Burgers', section: 'burgers' },
    { label: 'Live Kitchen', section: 'live' },
    { label: 'Deals', section: 'deals' },
]

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [showAuth, setShowAuth] = useState(false)
    const [showCart, setShowCart] = useState(false)
    const { user, logout } = useAuth()
    const { itemCount } = useCart()
    const navigate = useNavigate()
    const location = useLocation()

    const scrollTo = (section) => {
        setIsOpen(false)
        if (location.pathname !== '/') {
            navigate('/')
            setTimeout(() => {
                document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
            }, 150)
        } else {
            document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <header className='fixed top-0 left-0 w-full z-[100] bg-white/1 backdrop-blur-md flex items-center justify-between px-6 md:px-20 lg:px-[112px] py-[15px] md:py-[25px] transition-all'>

                <img src={logo} alt="Logo" className='h-[35px] lg:h-auto cursor-pointer' onClick={() => scrollTo('home')} />

                <div className='lg:hidden flex items-center gap-3'>
                    <button onClick={() => setShowCart(true)} className='relative text-[#FFD700] text-[28px]'>
                        <IoCartOutline />
                        {itemCount > 0 && (
                            <span className='absolute -top-1 -right-1 bg-[#D32F2F] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold'>
                                {itemCount}
                            </span>
                        )}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className='text-[35px] flex items-center'>
                        {isOpen ? <IoClose /> : <IoMenu />}
                    </button>
                </div>

                <ul className={`raleway-font flex flex-col lg:flex-row gap-6 lg:gap-12 text-[17px] text-[#212121] bg-[#FFD700] items-center px-10 rounded-[25px] lg:rounded-[35px] absolute lg:static top-[70px] left-6 right-6 z-50 py-8 lg:py-0 lg:h-[40px] transition-all duration-300 ease-in-out shadow-2xl lg:shadow-none ${isOpen ? 'flex opacity-100' : 'hidden lg:flex'}`}>

                    {navLinks.map(({ label, section }) => (
                        <li key={section} onClick={() => scrollTo(section)} className='cursor-pointer border-b lg:border-none border-black/10 w-full text-center lg:w-auto pb-2 lg:pb-0 hover:text-[#D32F2F] transition-colors font-medium'>    {label}</li>
                    ))}

                    {user && (
                        <li onClick={() => { navigate('/orders'); setIsOpen(false) }} className='cursor-pointer border-b lg:border-none border-black/10 w-full text-center lg:w-auto pb-2 lg:pb-0 hover:text-[#D32F2F] transition-colors font-medium'>
                            My orders
                        </li>
                    )}

                    <div className='flex lg:hidden w-full mt-2'>
                        <SearchBar className='w-full' inputClass='w-full' mobile />
                    </div>

                    {!user ? (
                        <button onClick={() => { setShowAuth(true); setIsOpen(false) }} className='lg:hidden w-full bg-[#D32F2F] text-white py-2 rounded-full font-bold raleway-font mt-2'>
                            Login / Register
                        </button>
                    ) : (
                        <div className='lg:hidden flex flex-col gap-2 w-full mt-2'>
                            <button onClick={() => { navigate('/orders'); setIsOpen(false) }} className='w-full bg-black/20 text-[#212121] py-2 rounded-full font-bold raleway-font'>
                                📦 My orders
                            </button>
                            <button onClick={() => { logout(); setIsOpen(false) }} className='w-full bg-[#D32F2F] text-white py-2 rounded-full font-bold raleway-font'>
                                Exit
                            </button>
                        </div>
                    )}
                </ul>

                <div className='hidden lg:flex items-center gap-3'>
                    <SearchBar />

                    <button onClick={() => setShowCart(true)} className='relative text-[#FFD700] text-[30px] hover:text-white transition-colors'>
                        <IoCartOutline />
                        {itemCount > 0 && (
                            <span className='absolute -top-1 -right-1 bg-[#D32F2F] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold'>
                                {itemCount}
                            </span>
                        )}
                    </button>

                    {user ? (
                        <div className='relative group'>
                            <div className='flex items-center gap-2 bg-[#FFD700] h-[40px] px-4 rounded-[35px] cursor-pointer select-none'>
                                <CgProfile className='text-[22px] text-[#212121]' />
                                <span className='text-[#212121] text-[15px] font-semibold raleway-font'>
                                    {user.name.split(' ')[0]}
                                </span>
                            </div>
                            <div className='absolute top-full right-0 mt-2 bg-[#1a0a00] border border-[#FFD700]/20 rounded-2xl p-2 hidden group-hover:block min-w-[160px] shadow-xl'>
                                <button onClick={() => navigate('/orders')} className='block w-full text-left px-4 py-2 text-[#FFD700] hover:bg-[#FFD700]/10 rounded-xl text-sm raleway-font transition-colors'>
                                    📦 My orders
                                </button>
                                <button onClick={logout} className='block w-full text-left px-4 py-2 text-red-400 hover:bg-red-400/10 rounded-xl text-sm raleway-font transition-colors'>
                                    🚪 Exit
                                </button>
                            </div>
                        </div>
                    ) : (
                        <button onClick={() => setShowAuth(true)} className='bg-[#D32F2F] text-white h-[40px] px-5 rounded-[35px] text-[15px] hover:bg-[#9b1c1c] transition-colors raleway-font font-semibold'>
                            Login
                        </button>
                    )}
                </div>
            </header>

            {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
            {showCart && (
                <CartDrawer onClose={() => setShowCart(false)} onAuthRequired={() => setShowAuth(true)} />
            )}
        </>
    )
}

export default Header