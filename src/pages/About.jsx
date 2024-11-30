import React from 'react';
import aboutImg from '../assets/images/mprofile.jpg'

function About() {
    return (
        <div className="h-[85%] w-full bg-slate-100 p-2">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

                {/* Image Section */}
                <div className="relative w-40 md:w-1/3 flex justify-center">
                    <img
                        src={aboutImg}
                        alt="Profile"
                        className="w-80 h-80 object-cover rounded-full relative z-10"
                    />
                </div>

                {/* Text Section */}
                <div className="w-60 md:w-2/3 text-justify md:text-left">
                    <h1 className="text-6xl font-bold font-sans text-gray-900 mb-4">About Me</h1>
                    <div className="flex flex-col p-4 gap-10">
                    <div>
                            <p className="mt-4 text-2xl font-light leading-relaxed text-gray-900">
                                I’m Davida Amponsah Prempeh, a Website developer with a background in Meteorology and Climate Science, where I gained experience in programming languages like Fortran, Python and C.
                        </p>
                    </div>
                    <div>
                            <p className="mt-4 text-2xl font-light leading-relaxed text-gray-900">
                                I completed an intensive web development program with MEST Africa, specializing in backend development with tools like Express.js and MongoDB.
                        </p>
                    </div>
                    <div>
                            <p className="mt-4 text-2xl font-light leading-relaxed text-gray-900">
                                I’m skilled in React, familiar with Next.js, and passionate about building efficient solutions.
                        </p>
                    </div>
               </div>
                </div>

            </div>
        </div>
    );
}

export default About;

