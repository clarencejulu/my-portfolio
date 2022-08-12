import React, {useState, useEffect, useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { GlobalContext } from '../context/GlobalState';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMoon} from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as MenuBar} from '../images/hamburger.svg';
import { ReactComponent as CloseMenu} from '../images/close.svg';
import {useLocation} from "react-router-dom";
import { Link } from "react-router-dom";

export const Header = () => {
    const {isMenu, changeIsMenu} = useContext(GlobalContext);
    const {theme, changeTheme} = useContext(ThemeContext);
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkmodeStatus')) === theme.dark); 
    
    const activateDarkMode = ()=>{
        setDarkMode(!darkMode); 
        changeTheme(darkMode ? theme.light : theme.dark); 
        localStorage.setItem('darkmodeStatus', darkMode ? JSON.stringify(theme.light) : JSON.stringify(theme.dark));
    }
    const location = useLocation();

    const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia("(max-width: 600px)").matches);
    useEffect(()=>{
        const mediaWatcher = window.matchMedia("(max-width: 600px)");   
        function updateIsSmallScreen(event){
          setIsSmallScreen(event.matches); 
        }
        mediaWatcher.addEventListener('change',   updateIsSmallScreen);
    
        return function cleanup(){
          mediaWatcher.removeEventListener('change', updateIsSmallScreen);
        }
    })

    return (
        <header>
            <div className='circleContainer' onClick={() => activateDarkMode()}>
                <FontAwesomeIcon icon={faMoon} className='yellow moon'/>
                <div className='circle' />
                <FontAwesomeIcon icon={faMoon} className='moon'/>
            </div>
            <nav style={isSmallScreen || isMenu ? {display: "none"} : {display: "flex"}}>
                <Link to="/" className={location.pathname === "/" ? 'active link' : 'link'}>Home</Link>
                <Link to="/portfolio" className={location.pathname === "/portfolio" ? 'active link' : 'link'}>Portfolio</Link>
                <Link to="/contact-me" className={location.pathname === "/contact-me" ? 'active link' : 'link'}>Contact Me</Link>
            </nav>
            <div className='menu-container' style={isSmallScreen || isMenu ? {display: "block"} : {display: "none"}} onClick={() => changeIsMenu(!isMenu)}>
                <MenuBar className="menuBar" style={isMenu ? {display: "none"} : {display: "block"}}/>
                <CloseMenu className="closeMenu" style={isMenu ? {display: "block"} : {display: "none"}} />
            </div>
        </header>
    )
}
