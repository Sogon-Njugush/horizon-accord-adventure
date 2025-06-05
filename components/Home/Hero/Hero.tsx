"use client";
import { heroImages } from "@/constant/constant";
import React, { useEffect, useState } from "react";
import HeroImageCarousel from "./HeroImageCarousel";
import HeroContent from "./HeroContent";
import VerticalControls from "./VerticalControls";
import SearchBar from "./SearchBar";

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false); // to pause on user interaction

  useEffect(() => {
    // Auto-slide functionality
    const interval = setInterval(() => {
      if (!isUserInteracting) {
        // Prevent auto-slide if the user is interacting
        setCurrentImageIndex((prev) =>
          prev === heroImages.length - 1 ? 0 : prev + 1
        );
      }
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isUserInteracting]); // Make sure effect is triggered when user interacts

  const handlePrevious = () => {
    setIsUserInteracting(true); // Pause auto-slide when user manually interacts
    setCurrentImageIndex((prev) =>
      prev === 0 ? heroImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setIsUserInteracting(true); // Pause auto-slide when user manually interacts
    setCurrentImageIndex((prev) =>
      prev === heroImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative bg-black">
      <div className="relative w-full h-[90vh]">
        <HeroImageCarousel
          images={heroImages}
          currentIndex={currentImageIndex}
        />

        {/* Hero Content with some spacing to stand out */}
        {/* <div className="relative z-10">
          <HeroContent />
        </div> */}

        {/* Vertical Controls */}
        <VerticalControls
          onUp={handlePrevious}
          onDown={handleNext}
          currentIndex={currentImageIndex}
          totalItems={heroImages.length}
        />

        {/* Search Bar with some bottom spacing */}
        <div className="absolute bottom-0 left-0 w-full h-1/2 flex items-end z-20">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
