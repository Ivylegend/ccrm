"use client";

import { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";
import ImageStackCarousel from "./ImageStackCarousel";
import spalsh1 from "../public/blue-splash.jpeg";
import spalsh2 from "../public/purple-splash.jpeg";
import spalsh3 from "../public/yellow-splash.jpeg";
import {
  bibleDistribution,
  bicycleImages,
  characterCharisma,
  christmasOutreach,
  easterOutreach,
  gamesOutreach,
  trainingPics,
} from "@/constants/images";

declare type MinistryCardProps = {
  title: string;
  description: string;
  splash: StaticImageData;
  images: StaticImageData[];
  reverse?: boolean;
  index?: number;
};

const MinistryCard = ({
  title,
  description,
  splash,
  reverse,
  images,
  index = 0,
}: MinistryCardProps) => {
  return (
    <motion.div
      className={`flex flex-col md:flex-row my-10 mx-auto w-full md:w-[80%] md:gap-8 items-center justify-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <motion.div
        className="md:w-1/2 overflow-hidden"
        initial={{
          opacity: 0,
          x: reverse ? 50 : -50,
          scale: 0.9,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          delay: 0.3 + index * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
      >
        <ImageStackCarousel images={images} splash={splash} />
      </motion.div>

      <div className="md:w-1/2">
        <motion.h3
          className="font-semibold font-balsamiq text-[#0A1768] italic text-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: 0.4 + index * 0.1,
          }}
          whileHover={{
            scale: 1.05,
            color: "#1e40af",
            transition: { duration: 0.2 },
          }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-lg my-2 md:my-5 font-comic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            delay: 0.5 + index * 0.1,
          }}
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
};

const OurMinistries = () => {
  const ministries = [
    {
      title: "Annual Holiday Camps",
      description:
        "This annual holiday camp for boys and girls (aged 4-15) commenced in August 2022. The camp aims to develop godly character and ethics in children, helping them discover their potential to serve God and humanity.",
      splash: spalsh1,
      images: characterCharisma,
    },
    {
      title: "Monthly Game Outreach",
      description:
        "This event takes place on the first Sunday of every month at 4:30 pm. It is open to boys and girls in the neighbourhood, including those from non-Christian backgrounds. Various games and sports are played, followed by a brief sharing of God's Word and an altar call. Many children have invited Jesus into their hearts during these events. Snacks are served, and the children then depart. Some attendees have joined our weekly Bible Club programme.",
      splash: spalsh2,
      reverse: true,
      images: gamesOutreach,
    },
    {
      title: "Easter Outreach",
      description:
        "On Easter Monday at 10 am, the children gather for worship, a message and altar call. They are then released to their age-grouped classes for Bible lessons and activities. Lunch is served, followed by outdoor games. The children are then dismissed.",
      splash: spalsh3,
      images: easterOutreach,
    },
    {
      title: "Weekly Bible Clubs",
      description:
        "Bible Clubs take place in neighborhood settings such as homes, schools, and community centers all over the world and are designed to bring the Gospel of Christ to children on their level in their environment.",
      splash: spalsh2,
      images: bicycleImages,
      reverse: true,
    },
    {
      title: "Distribution of children's Bibles and Resources",
      description:
        "Good News Club ministries take place in neighborhood settings such as homes, schools, and community centers all over the world and are designed to bring the Gospel of Christ to children on their level in their environment.",
      splash: spalsh1,
      images: bibleDistribution,
    },
    {
      title: "Christmas Outreach",
      description:
        "Our Christmas programs share the joy and true meaning of the season through festive events for children and families. From nativity plays to gift-giving initiatives, these celebrations create meaningful holiday traditions centered on the gift of Christ.",
      splash: spalsh3,
      reverse: true,
      images: christmasOutreach,
    },
    {
      title: "Training Programmes",
      description:
        "At CCRM, we're passionate about equipping children's teachers, caregivers, and parents with the skills and knowledge needed to inspire and nurture young minds. Our comprehensive training programmes, offered both online and onsite, provide practical insights and expert guidance on topics such as teaching, parenting, and spiritual growth.",
      splash: spalsh3,
      images: trainingPics,
    },
  ];

  return (
    <motion.section
      className="min-h-[80vh] p-6 md:p-10 lg:p-20 bg-gray-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-center font-semibold text-3xl mt-8 mb-0 md:mt-0 lg:text-5xl text-[#0A1768]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
      >
        Our Programs
      </motion.h2>

      {/* Ministry Sections */}
      {ministries.map((ministry, index) => (
        <MinistryCard
          key={index}
          index={index}
          title={ministry.title}
          description={ministry.description}
          splash={ministry.splash}
          images={ministry.images}
          reverse={ministry.reverse}
        />
      ))}
    </motion.section>
  );
};

export default OurMinistries;
