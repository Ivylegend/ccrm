"use client";

import React from "react";
import { motion } from "framer-motion";
import ProgramCard from "./ProgramCard";
import { BookOpen, Tent, Gamepad } from "lucide-react";

const OurVision = () => {
  const programs = [
    {
      title: "Our Vision",
      description:
        "Scriptural basis: The Lord gave the word: great was the company of those that published it. Psalm 68:11 (KJV) A wise teacher makes learning a joy; Proverbs 15:2a (TLB)",
      icon: <BookOpen size={24} />,
      link: "/about#vision",
      iconClassName: "bg-green-500",
    },
    {
      title: "Our Mission",
      description:
        "CCRM seeks to creatively share the holistic gospel of our Lord Jesus Christ with boys and girls. The vision is to see them saved, filled with the Holy Spirit, and discipled. Additionally, they will be helped to develop godly character, discover their potential, and maximise it for God's glory and humanity's benefit.",
      icon: <Tent size={24} />,
      link: "/about#mission",
      iconClassName: "bg-purple-500",
    },
    {
      title: "Participate",
      description:
        "Join us in our mission to support children's spiritual growth and developmentJoin us in our mission to support children's spiritual growth and development",
      icon: <Gamepad size={24} />,
      link: "/about#get-involved",
      iconClassName: "bg-blue-500",
    },
  ];

  return (
    <motion.div
      className="px-6 md:px-10 lg:px-20 py-10 flex flex-col lg:flex-row items-center justify-center gap-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {programs.map((program, index) => (
        <motion.div
          key={index}
          initial={{
            y: 50,
            opacity: 0,
            scale: 0.9,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: index * 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <ProgramCard
            title={program.title}
            description={program.description}
            icon={program.icon}
            link={program.link}
            iconClassName={program.iconClassName}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default OurVision;
