import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ti2pdnj', 'template_jw4nvlt', form.current, 'mX3YG9W-rGu1QoIdc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert("your email has been sent");
        e.target.reset();
    };
    return (
        <div className='my-20' id="contact">
            <h2 className='text-5xl font-mono text-primary text-center font-bold '>Contact</h2>
            <div class="hero min-h-screen">

                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left">
                        <h1 class="text-5xl font-bold m-10 ">Get In Touch!</h1>
                        <a href="https://www.facebook.com/mohuyakhandaker" target="_blank"><i class="fa-brands fa-facebook-square text-5xl m-10 text-accent"></i></a>
                        <a href="https://github.com/Mohuya748" target="_blank"><i class="fa-brands fa-github  text-5xl m-10 text-accent"></i></a>
                        <a href="https://www.linkedin.com/in/mohuya-khandaker/" target="_blank"><i class="fa-brands fa-linkedin  text-5xl m-10 text-accent"></i></a>

                        <p class="py-6"></p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div className='text-center m-10'>

                                <h3 className='text-2xl text-accent font-mono font-bold'>For any queries contact me!</h3>
                            </div>
                            <form ref={form} onSubmit={sendEmail} className='text-center'>

                                <input type="text" name="name" placeholder="Name" class="input input-bordered m-5 input-primary w-full max-w-xs" required />
                                <br></br>
                                <input type="email" name="email" placeholder="Email" class="input input-bordered m-5 input-primary w-full max-w-xs" required />
                                <br></br>
                                <textarea class="textarea textarea-bordered m-5 textarea-primary  w-full" name="message" placeholder="Message" required></textarea>
                                <br></br>
                                <input value="Send" type="submit" class="input input-bordered input-primary w-full m-5 max-w-xs" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;