import React from "react"
import './Home.css'
import homeImg from '../assets/images/crop.jpg'


function Home() {
    const name = 'Davida Amponsah Prempeh'
    return (
        <>
            <div className="divs-bg">
                <div className="hero-parent">
                    <div className="left-div">
                        <p className="cursor typewriter-animation">Hi there, I'm {name}</p>
                    </div>
                    
                    <div className="right-div">
                        <div className="blob">
                            <img src={homeImg} alt="my profile" className="blob-image" />
                        </div>
                        <button>HIRE ME</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home
