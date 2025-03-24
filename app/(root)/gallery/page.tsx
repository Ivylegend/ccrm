"use client";

import React, { useState, useEffect } from "react";
import HeroHeader from "@/components/HeroHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { X, ChevronLeft, ChevronRight, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { galleryImages } from "@/constants";

const Gallery = () => {
  // State
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [availableTags, setAvailableTags] = useState<string[]>([]);
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([]);

  // Setup gallery data
  useEffect(() => {
    setImages(galleryImages);
    setFilteredImages(galleryImages);

    // Extract all unique tags
    const allTags = Array.from(
      new Set(galleryImages.flatMap((img) => img.tags))
    ).sort();
    setAvailableTags(allTags);
  }, []);

  // Handle tag filtering
  useEffect(() => {
    if (activeTags.length === 0) {
      setFilteredImages(images);
    } else {
      const filtered = images.filter((image) =>
        activeTags.some((tag) => image.tags.includes(tag))
      );
      setFilteredImages(filtered);
    }
  }, [activeTags, images]);

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Clear all active tags
  const clearTags = () => {
    setActiveTags([]);
  };

  // Open modal with selected image
  const openImageModal = (image: GalleryImage) => {
    setSelectedImage(image);
    const index = filteredImages.findIndex((img) => img.id === image.id);
    setCurrentIndex(index);
  };

  // Navigate to previous image
  const prevImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  };

  // Navigate to next image
  const nextImage = () => {
    if (currentIndex < filteredImages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  };

  return (
    <>
      <HeroHeader
        title="Our Gallery"
        subtitle="Explore moments of joy, learning, and spiritual growth from our children's ministry"
        backgroundImage="https://images.unsplash.com/photo-1484820540004-14229fe36ca4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
        height="min-h-[500px]"
      />

      {/* Filter Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">Filter by Tags</h2>
              <p className="text-gray-600">
                Click on tags to filter the gallery
              </p>
            </div>
            {activeTags.length > 0 && (
              <Button
                variant="outline"
                onClick={clearTags}
                className="self-start"
              >
                Clear Filters
              </Button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {availableTags.map((tag) => (
              <Badge
                key={tag}
                variant={activeTags.includes(tag) ? "default" : "outline"}
                className={cn(
                  "cursor-pointer text-sm py-1 px-3",
                  activeTags.includes(tag)
                    ? "bg-ccrm-blue hover:bg-ccrm-blue/80"
                    : "hover:bg-gray-100"
                )}
                onClick={() => toggleTag(tag)}
              >
                <Tag className="w-3.5 h-3.5 mr-1.5" />
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
                onClick={() => openImageModal(image)}
              >
                <AspectRatio ratio={4 / 3}>
                  <img
                    src={image.thumbnail}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </AspectRatio>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-end">
                  <div className="p-4 w-full text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-medium">{image.alt}</p>
                    <div className="flex flex-wrap mt-2 gap-1">
                      {image.tags.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs py-0 px-1.5 bg-white/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {image.tags.length > 2 && (
                        <Badge
                          variant="secondary"
                          className="text-xs py-0 px-1.5 bg-white/20"
                        >
                          +{image.tags.length - 2}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500">
                No images match the selected filters.
              </p>
              <Button variant="link" onClick={clearTags} className="mt-2">
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Image Modal */}
      <Dialog
        open={!!selectedImage}
        onOpenChange={(open) => !open && setSelectedImage(null)}
      >
        <DialogContent className="max-w-5xl p-0 rounded-lg overflow-hidden bg-black/95 border-none">
          <div className="relative h-[80vh] flex items-center justify-center">
            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={currentIndex === 0}
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              disabled={currentIndex === filteredImages.length - 1}
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Current image */}
            {selectedImage && (
              <>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-full max-w-full object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <p className="text-white text-lg font-medium">
                    {selectedImage.alt}
                  </p>
                  <div className="flex flex-wrap mt-2 gap-1">
                    {selectedImage.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs py-0 px-1.5 bg-white/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Close button */}
            <DialogClose className="absolute right-4 top-4 z-10 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors">
              <X size={20} />
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Gallery;
