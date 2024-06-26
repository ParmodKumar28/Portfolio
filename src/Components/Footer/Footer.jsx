import './Footer.css';
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import { SiLeetcode } from "react-icons/si";
import logo from "../../assets/logo2.png";

// Footer component
const Footer = () => {
    // Returning JSX
    return (
        // Footer container
        <div className='footer'>
            {/* Footer section's */}
            {/* Top section */}
            <div className="footer-top">
                <div className="footer-top-left">
                    <img className='logo' src={logo} alt="" />
                    <p>I am a fullstack developer from, INDIA with 1+ year of project experience and knowledge.</p>
                </div>

                {/* <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="" />
                        <input type="email" placeholder='Enter your email' />
                    </div>

                    <div className="footer-subscribe">Subscribe</div>
                </div> */}
            </div>
            <hr />


            {/* Bottom section */}
            <div className="footer-bottom">

                {/* Footer bottom left section */}
                <p className="footer-bottom-left">
                    2024 &copy; Parmod Kumar All rights reserved
                </p>

                {/* Footer bottom right section */}
                <div className="footer-bottom-right">
                    <a href="https://www.instagram.com/parmodyadav28/" target="_blank" rel="noopener noreferrer"><AiFillInstagram style={{ color: '#bc2a8d', fontSize: '2.5rem' }} /></a>
                    <a href="https://www.linkedin.com/in/parmod-kumar-9a176b202/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin style={{ color: '#0077b5', fontSize: '2.5rem' }} /></a>
                    <a href="https://twitter.com/ParmodKuma35112" target="_blank" rel="noopener noreferrer"><AiFillTwitterSquare style={{ color: '#1da1f2', fontSize: '2.5rem' }} /></a>
                    <a href="https://leetcode.com/parmodkumar28/" target="_blank" rel="noopener noreferrer"><SiLeetcode style={{ color: '#f89f1b', fontSize: '2.5rem' }} /></a>
                    <a href="https://github.com/ParmodKumar28" target="_blank" rel="noopener noreferrer"><AiFillGithub style={{ color: '#24292e', fontSize: '2.5rem' }} /></a>
                    <a href="https://www.youtube.com/@parmodyadav28" target="_blank" rel="noopener noreferrer"><AiFillYoutube style={{ color: '#c4302b', fontSize: '2.5rem' }} /></a>
                </div>
            </div>
        </div>
    )
}

// Export Footer
export default Footer;
