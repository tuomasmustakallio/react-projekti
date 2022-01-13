import React, { useState, useEffect, Component } from 'react';
import "./profile.css";
import { Paper } from '@mui/material';

export default function Profile(props) {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);
    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files]);
    }

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    }
    return (
        <div>
            <label htmlFor="contained-button-file">
            <Paper className='paper' elevation={8}>
                <input
                onChange={handleChange}
                onChange={onImageChange} 
                accept="image/*" 
                id="contained-button-file" 
                multiple type="file"
                style = {{display: 'none'}}/>
                <div className='pic'>
                { imageURLs.map(imageSrc => <img src={imageSrc} alt='' 
                     height = "290" />) }
                </div>
                Click To Add Image
                </Paper>
            </label>
        </div>
    )
}
