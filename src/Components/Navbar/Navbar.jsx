import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.svg"

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo} alt="logo" />
            {/* Menu */}
            <ul className="nav-menu">
                {/* Menu items */}
                <li>Home</li>
                <li>About Me</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>

            {/* Connect with me */}
            <div className="nav-connect">Connect With Me</div>
        </div>
    )
}

export default Navbar