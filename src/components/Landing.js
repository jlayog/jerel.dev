import React from 'react';
import Header from './Header';
import Skills from './Skills';
import ProjectCard from './ProjectCard';
import Testimonials from './Testimonials';

const Landing = () => {
    return(
        <div>
            <Skills />
            <ProjectCard />
            <Testimonials />
        </div>  
    )
}

export default Landing;