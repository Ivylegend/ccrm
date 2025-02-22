import React from "react";
import Boxes from "./Boxes";

const OurVision = () => {
  return (
    <div className="px-6 md:px-10 lg:px-20 py-10 flex flex-col md:flex-row items-center justify-center gap-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
      <Boxes
        title={"Our Vision"}
        body={
          "Scriptural basis: The Lord gave the word: great was the company of those that published it. Psalm 68:11 (KJV) A wise teacher makes learning a joy; Proverbs 15:2a (TLB)"
        }
      />
      <Boxes
        title={"Our Mission"}
        body={
          "CCRM seeks to creatively share the holistic gospel of our Lord Jesus Christ with boys and girls. The vision is to see them saved, filled with the Holy Spirit, and discipled. Additionally, they will be helped to develop godly character, discover their potential, and maximise it for God's glory and humanity's benefit."
        }
      />
      <Boxes
        title={"Participate"}
        body={"Follow our services online or visit us physically."}
      />
    </div>
  );
};

export default OurVision;
