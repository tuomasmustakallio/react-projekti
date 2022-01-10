import React, { useState } from "react";
import { Skill } from "./skill";
import './skills.css';
import { Modal } from './Modal.js';

export function Skills(){

    //Hetkellisiä arvoja
    const testimaara = 60
    const testinimi = "JavaScript"

    const [showModal, setShowModal] = useState(false);

    function hideModal(){
        setShowModal(false);
    }

    return (
    <div className="skills">
        <>
        <div class="Header"><h1>Programming skills</h1></div>
        <div class="SecondHeader"><h2>Languages</h2></div>
        <div class="Skills">
            <Skill
            skillName={testinimi}
            skillAmount={testimaara}/>
        </div>
        {/*ideana että nappi avaa modalin johon voi lisätä kielen ja kuinka hyvin sen osaa*/}
        <div class="Skills">
            <Modal show={showModal} handleClose={hideModal}>
                <h3 class="Skill">Language:</h3>
                <div class="Skill" ><input type="text"/></div>
                <h3 class="Skill">How good are you at it?</h3>
            </Modal>
            <button onClick={() => {setShowModal(true)}}>Add a language</button>
        </div>
        <div class="SecondHeader"><h2>Other skills</h2></div>
        <div class="Skills">
            <Skill
            skillName={testinimi}
            skillAmount={testimaara}/>
        </div>
        </>
    </div>
    );
}