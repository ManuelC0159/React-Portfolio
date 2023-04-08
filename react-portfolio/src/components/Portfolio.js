import React from "react";
import Project from "./Project";

const projects = [
    {
        id: 0,
        title: "placeholder",
        languages: "plaecholder",
        image: "placeholder",
        description: "placeholder",
        repo: "",
    },
    {
        id: 1,
        title: "placeholder",
        languages: "plaecholder",
        image: "placeholder",
        description: "placeholder",
        repo: "",
    },
    {
        id: 3,
        title: "placeholder",
        languages: "plaecholder",
        image: "placeholder",
        description: "placeholder",
        repo: "",
    },
    
];

function Portfolio(){
    return(
        <div>
            <p>Portfolio</p>
            <hr />
            <Project projects ={projects}></Project>
        </div>
    );
}

export default Portfolio;