import React from 'react';
import project1 from '../images/project1.PNG'
import project2 from '../images/project2.PNG'
import project3 from '../images/project3.PNG'

const Projects = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-primary text-5xl font-mono font-bold '>My Projects</h2>
            <div className='m-10 grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4'>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project1} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Shoes!
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Fashion</div>
                            <div class="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project2} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Shoes!
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Fashion</div>
                            <div class="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={project3} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Shoes!
                            <div class="badge badge-secondary">NEW</div>
                        </h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div class="card-actions justify-end">
                            <div class="badge badge-outline">Fashion</div>
                            <div class="badge badge-outline">Products</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;