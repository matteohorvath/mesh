import React, { useEffect, useState } from "react";
import AnimatedImage from "./AnimatedImage";
import TextAnimation from "./TextAnimation";
import Link from "next/link";
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
    <>
      <section className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden bg-mesh-dark w-full">
        {/* Left Column (Text) */}
        <div className="w-full md:w-1/2 lg:w-2/5 bg-transparent md:bg-mesh-dark flex flex-col justify-center items-start p-6 md:p-16 z-10 h-full relative">
          <div className="max-w-xl">
            {/* Dream it. Build it. tagline */}
            <div
              className={cn(
                "transition-all duration-500 delay-100",
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              <p className="text-white/90 text-xl md:text-2xl font-light tracking-wide mb-8 font-monda">
                dream it. build it.
              </p>
            </div>

            {/* Main heading - mesh. */}
            <h1
              className={cn(
                "text-6xl md:text-7xl lg:text-8xl font-bold font-monda text-white leading-tight mb-8 relative overflow-hidden",
                isLoaded ? "opacity-100" : "opacity-0",
                "transition-opacity duration-500 delay-300"
              )}
            >
              mesh.
            </h1>

            {/* Subtitle */}
            <div
              className={cn(
                "transition-all duration-500 delay-500",
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              <p className="text-white/90 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-md">
                We&apos;re a hackerlab where we seek and develop talent.
              </p>
            </div>

            {/* CTA Button */}
            <div
              className={cn(
                "transition-all duration-500 delay-700",
                isLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              <Link
                href="https://growmesh.notion.site/5af905687aec4e759c55744f5c08c7eb"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-mesh-blue to-mesh-teal text-white py-4 px-8 text-lg font-monda uppercase tracking-wider hover:from-mesh-blue hover:to-mesh-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mesh-teal focus:ring-offset-2 focus:ring-offset-black rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>start building</span>
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
              </Link>
            </div>
          </div>

          {/* 2025 text positioned at bottom left */}
          <div
            className={cn(
              "absolute bottom-6 md:bottom-16 left-6 md:left-16 transition-all duration-500 delay-900",
              isLoaded
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          ></div>
        </div>

        {/* Right Column (Image) */}
        <div className="absolute inset-0 md:relative w-full md:w-1/2 lg:w-3/5 h-screen">
          <div className="absolute inset-0 bg-black/70 md:bg-black/50 md:hidden z-[1]"></div>
          <AnimatedImage
            src="/images/hero.jpg"
            alt="mesh. hackerspace with people working on computers"
            className="w-full h-full object-cover object-center opacity-50"
            isHero={true}
          />
        </div>
      </section>
      <style>{`
        @keyframes rotateIn {
          from { transform: rotateX(90deg); opacity: 0; }
          to { transform: rotateX(0deg); opacity: 1; }
        }
        .rotate-animation {
          animation: rotateIn 0.5s ease;
        }
      `}</style>
    </>
  );
};

export default HeroSection;
