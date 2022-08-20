import React, {useContext, useEffect, useRef} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Project from './Project';
// import ip from "../images/ip.PNG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowUpLong as Arrow} from '@fortawesome/free-solid-svg-icons';

export const topFunction = () =>{
  // document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
export const Portfolio = () => {
  const {projects} = useContext(GlobalContext);
  const topButton = useRef(null);

  useEffect(()=>{
    function scrollFunction() {
      // document.body.scrollTop > 20 || 
      if (document.documentElement.scrollTop > 200) {
        topButton.current.style.display = "block";
      } else {
        topButton.current.style.display = "none";
      }
    }
    window.addEventListener('scroll', scrollFunction);
    
    return function cleanup(){
      window.removeEventListener('scroll', scrollFunction);
    }
  })

  return (
    <main>
      {projects
      .map((project, id) => <Project key={id} project={project}/>)}
      <button onClick={topFunction} ref={topButton} id="topButton" //title="Go to Top"
      ><FontAwesomeIcon icon={Arrow} className='arrow'/></button>
    </main>
  )
}
