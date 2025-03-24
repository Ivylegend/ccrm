import React from "react";
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
      <div className="bg-white rounded-xl p-6 shadow-md min-w-52 max-w-96 hover-lift h-full flex flex-col transition-all duration-300">
        <div
          className={cn(
            "w-14 h-14 rounded-lg flex items-center justify-center text-white mb-5",
            iconClassName || "bg-ccrm-blue"
          )}
        >
          {icon}
        </div>

        <h3 className="text-xl font-display font-semibold mb-3 text-ccrm-blue">
          {title}
        </h3>

        <p className="text-gray-600 mb-4 flex-grow">{description}</p>

        {link && (
          <div className="flex items-center text-ccrm-blue font-medium group-hover:text-ccrm-lightBlue transition-colors">
            <span className="mr-2">Learn more</span>
            <ArrowRight
              size={16}
              className="transform group-hover:translate-x-1 transition-transform"
            />
          </div>
        )}
      </div>
    </CardWrapper>
  );
};

export default ProgramCard;
