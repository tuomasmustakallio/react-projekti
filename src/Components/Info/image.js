import React, { useState, useEffect } from 'react';
import './image.css';

export default function Image() {
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

    return (
        <>
            <input class="file" type="file" multiple accept='image/*' onChange={onImageChange} />
            { imageURLs.map(imageSrc => <img class="pic" src={imageSrc} alt='' width = "250" height = "300"/>) }
        </>
    );
}