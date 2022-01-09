import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'

export function Skills(){

    const now = 60;

    const progressInstance = (
    <ProgressBar now={now} label={`${now}%`} visuallyHidden />
    );

    return (
    <div class="sidepanel">
        <ProgressBar>{progressInstance}</ProgressBar>
    </div>
    );
}