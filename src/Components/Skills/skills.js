import React from "react";
import { Skill } from "./skill";
import './skills.css';

export function Skills(props){

    //Hetkellisiä arvoja
    const testimaara = 60
    const testinimi = "JavaScript"

    return (
    <div className="skills">
        <>
        <div class="Header"><h1>Ohjelmointitaidot</h1></div>
        <div class="SecondHeader"><h2>Kielet</h2></div>
        <div class="Skills">
            <Skill
            skillName={testinimi}
            skillAmount={testimaara}/>
        </div>
        </>
    </div>
    );
}