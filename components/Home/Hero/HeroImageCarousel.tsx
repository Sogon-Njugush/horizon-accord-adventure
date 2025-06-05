import Image from "next/image";
import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import { ArrowRight } from "lucide-react";
import ButtonSecondary from "./ButtonSecondary";

interface HeroImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface HeroImageCarouselProps {
  images: HeroImage[];
  currentIndex: number;
}

const HeroImageCarousel: React.FC<HeroImageCarouselProps> = ({
  images,
  currentIndex,
}) => {
  return (
    <div className="relative w-full h-full">
      {images.map((image, index) => (
        <div
          key={index}
          role="presentation"
          aria-hidden={index !== currentIndex}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex
              ? "opacity-100"
              : "opacity-0 pointer-events-none"
          }`}>
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className={`brightness-[.55] transform transition-transform duration-[1500ms] ease-in-out ${
                index === currentIndex ? "scale-105" : "scale-100"
              }`}
            />
          </div>

          {/* Overlay Content - Wrapped in separate div for proper pointer events */}
          <div className="relative z-30 h-full w-full">
            <div className="absolute top-1/3 left-6 sm:left-20 max-w-[80%] sm:max-w-2xl text-white drop-shadow-xl px-2 sm:px-0">
              {image.title && (
                <p className="text-lg sm:text-sm font-semibold mb-2 text-gray-100 tracking-wider">
                  {image.title}
                </p>
              )}
              {image.description && (
                <h1 className="text-5xl sm:text-4xl font-extrabold leading-tight sm:leading-[1.2] tracking-tight text-white mb-4">
                  {image.description}
                </h1>
              )}

              <div className="mt-24 flex flex-wrap sm:flex-nowrap gap-4 sm:gap-5">
                <ButtonPrimary className="hover:scale-105 transition-transform duration-300">
                  <span>Explore Tours</span>
                  <ArrowRight className="w-6 h-6 ml-2" />
                </ButtonPrimary>
                <ButtonSecondary className="hover:scale-105 transition-transform duration-300">
                  <span>Our Services</span>
                  <ArrowRight className="w-6 h-6 ml-2" />
                </ButtonSecondary>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroImageCarousel;
