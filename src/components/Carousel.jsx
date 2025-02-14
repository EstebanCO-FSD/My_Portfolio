import React, { useEffect, useState } from 'react';
import Slider from 'react-infinite-logo-slider';
import '@assets/css/Carousel.css';

const skills = {
    frontend: ["html", "css", "sapui5", "react", "javascript"],
    backend: ["node", "aws", "spring", "java", "mongo", "sql", "sap_btp", "python"],
};

function Carousel({ category }) {
    const items = skills[category] || [];
    const [images, setImages] = useState([]);

    useEffect(() => {
        Promise.all(
            items.map(item => import(`@assets/img/${category}/${item}.png`))
        ).then(setImages);
    }, [category]);

    return (
        <div className="carousel-wrapper">
            <Slider width="160px" duration={40} pauseOnHover className="carousel-slider">
                {images.map((image, index) => (
                    <Slider.Slide key={index}>
                        <img src={image.default} className="carousel-image" />
                    </Slider.Slide>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;
