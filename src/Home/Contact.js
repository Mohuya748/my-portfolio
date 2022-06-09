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
        e.target.reset();
    };
    return (
        <div className='my-20' id="contact">
          <div className='text-center m-10'>
          <h2 className='text-5xl font-mono text-primary  font-bold '>Contact</h2>
            <h3 className='text-2xl text-accent font-mono font-bold'>For any queries contact me!</h3>
          </div>

            <form ref={form} onSubmit={sendEmail} className='text-center'>
                <input type="text" name="name" placeholder="Name" class="input input-bordered m-5 input-primary w-full max-w-xs" />
                <br></br>
                <input type="email" name="email" placeholder="Email" class="input input-bordered m-5 input-primary w-full max-w-xs" />
                <br></br>
                <textarea class="textarea textarea-bordered m-5 textarea-primary  w-1/3" name="message" placeholder="Message" ></textarea>
                <br></br>
                <input value="Send" type="submit" class="input input-bordered input-primary w-full m-5 max-w-xs" />
            </form>
        </div>
    );
};

export default Contact;