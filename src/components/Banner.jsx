import React, { useState } from "react";

export const Banner = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative">
            <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} className="w-full h-auto" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4">
                <button onClick={prevSlide} className="text-white text-4xl">
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button onClick={nextSlide} className="text-white text-4xl">
                    <i className="fas fa-chevron-right"></i>
                </button>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 pb-2">
                {slides.map((_, index) => (
                    <span key={index} className={`inline-block w-3 h-3 mx-1 rounded-full ${currentSlide === index ? 'bg-blue-500' : 'bg-white'}`}></span>
                ))}
            </div>
        </div>
    );
};
