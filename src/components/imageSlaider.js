import React from 'react';
import {useState} from 'react';
import '../css/curesel.css';

const ImageSlaider = ({ slides }) =>{
    const [currentIndex, setCurrentIndex] = useState(0);
   
    const slideStyles = {
        backgroundImage: `url(${slides[currentIndex].url})`,
    };

    
    const goToPrevious = () =>{
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () =>{
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0: currentIndex + 1;
        setCurrentIndex(newIndex)
    }
    const goToSlide = slideIndex =>{
        setCurrentIndex(slideIndex)
    }
    return (
        <div className='sliderStyles'>
            <div className='leftArrowSryles' onClick={goToPrevious}>&#10096;</div>
            <div className='slideStyles' style={slideStyles}></div>
            <div className='rightArrowSryles' onClick={goToNext}>&#10097;</div>
            <div className='dotsContainerStyles'>
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} className='dotStyles'
                    onClick={() => goToSlide(slideIndex)}>•</div>
                ))}
            </div>
        </div>
    )
}

export default ImageSlaider