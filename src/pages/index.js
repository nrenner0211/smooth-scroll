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
        <InfoSection {...homeObj3}/>
        </>
    )
}

export default Home