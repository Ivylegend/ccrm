"use client";

import { useState } from "react";
import Image from "next/image";
import News1 from "@/public/news1.jpg";
import News2 from "@/public/news2.jpg";
import News3 from "@/public/news3.jpg";
import News4 from "@/public/news4.jpg";
import HowToGetInvolved from "@/components/HowToGetInvolved";

const images = [News1, News2, News3, News4];

export default function Newsletter() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="p-5 md:h-screen md:pt-20">
      <h1 className="text-xl md:text-4xl font-bold text-center text-[#0A1768] mb-5">
        Get the latest updates from our newsletters
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-5 my-10">
        {images.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => setSelectedImage(image.src)}
          >
            <Image
              src={image}
              alt={`Newsletter ${index + 1}`}
              className="rounded-lg hover:scale-105 transition-transform duration-200"
            />
          </div>
        ))}
      </div>

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // Close modal when clicking outside
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-black text-xl font-semibold"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
            <Image
              src={selectedImage}
              alt="Selected news"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

      <div id="support" className="w-[80%] mx-auto">
        <HowToGetInvolved />
      </div>
    </div>
  );
}
