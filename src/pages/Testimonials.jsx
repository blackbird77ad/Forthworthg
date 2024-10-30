import React from 'react';

const Testimonials = () => {
    return (
        <div className="flex justify-center items-center min-h-[79vh] bg-gray-100 p-8">
            <div className="max-w-6xl text-center">
                <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {/* Testimonial Card 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-700 mb-4">
                            "Working with this team was a fantastic experience. They delivered exactly what I needed and exceeded my expectations. Highly recommend!"
                        </p>
                        <h3 className="text-lg font-semibold text-blue-800">John Doe</h3>
                        <p className="text-sm text-gray-500">CEO, Example Corp</p>
                    </div>

                    {/* Testimonial Card 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-700 mb-4">
                            "Their attention to detail and commitment to quality is unmatched. I'm thoroughly impressed with the final product."
                        </p>
                        <h3 className="text-lg font-semibold text-blue-800">Jane Smith</h3>
                        <p className="text-sm text-gray-500">CTO, Tech Solutions</p>
                    </div>

                    {/* Testimonial Card 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-700 mb-4">
                            "A team that truly cares about their clients and goes the extra mile to ensure satisfaction. Would definitely work with them again."
                        </p>
                        <h3 className="text-lg font-semibold text-blue-800">Michael Lee</h3>
                        <p className="text-sm text-gray-500">Manager, Business Co.</p>
                    </div>

                    {/* Additional Testimonial Cards */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <p className="text-gray-700 mb-4">
                            "They transformed my vision into reality with precision and creativity. A highly skilled team that I can trust."
                        </p>
                        <h3 className="text-lg font-semibold text-blue-800">Emily Davis</h3>
                        <p className="text-sm text-gray-500">Designer, Creative Works</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-lg">
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
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonials;
