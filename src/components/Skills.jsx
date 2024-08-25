import React from "react";
import './Skills.css';
// import data from '../data.json';

const Skills = () => {
    return (
        <section id="skillsection">
            <div className='skill'>
                <h1>My skill</h1>

                <li><h3>html</h3>
                    <span className="bar"><span className="html"></span></span>
                </li>
                <li><h3>css</h3>
                    <span className="bar"><span className="css"></span></span>
                </li>
                <li><h3>js</h3>
                    <span className="bar"><span className="js"></span></span>
                </li>
                <li><h3>html</h3>
                    <span className="bar"><span className="html"></span></span>
                </li>
            </div>
        </section>
    );
};

export default Skills;