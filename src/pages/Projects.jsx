import React from 'react'
import prot1 from '../assets/images/hoodles.png'
import prot2 from '../assets/images/restauco.png'
import prot3 from '../assets/images/weather.png'
import prot4 from '../assets/images/chatgpt.png'
import '../pages/Projects.css'

const projects = () => {
  return (
    <div className='project-pg'>
      <div className='project-div'>
        <img src={prot1} alt="Project" width="400px" height="250px"/> 
        <img src={prot2} alt="Project2" width="400px" height="250px" />
      </div>
      
      <div className='project-div2'>
        <img src={prot3} alt="Project3" width="400px" height="250px" />
        <img src={prot4} alt="Project4" width="400px" height="250px" />
      </div>
    </div>
  )
}

export default projects
