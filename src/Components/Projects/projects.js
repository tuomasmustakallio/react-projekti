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

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        
        const list = [...inputList];
        list[index][name] = value;

        setInputList(list);
    }

    const handleAddInput = () => {
        setInputList([...inputList, {projectName: "", projectInfo: ""}]);
    }

    const addProject =(name, info) =>{
        return(
            <Project
                projectName={name}
                projectInfo={info}/>
        )
    }

    const handleRemoveInput = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list)
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
            <div class="Header"><h1>Projects</h1></div>
            <div class="Projects">
                <Project
                projectName={testiprojekti}
                projectInfo={testiInfo}/>
            </div>
            {inputList.map((item,i) => {
                return(
                    <>
                    <div class="Project">
                        <Modal show={showModal} handleClose={hideModal}>
                            <h3 class="Project">Project:</h3>
                            <div key={i}  class="Project" >
                                <input
                                    type="text"
                                    name= "projectName"
                                    placeholder= "Project Name"
                                    className="project"
                                    value={item.projectName}
                                    onChange={e => handleChange(e, i)}
                                />
                            </div>
                            <h3 class="Project">Description</h3>
                            <div class="Project" >
                                <input
                                    type="text"
                                    name= "projectInfo"
                                    placeholder= "Description"
                                    value={item.projectInfo}
                                    onChange={e => handleChange(e, i)}
                                />
                            </div>
                            <div class="Project"><button
                                value="Add"
                                onClick={handleAddInput}
                            >Add project</button></div>
                        </Modal>
                        {inputList.length !=1 &&<button  onMouseEnter={handleMouseEnter}onMouseLeave={handleMouseLeave} className="Button"
                            onClick={() => handleRemoveInput(i)}
                        >Delete project
                        </button >}
                        {inputList.length - 1 === i && <button  onMouseEnter={handleMouseEnter}onMouseLeave={handleMouseLeave} className="Button" onClick={() => {setShowModal(true) }} 

                        >Add  project</button >}
                    </div>       
                    </>             
                    );
                })}
                <pre>
                {JSON.stringify(inputList, null, 2)}
                </pre>
        </div>

    );


}