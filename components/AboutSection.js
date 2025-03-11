import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Utility function for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const AboutSection = () => {
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
            mesh. is a hackerlab, where we
            <br />
            seek, invest in, and elevate
            <br />
            talent.
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
              <b>mesh. talent launchpad</b> is for tech savvy builders who have
              vision, drive and time to build. We are offering office space,
              tools, an inspiring community, mentors, teammates, a platform to
              test yourself, a place to showcase your work, and first steps in
              our engineer-led community, in exchange for dedication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
