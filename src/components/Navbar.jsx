import React, { useState } from "react";
import './Navbar.css';
import logo from '../assets/logo.png';
import contactImg from '../assets/contact.png';

import {Link} from 'react-scroll';
import menu from '../assets/menu.png';

// import { Link } from 'react-router-dom';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar">
            <img src={logo} alt="logo" className="logo" onClick={() => {
                document.getElementById('home').scrollIntoView({behavior: 'smooth'});
            }}/>

            <div className="desktopMenu" >
                <Link activeClass='active' to="home" spy={true} smooth={true} offset={-50} duration={500}  className="navlink">Home</Link>
                <Link activeClass='active' to="about" spy={true} smooth={true} offset={-50} duration={500}  className="navlink">About</Link>
                <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500}  className="navlink">Skills</Link>
                <Link activeClass='active' to="works" spy={true} smooth={true} offset={-50} duration={500}  className="navlink">Projects</Link>

            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
            }}>
                <img src={contactImg} alt="" className="desktopMenuImg" />contact Me
            </button>

            <img src={menu} alt="menu" className="mobMenu"  onClick={() => setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex':'none'} }>
                <Link activeClass='active' to="home" spy={true} smooth={true} offset={-50} duration={500}  className="listitem"    onClick={() => setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to="about" spy={true} smooth={true} offset={-50} duration={500}  className="listitem"  onClick={() => setShowMenu(false)}>About</Link>
                <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500}  className="listitem"   onClick={() => setShowMenu(false)}>Skills</Link>
                <Link activeClass='active' to="works" spy={true} smooth={true} offset={-50} duration={500}  className="listitem" onClick={() => setShowMenu(false)}>Projects</Link>
                <Link activeClass='active' to="contactpage" spy={true} smooth={true} offset={-50} duration={500}  className="listitem" onClick={() => setShowMenu(false)}>Contact</Link>

            </div>
        </nav>
        // <div >Navbar</div>
    )
}

export default Navbar;