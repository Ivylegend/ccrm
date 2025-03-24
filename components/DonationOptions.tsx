import React from "react";
import { HandHeart } from "lucide-react";
import { involvementWays } from "@/constants";

const DonationOptions = () => {
  return (
    <section className="py-16 px-6 bg-white" id="donation-options">
      <div className="container mx-auto">
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
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-soft"
                >
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
                Join us in our mission to support children&apos;s spiritual
                growth and development
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
      </div>
    </section>
  );
};

export default DonationOptions;
