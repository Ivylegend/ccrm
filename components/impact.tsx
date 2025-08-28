"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const ImpactSection = () => {
  const impactItems = [
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
  ];

  return (
    <motion.section
      className="py-16 px-6 bg-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <motion.h2
              className="text-3xl md:text-4xl font-display font-bold text-ccrm-blue mb-4"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
              }}
            >
              Making a Difference in Children&apos;s Lives
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our ministry is dedicated to helping children develop a strong
              foundation of faith and character that will guide them throughout
              their lives.
            </motion.p>

            <motion.ul
              className="space-y-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {impactItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.5 + index * 0.05,
                  }}
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.2 },
                  }}
                >
                  <motion.div
                    className="h-6 w-6 rounded-full bg-ccrm-yellow flex items-center justify-center mr-3 mt-1"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.5 },
                    }}
                  >
                    <span className="text-ccrm-blue text-sm font-bold">✓</span>
                  </motion.div>
                  <span className="text-gray-700">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <Link href="/about">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="bg-ccrm-blue text-white hover:bg-ccrm-lightBlue transition-all duration-300">
                    Learn About Our Mission
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>

          <motion.div
            className="order-1 lg:order-2 rounded-xl overflow-hidden shadow-glass"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src="https://images.unsplash.com/photo-1533222535026-754c501569dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
              alt="Children engaged in learning activities"
              className="w-full h-auto object-cover"
              width={2340}
              height={1500}
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ImpactSection;
