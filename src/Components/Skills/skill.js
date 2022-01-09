import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';

export function Skill(props){

    const { skillName, skillAmount } = props;

    return (
    <div className="skill">
        <h3>{skillName}</h3>
        <ProgressBar now={skillAmount} />
    </div>
    );
}