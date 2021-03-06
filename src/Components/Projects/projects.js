import React from "react";
import { Project } from "./project";
import './projects.css';
import {useState} from 'react'
import { Modal } from '../Skills/Modal.js';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';



export function Projects(props){

    const [showModal, setShowModal] = useState(false);
    
    const [inputList, setInputList] = useState([
        {projectName: "", projectInfo: ""}
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

    const handleRemoveInput = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list)
    }

    const handleMouseEnter = e => {
        e.target.style.background = "ligthblue"
    }
    const handleMouseLeave = e => {
    e.target.style.background = "ligthblue"
    }

    function hideModal(){
        setShowModal(false);
    }


    return (
        <div className="projects">
            <div class="Header"><h1>Projects</h1></div>
            {inputList.map((item,i) => {
                return(
                    <>
                    <div class="Project">
                        <Modal show={showModal} handleClose={hideModal}>
                            <Box
                                component="form"
                                heigth
                                sx={{
                                    '& > :not(style)': { m: 1, width: '50ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                            <h3 class="Project">Project:</h3>
                            <div key={i}  class="Project" >
                                <TextField fullWidth label="Project Name" id="fullWidth"
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
                                <TextField fullWidth label="Description" id="fullWidth" maxRows={12} 
                                    multiline
                                    type="text"
                                    name= "projectInfo"
                                    placeholder= "Description"
                                    value={item.projectInfo}
                                    onChange={e => handleChange(e, i)}
                                />
                            </div>
                            <div  class="Project"><Button disabled={item.projectName === ""}
                                variant="contained"
                                value="Add"
                                onClick={handleAddInput}
                            >Add project</Button></div>
                            </Box>
                        </Modal>
                        {inputList.length -1 !== i && item.projectName.length !==0 &&
                        <Box>
                            <div class= "Projects" >
                                <Project 
                                    projectName={item.projectName}
                                    projectInfo={item.projectInfo}
                                />
                                {inputList.length !==1 && inputList.length -1 !== i && item.projectName.length !==0 &&<Button color="error" variant="contained" onMouseEnter={handleMouseEnter}onMouseLeave={handleMouseLeave} className="Button"
                                onClick={() => handleRemoveInput(i)}
                                >Delete project
                                </Button >}
                            </div>
                        </Box>}
                        {inputList.length - 1 === i && <Button variant="contained"  onMouseEnter={handleMouseEnter}onMouseLeave={handleMouseLeave} className="Button" onClick={() => {setShowModal(true) }} 
                        >Add  project</Button >}
                    </div>       
                    </>             
                    );
                })}
        </div>

    );


}