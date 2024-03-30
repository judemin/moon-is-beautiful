// src/ImageComponent.js
import React, { useState, useEffect, memo } from 'react';

const ImageComponent = memo(({ imageSrc }) => {
    const [currentImage, setCurrentImage] = useState(imageSrc);

    useEffect(() => {
        setCurrentImage(imageSrc);
    }, [imageSrc]);

    return (
        <img
            src={currentImage}
            alt="Moon"
            style={{ width: '70px', height: 'auto' }}
        />
    );
});

export default ImageComponent;