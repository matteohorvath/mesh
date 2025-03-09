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
      className="py-24 bg-mesh-dark text-white"
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
              We believe that humanity needs explorers and researchers who can
              work independently and create in a result-oriented manner to drive
              progress. We teach people how to plan and build every aspect of a
              project from scratch to completion. mesh. provides resources,
              mentors, contacts, frameworks and a place to passionate and
              creative people, so they can delegate 100% of their focus to
              building.
            </p>
          </div>
        </div>

        <div
          className={cn(
            "mt-20 max-w-4xl mx-auto transition-all duration-700 delay-500",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <Image
            src="/images/about.jpg"
            width={1000}
            ß
            height={1000}
            alt="Diagram of mesh's approach to talent development"
            className="w-full h-auto rounded-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
