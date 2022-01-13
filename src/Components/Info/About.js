import React, { Component } from 'react';
import "./About.css"
import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { Paper } from '@mui/material';

export default class About extends Component {
    render() {
        return (
            <Paper className='position' elevation={8}>
                <div >
                    <div >
                        <h6>
                            <strong className='about' >ABOUT ME</strong>
                        </h6>
                        <Box
                        component="form"
                        sx={{
                          '& .MuiTextField-root': { m: 1, width: '73ch' },
                        }}
                        noValidate
                        autoComplete="off">
                        <p className="about_text">
                            <TextField
                            autoComplete="off"
                            maxRows={12}
                            multiline
                            placeholder=''></TextField>
                        </p>
                        </Box>
                    </div>
                    <div >
                        <h6>
                            <strong className="personal_header">PERSONAL INFO</strong>
                        </h6>
                        <div>
                            <div className='personal'>
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