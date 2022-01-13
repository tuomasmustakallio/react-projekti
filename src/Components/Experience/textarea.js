import React, { useState, Component, setState } from "react";
import { Experience } from "./experience.js";

export class Textarea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Something was submitted: ' + this.state.value);
        console.log(this.state.value);
        event.preventDefault();

    }


    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Text:
                    <textarea value={this.state.value} onChange={this.handleChange} Experience={(this.state.value)}/>
                </label>
                <input type="submit" value="Submit" 
                input/>
                <div>{this.state.value}</div>
            </form>
        )
    }
}

export default Textarea;