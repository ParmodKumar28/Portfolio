import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile_img.svg"

const Hero = () => {
    return (
        <div className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Parmod Kumar,</span> Full stack developer based in INDIA.</h1>
            <p>Hey there, I’m Parmod Yadav, a tech enthusiast with an insatiable hunger for knowledge and an unyielding passion for all things automobiles. </p>
            <div className="hero-action">
                <div className="hero-connect">
                    Connect with me
                </div>
                <div className="hero-resume">
                    My resume
                </div>
            </div>
        </div>
    )
}

export default Hero