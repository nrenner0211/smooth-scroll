import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import {
    homeObj1,
    homeObj2,
    homeObj3
} from '../components/InfoSection/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <HeroSection/>
        <InfoSection {...homeObj1}/>
        <InfoSection {...homeObj2}/>
        <Services/>
        <InfoSection {...homeObj3}/>
        <Footer/>
        </>
    )
}

export default Home