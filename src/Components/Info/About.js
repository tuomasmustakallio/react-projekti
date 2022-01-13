import React, { Component } from 'react';
import "./About.css"
import TextField from "@mui/material/TextField";
import { Paper } from '@mui/material';

export default class About extends Component {
    render() {
        return (
            <Paper className='position' elevation={8}>
                <div>
                    <div>
                        <h6>
                            <strong>ABOUT ME</strong>
                        </h6>
                        <p>
                            <TextField placeholder=''></TextField>
                        </p>
                    </div>
                    <div>
                        <h6>
                            <strong>PERSONAL INFO</strong>
                        </h6>
                        <div>
                            <div>
                                <p><strong>
                                    <TextField placeholder='Address'></TextField>
                                    </strong></p>
                                <p><strong>
                                    <TextField placeholder='Email'></TextField>
                                    </strong></p>
                                <p><strong>
                                    <TextField placeholder='Phone'></TextField>
                                    </strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Paper>
        );
    }
}