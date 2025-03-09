import React, { useEffect, useState } from "react";
import AnimatedImage from "./AnimatedImage";

// Utility function for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col md:flex-row overflow-hidden w-full pt-20 md:pt-24 bg-mesh-dark">
      {/* Left Column (Text) */}
      <div className="w-full md:w-1/2 bg-mesh-dark flex flex-col justify-center items-start p-6 md:p-16 z-10">
        <div className="max-w-xl">
          <h1
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 relative overflow-hidden",
              isLoaded ? "opacity-100" : "opacity-0",
              "transition-opacity duration-500 delay-300"
            )}
          >
            <span className="reveal-text reveal-delay-1 block">
              build something
            </span>
            <span className="reveal-text reveal-delay-2 block">you want.</span>
          </h1>

          <div
            className={cn(
              "transition-all duration-500 delay-500",
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <a
              href="#join"
              className="inline-block bg-white text-black py-3 px-8 text-lg font-mono hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              join us
            </a>
          </div>
        </div>
      </div>

      {/* Right Column (Image) */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen relative bg-mesh-dark">
        <AnimatedImage
          src="hero.png"
          alt="mesh hackerspace with people working on computers"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
    </section>
  );
};

export default HeroSection;
