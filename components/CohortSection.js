import React, { useEffect, useRef, useState } from "react";

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
          <h2 className="text-center text-3xl md:text-4xl font-bold mb-16">
            next cohort start: apr. 1
          </h2>

          <div className="space-y-10">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold">Who?</h3>
              <p className="text-xl">
                If you wake up every day with a burning need to create, solve,
                and learn
              </p>

              <ul className="space-y-4 mt-6 list-disc list-inside text-lg">
                <li>Ages 16-28</li>
                <li>
                  Technical talent working on software, hardware, or deep-tech
                </li>
                <li>
                  People driven by a hunger for progress, not for money or
                  status, but for growth, innovation, and creation
                </li>
                <li>
                  We welcome solo founders, but it&apos;s even better if you
                  already have a team
                </li>
              </ul>
            </div>

            <div
              className={cn(
                "flex justify-center pt-6 transition-all duration-700 delay-300",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-white text-black py-3 px-8 text-lg font-mono hover:bg-gray-200 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12c1.5 0 4.5-5 4.5-5s1 2 1.5 3m-6 2s.286-3 5.571-3C18.857 9 19 12 19 12" />
                  <path d="M9 18c-1.714 0-2.857-1.5-2.857-1.5C4 21 4 21 4 21h16.286s-.143-6-5-6c-3.429 0-4.714 3-6.286 3" />
                  <path d="M5.5 20.5 8 19l-1.5-1.5" />
                  <path d="M18.5 20.5 16 19l1.5-1.5" />
                </svg>
                <span>Reach out to us on our discord server</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CohortSection;
