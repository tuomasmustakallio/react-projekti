import Form from "./textarea";
import React from "react";
import { useState } from "react";
import { Modal } from '../Skills/Modal.js';



export function Experience(){

    const [showModal, setShowModal] = useState(false);

    function hideModal(){
        setShowModal(false);
    }

    return (
        <div className="experience">
            <div class="Header"><h2>Working experience</h2></div>
            <div class="Skills">
                <Modal show={showModal} handleClose={hideModal}>
                    <h3>Work</h3>
                    <input type="text"/><input/>
                </Modal>
            </div>
            <button onClick={() => {setShowModal(true)}}>Add working experience</button>
        </div>
    )
}