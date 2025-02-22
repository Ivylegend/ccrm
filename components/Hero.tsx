import Image from "next/image";
import React from "react";
import HeroImg from "@/public/hero-image.png";

const Hero = () => {
  return (
    <div className="w-full xl:min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-8 p-6 pb-16 md:p-10 lg:p-20">
      <div className="w-full md:w-1/2 flex justify-between h-full flex-col md:space-y-5">
        <div className="space-y-5 lg:py-10">
          <h1 className="font-bold text-4xl lg:text-6xl text-[#0A1768]">
            Children&apos;s Creative Resource Ministry
          </h1>
          <p className="font-medium text-lg lg:text-xl">
            Children&apos;s Creative Resource Ministry (CCRM) is a Christian
            missionary organisation focused on the salvation and holistic
            development of children.
          </p>
        </div>

        <p className="italic text-sm md:text-base md:mt-auto underline font-semibold">
          &quot;Teaching and equipping children for Christ&quot;
        </p>
      </div>
      <Image src={HeroImg} className="md:w-1/2" alt="children" />
    </div>
  );
};

export default Hero;
