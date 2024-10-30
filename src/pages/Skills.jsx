import React from 'react';

const Skills = () => {
    return (
        <div className="skills-page flex flex-col justify-center items-center min-h-screen bg-gray-100 p-8">
            <div className="space-y-12 max-w-6xl text-center">

                {/* Programming Languages Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">Programming Languages</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="skill-card w-48">
                            <div className="rounded-full bg-gray-800 text-white w-24 h-24 mx-auto flex items-center justify-center shadow-lg mb-4">
                                <span className="text-2xl">&lt;HTML/&gt;</span>
                            </div>
                            <h3 className="text-lg font-semibold">HTML</h3>
                            <p className="text-sm text-gray-600">The backbone of every website on the world wide web.</p>
                        </div>

                        <div className="skill-card w-48">
                            <div className="rounded-full bg-gray-800 text-white w-24 h-24 mx-auto flex items-center justify-center shadow-lg mb-4">
                                <span className="text-2xl">.CSS()</span>
                            </div>
                            <h3 className="text-lg font-semibold">CSS</h3>
                            <p className="text-sm text-gray-600">Without CSS, the web would be a very ugly place.</p>
                        </div>

                        <div className="skill-card w-48">
                            <div className="rounded-full bg-gray-800 text-white w-24 h-24 mx-auto flex items-center justify-center shadow-lg mb-4">
                                <span className="text-2xl">JavaScript</span>
                            </div>
                            <h3 className="text-lg font-semibold">JavaScript</h3>
                            <p className="text-sm text-gray-600">Complex code to create immersive and rich experiences.</p>
                        </div>
                    </div>
                </div>

                {/* Frameworks Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">Frameworks</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="skill-card w-48">
                            <div className="rounded-full bg-gray-800 text-white w-24 h-24 mx-auto flex items-center justify-center shadow-lg mb-4">
                                <span className="text-2xl">&lt;React&gt;</span>
                            </div>
                            <h3 className="text-lg font-semibold">React</h3>
                            <p className="text-sm text-gray-600">For creating dynamic and easy-to-update websites.</p>
                        </div>

                        <div className="skill-card w-48">
                            <div className="rounded-full bg-gray-800 text-white w-24 h-24 mx-auto flex items-center justify-center shadow-lg mb-4">
                                <span className="text-2xl">&lt;Express&gt;</span>
                            </div>
                            <h3 className="text-lg font-semibold">Express</h3>
                            <p className="text-sm text-gray-600">For building robust server-side applications.</p>
                        </div>
                    </div>
                </div>

                {/* Database Section */}
                <div>
                    <h2 className="text-2xl font-bold mb-6">Database</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="skill-card w-48">
                            <div className="rounded-full bg-gray-800 text-white w-24 h-24 mx-auto flex items-center justify-center shadow-lg mb-4">
                                <span className="text-2xl">&lt;MongoDB&gt;</span>
                            </div>
                            <h3 className="text-lg font-semibold">MongoDB</h3>
                            <p className="text-sm text-gray-600">A NoSQL database for dynamic and scalable applications.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;
