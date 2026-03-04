import React from 'react'
import HomePage from '../components/HomePage'
import DealsSection from '../components/DealsSection'
import MobileApp from '../components/MobileApp'
import LiveKitchen from '../components/LiveKitchen'

function Hero() {
    return (
        <>
            <HomePage />
            <DealsSection />

            <LiveKitchen />
            <MobileApp />
        </>
    )
}

export default Hero
