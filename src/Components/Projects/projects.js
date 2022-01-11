import React from "react";
import { Project } from "./project";
import './projects.css';
import {useState} from 'react'
import { Modal } from '../Skills/Modal.js';


export function Projects(props){

    const testiprojekti = "Mobiilipeli";
    const testiInfo = "FGJ 2021";
    const [showModal, setShowModal] = useState(false);

    function hideModal(){
        setShowModal(false);
    }

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
        <div class="Skills">
            <Modal show={showModal} handleClose={hideModal}>
                <h3 class="Skill">Project:</h3>
                <div class="Skill" ><input type="text"/></div>
                <h3 class="Skill">What was the project like?</h3>
                <div class="Skill" ><input type="text"/></div>
                <div class="Skill"><button >Add project</button></div>
                
            </Modal>
            <button class="Button" onClick={() => {setShowModal(true)}}>Add  project</button>
        </div>
        </>
    </div>

    );


}