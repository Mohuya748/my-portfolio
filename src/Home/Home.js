import React from 'react';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Services from './Services';

const Home = () => {
    return (
        <div id='home'>
            <About></About>
            <Services></Services>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;