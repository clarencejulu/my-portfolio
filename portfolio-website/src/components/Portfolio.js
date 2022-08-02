import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import Project from './Project';
// import ip from "../images/ip.PNG";

export const Portfolio = () => {
  const {projects} = useContext(GlobalContext);
  return (
    <main>
      {projects
      .map((project, id) => <Project key={id} project={project}/>)}
    </main>
  )
}
