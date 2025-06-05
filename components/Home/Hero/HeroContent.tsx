import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import ButtonSecondary from "./ButtonSecondary";
import { ArrowRight } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="absolute top-1/4 left-5 sm:left-10 max-w-lg text-white select-none">
      <div className="flex flex-wrap justify-center sm:flex-nowrap gap-4 sm:gap-6">
        <ButtonPrimary>
          <span>Explore Tours</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </ButtonPrimary>
        <ButtonSecondary>
          <span>Our Services</span>
          <ArrowRight className="w-4 h-4 ml-2" />
        </ButtonSecondary>
      </div>
    </div>
  );
};

export default HeroContent;
