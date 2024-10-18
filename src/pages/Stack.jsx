import React, { useState, useEffect } from 'react';
import './Stack.css';

import htmlIcon from '../assets/images/icons8-html-100.png';
import jsIcon from '../assets/images/icons8-javascript-100.png';
import reactIcon from '../assets/images/icons8-react-js-100.png';
import expJsIcon from '../assets/images/expjs.png';
import fortranIcon from '../assets/images/fortran.png';

const images = [
  { src: htmlIcon, title: 'HTML', name: 'HTML', description: 'Web Developer' },
  { src: jsIcon, title: 'JavaScript', name: 'JavaScript', description: 'Front-End Developer' },
  { src: reactIcon, title: 'React JS', name: 'React', description: 'UI Engineer' },
  { src: expJsIcon, title: 'Express JS', name: 'Express', description: 'Backend Engineer' },
  { src: fortranIcon, title: 'Fortran', name: 'Fortran', description: 'Scientist' }
];

const Stack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='slider-container'>
      <div className='slide' style={{ transform: `translateX(${-currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div className='card' key={index}>
            <img src={image.src} alt={image.title} />
            <div className='container'>
              <h4><b>{image.name}</b></h4>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
