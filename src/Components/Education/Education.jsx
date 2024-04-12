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
                    <h3>Master's In Computer Application's</h3>
                    <p>Gurugram University, 2021 - 2023</p>
                </div>
                <div className="education-item">
                    <h3>Bachelor's In Computer Application's</h3>
                    <p>Maharishi Dayanand University, 2018 - 2021</p>
                </div>
            </div>

            <div className="certification-section">
                <h2>Certifications</h2>
                <div className="certification-item">
                    <a href="https://ninjasfiles.s3.amazonaws.com/certificate_04a0ce9bce5c876f_e60f98fb73e256987370cfc935a07281.pdf" target="_blank" rel="noopener noreferrer"><h3>Bootcamp | React | Full Stack Development</h3></a>
                    <p>Coding Ninjas, 2024</p>
                </div>


                <div className="certification-item">
                    <a href="https://ninjasfiles.s3.amazonaws.com/certificate33464895cf6f017137585135715a422347ff56b.pdf" target="_blank" rel="noopener noreferrer"><h3>Career Camp | Back End | Full Stack Web
                        Development in Node.js
                    </h3></a>
                    <p>Coding Ninjas, 2023</p>
                </div>


                <div className="certification-item">
                    <a href="https://ninjasfiles.s3.amazonaws.com/certificate334648619240ea390e340e834ecbca2b93bb4bf.pdf" target="_blank" rel="noopener noreferrer"><h3>Career Camp | Front End | Full Stack Web
                        Development
                    </h3></a>
                    <p>Coding Ninjas, 2023</p>
                </div>


                <div className="certification-item">
                    <a href="https://ninjasfiles.s3.amazonaws.com/certificate33464846bdab43a27390652b287fce996444fa4.pdf" target="_blank" rel="noopener noreferrer"><h3>Career Camp | Data Structures in JAVA
                    </h3></a>
                    <p>Coding Ninjas, 2023</p>
                </div>  


                <div className="certification-item">
                    <a href="https://ninjasfiles.s3.amazonaws.com/certificate33464833526c0b9a3a2e3cc793ce48f7e0a534f.pdf" target="_blank" rel="noopener noreferrer"><h3>Career Camp | Introduction to JAVA
                    </h3></a>
                    <p>Coding Ninjas, 2023</p>
                </div>
            </div>
        </div>
    );
}

export default Education;
