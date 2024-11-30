import React from 'react';

const Testimonials = () => {
    return (
        <div className="flex justify-center items-center h-[73vh] bg-gray-100 p-8">
            <div className="max-w-6xl text-center">
                <h2 className="text-3xl font-bold mb-10">What My Team Says About Me</h2>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Testimonial Card 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-700 mb-4">
                            "Working with this Davida was a fantastic experience. She delivered exactly what I needed and exceeded my expectations. Highly recommend!"
                        </p>
                        <h3 className="text-lg font-semibold text-blue-800">Etheldrah Akahoho</h3>
                        <p className="text-sm text-gray-500">Frontend Developer</p>
                    </div>

                    {/* Testimonial Card 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-700 mb-4">
                            "Her attention to detail and commitment to quality is unmatched. I'm thoroughly impressed with the final product."
                        </p>
                        <h3 className="text-lg font-semibold text-blue-800">Delanyo Jacob</h3>
                        <p className="text-sm text-gray-500">Backend Developer</p>
                    </div>

                    {/* Testimonial Card 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-700 mb-4">
                            "Miss Davida truly cares about our clients and goes the extra mile to ensure satisfaction. Would definitely work with her again."
                        </p>
                        <h3 className="text-lg font-semibold text-blue-800">Anna Takyiwaa</h3>
                        <p className="text-sm text-gray-500">UI designer</p>
                    </div>

                    {/* Additional Testimonial Cards */}
                    {/* <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-700 mb-4">
                            "They transformed my vision into reality with precision and creativity. A highly skilled team that I can trust."
                        </p>
                        <h3 className="text-lg font-semibold text-blue-800">Emily Davis</h3>
                        <p className="text-sm text-gray-500">Designer, Creative Works</p>
                    </div> */}

                    {/* <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-700 mb-4">
                            "Efficient, professional, and results-driven. They are true experts in their field, and I am thrilled with the results."
                        </p>
                        <h3 className="text-lg font-semibold text-blue-800">Chris Brown</h3>
                        <p className="text-sm text-gray-500">Freelancer</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-700 mb-4">
                            "Outstanding service and top-notch quality! They took care of every detail, making the process stress-free for me."
                        </p>
                        <h3 className="text-lg font-semibold text-blue-800">Sara Wilson</h3>
                        <p className="text-sm text-gray-500">Project Lead, Innovate Inc.</p>
                    </div> */}

                </div>
            </div>
        </div>
    );
};

export default Testimonials;
