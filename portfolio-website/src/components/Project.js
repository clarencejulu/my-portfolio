import React from 'react';
import {useNavigate} from 'react-router-dom';

const Project = ({ project }) => {
    const {name, intro, overviewimage, detailimage, description, background, website} = project;
    // const location = useLocation();
    const navigate = useNavigate();
    const toDetailPage = () => {navigate("my-portfolio/project", {state:{
        name:name, intro:intro, overviewimage:overviewimage,detailimage:detailimage, description:description, background:background, website:website
    }})};

  return (
    <div className='project'>
        <div className='overview-image' style={{backgroundImage: `url(${overviewimage})`}}/>
        <div className='project-info-container'>
            <div className="project-info">
                <h1>{name}</h1>
                <p>{intro}</p>
                <button onClick={() => toDetailPage()}>View Project</button>
            </div>
        </div>
    </div>)}

export default Project;