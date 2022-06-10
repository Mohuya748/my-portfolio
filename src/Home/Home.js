import React from 'react';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Services from './Services';
import './Home.css';
import Icon from './Icon';
import Blogs from './Blogs';

const Home = () => {
    return (
        <div id='home'>
            <About className='smooth'></About>
            <Icon></Icon>
            <Services className='smooth'></Services>
            <Projects className='smooth'></Projects>
            <Blogs></Blogs>
            <Contact className='smooth'></Contact>
        </div>
    );
};

export default Home;