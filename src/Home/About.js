import React from 'react';
import mohu from '../images/mohu.png'

const About = () => {
    return (
        <div id='about' class="hero min-h-screen bg-base-200 container">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={mohu} class=" max-w-sm rounded-lg shadow-2xl" />
                <div className='p-20'>
                    <h1 class="text-5xl font-bold font-mono">Rukaiya Mohuya Khandaker</h1>
                    <p class="py-6 font-mono">This is Rukaiya Mohuya Khandaker. I am a Front End developer building websites and web applications. I specialize in JavaScript and React JS. I am passionate about exploring and learning new things.</p>
                    <button class="btn btn-primary"><a
                            href="https://drive.google.com/file/d/1lJQlNyHdav5Qg3lqdunaGJb-oCQT9oGv/view"
                            download
                            target='_blank'
                        >Download Resume </a></button>
                </div>
            </div>
        </div>
    );
};

export default About;