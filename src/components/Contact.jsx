import React from 'react';
import './Contact.css';

import facebookicon from '../assets/facebook.png';
import twittericon from '../assets/twitter.png';
import youtubeicon from '../assets/linkedin.png';
import instagramicon from '../assets/instagram.png';
import githubicon from '../assets/outline.png';

const Contact = () => {
    return(
        <section id='contactpage'>
            <h1 className="contactme">Contact Me</h1>
            <span className='contactdesc'>Plese fill out the form billow to discuss any work opportunities</span>

            <div id="contact">
                {/* <h1 className="contactme">Contact Me</h1> */}
                {/* <span className='contactdesc'>Plese fill out the form billow to discuss any work opportunities</span> */}
                <form className='contactform'>
                    <input type='text' className='name' placeholder='Your Name' />
                    <input type='text' className='email' placeholder='Your Email' />
                    <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                    <button type='submit' value='send' className="submitbtn">Submit</button>
                    <div className="links">
                        <a href='https://www.facebook.com/sumit2011' target='_blank'>
                            <img src={facebookicon} alt='facebook' className='link' />
                        </a>
                        <a href='https://github.com/sumit2011' target='_blank'>
                            <img src={githubicon} alt='github' className='link' />
                        </a>
                        <a href='https://www.instagram.com/_su__mit___/' target='_blank'>
                            <img src={instagramicon} alt='instagram' className='link' />
                        </a>
                        <a href='https://x.com/_su__mit___' target='_blank'>
                            <img src={twittericon} alt='twitter' className='link' />
                        </a>
                        <img src={youtubeicon} alt='facebook' className='link' />
                        

                    </div>
                </form>
            </div>

        </section>
    );
}

export default Contact;