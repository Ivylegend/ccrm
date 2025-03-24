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
        <h3 className="font-semibold font-balsamiq text-[#0A1768] italic text-2xl">
          {title}
        </h3>
        <p className="text-lg my-2 md:my-5 font-comic">{description}</p>
      </div>
    </div>
  );
};

const OurMinistries = () => {
  return (
    <section className="min-h-[80vh] p-6 md:p-10 lg:p-20 bg-gray-50">
      <h2 className="text-center font-semibold text-3xl mt-8 mb-0 md:mt-0 lg:text-5xl text-[#0A1768]">
        Our Programs
      </h2>

      {/* Ministry Sections */}
      <MinistryCard
        title="Annual Holiday Camps"
        description="This annual holiday camp for boys and girls (aged 4-15) commenced in August 2022. The camp aims to develop godly character and ethics in children, helping them discover their potential to serve God and humanity."
        splash={spalsh1}
        images={characterCharisma}
      />

      <MinistryCard
        title="Monthly Game Outreach"
        description="This event takes place on the first Sunday of every month at 4:30 pm. It is open to boys and girls in the neighbourhood, including those from non-Christian backgrounds. Various games and sports are played, followed by a brief sharing of God's Word and an altar call. Many children have invited Jesus into their hearts during these events. Snacks are served, and the children then depart. Some attendees have joined our weekly Bible Club programme."
        splash={spalsh2}
        reverse
        images={gamesOutreach}
      />

      <MinistryCard
        title="Easter Outreach"
        description="On Easter Monday at 10 am, the children gather for worship, a message and altar call. They are then released to their age-grouped classes for Bible lessons and activities. Lunch is served, followed by outdoor games. The children are then dismissed."
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
        title="Distribution of children's Bibles and Resources"
        description="Good News Club ministries take place in neighborhood settings such as homes, schools, and community centers all over the world and are designed to bring the Gospel of Christ to children on their level in their environment."
        splash={spalsh1}
        images={bibleDistribution}
      />

      <MinistryCard
        title="Christmas Outreach"
        description="Good News Club ministries take place in neighborhood settings such as homes, schools, and community centers all over the world and are designed to bring the Gospel of Christ to children on their level in their environment."
        splash={spalsh3}
        reverse
        images={christmasOutreach}
      />
    </section>
  );
};

export default OurMinistries;
