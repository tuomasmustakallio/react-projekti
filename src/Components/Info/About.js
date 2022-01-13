import React, { Component } from 'react';
import "./About.css"

export default class About extends Component {
    render() {
        return (
            <div className='position'>
                <div className='card'>
                    <div className='card-content'>
                        <h6 className='mt-bottom'>
                            <strong>ABOUT ME</strong>
                        </h6>
                        <p className='grey-text'>
                            <input type="text"></input>
                        </p>
                    </div>
                    <div className='card-action'>
                        <h6>
                            <strong>PERSONAL INFO</strong>
                        </h6>
                        <div className='row mt'>
                            <div className='col s12 m6 l6 xl6'>
                                <p><strong>
                                    Address: <input type="text"></input>
                                    </strong></p>
                                <p><strong>
                                    Email: <input type="text"></input>
                                    </strong></p>
                                <p><strong>
                                    Phone: <input type="text"></input>
                                    </strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}