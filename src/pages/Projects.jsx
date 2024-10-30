import React from 'react';
import prot1 from '../assets/images/hoodles.png';
import prot2 from '../assets/images/restauco.png';
import prot3 from '../assets/images/weather.png';
import prot4 from '../assets/images/chatgpt.png';

const Projects = () => {
  return (
    <div className="flex justify-center items-center min-h-screen h-72 bg-gray-100">
      <div className="relative w-[600px] h-[600px]">
        <img
          src={prot1}
          alt="Project 1"
          className="absolute w-[250px] h-[250px] transform rotate-12 top-0 left-8 shadow-lg"
        />
        <img
          src={prot2}
          alt="Project 2"
          className="absolute w-[250px] h-[250px] transform -rotate-12 top-0 right-8 shadow-lg"
        />
        <img
          src={prot3}
          alt="Project 3"
          className="absolute w-[250px] h-[250px] transform rotate-12 bottom-0 left-8 shadow-lg"
        />
        <img
          src={prot4}
          alt="Project 4"
          className="absolute w-[250px] h-[250px] transform -rotate-12 bottom-0 right-8 shadow-lg"
        />
      </div>
    </div>
  );
};

export default Projects;
