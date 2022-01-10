import React from "react";

export function Project(props){


    const { projectName, projectInfo } = props;

    return (
    <div className="project">
        <h3>{projectName}</h3>
        <h5>{projectInfo}</h5>
    </div>
    );
}