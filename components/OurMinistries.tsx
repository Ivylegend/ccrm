"use client";

import { StaticImageData } from "next/image";
import React from "react";
import spalsh1 from "../public/blue-splash.jpeg";
import spalsh2 from "../public/purple-splash.jpeg";
import spalsh3 from "../public/yellow-splash.jpeg";
import bicycle from "../public/ride-bicycle.jpg";
import bicycle2 from "../public/image.png";
import bicycle3 from "../public/about-image.png";
import ImageStackCarousel from "./ImageStackCarousel";

const bicycleImages = [bicycle, bicycle2, bicycle3, bicycle, bicycle2, bicycle3];

declare type MinistryCardProps = {
  title: string;
  description: string;
  splash: StaticImageData;
  reverse?: boolean;
};

const MinistryCard = ({
  title,
  description,
  splash,
  reverse,
}: MinistryCardProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row my-10 mx-auto w-full md:w-[80%] gap-4 md:gap-8 items-center justify-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2 overflow-hidden">
        <ImageStackCarousel images={bicycleImages} splash={splash} />
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
    <section className="min-h-screen p-6 md:p-10 lg:p-20">
      <h2 className="text-center font-semibold text-3xl mb-10 md:mb-0 lg:text-5xl text-[#0A1768]">
        Our Ministries
      </h2>

      {/* Ministry Sections */}
      <MinistryCard
        title="Games Outreach"
        description="Good News Club ministries take place in neighborhood settings such as homes, schools, and community centers all over the world and are designed to bring the Gospel of Christ to children on their level in their environment."
        splash={spalsh1}
        reverse
      />

      <MinistryCard
        title="Good News Bible Club"
        description="Good News Club ministries take place in neighborhood settings such as homes, schools, and community centers all over the world and are designed to bring the Gospel of Christ to children on their level in their environment."
        splash={spalsh2}
      />

      <MinistryCard
        title="Character and Charisma Camp"
        description="Good News Club ministries take place in neighborhood settings such as homes, schools, and community centers all over the world and are designed to bring the Gospel of Christ to children on their level in their environment."
        splash={spalsh3}
        reverse
      />
    </section>
  );
};

export default OurMinistries;
