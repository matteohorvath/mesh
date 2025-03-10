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
          <span className="inline-block font-monda uppercase tracking-widest text-xs font-bold text-mesh-teal mb-3 reveal-text reveal-delay-1">
            mesh hackerspace
          </span>
          <h1
            className={cn(
              "text-5xl md:text-6xl lg:text-7xl font-bold font-monda text-white leading-tight mb-8 relative overflow-hidden",
              isLoaded ? "opacity-100" : "opacity-0",
              "transition-opacity duration-500 delay-300"
            )}
          >
            <span className="reveal-text reveal-delay-1 block">build</span>
            <span className="reveal-text reveal-delay-2 block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mesh-blue to-mesh-teal">
                something
              </span>
            </span>
            <span className="reveal-text reveal-delay-3 block">you want.</span>
          </h1>

          <div
            className={cn(
              "transition-all duration-500 delay-700",
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <a
              href="#join"
              className="inline-flex items-center bg-gradient-to-r from-mesh-blue to-mesh-teal text-white py-4 px-8 text-lg font-mono uppercase tracking-wider hover:from-mesh-blue hover:to-mesh-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mesh-teal focus:ring-offset-2 focus:ring-offset-black rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>join us</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
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
