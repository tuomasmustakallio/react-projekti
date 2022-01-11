import Form from "./Form";
import React from "react";

const handleAdd = () => {
    console.log('test');
    //<Form />
}

export function Experience(){

    return (
        <div className="experience">
            <div class="Header"><h2>Working experience</h2></div>
            <button onClick={handleAdd}>Add working experience</button>
        </div>
    )
}