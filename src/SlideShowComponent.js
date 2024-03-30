// src/SlideShowComponent.js
import ImageComponent from './ImageComponent';
import React, { useState, useEffect } from 'react';
import moon3 from './moon3.png';
import pic0 from './pic0.png';
import pic1 from './pic1.jpg';
import pic2 from './pic2.jpg';
import pic3 from './pic3.jpg';
import pic4 from './pic4.jpg';
import pic5 from './pic5.jpg';
import pic6 from './pic6.jpg';
import pic7 from './pic7.jpg';
import pic8 from './pic8.jpg';
import pic9 from './pic9.jpg';
import pic10 from './pic10.jpg';
import pic11 from './pic11.jpg';
import bj from './bgm.mp3';

const SlideShowComponent = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [pic0, pic1, pic2, pic10, pic9, pic3, pic4, pic5, pic6, pic11, pic7, pic8];
    const audioRef = React.createRef();

    useEffect(() => {
        audioRef.current.play();

        const timer = setTimeout(() => {
            setCurrentImageIndex((prevIndex) => {
                if ((prevIndex + 1) % images.length === 0) {
                    prevIndex++;
                }
                return (prevIndex + 1) % images.length;
            });

            // setInterval을 사용하여 4초마다 실행
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => {
                    if ((prevIndex + 1) % images.length === 0) {
                        return 0;
                    }
                    return (prevIndex + 1) % images.length;
                });
            }, 4000);

            // 컴포넌트 언마운트 시 interval 정리
            return () => clearInterval(interval);
        }, 41000);

        // 컴포넌트 언마운트 시 timer 정리
        return () => clearTimeout(timer);
    }, [images]);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <ImageComponent imageSrc={moon3} />
            <p style={{ color: '#ffe073' }}>Moon is beautiful, isn't it?</p>
            <img src={images[currentImageIndex]} alt="Slide" style={{ width: '300px', height: 'auto' }} />
            <br />
            <audio ref={audioRef} src={bj} controls hidden />
        </div>
    );
};

export default SlideShowComponent;