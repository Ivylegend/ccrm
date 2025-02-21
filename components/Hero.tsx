import Image from "next/image";
import React from "react";
import ChildrenPics from "../public/children.webp";

const Hero = () => {
  return (
    <div className="w-full flex items-start justify-center gap-8 p-20">
      <div className="w-full md:w-1/2 flex justify-between h-full flex-col space-y-5">
        <div className="space-y-5 py-10">
          <h1 className="font-bold text-6xl text-[#0A1768]">
            Children&apos;s Creative Resource Ministry
          </h1>
          <p className="font-medium text-xl">
            At Children&apos;s Creative Resource Ministry, we are dedicated to
            nurturing young hearts with the gospel of Jesus Christ. Through
            trained and passionate mentors, we guide children to grow in faith,
            wisdom, and character—physically, spiritually, mentally, and
            socially—just as Christ did (Luke 2:52).
          </p>
        </div>

        <p className="italic mt-auto underline font-semibold">
          &quot;Teaching and equipping children for Christ&quot;
        </p>
      </div>
      <Image src={ChildrenPics} className="" alt="children" />
    </div>
  );
};

export default Hero;
