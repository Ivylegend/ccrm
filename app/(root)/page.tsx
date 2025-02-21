import Hero from "@/components/Hero";
import OurVision from "@/components/OurVision";
import Image from "next/image";
import founders from "../../public/founders.jpeg";
import UpcomingPrograms from "@/components/UpcomingPrograms";
import { Button } from "@/components/ui/button";
import OurMinistries from "@/components/OurMinistries";

export default function Home() {
  return (
    <div>
      <Hero />

      <OurVision />

      <section className="flex mx-auto p-20 justify-center items-center gap-8 w-[80%]">
        <Image src={founders} alt="founders" />
        <div className="space-y-5 max-w-[480px]">
          <h2 className="font-semibold text-2xl text-[#0A1768]">
            A new beginning
          </h2>
          <div className="text-lg font-medium">
            <p>
              The vision of Children&apos;s Creative Resource Ministry (CCRM) was
              birthed in 2022 through a couple, Evangelists Nick & Shola Icha.
              This was after spending time with the Lord to receive directions.
              In 2021, Evangelist Nick Icha retired from Children Evangelism
              Ministry International (CEM) after a 30-year full time missionary
              service with the organisation.
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

      <UpcomingPrograms />
    </div>
  );
}
