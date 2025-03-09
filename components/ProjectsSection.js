import React, { useEffect, useRef, useState } from "react";

// Utility function for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const projects = [
  {
    name: "AgroLoon",
    description: "Agricultural monitoring via high-altitude balloons",
  },
  {
    name: "TFS",
    description: "Transparent file system with built-in versioning",
  },
  {
    name: "Thermo",
    description: "Low-cost thermal imaging for developing countries",
  },
];

const ProjectsSection = () => {
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
      id="projects"
      ref={sectionRef}
      className="py-24 bg-mesh-dark text-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2
            className={cn(
              "text-3xl md:text-4xl font-bold mb-16 transition-all duration-700",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            Current projects:
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.name}
                className={cn(
                  "bg-black/30 p-8 h-64 flex flex-col justify-center items-center text-center group hover:bg-white hover:text-black transition-all duration-500 cursor-pointer",
                  "transition-all duration-700 delay-[300ms]",
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                <p className="text-gray-300 group-hover:text-gray-800 transition-colors duration-500">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
