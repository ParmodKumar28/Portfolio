import "./Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";

// Service's component which contain's service's i provide
const Services = () => {
    // Returning JSX
    return (
        // Services container
        <div id="services" className="services">

            {/* Title container */}
            <div className="services-title">
                {/* Heading */}
                <h1>My Services</h1>
                {/* Image */}
                <img src={theme_pattern} alt="" />
            </div>

            {/* Services container */}
            <div className="services-container">
                {/* Mapping all service's data here */}
                {Services_Data.map((service, index) => {
                    return <div key={index} className="services-format">
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className="services-readmore">
                            <p>Read More</p>
                            <img src={arrow_icon} alt="" />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

// Exporting Services
export default Services