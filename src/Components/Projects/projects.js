import React from "react";
import { Project } from "./project";
import './projects.css';


export function Projects(props){

    const testiprojekti = "Mobiilipeli";
    const testiInfo = "FGJ 2021";

    function clickButton(){
        alert('Yahhuu!!!');
    }

    return (
    <div className="projects">
        <>
        <div class="Header"><h1>Projects</h1></div>
        <div class="Projects">
            <Project
            projectName={testiprojekti}
            projectInfo={testiInfo}/>
        </div>
        <div class="Button">
            <button onClick={clickButton}>
                Button
            </button>
        </div>
        </>
    </div>

    );


}