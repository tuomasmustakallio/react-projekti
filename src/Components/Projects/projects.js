import React from "react";
import { Project } from "./project";
import './projects.css';
import {useState} from 'react'
import { Modal } from '../Skills/Modal.js';


export function Projects(props){

    const testiprojekti = "Mobiilipeli";
    const testiInfo = "FGJ 2021";
    const [showModal, setShowModal] = useState(false);
    
    const [inputList, setInputList] = useState([
        {projectName: "YAHHUU", projectInfo: "WOHHUU"}
    ]);

    const handleChange = e => {
        const { name, value } = e.target;
        setInputList({
            ...inputList,
            [name]:value
        });
    }

    const handleMouseEnter = e => {
        e.target.style.background = "grey"
    }
    const handleMouseLeave = e => {
    e.target.style.background = "darkgrey"
    }

    function hideModal(){
        setShowModal(false);
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
            <div class="Project">
                <Modal show={showModal} handleClose={hideModal}>
                    <h3 class="Project">Project:</h3>
                    <div class="Project" >
                        <input
                            type="text"
                            name= "projectName"
                            placeholder= "Project Name"
                            className="project"
                            value={inputList.projectName}
                            onChange={handleChange}
                        />
                    </div>
                    <h3 class="Project">Description</h3>
                    <div class="Project" >
                        <input
                            type="text"
                            name= "projectInfo"
                            placeholder= "Description"
                            value={inputList.projectInfo}
                            onChange={handleChange}
                        />
                    </div>
                    <div class="Project"><button >Add project</button></div>
                </Modal>
                <button  onMouseEnter={handleMouseEnter}onMouseLeave={handleMouseLeave} className="Button" onClick={() => {setShowModal(true) }} >Add  project</button >
            </div>

            <pre>
                {JSON.stringify(inputList, null, 2)}
            </pre>
            </>
        </div>

    );


}