import React from 'react';
import Typewriter from 'typewriter-effect';
import './Typewriter.css'

const Mytypewriter = () => {
    return (
        <div>
            <Typewriter
                // className="text-5xl font-bold font-mono text-accent"
                options={{
                    autoStart: true,
                    loop: true,
                }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Welcome!!")
                        .pauseFor(2000)
                        .deleteAll()
                        .start();
                }

                }></Typewriter>
        </div>
    );
};

export default Mytypewriter;