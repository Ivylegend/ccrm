"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import HeroImg from "@/public/hero-image.png";

const Hero = () => {
  return (
    <motion.div
      className="w-full flex flex-col md:flex-row items-center justify-center gap-8 p-6 pb-16 md:p-10 lg:p-20 mt-32 md:mt-20"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delayChildren: 0.3, staggerChildren: 0.2 },
      }}
    >
      <div className="w-full md:w-1/2 flex justify-between h-full flex-col md:space-y-5">
        <div className="space-y-5 lg:py-10">
          <motion.h1
            className="font-bold text-4xl lg:text-6xl text-[#0a1666] font-balsamiq"
            initial={{ y: 30, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.3 },
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            Children&apos;s Creative Resource Ministry
          </motion.h1>

          <motion.p
            className="font-medium text-lg lg:text-xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.6, delay: 0.5 },
            }}
          >
            Children&apos;s Creative Resource Ministry (CCRM) is a Christian
            missionary organisation focused on the salvation and holistic
            development of children.
          </motion.p>
        </div>

        <motion.p
          className="italic text-sm md:text-base font-balsamiq md:mt-auto underline font-semibold"
          initial={{ y: 0 }}
          animate={{
            y: [-5, 5, -5],
            transition: {
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          &quot;Teaching and equipping children for Christ&quot;
        </motion.p>
      </div>

      <motion.div
        initial={{ x: 50, opacity: 0, scale: 0.95 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
          transition: { duration: 0.8, delay: 0.7 },
        }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        className="md:w-1/2"
      >
        <Image src={HeroImg} className="w-full" alt="children" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
