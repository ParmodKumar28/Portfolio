import "./Navbar.css";
import logo from "../../assets/logo2.png";
import { useRef, useState, useEffect } from "react";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

// Navbar component
const Navbar = () => {
    // States
    const [menu, setMenu] = useState("home");
    const [scrolled, setScrolled] = useState(false); // For scroll-based effect
    const menuRef = useRef();

    // Scroll event handler
    const handleScroll = () => {
        if (window.scrollY > 50) { // Adjust the scroll threshold
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    // Add scroll event listener on mount and cleanup on unmount
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // On click open menu
    const openMenu = () => {
        menuRef.current.style.right = "0";
    };

    // On click close menu
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    };

    // Returning JSX
    return (
        <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
            {/* Home button */}
            <AnchorLink className="anchor-link" offset={50} href="#home">
                <img onClick={() => setMenu("home")} className="logo" src={logo} alt="logo" />
            </AnchorLink>

            {/* For mobile view */}
            <img src={menu_open} alt="menu open" onClick={openMenu} className="nav-mob-open" />

            {/* Menu list */}
            <ul ref={menuRef} className="nav-menu">
                {/* Close icon for mobile */}
                <img src={menu_close} onClick={closeMenu} alt="menu close" className="nav-mob-close" />

                {/* Menu items */}
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#home">
                        <p onClick={() => setMenu("home")}>Home</p>
                    </AnchorLink>
                    {menu === "home" ? <img src={underline} alt="" /> : <></>}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#about">
                        <p onClick={() => setMenu("about")}>About Me</p>
                    </AnchorLink>
                    {menu === "about" ? <img src={underline} alt="" /> : <></>}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#education">
                        <p onClick={() => setMenu("education")}>Education</p>
                    </AnchorLink>
                    {menu === "education" ? <img src={underline} alt="" /> : <></>}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#services">
                        <p onClick={() => setMenu("services")}>Services</p>
                    </AnchorLink>
                    {menu === "services" ? <img src={underline} alt="" /> : <></>}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#work">
                        <p onClick={() => setMenu("work")}>Portfolio</p>
                    </AnchorLink>
                    {menu === "work" ? <img src={underline} alt="" /> : <></>}
                </li>
                <li>
                    <AnchorLink className="anchor-link" offset={50} href="#contact">
                        <p onClick={() => setMenu("contact")}>Contact</p>
                    </AnchorLink>
                    {menu === "contact" ? <img src={underline} alt="" /> : <></>}
                </li>
            </ul>

            {/* Connect with me button */}
            <div className="nav-connect">
                <AnchorLink className="anchor-link" offset={50} href="#contact">
                    Connect With Me
                </AnchorLink>
            </div>
        </div>
    );
};

// Exporting Navbar
export default Navbar;
