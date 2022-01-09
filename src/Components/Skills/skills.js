import React, { useState } from "react";
import { Skill } from "./skill";
import './skills.css';

export function Skills(){

    //Hetkellisiä arvoja
    const testimaara = 60
    const testinimi = "JavaScript"

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
        <div class="Skills"><button onClick={addSkill}>Add a language</button></div>
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