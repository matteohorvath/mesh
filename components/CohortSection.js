import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// Utility function for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const CohortSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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
      className="py-24 bg-mesh-dark text-white"
    >
      <div className="container mx-auto px-6">
        <div
          className={cn(
            "max-w-4xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div className="space-y-10">
            <h2 className="text-left text-3xl md:text-4xl font-bold mb-16">
              mesh. talent launchpad
            </h2>
            <div
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
                ß
                height={1000}
                alt="Diagram of mesh's approach to talent development"
                className="w-full h-auto rounded-sm"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">
                Who are we looking for?
              </h3>
              <p className="text-lg">
                If you&apos;re someone who wakes up excited to build new things,
                solve problems, and learn something new every day, we are
                interested in you.
              </p>

              <ul className="space-y-4 mt-6 list-disc list-inside text-lg">
                <li>
                  Individuals driven by passion for innovation and building, not
                  just financial gain
                </li>
                <li>Technical talent in software, hardware, or deep-tech</li>
                <li>
                  Individual founders are accepted, but we encourage team
                  applications
                </li>
                <li>Between 16 and 28 years old</li>
              </ul>
            </div>
            <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
              next cohort start: apr. 1
            </h2>
            <div className="mt-8 flex justify-center">
              <a
                href="https://lu.ma/growmesh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-purple-600 text-white py-3 px-8 text-lg font-mono hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black rounded-md border border-purple-300"
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
                <span>Join here</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CohortSection;
