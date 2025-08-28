"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
    <motion.div
      className={`relative ${height} w-full flex items-center justify-center overflow-hidden`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Overlay */}
      <motion.div
        className={`absolute inset-0 ${overlayOpacity}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Floating background elements */}
      <motion.div
        className="absolute top-20 left-20 w-16 h-16 bg-white/10 rounded-full"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-16 w-12 h-12 bg-ccrm-yellow/20 rounded-full"
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Content */}
      <motion.div
        className={`container relative z-10 px-6 py-16 flex flex-col ${alignmentClasses[alignment]} space-y-6`}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white max-w-3xl leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.span
            key={currentTitleIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {titleArray[currentTitleIndex]}
          </motion.span>
        </motion.h1>

        {subtitle && (
          <motion.p
            className="text-xl md:text-2xl text-white/90 max-w-2xl font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {subtitle}
          </motion.p>
        )}

        {buttonText && buttonLink && (
          <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Link href={buttonLink}>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  className="bg-ccrm-yellow text-ccrm-blue font-semibold hover:bg-white hover:text-[#0A1768] transition-all duration-300 cursor-pointer"
                >
                  {buttonText}
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default HeroHeader;
