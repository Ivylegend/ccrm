import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BookOpen, Tent, Gamepad, Heart, Gift } from "lucide-react";
import Link from "next/link";
import bibleClub from "@/public/hero-image.png";
import camps from "@/public/character-charisma/1.jpeg";
import easterOutreach from "@/public/easter-outreach/3.jpeg";
import games from "@/public/easter-outreach/5.jpeg";
import christmasOutreach from "@/public/christmas-outreach/2.jpeg";
import bibleDistribution from "@/public/bible-distribution/2.jpeg";
import HeroHeader from "@/components/HeroHeader";

const Programs = () => {
  const programs = [
    {
      id: "bible-clubs",
      title: "Children's Bible Clubs",
      description:
        "Our Bible Clubs provide a fun, engaging environment where children learn biblical truths through stories, games, and creative activities. Meeting weekly, these clubs help children build a strong foundation of faith while developing meaningful friendships.",
      activities: [
        "Interactive Bible storytelling",
        "Character-building games and activities",
        "Songs and creative worship",
        "Craft projects that reinforce biblical lessons",
        "Small group discussions appropriate for different age groups",
      ],
      image: bibleClub,
      icon: <BookOpen size={24} />,
      color: "bg-green-500",
    },
    {
      id: "holiday-camps",
      title: "Character & Charisma Camps",
      description:
        "During school breaks, our holiday camps offer children an immersive experience combining faith education with outdoor adventures, arts, and team-building activities. These camps create lasting memories while nurturing children's spiritual growth.",
      activities: [
        "Daily Bible exploration and devotional time",
        "Outdoor adventures and nature exploration",
        "Team challenges and cooperative games",
        "Arts and crafts workshops",
        "Evening campfires with stories and reflection",
      ],
      image: camps,
      icon: <Tent size={24} />,
      color: "bg-purple-500",
    },
    {
      id: "game-outreach",
      title: "Monthly Game Outreach",
      description:
        "Our game outreach events use the universal language of play to teach important life values and biblical principles. These monthly gatherings are designed to be welcoming for all children, creating opportunities to build community and share faith in a relaxed environment.",
      activities: [
        "Team sports with embedded character lessons",
        "Strategy games that build critical thinking skills",
        "Cooperative challenges that teach teamwork",
        "Interactive digital games with positive messages",
        "Board game sessions that facilitate connection and conversation",
      ],
      image: games,
      icon: <Gamepad size={24} />,
      color: "bg-blue-500",
    },
    {
      id: "easter-outreach",
      title: "Easter Outreach",
      description:
        "Our Easter programs celebrate the resurrection story through creative activities, community events, and special services. These outreach efforts help children understand the significance of Easter beyond cultural traditions, focusing on hope and new life.",
      activities: [
        "Interactive resurrection story experiences",
        "Family-friendly Easter services",
        "Art projects exploring themes of new life",
        "Easter-themed puppet shows and performances",
      ],
      image: easterOutreach,
      icon: <Heart size={24} />,
      color: "bg-pink-500",
    },
    {
      id: "christmas-outreach",
      title: "Christmas Outreach",
      description:
        "Our Christmas programs share the joy and true meaning of the season through festive events for children and families. From nativity plays to gift-giving initiatives, these celebrations create meaningful holiday traditions centered on the gift of Christ.",
      activities: [
        "Interactive nativity experiences",
        "Christmas caroling and music programs",
        "Gift-giving projects for children in need",
        "Christmas craft workshops",
        "Family-friendly Christmas services and pageants",
      ],
      image: christmasOutreach,
      icon: <Gift size={24} />,
      color: "bg-red-500",
    },
    {
      id: "bible-distribution",
      title: "Free Bible Distribution",
      description:
        "Our Christmas programs share the joy and true meaning of the season through festive events for children and families. From nativity plays to gift-giving initiatives, these celebrations create meaningful holiday traditions centered on the gift of Christ.",
      activities: [
        "Interactive nativity experiences",
        "Christmas caroling and music programs",
        "Gift-giving projects for children in need",
        "Christmas craft workshops",
        "Family-friendly Christmas services and pageants",
      ],
      image: bibleDistribution,
      icon: <Gift size={24} />,
      color: "bg-red-500",
    },
    {
      id: "training",
      title: "Training Programmes",
      description:
        "Our Christmas programs share the joy and true meaning of the season through festive events for children and families. From nativity plays to gift-giving initiatives, these celebrations create meaningful holiday traditions centered on the gift of Christ.",
      activities: [
        "Interactive nativity experiences",
        "Christmas caroling and music programs",
        "Gift-giving projects for children in need",
        "Christmas craft workshops",
        "Family-friendly Christmas services and pageants",
      ],
      image: christmasOutreach,
      icon: <Gift size={24} />,
      color: "bg-red-500",
    },
  ];

  return (
    <>
      <HeroHeader
        title="Our Programs"
        subtitle="Creative, engaging activities designed to nurture children's faith and character development"
        backgroundImage="https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
      />

      {/* Programs Overview */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-ccrm-blue mb-4">
              Engaging Programs for Children of All Ages
            </h2>
            <p className="text-lg text-gray-600">
              Our programs are designed to make faith education engaging,
              meaningful, and fun. Each program incorporates creative elements
              that capture children&apos;s imagination while teaching important
              values and biblical principles.
            </p>
          </div>

          {/* Program Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {programs.map((program) => (
              <a
                key={program.id}
                href={`#${program.id}`}
                className="px-4 py-2 rounded-full bg-gray-100 text-ccrm-blue hover:bg-ccrm-blue hover:text-white transition-all duration-300"
              >
                {program.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Program Sections */}
      {programs.map((program, index) => (
        <section
          key={program.id}
          id={program.id}
          className={`py-16 px-6 ${
            index % 2 === 0 ? "bg-gray-50" : "bg-white"
          }`}
        >
          <div className="container mx-auto">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`${
                  index % 2 === 1 ? "order-1 lg:order-2" : "order-1"
                }`}
              >
                <div className="flex items-center mb-6">
                  <div
                    className={`w-12 h-12 rounded-lg ${program.color} flex items-center justify-center mr-4`}
                  >
                    {program.icon}
                  </div>
                  <h2 className="text-3xl font-display font-bold text-ccrm-blue">
                    {program.title}
                  </h2>
                </div>

                <p className="text-gray-700 mb-6">{program.description}</p>

                <div className="mb-6">
                  <h3 className="text-xl font-display font-semibold text-ccrm-blue mb-3">
                    Activities Include:
                  </h3>
                  <ul className="space-y-2">
                    {program.activities.map((activity, i) => (
                      <li key={i} className="flex items-start">
                        <div className="h-5 w-5 rounded-full bg-ccrm-yellow flex items-center justify-center mr-3 mt-1">
                          <span className="text-ccrm-blue text-xs font-bold">
                            ✓
                          </span>
                        </div>
                        <span className="text-gray-700">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact">
                  <Button className={program.color}>Get Involved</Button>
                </Link>
              </div>

              <div
                className={`rounded-xl overflow-hidden shadow-glass ${
                  index % 2 === 1 ? "order-2 lg:order-1" : "order-2"
                }`}
              >
                <Image
                  src={program.image}
                  alt={program.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-16 px-6 bg-ccrm-blue text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-display font-bold mb-6">
            Ready to Join One of Our Programs?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
            Contact us to learn more about program schedules, registration, and
            how you can participate or volunteer.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-ccrm-blue hover:bg-ccrm-yellow transition-all duration-300"
            >
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Programs;
