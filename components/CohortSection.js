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

            <div className="mt-8 flex justify-center">
              <a
                href="https://discord.gg/mesh-network"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 bg-indigo-600 text-white py-3 px-8 text-lg font-mono hover:bg-indigo-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black rounded-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
                <span>Join our Discord server</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CohortSection;
