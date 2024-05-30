import React from "react";
import banner from "../../assets/Banner.jpg";

const Hero = () => {
  return (
    <>
   <div className="relative">
  <img
    src={banner}
    alt="banner"
    className="w-full object-cover object-center"
  />
  <div className="absolute inset-0 flex flex-col justify-center items-end">
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-red-500 mb-3">
      Discover Your Next Adventure
    </h1>
    <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">
      Shop Our Latest Arrival & Unleash Your Style
    </p>
  </div>
</div>


    </>
  );
};

export default Hero;
