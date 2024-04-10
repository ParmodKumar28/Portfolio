import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_img from "../../assets/profile_img.svg"

const About = () => {
    return (
        // About container
        <div className="about">
            {/* About title */}
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>

            {/* About section's */}
            <div className="about-sections">

                {/* About section left */}
                <div className="about-left">
                    {/* Profile image */}
                    <img src={profile_img} alt="" />
                </div>

                {/* About section right */}
                <div className="about-right">
                    {/* About para */}
                    <div className="about-para">
                        <p>Hey there, I’m Parmod Yadav, a tech enthusiast with an insatiable hunger for knowledge and an unyielding passion for all things automobiles. As an MCA graduate and aspiring MERN stack web developer, I’m constantly honing my skills to conquer the ever-evolving world of technology. But my heart truly races when it comes to bikes and cars. </p>
                        <p> The raw power, the elegant designs, the thrilling rides – they captivate my soul and ignite my imagination.</p>
                    </div>

                    {/* About skills */}
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width: '50%' }} /></div>
                        <div className="about-skill"><p>React JS</p> <hr style={{ width: '70%' }} /></div>
                        <div className="about-skill"><p>Javascript</p> <hr style={{ width: '60%' }} /></div>
                        <div className="about-skill"><p>Node JS</p> <hr style={{ width: '50%' }} /></div>
                    </div>



                    {/* Achievement's */}
                    <div className="about-achievements">

                        {/* Achievement */}
                        <div className="about-achievement">
                            <h1>10+</h1>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <hr />

                        {/* Achievement */}
                        <div className="about-achievement">
                            <h1>90+</h1>
                            <p>PROJECTS COMPLETED</p>
                        </div>
                        <hr />

                        {/* Achievement */}
                        <div className="about-achievement">
                            <h1>15+</h1>
                            <p>HAPPY CLIENTS</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default About