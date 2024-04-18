import './Contact.css'
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import toast from "react-hot-toast";
import { useState } from 'react';

// Contact component containing detail's of contact
const Contact = () => {

    // State's
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    // On submit handler function here
    const onSubmit = async (event) => {
        // Preventing default behaviour of submit button
        event.preventDefault();
        // Creating new form data
        const formData = new FormData(event.target);

        // Appending access key to form data
        formData.append("access_key", "0abb3eef-72c9-4149-ba21-8c37ce58d888");

        // Creating object of form entries
        const object = Object.fromEntries(formData);
        // Converting JSON data to string here
        const json = JSON.stringify(object);

        // Calling API to send email here
        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        // If response of API is success then show notification here
        if (res.success) {
            toast.success(res.message);
            // Clearing field's
            setName("");
            setEmail("");
            setMessage("");
        }
    };

    // Returning JSX
    return (
        // Contact container
        <div id='contact' className='contact'>

            {/* Title heading */}
            <div className="contact-title">
                {/* Heading */}
                <h1>Get in touch</h1>
                {/* Image */}
                <img src={theme_pattern} alt="" />
            </div>

            {/* Contact Section's */}
            <div className="contact-section">
                {/* Left section */}
                <div className="contact-left">
                    {/* About me */}
                    <h1>Let's talk</h1>
                    <p>I'm currently availabe to take on new projects, so feel free to send me a message about anything you want me to work on. You can contact anytime.</p>

                    {/* Contact detail's container */}
                    <div className="contact-details">
                        {/* Email with logo */}
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>yparmodyadav@gmail.com</p>
                        </div>

                        {/* Mobile number with logo */}
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>7042813660</p>
                        </div>

                        {/* Address with logo */}
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Gurgaon, INDIA</p>
                        </div>
                    </div>
                </div>

                {/* Right section */}
                {/* Form */}
                <form onSubmit={onSubmit} action="" className="contact-right">
                    {/* Name field */}
                    <label htmlFor="">Your Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder='Enter your name' name='name' required />

                    {/* Email field */}
                    <label htmlFor="">Your Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder='Enter your email' name='email' required />

                    {/* Message field */}
                    <label htmlFor="">Write your message here</label>
                    <textarea onChange={(e) => setMessage(e.target.value)} value={message} name="message" rows="8" placeholder='Enter your message' required></textarea>

                    {/* Submit button */}
                    <button type='submit' className="contact-submit">
                        Submit now
                    </button>
                </form>
            </div>
        </div>
    )
}

// Exporting Contact
export default Contact