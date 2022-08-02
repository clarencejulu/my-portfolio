import React from 'react';
import frontendMentor from '../images/favicon-32x32.png';
import { ReactComponent as Github} from '../images/github.svg';
import { ReactComponent as Linkedin} from '../images/linkedin.svg';
// import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

export const Footer = () => {
  // const navigate = useNavigate();
  return (
    <footer>
      <nav className='page-links'>
        <Link to="/" className='link'>Home</Link>
        <Link to="/portfolio" className='link'>Portfolio</Link>
        <Link to="/contact-me" className='link'>Contact Me</Link>
      </nav>

      <nav className='media-links'>
        <a href='https://www.frontendmentor.io/profile/clarencejulu' target="_blank" rel='noopener noreferrer'><img src={frontendMentor} alt='Frontend Mentor Icon' /></a>
        <a href='https://github.com/clarencejulu' target="_blank" rel='noopener noreferrer'><Github /></a>
        <a href='https://www.linkedin.com/in/clarence-onumajulu/' target="_blank" rel='noopener noreferrer'><Linkedin /></a>
      </nav>
    </footer>
  )
}
