import React, { useState } from "react";
import "./MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data.js";
import arrow_icon from "../../assets/arrow_icon.svg";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Importing icons

const MyWork = () => {
    const [hoveredWork, setHoveredWork] = useState(null);
    const [numProjectsToShow, setNumProjectsToShow] = useState(6); // Initial number of projects to show

    const handleMouseEnter = (index) => {
        setHoveredWork(index);
    };

    const handleMouseLeave = () => {
        setHoveredWork(null);
    };

    const handleShowMore = () => {
        setNumProjectsToShow(numProjectsToShow + 6); // Increase number of projects to show
    };

    return (
        <div id="work" className="mywork">
            {/* Title */}
            <div className="mywork-title">
                <h1>My latest work</h1>
                <img src={theme_pattern} alt="" />
            </div>

            {/* My work container */}
            <div className="mywork-container">
                {/* Mapping my work array here */}
                {mywork_data.slice(0, numProjectsToShow).map((work, index) => {
                    return (
                        <div
                            key={index}
                            className="work-item"
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img src={work.w_img} alt="" />
                            <div className="work-overlay">
                                <h3 className="work-title">{work.title}</h3> {/* Display project title */}
                                {hoveredWork === index && (
                                    <div className="work-links">
                                        <a href={work.live_link} target="_blank" rel="noopener noreferrer">
                                            <FaExternalLinkAlt /> Live
                                        </a>
                                        <a href={work.github_link} target="_blank" rel="noopener noreferrer">
                                            <FaGithub /> GitHub
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
            {numProjectsToShow < mywork_data.length && ( // Only show the "Show More" button if there are more projects to show
                <div className="mywork-showmore" onClick={handleShowMore}>
                    <p>Show More</p>
                    <img src={arrow_icon} alt="" />
                </div>
            )}
        </div>
    );
};

export default MyWork;
