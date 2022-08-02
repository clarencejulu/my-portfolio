import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalState';

export const Menu = () => {
    const navigate = useNavigate();
    const {isMenu, changeIsMenu} = useContext(GlobalContext);
  return (
    <nav className='smallscreen-nav' style={isMenu ? {display: "flex"} : {display: "none"}}>
        <p onClick={() => {navigate("/"); changeIsMenu(!isMenu);}}>Home</p>
        <p onClick={() => {navigate("/portfolio"); changeIsMenu(!isMenu);}}>Portfolio</p>
        <p onClick={() => {navigate("/contact-me"); changeIsMenu(!isMenu);}}>Contact Me</p>
    </nav>
  )
}
