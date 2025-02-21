import { LucideScanEye } from "lucide-react";
import React from "react";

const Boxes = () => {
  return (
    <div className="bg-white shadow-lg w-[400px] p-5 rounded-md flex flex-col gap-3">
      <LucideScanEye />
      <h2 className="font-semibold text-xl">Vision</h2>
      <p>
        That every member will be a living model of genuine salvation,
        sanctification and service, to God&apos;s glory.
      </p>
    </div>
  );
};

export default Boxes;
