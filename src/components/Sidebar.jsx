import React from 'react';
import { FaEnvelope, FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 h-[88.5vh] w-48 bg-slate-200 text-white shadow-lg p-4">
            <button onClick={toggleSidebar} className="text-black">
                ✖
            </button>

           <div className='py-20'>
                {/* Downloads Section */}
                <div className="mt-8 text-black">
                    <h3 className="text-lg font-extrabold mb-2">Download Docs:</h3>
                    <div className="flex flex-col space-y-2">
                        <a
                            href="https://savefiles.org/drive/s/b8LyoceWCPYC1NWQVjAOUu4dyzKvDf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm"
                        >
                            Resume
                        </a>
                        <a
                            href="https://savefiles.org/drive/s/nARuZ8NCzYx9AnScTtV7soi6m4CBGe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-sm"
                        >
                            Cover Letter
                        </a>
                    </div>
                </div>

                {/* Contact Section */}
                <div className="mt-8 text-black">
                    <h3 className="text-lg font-extrabold mb-2">Contact Me:</h3>
                    <a
                        href="mailto:byourself77by@gmail.com"
                        className="flex items-center space-x-2 text-blue-600 hover:underline"
                    >
                        <FaEnvelope /> <span>Email</span>
                    </a>
                    <a
                        href="https://wa.me/233558060103"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-blue-600 hover:underline"
                    >
                        <FaWhatsapp /> <span>WhatsApp</span>
                    </a>
                </div>

                {/* Social Media Links */}
                <div className="mt-8 text-black">
                    <h3 className="text-lg font-extrabold mb-2">Follow Me:</h3>
                    <div className="flex space-x-3">
                        <a href="https://github.com/blackbird77ad" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-2xl text-blue-600 hover:text-gray-800" />
                        </a>
                        <a href="https://linkedin.com/in/ydavidaaprempeh" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-2xl text-blue-600 hover:text-gray-800" />
                        </a>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Sidebar;
