import './Education.css';
import theme_pattern from "../../assets/theme_pattern.svg"

// Education component containing detail's of my education and certification's
const Education = () => {
    // Returning JSX
    return (
        // Education container
        <div id='education' className="education">
            {/* Education title container */}
            <div className="education-title">
                {/* Title heading */}
                <h1>Education & Certifications</h1>
                {/* Image */}
                <img src={theme_pattern} alt="" />
            </div>

            {/* Education section */}
            <div className="education-section">
                {/* Heading */}
                <h2>Education</h2>

                {/* Education item */}
                <div className="education-item">
                    <h3>Master's In Computer Application's</h3>
                    <p>Gurugram University, 2021 - 2023</p>
                </div>

                {/* Education item */}
                <div className="education-item">
                    <h3>Bachelor's In Computer Application's</h3>
                    <p>Maharishi Dayanand University, 2018 - 2021</p>
                </div>
            </div>

            {/* Certification section */}
            <div className="certification-section">
                {/* Heading */}
                <h2>Certifications</h2>

                {/* Certification item */}
                <div className="certification-item">
                    <a href="https://ninjasfiles.s3.amazonaws.com/certificate_04a0ce9bce5c876f_e60f98fb73e256987370cfc935a07281.pdf" target="_blank" rel="noopener noreferrer"><h3>Bootcamp | React | Full Stack Development</h3></a>
                    <p>Coding Ninjas, 2024</p>
                </div>

                {/* Certification item */}
                <div className="certification-item">
                    <a href="https://ninjasfiles.s3.amazonaws.com/certificate33464895cf6f017137585135715a422347ff56b.pdf" target="_blank" rel="noopener noreferrer"><h3>Career Camp | Back End | Full Stack Web
                        Development in Node.js
                    </h3></a>
                    <p>Coding Ninjas, 2023</p>
                </div>

                {/* Certification item */}
                <div className="certification-item">
                    <a href="https://ninjasfiles.s3.amazonaws.com/certificate334648619240ea390e340e834ecbca2b93bb4bf.pdf" target="_blank" rel="noopener noreferrer"><h3>Career Camp | Front End | Full Stack Web
                        Development
                    </h3></a>
                    <p>Coding Ninjas, 2023</p>
                </div>

                {/* Certification item */}
                <div className="certification-item">
                    <a href="https://ninjasfiles.s3.amazonaws.com/certificate33464846bdab43a27390652b287fce996444fa4.pdf" target="_blank" rel="noopener noreferrer"><h3>Career Camp | Data Structures in JAVA
                    </h3></a>
                    <p>Coding Ninjas, 2023</p>
                </div>

                {/* Certification item */}
                <div className="certification-item">
                    <a href="https://ninjasfiles.s3.amazonaws.com/certificate33464833526c0b9a3a2e3cc793ce48f7e0a534f.pdf" target="_blank" rel="noopener noreferrer"><h3>Career Camp | Introduction to JAVA
                    </h3></a>
                    <p>Coding Ninjas, 2023</p>
                </div>
            </div>
        </div>
    );
}

// Export Education
export default Education;
