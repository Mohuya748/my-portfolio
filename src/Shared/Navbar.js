import React from 'react';

const Navbar = ({ children }) => {
    return (
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />

            <div class="drawer-content flex flex-col">

                <div class="w-full navbar bg-base-300">
                    <div class="flex-1 px-2 mx-2 text-2xl font-bold">Rukaiya Mohuya Khandaker</div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-none hidden lg:block text-xl mx-20">
                        <ul class="menu menu-horizontal">

                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li> <button class="btn btn-primary rounded"><a
                                href="https://drive.google.com/file/d/1lJQlNyHdav5Qg3lqdunaGJb-oCQT9oGv/view"
                                download

                                target='_blank'
                            >Download Resume </a></button></li>

                        </ul>
                    </div>
                </div>
                {/* page content  */}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">

                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#projecs">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li> <button class="btn btn-primary rounded"><a
                        href="https://drive.google.com/file/d/1lJQlNyHdav5Qg3lqdunaGJb-oCQT9oGv/view"
                        download
                        target='_blank'
                    >Download Resume </a></button></li>

                </ul>

            </div>
        </div>
    );
};

export default Navbar;