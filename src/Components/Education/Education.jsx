import './Education.css';
import theme_pattern from "../../assets/theme_pattern.svg";

// Experience data
const experienceData = [
  {
    title: "Software Engineer",
    institution: "Care Health Insurance",
    year: "Jun 2024 - Present",
    location: "Gurgaon"
  },
  {
    title: "Teaching Assistant Web Development",
    institution: "Coding Ninjas",
    year: "Feb 2024 - Jul 2024",
    location: "Remote"
  },
];

// Education data
const educationData = [
  {
    title: "Full Stack with DSA Bootcamp",
    institution: "Coding Ninjas",
    year: "Apr 2023 - Feb 2024",
  },
  {
    title: "Master's in Computer Applications",
    institution: "Gurugram University",
    year: "2021 - 2023",
  },
  {
    title: "Bachelor's in Computer Applications",
    institution: "Maharishi Dayanand University",
    year: "2018 - 2021",
  },
];

// Certification data
const certificationData = [
  {
    title: "Bootcamp | React | Full Stack Development",
    issuer: "Coding Ninjas",
    year: "2024",
    link: "https://ninjasfiles.s3.amazonaws.com/certificate_04a0ce9bce5c876f_e60f98fb73e256987370cfc935a07281.pdf",
  },
  {
    title: "Career Camp | Back End | Full Stack Web Development in Node.js",
    issuer: "Coding Ninjas",
    year: "2023",
    link: "https://ninjasfiles.s3.amazonaws.com/certificate33464895cf6f017137585135715a422347ff56b.pdf",
  },
  {
    title: "Career Camp | Front End | Full Stack Web Development",
    issuer: "Coding Ninjas",
    year: "2023",
    link: "https://ninjasfiles.s3.amazonaws.com/certificate334648619240ea390e340e834ecbca2b93bb4bf.pdf",
  },
  {
    title: "Career Camp | Data Structures in JAVA",
    issuer: "Coding Ninjas",
    year: "2023",
    link: "https://certificate.codingninjas.com/view/36756c8827110455",
  },
  {
    title: "Career Camp | Introduction to JAVA",
    issuer: "Coding Ninjas",
    year: "2023",
    link: "https://ninjasfiles.s3.amazonaws.com/certificate33464833526c0b9a3a2e3cc793ce48f7e0a534f.pdf",
  },
  {
    title: "System Design",
    issuer: "Coding Ninjas",
    year: "2024",
    link: "https://certificate.codingninjas.com/view/2589348c01f82eb0",
  },
  {
    title: "Web Development | Generative AI",
    issuer: "Coding Ninjas",
    year: "2025",
    link: "https://certificate.codingninjas.com/view/4a7f7707f5d82ada",
  }
];

const Education = () => {
  return (
    <div id='education' className="education">
      <div className="education-title">
        <h1>Experience, Education & Certifications</h1>
        <img src={theme_pattern} alt="" />
      </div>

      {/* Experience Section */}
      <div className="experience-section">
        <h2>Experience</h2>
        {experienceData.map((exp, index) => (
          <div className="experience-item" key={index}>
            <h3>{exp.title}</h3>
            <p>{exp.institution}, {exp.year}</p>
            <div className="location">📍 {exp.location}</div>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="education-section">
        <h2>Education</h2>
        {educationData.map((edu, index) => (
          <div className="education-item" key={index}>
            <h3>{edu.title}</h3>
            <p>{edu.institution}, {edu.year}</p>
          </div>
        ))}
      </div>

      {/* Certifications Section */}
      <div className="certification-section">
        <h2>Certifications</h2>
        {certificationData.map((cert, index) => (
          <div className="certification-item" key={index}>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <h3>{cert.title}</h3>
            </a>
            <p>{cert.issuer}, {cert.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
