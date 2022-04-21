import React from 'react';
import Lottie from './HeaderComponents/Lottie';
import About from './HeaderComponents/About';
import Navbar from './HeaderComponents/Navbar';

const Header = () => {
    return(
        <>
            <Lottie />
            <About />
            <Navbar />
        </>
    )
}

export default Header;