import "./Hero.css"
import AnchorLink from "react-anchor-link-smooth-scroll"
import resume from "../../assets/my_resume.pdf"
import profile_img from "../../assets/profile_img.jpg"

const Hero = () => {
    return (
        <div id='home' className='hero'>
            <img src={profile_img} alt="" />
            <h1><span>I'm Parmod Kumar,</span> Full stack developer based in INDIA.</h1>
            <p>Hey there, I’m Parmod Yadav, a tech enthusiast with an insatiable hunger for knowledge and an unyielding passion for all things automobiles. </p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink>
                </div>
                <div className="hero-resume">
                    <a href={resume} target="_blank" rel="noopener noreferrer">My resume</a> {/* Link to your resume pdf file */}
                </div>
            </div>
        </div>
    )
}

export default Hero
