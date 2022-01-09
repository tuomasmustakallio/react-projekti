import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';

export function Skills(props){

    //Hetkellisiä arvoja
    const skillAmount = 60
    const skillName = "JavaScript"

    return (
    <div className="skill">
        <h3>{skillName}</h3>
        <ProgressBar now={skillAmount} />
    </div>
    );
}