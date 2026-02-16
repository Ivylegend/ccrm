import React from "react";
import { Button } from "@/components/ui/button";
import { featuredResources, resourceCategories } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import HeroHeader from "@/components/HeroHeader";

const Resources = () => {
  return (
    <>
      <HeroHeader
        title="Creative Resources for Children's Ministry"
        subtitle="Engaging, biblically-sound materials to support children's spiritual development"
        backgroundImage="/bible-games.png"
      />

      {/* Resources Overview */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-ccrm-blue mb-4">
              Resources That Inspire and Educate
            </h2>
            <p className="text-lg text-gray-600">
              CCRM develops a wide range of creative, biblically-sound resources
              designed to make children&apos;s faith education engaging and
              effective. Our materials support parents, teachers, and ministry
              leaders in nurturing children&apos;s spiritual growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resourceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-soft hover-lift h-full"
              >
                <div
                  className={`w-16 h-16 rounded-lg ${category.color} flex items-center justify-center mb-5`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-ccrm-blue">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-ccrm-blue mb-4">
              Featured Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most popular materials for children&apos;s ministry
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredResources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-soft hover-lift"
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    <span className="px-3 py-1 bg-ccrm-yellow/20 text-ccrm-blue text-sm font-medium rounded-full">
                      {resource.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-display font-semibold mb-3 text-ccrm-blue">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {resource.description.title}
                  </p>
                  {resource.description.body.map((text, index) => (
                    <ul key={index} className="list-disc">
                      <li className="text-gray-600 mb-4">{text}</li>
                    </ul>
                  ))}
                  <div className="mt-6 border-t pt-4 text-center">
                    {resource.isNewRelease && <div>
                      <p className="text-sm font-semibold text-ccrm-blue">
                        New Release
                      </p>
                      <p className="text-sm text-gray-600 mb-3">
                        Hard copies available for purchase
                      </p>
                    </div>}

                    <div className="flex flex-col gap-2">
                      <a
                        href="tel:+2347084925570"
                        className="rounded-md bg-ccrm-blue px-4 py-2 font-medium text-white transition hover:opacity-90"
                      >
                        📞 0708 492 5570
                      </a>

                      <a
                        href="tel:+2348062302890"
                        className="rounded-md bg-ccrm-yellow px-4 py-2 font-medium text-ccrm-blue transition hover:opacity-90"
                      >
                        📞 0806 230 2890
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Request Form CTA */}
      <section className="py-16 px-6 bg-ccrm-blue text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Request Our Resources Catalog
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Fill out our resource request form to receive a complete catalog of
            our available materials.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-ccrm-blue hover:bg-ccrm-yellow transition-all duration-300"
            >
              Request Catalog
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Resources;
