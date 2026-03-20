import React from 'react'
import HomePage from '../components/HomePage'
import DealsSection from '../components/DealsSection'
import MobileApp from '../components/MobileApp'
import LiveKitchen from '../components/LiveKitchen'
import BurgerPatty from '../components/BurgerPatty'

function Hero() {
    return (
        <>
            <div id="home"><HomePage /></div>
            <div id="burgers"><BurgerPatty /></div>
            <div id="deals"><DealsSection /></div>
            <div id="live"><LiveKitchen /></div>
            <div id="app"><MobileApp /></div>
        </>
    )
}

export default Hero
