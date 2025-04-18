import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// Utility function for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const CohortSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
    const updateCountdown = () => {
      const startDate = new Date("April 4, 2025 17:00:00");
      const now = new Date();
      const diffTime = startDate - now;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      const diffHours = Math.floor(
        (diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const diffMinutes = Math.floor(
        (diffTime % (1000 * 60 * 60)) / (1000 * 60)
      );
      const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);
      setCountdown(
        `${diffDays}:${diffHours.toString().padStart(2, "0")}:${diffMinutes
          .toString()
          .padStart(2, "0")}:${diffSeconds.toString().padStart(2, "0")}`
      );
    };

    // Update immediately on mount
    updateCountdown();

    // Set up interval to update every second
    const intervalId = setInterval(updateCountdown, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

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
      id="join"
      ref={sectionRef}
      className="py-4 bg-mesh-dark text-white"
    >
      <div className="container mx-auto px-6">
        <div
          className={cn(
            "max-w-4xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="space-y-10">
            {/*<div
              className={cn(
                "mt-20 max-w-4xl mx-auto transition-all duration-700 delay-500",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              <Image
                src="/images/about.svg"
                width={1000}
                height={1000}
                alt="Diagram of mesh's approach to talent development"
                className="w-full h-auto rounded-sm"
              />
            </div>

            {/* Two-column layout for "Why Join?" and "We're Looking For You If" */}
            {/*<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              {/* Left Column - Why Join? */}
            {/* <div className="space-y-4 p-6 bg-black/20 rounded-lg border border-mesh-teal/20 hover:border-mesh-teal/40 transition-all duration-300">
                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-mesh-blue to-mesh-teal">
                  Why Join?
                </h3>
                <ul className="space-y-4 list-disc list-inside text-lg">
                  <li>
                    Access to a <strong>community</strong> of like-minded
                    builders and hackers
                  </li>
                  <li>
                    Get <strong>10k €</strong> to continue building.
                  </li>
                  <li>
                    <strong>Resources</strong> to build your project without
                    obstacles
                  </li>
                  <li>
                    Meaningful <strong>connections</strong>
                  </li>
                  <li>
                    <strong>Funding opportunities</strong> for promising
                    projects
                  </li>
                </ul>
              </div>

              {/* Right Column - We're Looking For You If */}
            {/*<div className="space-y-4 p-6 bg-black/20 rounded-lg border border-mesh-teal/20 hover:border-mesh-teal/40 transition-all duration-300">
                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-mesh-blue to-mesh-teal">
                  We&apos;re Looking For You If
                </h3>
                <ul className="space-y-4 list-disc list-inside text-lg">
                  <li>
                    You&apos;re driven by <strong>passion</strong> for{" "}
                    <strong>innovation</strong> and building
                  </li>
                  <li>
                    You&apos;re a <strong>tech builder</strong> in software,
                    hardware, or deep-tech and a <strong>problem-solver</strong>{" "}
                    with a growth mindset
                  </li>
                  <li>
                    You have an <strong>idea/project</strong> you want to build
                    in 8 weeks
                  </li>
                  <li>
                    You either have a <strong>team</strong>, or you want to
                    build by yourself
                  </li>
                  <li>
                    You&apos;re between the ages of <strong>16-28</strong>
                  </li>
                </ul>
              </div>
            </div>
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
              next cohort start: April 4th <br />
              20 teams (2 spots left)
              <br />
              deadline: {countdown}
            </h2>
            */}
            {/*<div className="mt-8 flex justify-center">
              <a
                href="https://lu.ma/ovp4skct?utm_source=mesh-website-cohort-section"
                target="_blank"
                rel="noopener noreferrer"
                className="transition inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-mesh-blue to-mesh-teal text-white py-3 px-8 text-lg font-monda hover:from-mesh-teal hover:to-mesh-blue hover:text-mesh-dark transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mesh-teal focus:ring-offset-2 focus:ring-offset-mesh-dark rounded-md  border-mesh-teal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 "
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <line x1="19" y1="8" x2="19" y2="14"></line>
                  <line x1="16" y1="11" x2="22" y2="11"></line>
                </svg>
                <span>Join now</span>
              </a>
            </div>*/}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CohortSection;
