import React from 'react';
import Header from './Header';
import Skills from './Skills';
import Projects from './Projects';
import Testimonials from './Testimonials';

const Landing = () => {
    return(
        <div>
            <Skills />
            <Projects />
            <Testimonials />
        </div>  
    )
}

export default Landing;