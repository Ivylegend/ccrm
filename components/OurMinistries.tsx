"use client";

import { StaticImageData } from "next/image";
import React from "react";
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
} from "@/constants";

declare type MinistryCardProps = {
  title: string;
  description: string;
  splash: StaticImageData;
  images: StaticImageData[];
  reverse?: boolean;
};

const MinistryCard = ({
  title,
  description,
  splash,
  reverse,
  images,
}: MinistryCardProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row my-10 mx-auto w-full md:w-[80%] md:gap-8 items-center justify-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2 overflow-hidden">
        <ImageStackCarousel images={images} splash={splash} />
      </div>
      <div className="md:w-1/2">
        <h3 className="font-semibold text-[#0A1768] italic text-2xl">
          {title}
        </h3>
        <p className="text-lg my-2 md:my-5">{description}</p>
      </div>
    </div>
  );
};

const OurMinistries = () => {
  return (
    <section className="min-h-[80vh] p-6 md:p-10 lg:p-20">
      <h2 className="text-center font-semibold text-3xl mt-8 mb-0 md:mt-0 lg:text-5xl text-[#0A1768]">
        Our Ministries
      </h2>

      {/* Ministry Sections */}
      <MinistryCard
        title="Annual holiday camps"
        description="The Character & Charisma Camp is a free annual holiday camp in Ibadan, Nigeria, where children enjoy fun activities, learn new skills, and receive spiritual guidance in a nurturing environment."
        splash={spalsh1}
        images={characterCharisma}
      />

      <MinistryCard
        title="Monthly Game Outreach"
        description="Good News Club ministries take place in neighborhood settings such as homes, schools, and community centers all over the world and are designed to bring the Gospel of Christ to children on their level in their environment."
        splash={spalsh2}
        reverse
        images={gamesOutreach}
      />

      <MinistryCard
        title="Easter Outreach"
        description="Bible Clubs take place in neighborhood settings such as homes, schools, and community centers all over the world and are designed to bring the Gospel of Christ to children on their level in their environment."
        splash={spalsh3}
        images={easterOutreach}
      />

      <MinistryCard
        title="Weekly Bible Clubs"
        description="Bible Clubs take place in neighborhood settings such as homes, schools, and community centers all over the world and are designed to bring the Gospel of Christ to children on their level in their environment."
        splash={spalsh2}
        images={bicycleImages}
        reverse
      />

      <MinistryCard
        title="Distribution of children's Bibles and resources"
        description="Good News Club ministries take place in neighborhood settings such as homes, schools, and community centers all over the world and are designed to bring the Gospel of Christ to children on their level in their environment."
        splash={spalsh1}
        images={bibleDistribution}
      />

      <MinistryCard
        title="Christmas Outreaches"
        description="Good News Club ministries take place in neighborhood settings such as homes, schools, and community centers all over the world and are designed to bring the Gospel of Christ to children on their level in their environment."
        splash={spalsh3}
        reverse
        images={christmasOutreach}
      />
    </section>
  );
};

export default OurMinistries;
