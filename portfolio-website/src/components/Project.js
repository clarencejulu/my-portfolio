import React from 'react';

const Project = ({ project }) => {
    const {name, intro, overviewimage} = project;
    // const doThis = () => {}
    // useEffect(()=>{
    //     const mediaWatcher = window.matchMedia("(min-width: 600px)");   
    //     function updateWidth(){
    //         const bodyWidth = document.querySelector('.body').clientWidth;
    //         const width = (bodyWidth / 2) - 14;

    //         document.querySelectorAll('.project').querySelectorAll('*').forEach( element => {
    //             element.style.width = `${width}px`;
    //         })
    //     }
    //     mediaWatcher.addEventListener('change',   updateWidth);
    
    //     return function cleanup(){
    //       mediaWatcher.removeEventListener('change', updateWidth);
    //     }
    // })
    
  return (
    <div className='project'>
        <div className='overview-image' style={{backgroundImage: `url(${overviewimage})`}}/>
        <div className='project-info-container'>
            <div className="project-info">
                <h1>{name}</h1>
                <p>{intro}</p>
                <button>View Project</button>
            </div>
        </div>
    </div>)}

export default Project;