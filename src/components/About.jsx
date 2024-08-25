import React from "react";
import './About.css';
import data from '../data.json';

const About = () => {
    return (
        <section id="about">
            <span className='aboutme'>About Me</span>
            <div className='about_container'>
                {data.about.map((about, index) => (
                    <div className="about_contents">
                        <section className="imageSection">
                            <img src={about.image} alt="image" />
                        </section>

                        <section className="infoSection">
                            {/* <h1>About Me</h1> */}
                            {/* <h2>{about.title}</h2> */}
                            <p>{about.description}</p>
                            {/* <p>{about.subtitle}</p> */}
                            <div className="personalInfo">
                                <div><span>Name:</span><span>{about.name}</span></div>
                                <div><span>Age:</span><span>{about.age}</span></div>
                                <div><span>Email:</span><span>{about.email}</span></div>
                                <div><span>Address:</span><span>{about.address}</span></div>

                            </div>
                            <div className="cvbutton" >
                                <a href="/resume.pdf" download>
                                <button>Download CV</button>
                                </a>
                            </div>
                        </section>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default About;