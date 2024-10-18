import React from 'react'
import './Services.css'

const Service = () => {
  return (
      <>
          <div className='stack-page'>
              <h3 className='titlestack'>Tech Stack and Expertise</h3>

              <div className='stack-cards'>

                  <div className='card'>
                      <div className='card-img'> img tag</div>
                      <div className='card-text'>
                          <h3>Frontend Services:</h3>
                          <ul>
                              <li><span className='bullet-color'>★</span> Responsive Web Design & Development</li>
                              <li><span className='bullet-color'>★</span> Single Page Application Development</li>
                          </ul>
                      </div>
                  </div>

                  <div className='card'>
                      <div className='card-img'>img tag </div>
                      <div className='card-text'>
                          <h3>Backend Services:</h3>
                          <ul>
                              <li><span className='bullet-color'>★</span> API Development</li>
                              <li><span className='bullet-color'>★</span> Backend Logic & Server Management</li>
                          </ul>
                      </div>
                  </div>

                  <div className='card'>
                      <div className='card-img'>img tag here</div>
                      <div className='card-text'>
                          <h3>Database Services:</h3>
                          <ul>
                              <li><span className='bullet-color'>★</span> Database Design & Management</li>
                              <li><span className='bullet-color'>★</span> Data Handling & Aggregation</li>
                          </ul>
                      </div>
                  </div>

                  <div className='card'>
                      <div className='card-img'>img tag</div>
                      <div className='card-text'>
                          <h3>Project Management Services:</h3>
                          <ul>
                              <li><span className='bullet-color'>★</span> Agile Project Management</li>
                              <li><span className='bullet-color'>★</span> Version Control & Collaboration</li>
                          </ul>
                      </div>
                  </div>
              </div>

          </div>
      </>
  )
}

export default Service
