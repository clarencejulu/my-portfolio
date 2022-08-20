import React, {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons';
import { topFunction } from './Portfolio';

export const Detail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const {name, intro, overviewimage, detailimage, description, background, website} = location.state;

    useEffect(()=>{
        topFunction();
    }, [])

    const [isSmallScreen, setIsSmallScreen] = useState(window.matchMedia("(max-width: 1180px)").matches);
    useEffect(()=>{
      const mediaWatcher = window.matchMedia("(max-width: 1180px)");   
      function updateIsSmallScreen(event){
        setIsSmallScreen(event.matches); 
      }
      mediaWatcher.addEventListener('change',   updateIsSmallScreen);
  
      return function cleanup(){
        mediaWatcher.removeEventListener('change', updateIsSmallScreen);
      }
    })
    
  return (
    <div className='projectContainer'>
        <button onClick={() => navigate(-1) }><FontAwesomeIcon icon={faArrowLeft} className="arrowLeft"/> &nbsp;Back</button>
        <div className='projectDetails'>
            <div className='detailImage' style={{backgroundImage: `url(${isSmallScreen ? overviewimage : detailimage})`}}/>
            <h2>{name}</h2>
            <p>{intro}</p>
            <h2>Description</h2>
            <p>{description}</p>
            <h2>Background</h2>
            <p>{background}</p>
            <a href={website} target='_blank' rel='noreferrer'><button>Visit Website&nbsp; <FontAwesomeIcon icon={faArrowRight} className="arrowRight"/></button></a>
        </div>
    </div>
  )
}
