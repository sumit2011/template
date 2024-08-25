import React from "react";
import { Link } from 'react-scroll';
import btnImg from '../assets/hireme.png';
import './Home.css';
import bg from '../assets/bg.png';

const Home = () => {
    return (
        <section id="home">
            <div className="content">
                <span className="hello">👋🏻 Hello,</span>
                <span className="introtxt">I'm <span className="introname">Sumit Kr.</span> <br /> Webapp Designer and Competitive Programmer.</span>
                <p className="intropara">I am a website designer with experiance in creating react websites and components...</p>
                
                <Link activeClass='active' to="contactpage"><button className="btn"><img src={btnImg} alt="hire me" className="btnImg" />Contact me</button></Link>
            </div>
            {/* <div>
              <img src={bg} alt="profile" className="bg" />
            </div> */}

        </section>
    )
}

export default Home;