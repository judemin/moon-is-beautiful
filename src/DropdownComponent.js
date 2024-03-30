// src/DropdownComponent.js
import React, { useState } from 'react';
import ImageComponent from './ImageComponent';
import SlideShowComponent from './SlideShowComponent';
import moon1 from './moon1.png';
import moon2 from './moon2.png';
import moon3 from './moon3.png';

const DropdownComponent = () => {
    const [show, setShow] = useState(false);
    const [showSlideShow, setShowSlideShow] = useState(false);
    const [hideMenu, setHideMenu] = useState(false);
    const [menuOptions, setMenuOptions] = useState([
        { id: 1, label: '240p', imageSrc: moon1 },
        { id: 2, label: '480p', imageSrc: moon2 },
        { id: 3, label: '720p', imageSrc: moon3 },
    ]);
    const [selectedImageSrc, setSelectedImageSrc] = useState(moon1);

    const handleMenuChange = (option) => {
        setSelectedImageSrc(option.imageSrc);
        if (option.id === 3 && show == false) {
            setMenuOptions([...menuOptions, { id: 4, label: '1080p' }]);
            setShow(true);
        } else if (option.id === 4) {
            setShowSlideShow(true);
            setHideMenu(true);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {!hideMenu && <ImageComponent imageSrc={selectedImageSrc} />}
            <div style={{ marginTop: '20px' }}>
                {!hideMenu && (<select
                    value=""
                    onChange={(e) =>
                        handleMenuChange(
                            menuOptions.find((option) => option.id === parseInt(e.target.value))
                        )
                    }
                >
                    <option value="" disabled hidden>
                        Moon is beautiful, isn't it?
                    </option>
                    {menuOptions.map((option) => (
                        <option key={option.id} value={option.id}>
                            {option.label}
                        </option>
                    ))}
                </select>
                )}
                {showSlideShow ? <SlideShowComponent /> : null}
            </div>
        </div>
    );
};

export default DropdownComponent;