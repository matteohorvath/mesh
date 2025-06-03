import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import TextAnimation from "./TextAnimation";
// Utility function for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const TEXT_STRINGS = ["company", "project", "idea", "reality"];
  const WAIT_TIME = 2; // seconds
  const STEP_TIME = 0.1; // seconds

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-24 bg-mesh-dark text-white"
      id="about"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            className={cn(
              "text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-16 transition-all duration-700",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <span className="reveal-text reveal-delay-1 block">build the</span>
            <span className="reveal-text reveal-delay-2 block">
              <span className="rotate-animation text-transparent bg-clip-text bg-gradient-to-r from-mesh-blue to-mesh-teal">
                {
                  <TextAnimation
                    strings={TEXT_STRINGS}
                    waitTime={WAIT_TIME}
                    stepTime={STEP_TIME}
                  />
                }
              </span>
            </span>
            <span className="reveal-text reveal-delay-3 block">you want.</span>
          </h2>

          <div
            className={cn(
              "mt-16 text-lg text-gray-300 space-y-12 transition-all duration-700 delay-300", // Added mt-16, Increased space-y
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            {/* Value Proposition Section */}
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold text-mesh-teal uppercase tracking-wider">
                Value Proposition
              </h3>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-center justify-around space-y-8 md:space-y-0 md:space-x-8"> {/* Changed md:items-start to md:items-center */}
              {/* What we propose */}
              <div className="w-full md:w-1/3 p-6 bg-mesh-dark-secondary rounded-lg shadow-lg text-center">
                <h4 className="text-xl font-semibold text-mesh-teal mb-4 uppercase tracking-wider">
                  What we propose
                </h4>
                <ul className="space-y-2 text-gray-300 text-left">
                  <li>Office space</li>
                  <li>Tools</li>
                  <li>A vibrant community</li>
                  <li>Mentorship</li>
                  <li>Team collaboration</li>
                  <li>A testing platform to showcase your work</li>
                  <li>Initial steps within our engineer-led community</li>
                </ul>
              </div>

              {/* Central Element */}
              <div className="w-full md:w-auto flex items-center justify-center">
                {/* Outer div for gradient border */}
                <div className="w-48 h-48 p-1 rounded-full bg-gradient-to-r from-mesh-teal to-mesh-blue flex items-center justify-center shadow-lg">
                  {/* Inner div for background and content */}
                  <div className="w-full h-full bg-mesh-dark rounded-full flex items-center justify-center">
                    <p className="text-white text-center font-semibold px-4">
                      Awesome builder without limitations
                    </p>
                  </div>
                </div>
              </div>

              {/* What we require */}
              <div className="w-full md:w-1/3 p-6 bg-mesh-dark-secondary rounded-lg shadow-lg text-center min-h-[200px] md:min-h-full flex flex-col"> {/* Added flex flex-col */}
                <h4 className="text-xl font-semibold text-mesh-teal mb-4 uppercase tracking-wider">
                  What we require
                </h4>
                <div className="flex-grow flex items-center justify-center"> {/* Wrapper for Dedication to center it */}
                  <p className="text-gray-300 text-2xl font-bold">Dedication</p>
                </div>
              </div>
            </div>

            <p className="pt-12 text-center">
              {/* Centered the paragraph and increased pt */}
              If you want to talk to us, reach out{" "}
              <a
                href="#contact"
                className="underline hover:text-mesh-teal transition-colors"
              >
                here
              </a>
              .
              <br />
              If you want to join, fill out the onboarding form{" "}
              <a
                href="https://growmesh.notion.site/5af905687aec4e759c55744f5c08c7eb"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-mesh-teal transition-colors"
              >
                here
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
