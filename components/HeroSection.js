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
    <section className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden bg-mesh-dark w-full">
      {/* Right Column (Image) - Positioned behind on mobile, beside on desktop */}

      {/* Left Column (Text) - Now positioned at bottom on mobile */}
      <div className="w-full md:w-1/2 lg:w-2/5 bg-transparent md:bg-mesh-dark flex flex-col justify-end md:justify-center items-start p-6 pb-16 md:pb-6 md:p-16 z-10 h-full">
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
      <div className="absolute inset-0 md:relative w-full md:w-1/2 lg:w-3/5 h-screen">
        <div className="absolute inset-0 bg-black/70 md:bg-black/50 md:hidden z-[1]"></div>
        <AnimatedImage
          src="/images/hero.jpg"
          alt="mesh hackerspace with people working on computers"
          className="w-full h-full object-cover object-center opacity-50"
        />
      </div>
    </section>
  );
};

export default HeroSection;
