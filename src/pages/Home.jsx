import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from "../assets/images/mprofile.jpg"; 
const Homepage = () => {
    return (
        <div className="h-[77vh] flex flex-col items-center bg-slate-100 text-gray-800 px-4">

            {/* Hero Section */}
            <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left w-full max-w-5xl mt-10">
                <div className="flex flex-col items-start space-y-4 md:w-1/2">
                    <p className="text-gray-500">Explore my backend development skills</p>
                    <h1 className="text-5xl font-bold text-blue-700 leading-tight">
                        Backend Web Developer
                    </h1>
                    <p className="text-gray-600">
                        I specialize in building scalable, efficient server-side applications and APIs, with expertise in modern web technologies like Node.js, Express, and MongoDB.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <Link to='/projects'>
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                                View Projects
                            </button>
                        </Link>

                        {/* linked to my contact form */}
                        <Link to='/contact'>
                            <button className="text-blue-600 hover:underline">
                                Contact Me
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Image and Highlight Section */}
                <div className="relative md:w-1/2 mt-8 md:mt-0 flex items-center justify-center">
                    <img
                        src={profilePic}   
                        alt="Profile"
                        className="w-48 h-80 rounded-md object-contain" 
                    />
                    {/* <div className="absolute top-0 right-0 bg-blue-600 text-white rounded-full p-2 transform translate-x-8 -translate-y-8">
                        <span className="text-xl font-bold">3Months</span>
                        <p className="text-sm">Experience</p>
                    </div> */}
                </div>
            </section>

            {/* Stats Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mt-12 text-center">
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h3 className="text-2xl font-bold text-blue-700">20+ Projects</h3>
                    <p className="text-gray-500">Completed web applications</p>
                </div>
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h3 className="text-xl font-bold text-gray-700">API Development</h3>
                    <p className="text-gray-500">Efficient and secure API design</p>
                </div>
                <div className="bg-white p-6 shadow-lg rounded-lg">
                    <h3 className="text-xl font-bold text-gray-700">Database Management</h3>
                    <p className="text-gray-500">Experience with MongoDB and SQL</p>
                </div>
            </section>
        </div>
    );
};

export default Homepage;
