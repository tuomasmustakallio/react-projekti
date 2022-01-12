import Textarea from "./textarea";
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
                    <Textarea/>
                </Modal>
            </div>
            <div></div>
            <button onClick={() => {setShowModal(true)}}>Add working experience</button>
        </div>
    )
}