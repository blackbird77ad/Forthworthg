import React from 'react';
import aboutImg from '../assets/images/crop.jpg'

function About() {
    return (
        <div className="h-[76vh] bg-slate-100 p-8 ">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

                {/* Image Section */}
                <div className="relative w-full md:w-1/3 flex justify-center">
                    <div className="bg-black w-48 h-48 absolute"></div>
                    <img
                        src={aboutImg}
                        alt="Profile"
                        className="w-48 h-48 object-cover rounded-full relative z-10"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full md:w-2/3 text-center md:text-left">
                    <h1 className="text-6xl font-bold font-sans text-gray-900 mb-4">About Me</h1>
                    
                

                    <div className="flex flex-col p-4 gap-10">
                    <div>
                            <p className="mt-4 text-2xl font-light leading-relaxed text-gray-900">
                            I'm Davida Amponsah Prempeh, a software developer passionate about creating dynamic and responsive web applications. Skilled in HTML, CSS, JavaScript, and frameworks like React and Express.
                        </p>
                    </div>

                    <div>
                            <p className="mt-4 text-2xl font-light leading-relaxed text-gray-900">
                                I'm a dedicated backend developer specializing in building efficient, scalable server-side applications. With extensive experience in Express.js and MongoDB, I’m passionate about crafting robust APIs and data-driven solutions that power seamless user experiences. My expertise lies in designing secure, performant backends that integrate smoothly with frontend applications and support complex workflows.
                        </p>
                    </div>
                    <div>
                            <p className="mt-4 text-2xl font-light leading-relaxed text-gray-900">
                                 I’m always eager to dive into new technologies, refine my skills, and tackle challenging problems with innovative solutions. Let’s connect and explore how technology can transform ideas into impactful applications!
                        </p>
                    </div>
               </div>
                </div>

            </div>
        </div>
    );
}

export default About;

