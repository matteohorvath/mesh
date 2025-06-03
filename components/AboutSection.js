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
              <h3 className="text-2xl font-semibold uppercase text-mesh-teal tracking-wider">
                the equation
              </h3>
            </div>

            {/* New 2-Row Structure */}
            <div className="space-y-8"> {/* Provides vertical spacing between the title row and content row */}
              {/* Row 1: Titles */}
              <div className="flex flex-col md:flex-row text-center md:text-left">
                <div className="w-full md:w-1/3 px-2 md:px-4"> {/* Adjusted padding */}
                  <h4 className="text-xl font-semibold text-mesh-teal uppercase tracking-wider">
                    What we propose
                  </h4>
                </div>
                <div className="w-full md:w-1/3 px-2 md:px-4 text-center"> {/* Adjusted padding and added text-center for the new title */}
                  <h4 className="text-xl font-semibold text-mesh-teal uppercase tracking-wider hidden md:block">
                    {/* Result: */}
                  </h4>
                </div>
                <div className="w-full md:w-1/3 px-2 md:px-4"> {/* Adjusted padding */}
                  <h4 className="text-xl font-semibold text-mesh-teal uppercase tracking-wider">
                    What we require
                  </h4>
                </div>
              </div>

              {/* Row 2: Content (items will be vertically centered by md:items-center) */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-around space-y-8 md:space-y-0 md:space-x-2 lg:space-x-4"> {/* md:items-center for vertical alignment */}
                {/* Content Column 1: Propose List */}
                <div className="w-full md:w-1/3 px-2 md:px-4"> {/* Adjusted padding */}
                  <ul className="space-y-2 text-gray-300 text-left">
                    <li>A vibrant community</li>
                    <li>Opportunities</li>
                    <li>Teammates</li>
                    <li>Tools</li>
                    <li>Mentorship</li>
                    <li>Office space</li>
                    <li>A testing platform to showcase your work</li>
                    <li>Initial steps within our engineer-led community</li>
                  </ul>
                </div>

                {/* Content Column 2: Circle */}
                <div className="w-full md:w-1/3 flex flex-col items-center justify-center px-2 md:px-4"> {/* Added flex-col and items-center for title */}
                  <h4 className="text-xl font-semibold text-mesh-teal uppercase tracking-wider md:hidden mb-4"> {/* Visible on mobile, margin bottom */}
                    Result:
                  </h4>
                  <div className="w-48 h-48 p-1 rounded-full bg-gradient-to-r from-mesh-teal to-mesh-blue flex items-center justify-center shadow-lg">
                    <div className="w-full h-full bg-mesh-dark rounded-full flex items-center justify-center">
                      <p className="text-white text-center font-semibold px-4">
                        Awesome builder without limitations
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content Column 3: Require Dedication */}
                <div className="w-full md:w-1/3 px-2 md:px-4"> {/* Column container for "require" list */}
                  <ul className="space-y-2 text-gray-300 text-left"> {/* Text within li will be right-aligned */}
                    <li>Dedication</li>
                    <li>Building something bold</li>
                    <li>Frequent communication</li>
                    <li>Activity inside the community</li>
                  </ul>
                </div>
              </div> {/* Closing tag for Row 2: Content */}
            </div> {/* Closing tag for New 2-Row Structure (space-y-8) */}

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
