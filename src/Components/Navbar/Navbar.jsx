import "./Navbar.css"
import logo from "../../assets/logo.svg"
import { useState } from "react"
import underline from "../../assets/nav_underline.svg"

const Navbar = () => {
    // State's
    const [menu, setMenu] = useState("home");


    return (
        // Navbar
        <div className='navbar'>
            <img src={logo} alt="logo" />
            {/* Menu */}
            <ul className="nav-menu">
                {/* Menu items */}
                <li><p onClick={() => setMenu("home")}>Home</p> {menu === "home" ? <img src={underline} alt="" /> : <></>} </li>
                <li><p onClick={() => setMenu("about")}>About Me</p> {menu === "about" ? <img src={underline} alt="" /> : <></>} </li>
                <li><p onClick={() => setMenu("services")}>Services</p> {menu === "services" ? <img src={underline} alt="" /> : <></>} </li>
                <li><p onClick={() => setMenu("work")}>Portfolio</p> {menu === "work" ? <img src={underline} alt="" /> : <></>} </li>
                <li><p onClick={() => setMenu("contact")}>Contact</p> {menu === "contact" ? <img src={underline} alt="" /> : <></>} </li>
            </ul>

            {/* Connect with me */}
            <div className="nav-connect">Connect With Me</div>
        </div>
    )
}

export default Navbar