// Education.js
import './Education.css';
import theme_pattern from "../../assets/theme_pattern.svg"

const Education = () => {
    return (
        <div id='education' className="education">
            <div className="education-title">
            <h1>Education & Certifications</h1>
            <img src={theme_pattern} alt="" />
            </div>
            

            <div className="education-section">
                <h2>Education</h2>
                <div className="education-item">
                    <h3>Bachelor of Technology in Computer Science</h3>
                    <p>XYZ University, 2016 - 2020</p>
                </div>
                <div className="education-item">
                    <h3>High School Diploma</h3>
                    <p>ABC High School, 2014 - 2016</p>
                </div>
            </div>

            <div className="certification-section">
                <h2>Certifications</h2>
                <div className="certification-item">
                    <h3>Full Stack Web Development</h3>
                    <p>Coursera, 2021</p>
                </div>
                <div className="certification-item">
                    <h3>Data Structures and Algorithms</h3>
                    <p>Udemy, 2022</p>
                </div>
            </div>
        </div>
    );
}

export default Education;
