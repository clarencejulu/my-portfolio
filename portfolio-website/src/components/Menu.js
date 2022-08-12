import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import {useLocation} from "react-router-dom";

export const Menu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {isMenu, changeIsMenu} = useContext(GlobalContext);
  return (
    <nav className='smallscreen-nav' style={isMenu ? {display: "flex"} : {display: "none"}}>
        <p onClick={() => {navigate("/"); changeIsMenu(!isMenu);}} className={location.pathname === "/" ? 'active' : ''}>Home</p>
        <p onClick={() => {navigate("/portfolio"); changeIsMenu(!isMenu);}} className={location.pathname === "/portfolio" ? 'active' : ''}>Portfolio</p>
        <p onClick={() => {navigate("/contact-me"); changeIsMenu(!isMenu);}} className={location.pathname === "/contact-me" ? 'active' : ''}>Contact Me</p>
    </nav>
  )
}
