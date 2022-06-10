import React from 'react';
import project1 from '../images/project1.PNG'
import project2 from '../images/project2.PNG'
import project3 from '../images/project3.PNG'

const Projects = () => {
    return (
        <div className='container' id="projects">
            <h2 className='text-center text-primary text-5xl font-mono font-bold '>My Projects</h2>

            {/* project 1  */}
            <div className='m-10 grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            MK Garments Machine Parts

                        </h2>
                        <div class="badge badge-outline">Manufacturing company website</div>
                        <p>A full-stack single-page responsive website. Users can order
                            tools and give a review shown on the home page. Admin can add/Delete
                            service, make another admin and manage orders.</p>
                        {/* <!-- The button to open modal --> */}
                        <label for="my-modal-1" class="btn modal-button btn-primary">VIEW DETAILS</label>

                        {/* <!-- Put this part before </body> tag --> */}
                        <input type="checkbox" id="my-modal-1" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box relative">
                                <label for="my-modal-1" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 class="text-lg font-bold">MK Garments Machine Parts</h3>
                                <p class="py-10">
                                    ■ Overview: A full-stack single-page responsive website. Users can order
                                    tools and give a review shown on the home page. Admin can add/Delete
                                    service, make another admin and manage orders.</p>
                                <p class="py-10">
                                    ■ Features: Login/Register System With Google, Login/Register System
                                    With Email and Password, Private Route, Manage Order Status, Make
                                    user admin</p>
                                <p class="py-10">
                                    ■ Languages/Frameworks Used: React JS, Node JS, Tailwind, DaisyUI
                                    Express, MongoDB, Heroku, Firebase</p>
                                <div class="card-actions justify-end">
                                    <div class="badge badge-outline badge-primary"><a
                                        href="https://parts-manufacturing.web.app/"
                                        target='_blank'
                                    >Live Site</a></div>
                                    <div class="badge badge-outline badge-primary">
                                        <a
                                            href="https://github.com/Mohuya748/MK-manufacturer-client"
                                            target='_blank'
                                        >Client Code</a></div>
                                    <div class="badge badge-outline badge-primary">
                                        <a
                                            href="https://github.com/Mohuya748/MK-manufacturer-server"
                                            target='_blank'
                                        >Server Code</a></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                {/* project 2 */}
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Cost Calculation

                        </h2>
                        <div class="badge badge-outline">Calculating expenses website</div>
                        <p>A single-page responsive website. Users can keep a track of their expenses with this website. </p>


                        {/* <!-- The button to open modal --> */}
                        <label for="my-modal-3" class="btn modal-button btn-primary">VIEW DETAILS</label>

                        {/* <!-- Put this part before </body> tag --> */}
                        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box relative">
                                <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 class="text-lg font-bold">Cost Calculation</h3>
                                <p class="py-10">
                                    ■ Overview: A full-stack single-page responsive website. Users can order
                                    tools and give a review shown on the home page. Admin can add/Delete
                                    service, make another admin and manage orders.</p>
                                <p class="py-10">
                                    ■ Features: Login/Register System With Google, Login/Register System
                                    With Email and Password, Private Route, Manage Order Status, Make
                                    user admin</p>
                                <div class="card-actions justify-end">
                                    <div class="badge badge-outline badge-primary"><a
                                        href="https://cost-calculation.netlify.app/"
                                        target='_blank'
                                    >Live Site</a></div>
                                    <div class="badge badge-outline badge-primary">
                                        <a
                                            href="https://github.com/Mohuya748/cost-calculation"
                                            target='_blank'
                                        >Client Code</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* // project 3 */}
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Mohu’s Photography

                        </h2>
                        <div class="badge badge-outline">Photography Service website</div>
                        <p>A single-page responsive website. It’s a photography service
                            web app. Users can sign up and book their desired photography service.</p>
                        {/* <!-- The button to open modal --> */}
                        <label for="my-modal-2" class="btn modal-button btn-primary">VIEW DETAILS</label>

                        {/* <!-- Put this part before </body> tag --> */}
                        <input type="checkbox" id="my-modal-2" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box relative">
                                <label for="my-modal-2" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 class="text-lg font-bold">Mohu's Photography</h3>
                                
                                <p class="py-10">
                                    ■ Overview: A single-page responsive website. It’s a photography service
                                    web app. Users can sign up and book their desired photography service.</p>
                                <p class="py-10">
                                    ■ Features: Login/Register System With Google, Login/Register System
                                    With Email and Password, Private Route.</p>
                                <p class="py-10">
                                    ■ Languages/Frameworks Used: React JS, Node JS, Bootstrap, Firebase</p>
                                <div class="card-actions justify-end">
                                    <div class="badge badge-outline badge-primary"><a
                                        href="https://mohu-s-photography.web.app/"
                                        target='_blank'
                                    >Live Site</a></div>
                                    <div class="badge badge-outline badge-primary">
                                        <a
                                            href="https://github.com/Mohuya748/Mohus-Photography"
                                            target='_blank'
                                        >Client Code</a></div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    );
};

export default Projects;