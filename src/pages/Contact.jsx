import React from 'react';

const Contact = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
                <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Contact Us</h2>

                <form className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Name"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    {/* Subject Field */}
                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Subject"
                            required
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Your Message"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full bg-blue-800 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
