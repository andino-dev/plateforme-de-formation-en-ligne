import React from 'react'
import {Element} from 'react-scroll';
import "../Css/About.css";
function About() {
  return (
    <Element  className="about" id="about" name="about">
     <div className="about-content">
         <div className='Img-content fadeInUp'>
             <img alt="about" className="image-about" src="https://technext.github.io/elearning/img/about.jpg"></img>
         </div>      
         <div className="about-text-container fadeInUp ">
             <h5 className="about-name text-start">
                  About Us</h5>
             <h1 className='welcome-about'> Welcome to e-LEARNING</h1>
             <p className='quotes-about quotes-01'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.<br/> Clita erat ipsum et lorem et sit.</p>
             <p className='quotes-about quotes-02'>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.<br/> Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>      
         </div>
     </div>

    </Element>
  )
}

export default About;