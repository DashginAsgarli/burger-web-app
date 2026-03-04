import React from 'react'
import HomePage from '../components/HomePage'
import DealsSection from '../components/DealsSection'
import MobileApp from '../components/MobileApp'
import LiveKitchen from '../components/LiveKitchen'
import BurgerPatty from '../components/BurgerPatty'

function Hero() {
    return (
        <>
            <HomePage />
            <BurgerPatty />
            <DealsSection />
            <LiveKitchen />
            <MobileApp />
        </>
    )
}

export default Hero
