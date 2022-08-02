import React, { useState, useEffect, createContext } from 'react';
// import db from "./db.json/projects";

export const GlobalContext = createContext([]);

export const GlobalProvider = ({ children }) => {

    const [isMenu, setIsMenu] = useState(false); ;
    function changeIsMenu(isMenu) {
        setIsMenu(isMenu);
    }
    
    const [projects, setProjects] = useState([]);
    useEffect(()=> {
        const database = "./db.json";
        async function getProjects(url){
            const config = {
                headers:{
                    'Content-Type':'application/json',
                    'Accept': 'application/json',
                }
            }
            const response = await fetch(url, config);
            const data = await response.json();
            setProjects(data.projects);
            // console.log(projects);
        }
        getProjects(database);

    }, []);
    console.log(projects);
  return (
    <GlobalContext.Provider value={{ isMenu: isMenu, changeIsMenu: changeIsMenu, projects: projects }}>
        {children}
    </GlobalContext.Provider>
    )
}