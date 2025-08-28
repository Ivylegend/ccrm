"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  className?: string;
  iconClassName?: string;
}

const ProgramCard = ({
  title,
  description,
  icon,
  link,
  className,
  iconClassName,
}: ProgramCardProps) => {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (link) {
      return (
        <Link href={link} className={cn("block group", className)}>
          {children}
        </Link>
      );
    }
    return <div className={className}>{children}</div>;
  };

  return (
    <CardWrapper>
      <motion.div
        className="bg-white rounded-xl p-6 shadow-md min-w-52 max-w-96 h-full flex flex-col transition-all duration-300"
        whileHover={{
          y: -10,
          scale: 1.02,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.98 }}
      >
        <motion.div
          className={cn(
            "w-14 h-14 rounded-lg flex items-center justify-center text-white mb-5",
            iconClassName || "bg-ccrm-blue"
          )}
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            rotate: [0, -10, 10, 0],
            transition: { duration: 0.5 },
          }}
        >
          {icon}
        </motion.div>

        <motion.h3
          className="text-xl font-display font-semibold mb-3 text-ccrm-blue"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {title}
        </motion.h3>

        <motion.p
          className="text-gray-600 mb-4 flex-grow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {description}
        </motion.p>

        {link && (
          <motion.div
            className="flex items-center text-ccrm-blue font-medium group-hover:text-ccrm-lightBlue transition-colors"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ x: 5 }}
          >
            <span className="mr-2">Learn more</span>
            <motion.div
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </motion.div>
        )}
      </motion.div>
    </CardWrapper>
  );
};

export default ProgramCard;
