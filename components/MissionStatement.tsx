import React from "react";
import { cn } from "@/lib/utils";

interface MissionStatementProps {
  title?: string;
  text: string;
  className?: string;
  textClassName?: string;
}

const MissionStatement = ({
  title = "Our Mission",
  text,
  className,
  textClassName,
}: MissionStatementProps) => {
  return (
    <div className={cn("py-16 px-6 bg-white", className)}>
      <div className="container mx-auto max-w-4xl">
        {title && (
          <h2 className="text-center text-xl text-ccrm-blue/60 uppercase tracking-wide font-semibold mb-4">
            {title}
          </h2>
        )}
        <p
          className={cn(
            "text-center text-lg md:text-xl font-display font-medium leading-relaxed text-ccrm-blue",
            textClassName
          )}
        >
          "{text}"
        </p>
      </div>
    </div>
  );
};

export default MissionStatement;
