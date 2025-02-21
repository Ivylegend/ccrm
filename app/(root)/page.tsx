import Hero from "@/components/Hero";
import OurVision from "@/components/OurVision";
import Image from "next/image";
import founders from "../../public/founders.jpeg";
import { Button } from "@/components/ui/button";
import OurMinistries from "@/components/OurMinistries";

export default function Home() {
  return (
    <div>
      <Hero />

      <OurVision />

      <section className="flex mx-auto p-6 md:p-10 lg:py-20 flex-col md:flex-row justify-center items-center md:gap-8 w-full lg:w-[80%]">
        <h2 className="my-8 md:hidden font-semibold text-2xl text-[#0A1768]">
          HOW IT ALL BEGAN
        </h2>
        <Image src={founders} alt="founders" />
        <div className="space-y-5 max-w-[480px]">
          <h2 className="hidden md:block font-semibold text-2xl text-[#0A1768]">
            HOW IT ALL BEGAN
          </h2>
          <div className="md:text-lg font-medium">
            <p className="font-medium">
              The vision of Children&apos;s Creative Resource Ministry (CCRM)
              was birthed in 2022 through a couple, Evangelists Nick & Shola
              Icha. This was after spending time with the Lord to receive
              directions. In 2021, Evangelist Nick Icha retired from Children
              Evangelism Ministry International (CEM) after a 30-year full time
              missionary service with the organisation.
            </p>
            <p>
              CCRM was named on 23rd July, 2022 and registered with the
              Corporate Affairs Commission of Nigeria in 2023. The Board of
              Trustees of CCRM have been duly appointed.
            </p>
          </div>
          <Button className="bg-[#0A1768] font-semibold">Read More</Button>
        </div>
      </section>

      <OurMinistries />

    </div>
  );
}
