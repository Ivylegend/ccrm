"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroProps {
  title: string | string[];
  subtitle?: string;
  backgroundImage?: string;
  buttonText?: string;
  buttonLink?: string;
  alignment?: "left" | "center" | "right";
  overlayOpacity?: string;
  height?: string;
  textRotationInterval?: number;
}

const HeroHeader = ({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
  buttonText,
  buttonLink,
  alignment = "center",
  overlayOpacity = "bg-black/40",
  height = "min-h-[600px]",
  textRotationInterval = 3000,
}: HeroProps) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  // If title is an array, set up rotation
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const titleArray = Array.isArray(title) ? title : [title];

  useEffect(() => {
    if (titleArray.length <= 1) return;

    const changeText = () => {
      setIsChanging(true);
      setTimeout(() => {
        setCurrentTitleIndex(
          (prevIndex) => (prevIndex + 1) % titleArray.length
        );
        setIsChanging(false);
      }, 500); // Fade out time
    };

    const interval = setInterval(changeText, textRotationInterval);
    return () => clearInterval(interval);
  }, [titleArray.length, textRotationInterval]);

  return (
    <div
      className={`relative ${height} w-full flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayOpacity}`}></div>

      {/* Content */}
      <div
        className={`container relative z-10 px-6 py-16 flex flex-col ${alignmentClasses[alignment]} space-y-6 animate-fade-in`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white max-w-3xl leading-tight">
          <span
            className={`transition-opacity duration-500 ${
              isChanging ? "opacity-0" : "opacity-100"
            }`}
          >
            {titleArray[currentTitleIndex]}
          </span>
        </h1>

        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-light">
            {subtitle}
          </p>
        )}

        {buttonText && buttonLink && (
          <div
            className="mt-4 animate-slide-in"
            style={{ animationDelay: "0.2s" }}
          >
            <Link href={buttonLink}>
              <Button
                size="lg"
                className="bg-ccrm-yellow text-ccrm-blue font-semibold hover:bg-white hover:text-[#0A1768] transition-all duration-300 cursor-pointer"
              >
                {buttonText}
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroHeader;
