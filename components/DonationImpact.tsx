import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const DonationImpact = () => {
  const impacts = [
    {
      amount: "₦5,000",
      impact: "Provides educational materials for one child for a month",
      beneficiaries: "1 child",
    },
    {
      amount: "₦20,000",
      impact:
        "Funds a teacher training workshop for effective teaching methods",
      beneficiaries: "Impacts 30+ children",
    },
    {
      amount: "₦50,000",
      impact: "Supplies a classroom with essential learning resources",
      beneficiaries: "Benefits an entire class",
    },
    {
      amount: "₦100,000",
      impact: "Sponsors a community learning center for a month",
      beneficiaries: "Serves an entire community",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold text-ccrm-blue mb-4">
            Your Donation Makes a Difference
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how your generous contributions directly impact children's
            education across Nigeria.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((item, index) => (
            <Card key={index} className="overflow-hidden hover-lift bg-white">
              <div className="h-2 bg-ccrm-yellow"></div>
              <CardContent className="p-6 text-center">
                <p className="text-3xl font-bold text-ccrm-blue mb-4">
                  {item.amount}
                </p>
                <p className="text-gray-700 mb-3">{item.impact}</p>
                <p className="text-sm font-medium text-ccrm-blue bg-ccrm-yellow/20 inline-block px-3 py-1 rounded-full">
                  {item.beneficiaries}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-lg text-gray-700">
            "Every contribution, no matter the size, brings us closer to our
            goal of taking the Word of God to every child in Nigeria."
          </p>
          <p className="mt-2 font-medium">— CCRM Leadership</p>
        </div>
      </div>
    </section>
  );
};

export default DonationImpact;
