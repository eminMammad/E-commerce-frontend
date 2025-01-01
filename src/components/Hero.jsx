import React from "react";
import { assets } from "../assets/frontend_assets/assets";
const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border bg-gray-100">
      {/*left side*/}
      <div className="w-full sm:w-1/2 item flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">Fill Here</p>
          </div>
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Fill here
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">Fill here</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>
      {/*right side*/}
      
        <img className="w-full sm:w-1/2" src={assets.hero_img} alt="hero" />
      
    </div>
  );
};

export default Hero;