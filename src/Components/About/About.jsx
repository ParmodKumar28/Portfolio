import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import cover_photo from "../../assets/cover_photo.jpg"
import { FaHtml5 } from "react-icons/fa";

// About component containing about detail's
const About = () => {
    // Returning Jsx
    return (
        // About container
        <div id="about" className="about">

            {/* About title */}
            <div className="about-title">
                {/* Heading */}
                <h1>About me</h1>
                {/* Image */}
                <img src={theme_pattern} alt="" />
            </div>

            {/* About section's */}
            <div className="about-sections">

                {/* About section left */}
                <div className="about-left">
                    {/* Profile image */}
                    <img src={cover_photo} alt="" />
                </div>

                {/* About section right */}
                <div className="about-right">
                    {/* About para */}
                    <div className="about-para">
                        <p>I’m Parmod Yadav, an MCA graduate, passionate MERN stack developer, and automobile enthusiast. I love building sleek, functional web apps and exploring the world of bikes and cars.</p>
                        <p> When I’m not coding, you’ll find me reviewing automobiles on my YouTube channel, sharing my love for speed, design, and engineering with fellow enthusiasts.</p>
                        <p> Tech fuels my career, but automobiles drive my soul.</p>
                    </div>

                    {/* About skills */}
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p> <hr style={{ width: '100%' }} /></div>
                        <div className="about-skill"><p>React JS</p> <hr style={{ width: '90%' }} /></div>
                        <div className="about-skill"><p>Javascript</p> <hr style={{ width: '95%' }} /></div>
                        <div className="about-skill"><p>Node JS</p> <hr style={{ width: '100%' }} /></div>
                        <div className="about-skill"><p>Express JS</p> <hr style={{ width: '100%' }} /></div>
                        <div className="about-skill"><p>Mongodb</p> <hr style={{ width: '80%' }} /></div>
                        <div className="about-skill"><p>Mongoose</p> <hr style={{ width: '90%' }} /></div>
                        <div className="about-skill"><p>Java</p> <hr style={{ width: '95%' }} /></div>
                        <div className="about-skill"><p>DSA</p> <hr style={{ width: '90%' }} /></div>
                        <div className="about-skill"><p>Bootstrap</p> <hr style={{ width: '100%' }} /></div>
                        <div className="about-skill"><p>Tailwind</p> <hr style={{ width: '86%' }} /></div>
                        <div className="about-skill"><p>Photoshop</p> <hr style={{ width: '90%' }} /></div>
                        <div className="about-skill"><p>Premiere</p> <hr style={{ width: '88%' }} /></div>
                    </div>



                    {/* Achievement's */}
                    <div className="about-achievements">

                        {/* Achievement */}
                        <div className="about-achievement">
                            <h1>1+</h1>
                            <p>YEARS  <br /> EXPERIENCE <br /> </p>
                        </div>
                        <hr />

                        {/* Achievement */}
                        <div className="about-achievement">
                            <h1>10+</h1>
                            <p>PROJECTS <br /> COMPLETED</p>
                        </div>
                        <hr />

                        {/* Achievement */}
                        <div className="about-achievement">
                            <h1>100%</h1>
                            <p>EXCELLENCE <br /> CERTIFIED</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

// Exporting About
export default About