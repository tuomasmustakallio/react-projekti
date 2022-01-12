import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

export default function Image(props) {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    const Button = styled.button({
        background: "grey",
        color: 'white'
    });
    

    useEffect(() => {
        if (images.length < 1) return;
        const newImageUrls = [];
        images.forEach(image => newImageUrls.push(URL.createObjectURL(image)));
        setImageURLs(newImageUrls);
    }, [images]);

    function onImageChange(e) {
        setImages([...e.target.files]);
    }

    const hiddenFileInput = React.useRef(null);
    
    const handleClick = event => {
        hiddenFileInput.current.click();
    }

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    }

    return (
        <> 
            <Button onClick={handleClick} primary>
                Upload an image
            </Button>
            <input 
            onChange={handleChange}
            onChange={onImageChange}
            type="file" 
            ref={hiddenFileInput}
            multiple accept='image/*' 
            style = {{display: 'none'}}/>
            { imageURLs.map(imageSrc => <img class="pic" src={imageSrc} alt='' width = "275" height = "300"/>) }
        </>
    );
}