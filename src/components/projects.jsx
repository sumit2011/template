

import React from 'react';
import './projects.css';
import data from '../data.json';
import foldericon from '../assets/folder.png';
import githubicon from '../assets/outline.png';
import linkicon from '../assets/linkicon.png';



const Projects = () => {
  return (
    <section id='works'>
      <h2 className='projectPageTitle'>My Projects</h2>
      <span className='projectPageDesc'>here is some of my works and projects</span>
      <div className='projects'>
        {data.projects.map((project, index) => (
          <div key={index} className='projectcard'>
            <header className='cardheader'>
              <div className='header'>
                  <div className='foldericon'>
                     <img src={foldericon} alt='folder' className='skillbarimg'/>
                  </div>
                  <div className='icons' >
                        <a href={project.codesource} target='_blank'>
                            <img src={githubicon} alt='folder' className='giticonimg'/>
                        </a>
                        <a href={project.tourl} target='_blank'>
                            <img src={linkicon} alt='folder' className='linkimg'/>
                        </a>
                     
                  </div>
                  
              </div>
              <br/>
              <h3 className='projecttitle' >{project.title} </h3>
              <div>
                <p className='projectcontent'>{project.description}</p>
              </div>
            </header>

            <footer className='footersec'>
                    <p className='test'>{project.techlist}</p>
 
            </footer>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;



