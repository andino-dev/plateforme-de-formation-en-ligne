import React from 'react'
import {Link} from 'react-scroll';
import {Link as Linked}from 'react-router-dom';
import '../Css/navbar.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FaBook} from 'react-icons/fa';
function Navbar() {
  return (
    <div className='navbar-flex'>
      <div className='navbar-content'>
        <div className='logo-content'>
            <p className='content-logo-left'><FaBook/>-<span className='content-learning'>Learning</span></p>
        </div>
        <div className='navbar-content-page'>
           <Link to='home' activeClass='active'  className='link' spy={true} smooth={true} offset={50} duration={50}>
             Home
           </Link>
           <Link to='about' activeClass='active'  className='link'  spy={true} smooth={true} offset={50} duration={50}>
             About
           </Link>
           <Link to='courses' activeClass='active'  className='link'  spy={true} smooth={true} offset={50} duration={50}>
             Courses
           </Link>

        </div>
        <div className='navbar-register'>
          <Linked  to="/login" className='btn-login'>Se connecter </Linked>
          
          <Linked   to="/Signin" className='btn-register'>s'inscrire <FaLongArrowAltRight className='aiOutlineArrowRight'/></Linked>
        </div>
      </div>  
    </div>
  )
}

export default Navbar