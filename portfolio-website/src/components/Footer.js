import React from 'react';
import frontendMentor from '../images/frontendmentor.png';
import { ReactComponent as Github} from '../images/github.svg';
import { ReactComponent as Linkedin} from '../images/linkedin.svg';
import { ReactComponent as Logo} from '../images/logo.svg';
// import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import { topFunction } from './Portfolio';

export const Footer = () => {
  // const navigate = useNavigate();
  return (
    <footer>
      <nav className='page-links'>
        <Logo className='logo' />
        <Link to="/" className='link' onClick={topFunction}>Home</Link>
        <Link to="/portfolio" className='link' onClick={topFunction}>Portfolio</Link>
        <Link to="/contact-me" className='link' onClick={topFunction}>Contact Me</Link>
      </nav>

      <nav className='media-links'>
        <a href='https://www.frontendmentor.io/profile/clarencejulu' target="_blank" rel='noopener noreferrer'><img src={frontendMentor} alt='Frontend Mentor Icon' /></a>
        <a href='https://github.com/clarencejulu' target="_blank" rel='noopener noreferrer'><Github /></a>
        <a href='https://www.linkedin.com/in/clarence-onumajulu/' target="_blank" rel='noopener noreferrer'><Linkedin /></a>
      </nav>
    </footer>
  )
}
