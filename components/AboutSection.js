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
              "text-lg text-gray-300 space-y-6 transition-all duration-700 delay-300",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <p>
              <b>mesh. {/*builder launchpad*/}</b> is for tech savvy builders
              who have vision, drive and time to build. We are offering office
              space, tools, an inspiring community, mentors, teammates, a
              platform to test yourself, a place to showcase your work, and
              first steps in our engineer-led community, in exchange for
              dedication.
              <br />
              <br />
              If you want to join, reach out to us{" "}
              <a href="#contact" className="underline">
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
