"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import founders from "../public/founders.jpeg";

const HowItBegan = () => {
  return (
    <motion.section
      className="flex mx-auto p-6 md:p-10 lg:py-20 flex-col lg:flex-row justify-center items-center md:gap-8 w-full lg:w-[80%]"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="my-8 lg:hidden font-semibold text-2xl text-[#0A1768]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        HOW IT ALL BEGAN
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, x: -50, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3 },
        }}
      >
        <Image src={founders} alt="founders" />
      </motion.div>

      <div className="space-y-5 max-w-[480px]">
        <motion.h2
          className="hidden lg:block font-semibold text-2xl text-[#0A1768]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{
            scale: 1.05,
            color: "#1e40af",
            transition: { duration: 0.2 },
          }}
        >
          HOW IT ALL BEGAN
        </motion.h2>

        <div className="md:text-lg space-y-3 font-medium text-justify">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            The vision of Children&apos;s Creative Resource Ministry (CCRM) was
            birthed in 2022 through a couple, Evangelists Nick & Shola Icha.
            This was after spending time with the Lord to receive directions. In
            2021, Evangelist Nick Icha retired from Children Evangelism Ministry
            International (CEM) after a 30-year full time missionary service
            with the organisation.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            CCRM was named on 23rd July, 2022 and registered with the Corporate
            Affairs Commission of Nigeria in 2023. The Board of Trustees of CCRM
            have been duly appointed.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Link href="/about#how-it-began">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-[#0A1768] font-semibold">Read More</Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HowItBegan;
