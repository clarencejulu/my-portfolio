import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';
import {useLocation} from "react-router-dom";
import { topFunction } from './Portfolio';

export const Menu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {isMenu, changeIsMenu} = useContext(GlobalContext);

    const menuFunction = link => {
      navigate(link);
      changeIsMenu(!isMenu);
      topFunction();
    }

  return (
    <nav className='smallscreen-nav' style={isMenu ? {display: "flex"} : {display: "none"}}>
        <p onClick={() => menuFunction("/")} className={location.pathname === "/" ? 'active' : ''}>Home</p>
        <p onClick={() => menuFunction("/portfolio")} className={location.pathname === "/portfolio" || location.pathname === "/project" ? 'active' : ''}>Portfolio</p>
        <p onClick={() => menuFunction("/contact-me")} className={location.pathname === "/contact-me" ? 'active' : ''}>Contact Me</p>
    </nav>
  )
}
