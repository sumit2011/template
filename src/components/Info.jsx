import React from 'react';
import './Info.css';

import data from '../data.json'
const Skills = () => {
    return (
    <section id='skills'>
          
    <span className='skilltitle'>What i do</span>
    <span className='skilldesc'>i am a skilled programmer</span>

    <div className='skillbars'>
        {data.skills.map((skill, index) => (
          <div key={index} className='skillbar'>
            <img src={skill.icon} alt={skill.title} className='skillbarimg' />
                <div className='skillbartext'>
                    <h2>{skill.title}</h2>
                    <p>{skill.description}</p>
                </div>
          </div>
        ))}
      </div>
        </section>
    );
}

export default Skills;


// import uidesign from '../assets/ui-design.png';
// import webdesign from '../assets/website-design.png';
// import appdesign from '../assets/app-design.png';
//   {/* <span className='skilltitle'>what id do</span>
//             <span className='skilldesc'>i am a skilled programmer</span>
//             <div className='skillbars'>
//                 <div className='skillbar'>
//                     <img src={uidesign} alt='uidesign' className='skillbarimg'/>
//                     <div className='skillbartext'>
//                         <h2>UI UX Design</h2>
//                         <p>you can write your content here</p>
//                     </div>
//                 </div>
//                 <div className='skillbar'>
//                     <img src={webdesign} alt='webdesign' className='skillbarimg' />
//                     <div className='skillbartext'>
//                         <h2>UI UX Design</h2>
//                         <p>you can write your content here</p>
//                     </div>
//                 </div>
//                 <div className='skillbar'>
//                     <img src={appdesign} alt='appdesign' className='skillbarimg' />
//                     <div className='skillbartext'>
//                         <h2>UI UX Design</h2>
//                         <p>you can write your content here</p>
//                     </div>
//                 </div>
//             </div>
//              */}