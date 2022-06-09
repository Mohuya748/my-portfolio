import React from 'react';

const Services = () => {
    return (
        <div className='container my-20' id="services">
            <h2 className='text-center text-primary text-5xl font-mono font-bold '>My Services</h2>
            <div className='m-10 grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?size=626&ext=jpg&ga=GA1.2.77004565.1641239679" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                         Plain HTML CSS Website
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>Can make pixel perfect fullly responsive websites with HTML & CSS.</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">HTML</div>
                            <div class="badge badge-outline">CSS</div>
                            <div class="badge badge-outline">Javascript</div>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-vector/javascript-frameworks-concept-illustration_114360-4699.jpg?size=626&ext=jpg&ga=GA1.2.77004565.1641239679" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            SPA with REACT
                        </h2>
                        <p>I can Develeop fast and fully responsive single page react web apps with routing authentication etc.</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Javascript</div>
                            <div class="badge badge-outline">REACT</div>
                            <div class="badge badge-outline">Firebase</div>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://img.freepik.com/free-vector/website-development-web-page-programming-coding_277904-5103.jpg?size=626&ext=jpg&ga=GA1.2.77004565.1641239679" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                          MERN Stack Web app
                        </h2>
                        <p>I can develop a full stack web app using MongoDB,Express, React and NodeJS with authorization features like JWT,admin role, payment system etc.</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">MongoDB</div>
                            <div class="badge badge-outline">Express</div>
                            <div class="badge badge-outline">REACT</div>
                            <div class="badge badge-outline">Node</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;