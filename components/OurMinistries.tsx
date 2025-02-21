import Image, { StaticImageData } from "next/image";
import React from "react";
import spalsh1 from "../public/blue-splash.jpeg";
import spalsh2 from "../public/purple-splash.jpeg";
import spalsh3 from "../public/yellow-splash.jpeg";
import bicycle from "../public/ride-bicycle.jpg";

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
      className={`flex my-10 mx-auto w-full md:w-[80%] gap-8 items-center justify-center ${
        reverse ? "flex-row-reverse" : ""
      }`}
    >
      <div className="relative w-1/2">
        {/* Splash Background (Behind) */}
        <Image
          src={splash}
          alt="splash bg"
          className="absolute left-0 inset-0 object-contain w-full h-[400px] -z-10"
        />

        {/* Bicycle Image (In Front) */}
        <Image
          src={bicycle}
          alt="bicycle"
          className="relative z-10 h-[400px] object-contain w-[400px]"
        />
      </div>
      <div className="w-1/2">
        <h3 className="font-semibold text-[#0A1768] italic text-2xl">
          {title}
        </h3>
        <p className="text-lg my-5">{description}</p>
      </div>
    </div>
  );
};

const OurMinistries = () => {
  return (
    <section className="min-h-screen p-20">
      <h2 className="text-center font-semibold text-5xl text-[#0A1768]">
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
        title="Games Outreach"
        description="Good News Club ministries take place in neighborhood settings such as homes, schools, and community centers all over the world and are designed to bring the Gospel of Christ to children on their level in their environment."
        splash={spalsh3}
        reverse
      />
    </section>
  );
};

export default OurMinistries;
