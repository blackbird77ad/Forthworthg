import React from 'react';

const Skills = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[75%] bg-gray-100 p-10">
            <div className="space-y-12 max-w-6xl text-center">

                {/* Frontend Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">Frontend Development</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="skill-card w-48">
                            <div className="rounded-full bg-gray-800 text-white w-24 h-24 mx-auto flex items-center justify-center shadow-lg mb-4">
                                <span className="text-1xl">HTML</span>
                            </div>
                            {/* <h3 className="text-lg font-semibold">HTML</h3> */}
                        </div>
                        <div className="skill-card w-48">
                            <div className="rounded-full bg-gray-800 text-white w-24 h-24 mx-auto flex items-center justify-center shadow-lg mb-4">
                                <span className="text-1xl">CSS</span>
                            </div>
                            {/* <h3 className="text-lg font-semibold">HTML</h3> */}
                        </div>
                        <div className="skill-card w-48">
                            <div className="rounded-full bg-gray-800 text-white w-24 h-24 mx-auto flex items-center justify-center shadow-lg mb-4">
                                <span className="text-1xl">Tailwind</span>
                            </div>
                            {/* <h3 className="text-lg font-semibold">HTML</h3> */}
                        </div>

                        <div className="skill-card w-48">
                            <div className="rounded-full bg-gray-800 text-white w-24 h-24 mx-auto flex items-center justify-center shadow-lg mb-4">
                                <span className="text-1xl">React</span>
                            </div>
                        </div>

                        <div className="skill-card w-48">
                            <div className="rounded-full bg-gray-800 text-white w-24 h-24 mx-auto flex items-center justify-center shadow-lg mb-4">
                                <span className="text-1xl">JavaScript</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Backend Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">Backend Development</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="skill-card w-48">
                            <div className="rounded-full bg-gray-800 text-white w-24 h-24 mx-auto flex items-center justify-center shadow-lg mb-4">
                                <span className="text-1xl">Node</span>
                            </div>
                        </div>
                        <div className="skill-card w-48">
                            <div className="rounded-full bg-gray-800 text-white w-24 h-24 mx-auto flex items-center justify-center shadow-lg mb-4">
                                <span className="text-1xl">Express</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Database Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">Database Management</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="skill-card w-48">
                            <div className="rounded-full bg-gray-800 text-white w-24 h-24 mx-auto flex items-center justify-center shadow-lg mb-4">
                                <span className="text-1xl">MongoDB</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;
