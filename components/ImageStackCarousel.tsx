"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";

interface ImageStackCarouselProps {
  images: StaticImageData[];
  splash: StaticImageData;
}

const ImageStackCarousel: React.FC<ImageStackCarouselProps> = ({
  images,
  splash,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-[360px] md:w-[400px] h-[250px] md:h-[400px] mx-auto">
      {/* Static Splash Background */}
      <Image
        src={splash}
        alt="splash bg"
        className="absolute left-0 inset-0 object-contain w-full h-full -z-10"
      />

      {/* Images with Fan Effect */}
      {images.map((image, index) => {
        let position = "opacity-0 scale-90 z-0";
        let translateX = "translate-x-0";
        let rotate = "rotate-0";

        if (index === currentIndex) {
          position = "opacity-100 scale-100 z-10";
        } else if (
          index ===
          (currentIndex - 1 + images.length) % images.length
        ) {
          position = "opacity-80 scale-95 z-5";
          translateX = "-translate-x-[150px]";
          rotate = "-rotate-12";
        } else if (index === (currentIndex + 1) % images.length) {
          position = "opacity-80 scale-95 z-5";
          translateX = "translate-x-[150px]";
          rotate = "rotate-12";
        }

        return (
          <Image
            key={index}
            src={image}
            alt="carousel-image"
            className={`absolute top-1/2 left-[13%] transform -translate-y-1/2 object-contain w-[300px] h-[200px] md:h-[400px] transition-all duration-700 ease-in-out ${position} ${translateX} ${rotate}`}
          />
        );
      })}

      {/* Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md z-20"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow-md z-20"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default ImageStackCarousel;
