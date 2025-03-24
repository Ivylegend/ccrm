import Hero from "@/components/Hero";
import OurVision from "@/components/OurVision";
import Image from "next/image";
import founders from "../../public/founders.jpeg";
import { Button } from "@/components/ui/button";
import OurMinistries from "@/components/OurMinistries";
import Link from "next/link";

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
          <div className="md:text-lg space-y-3 font-medium text-justify">
            <p>
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
          <div>
            <Link href="/about#how-it-began">
              <Button className="bg-[#0A1768] font-semibold">Read More</Button>
            </Link>
          </div>
        </div>
      </section>

      <OurMinistries />

      {/* Impact Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-ccrm-blue mb-4">
                Making a Difference in Children&apos;s Lives
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our ministry is dedicated to helping children develop a strong
                foundation of faith and character that will guide them
                throughout their lives.
              </p>
              <ul className="space-y-4">
                {[
                  "Communicate God's Word in creative and fun ways to children",
                  "Create, publish, and distribute resource materials for children",
                  "Provide resource and recreational centres for children, parents, and children's ministers",
                  "Distribute children's Bibles and other resource materials",
                  "Teach children God's Word for life transformation using resource materials",
                  "Win children to Christ through evangelistic and educational programmes",
                  "Focus on developing godly character alongside spiritual gifts and talents",
                  "Provide counselling and training for parents and children's ministers",
                  "Establish a children's discipleship programme/junior Bible school",
                  "Offer practical aid (charity, scholarships) to children and those in need",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-ccrm-yellow flex items-center justify-center mr-3 mt-1">
                      <span className="text-ccrm-blue text-sm font-bold">
                        ✓
                      </span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link href="/about">
                  <Button className="bg-ccrm-blue text-white hover:bg-ccrm-lightBlue transition-all duration-300">
                    Learn About Our Mission
                  </Button>
                </Link>
              </div>
            </div>
            <div className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-glass">
              <img
                src="https://images.unsplash.com/photo-1533222535026-754c501569dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Children engaged in learning activities"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-ccrm-blue py-16 px-6 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Join Us in Nurturing Children&apos;s Faith
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Together, we can make a lasting impact on the lives of children
            through creative resources and engaging programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-ccrm-blue hover:bg-ccrm-yellow transition-all duration-300"
              >
                Contact Us
              </Button>
            </Link>
            <Link href="/resources">
              <Button
                size="lg"
                variant="outline"
                className="border-white bg-ccrm-lightBlue font-semibold text-white hover:bg-white hover:text-ccrm-blue transition-all duration-300"
              >
                Explore Our Resources
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
