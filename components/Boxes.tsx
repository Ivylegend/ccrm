import { LucideScanEye } from "lucide-react";
import React from "react";

declare type BoxesProps = {
  title: string;
  body: string;
};

const Boxes = ({ title, body }: BoxesProps) => {
  return (
    <div className="bg-white shadow-2xl w-full md:w-[400px] p-5 rounded-md flex flex-col gap-3">
      <LucideScanEye />
      <h2 className="font-semibold text-xl">{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Boxes;
