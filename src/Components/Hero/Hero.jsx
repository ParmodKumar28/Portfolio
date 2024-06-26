import "./Hero.css"
import AnchorLink from "react-anchor-link-smooth-scroll"
import resume from "../../assets/my_resume.pdf"
import profile from "../../assets/profile.jpg"

// Hero component containing about me and my photo
const Hero = () => {
    // Returing JSX
    return (
        // Hero container
        <div id='home' className='hero'>
            {/* My photo */}
            <img src={profile} alt="" />

            {/* About me */}
            <h1><span>I'm Parmod Kumar,</span> Full stack developer based in INDIA.</h1>
            <p>Hey there, I’m Parmod Yadav, a tech enthusiast with an insatiable hunger for knowledge and an unyielding passion for all things automobiles. </p>

            {/* Connect and resume button container */}
            <div className="hero-action">

                {/* Connect with me button */}
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink>
                </div>

                {/* Resume button */}
                <div className="hero-resume">
                    <a href={resume} target="_blank" rel="noopener noreferrer">My resume</a> {/* Link to your resume pdf file */}
                </div>
            </div>
        </div>
    )
}

// Exporting Hero
export default Hero
