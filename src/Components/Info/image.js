import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import "./image.css"

export default function Image(props) {
    const [images, setImages] = useState([]);
    const [imageURLs, setImageURLs] = useState([]);

    const Button = styled.button({
        background: "lightskyblue",
        color: 'black',
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
        <div className='bg'>

        </div>
        <div className="btn"> 
            <Button 
            className="click"
            onClick={handleClick} >
                Upload image
            </Button>
        </div>
        <form class="pic">
            <input
            onChange={handleChange}
            onChange={onImageChange}
            type="file" 
            ref={hiddenFileInput}
            multiple accept='image/*' 
            style = {{display: 'none'}}/>
            { imageURLs.map(imageSrc => <img src={imageSrc} alt='' 
            width = "250" height = "250" />) }
        </form>
        </>
    );
}

/*width = "275" height = "300"*/