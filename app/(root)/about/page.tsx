import Image from "next/image";
import PresidentPrayer from "@/public/president-prayer.png";
import Banner from "@/public/about-banner.png";
import founders from "@/public/founders.jpeg";
import MissionStatement from "@/components/MissionStatement";
import { CheckCircle, HandHeart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProgramCard from "@/components/ProgramCard";
import { involvementWays, programs } from "@/constants";

export default function About() {
  return (
    <div>
      <div className="bg-red-500 w-full h-100">
        <Image src={Banner} alt="banner" className="w-full h-full" />
      </div>

      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-ccrm-blue mb-2">
              HOW IT ALL BEGAN
            </h2>
            <div className="w-24 h-1 bg-ccrm-yellow mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src={founders}
                alt="Children engaged in learning activities"
                className="w-full h-auto rounded-xl shadow-glass"
              />
            </div>
            <div>
              <p className="text-gray-700 mb-4">
                CCRM is a God-given initiative birthed in 2022 by Evangelists
                Nick and Shola Icha. Prior to this, Evangelist Nick Icha served
                as a full-time missionary in Children Evangelism Ministry
                International (CEM) for 30 years, retiring in 2021.
              </p>
              <p className="text-gray-700 mb-4">
                The President and founder of CEM, Evangelist Tony Chukwudile,
                released Evangelists Nick and Shola Icha from their service in
                June 2022 during the National Executive Council meeting of CEM.
                Following this, the couple sought God&apos;s guidance for their
                next steps in ministry, leading to the birth of CCRM.
              </p>
              <p className="text-gray-700 mb-4">
                In August 2023, Evangelist Tony Chukwudile dedicated Evangelists
                Nick and Shola Icha to their new assignment during the CEM
                International Children Ministers Conference (ICMC). He also
                pronounced blessings upon them to bear lasting fruits.
              </p>
              <p className="text-gray-700">
                CCRM was named on Saturday, 23rd July 2022, and registered with
                the Corporate Affairs Commission of Nigeria in 2023. The members
                of the Board of Trustees have also been duly appointed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        id="blessing"
        className="w-full flex justify-center gap-20 md:w-[80%] mx-auto my-20"
      >
        <div className="w-1/2 space-y-5">
          <h2 className="font-semibold text-3xl text-[#0A1768]">
            CEM President&apos;s Blessing
          </h2>
          <p className="text-lg font-medium text-justify">
            The President and founder of Children Evangelism Ministry
            International (CEM), Evangelist Tony Chukwudile, released
            Evangelists Nick & Shola Icha from their service in CEM in June 2022
            during the National Executive Council meeting of CEM and dedicated
            the couple for their new assignment during the CEM International
            Children Ministers Conference (ICMC) in August 2023. He pronounced
            blessings on them, to go forth and bear abiding fruits.
          </p>
        </div>
        <div className="w-1/2">
          <Image
            src={PresidentPrayer}
            alt="prayer by CEM President"
            className="w-full object-cover"
          />
        </div>
      </div>

      <MissionStatement
        title="CCRM'S Vision & Mission Statement"
        text="CCRM seeks to creatively reach boys and girls with the holistic gospel of our Lord Jesus Christ. The vision is to see them saved, filled with the Holy Spirit and discipled. Additionally, they will be helped to develop godly character, discover their potentials and maximise them for Gods glory and for the benefit of humanity."
        className="bg-gray-50"
      />

      <section className="py-10 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 italic">
              Scriptural basis: Psalm 68:11 (KJV) and Proverbs 15:2a (TLB)
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-soft max-w-3xl mx-auto">
            <p className="text-gray-700 text-center text-lg leading-relaxed">
              Additionally, children will be helped to develop godly character,
              discover their potential, and maximise it for God&apos;s glory and
              humanity&apos;s benefit.
            </p>
          </div>
        </div>
      </section>

      {/* Aims */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-ccrm-blue mb-4">
              CCRM AIMS TO:
            </h2>
            <div className="w-24 h-1 bg-ccrm-yellow mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Communicate God's Word in creative and fun ways to children.",
              "Create, publish, and distribute resource materials for children.",
              "Provide resource and recreational centres for children, parents, and children's ministers.",
              "Distribute children's Bibles and other resource materials.",
              "Teach children God's Word for life transformation using resource materials.",
              "Win children to Christ through evangelistic and educational programmes.",
              "Focus on developing godly character alongside spiritual gifts and talents.",
              "Provide counselling and training for parents and children's ministers.",
              "Offer practical aid (charity, scholarships) to children and those in need.",
              "Establish a children's discipleship programme/junior Bible school.",
            ].map((aim, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-white p-4 rounded-lg shadow-soft"
              >
                <CheckCircle className="h-6 w-6 text-ccrm-blue flex-shrink-0 mt-0.5" />
                <p className="text-gray-700">{aim}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CCRM's Strategy */}
      <section className="py-16 px-6 bg-ccrm-blue text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-display font-bold mb-8">
            CCRM&apos;S STRATEGY
          </h2>
          <p className="text-xl leading-relaxed">
            Our fundamental strategy is to present Go&apos;s Word in creative
            and fun ways. Children are fun-loving, so it is essential to use
            enjoyable methods to draw them to Christ, making God&apos;s Word
            appealing and interesting.
          </p>
        </div>
      </section>

      {/* CCRM's Programs Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-ccrm-blue mb-4">
              CCRM&apos;S PROGRAMMES & PROJECTS
            </h2>
            <div className="w-24 h-1 bg-ccrm-yellow mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most of these programmes are free, with no registration fees
              attached.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                description={program.description}
                icon={program.icon}
                link={program.link}
                iconClassName={program.iconClassName}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CCRM's Needs Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-ccrm-blue mb-4">
              CCRM&apos;S PROJECTS & NEEDS
            </h2>
            <div className="w-24 h-1 bg-ccrm-yellow mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              "Intercessors",
              "Volunteers",
              "CCRM offices/accommodation",
              "Office equipment and accessories",
              "A bus",
              "Game and sports equipment",
              "Gadgets and tools for recreational and resource centres",
              "Play fields to host games and sports outreaches",
              "Financial support",
            ].map((need, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-soft">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-ccrm-blue flex items-center justify-center">
                    <span className="font-bold text-sm text-white">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-700">{need}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Get Involved Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-ccrm-blue mb-4">
              HOW YOU CAN GET INVOLVED
            </h2>
            <div className="w-24 h-1 bg-ccrm-yellow mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join us in our mission to support children&apos;s spiritual growth
              and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {involvementWays.map((way, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-soft hover-lift border border-gray-100"
              >
                <div className="w-12 h-12 rounded-full bg-ccrm-blue/10 flex items-center justify-center mb-5">
                  <HandHeart className="h-6 w-6 text-ccrm-blue" />
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-ccrm-blue">
                  {way.title}
                </h3>
                <p className="text-gray-600">{way.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 bg-ccrm-blue text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Join Our Mission to Support Children&apos;s Faith Journey
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Help us continue creating innovative resources and programs that
            nurture children&apos;s spiritual growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-ccrm-blue hover:bg-ccrm-yellow font-semibold transition-all duration-300"
              >
                Get Involved
              </Button>
            </Link>
            <Link href="/programs">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-ccrm-lightBlue font-semibold text-white hover:bg-white hover:text-ccrm-blue transition-all duration-300"
              >
                Explore Our Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
