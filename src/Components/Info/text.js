import React from 'react'
import "./text.css"

export default class Text extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
    
        console.log(data.get('email')); // reference by form input's `name` tag
    
        fetch('/api/form-submit-url', {
          method: 'POST',
          body: data,
        });
      }
    render(){
        return (
        <card className='pos'>
            <form className='card' onSubmit={this.handleSubmit}>
            <label htmlFor="username">Name</label>
            <input id="username" name="username" type="text" />
        </form>
      </card>
        )
    }
}
