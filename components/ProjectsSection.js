import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
// Utility function for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const projects = [
  {
    name: "AgroLoon",
    description: "Agricultural monitoring via high-altitude balloons",
    link: "https://agroloon.com",
  },
  {
    name: "TFS",
    description:
      "Treefrog Satellites - CanSat project for atmospheric research",
    link: "https://tfs.growmesh.io",
  },
  {
    name: "Thermo",
    description: "Low-cost thermal imaging for developing countries",
    link: "https://www.growmesh.io/addressing-the-challenges-of-traditional-thermometers",
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
          <div className="text-center mb-16">
            <span className="inline-block font-monda uppercase tracking-widest text-sm font-bold text-mesh-teal mb-3">
              Our Projects
            </span>
            <h2
              className={cn(
                "text-center text-3xl md:text-5xl font-bold font-monda mb-6 transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              What we&apos;re building
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-mesh-blue to-mesh-teal rounded-full mb-8"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Our community works on ambitious projects that push the boundaries
              of technology and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                key={project.name}
              >
                <div
                  key={project.name}
                  className={cn(
                    "bg-black/30 rounded-lg overflow-hidden border border-gray-800 group hover:border-mesh-teal transition-all duration-500 cursor-pointer transform hover:-translate-y-2",
                    "transition-all duration-700",
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  )}
                  style={{ transitionDelay: `30ms` }}
                >
                  <div className="h-48 bg-gradient-to-br from-mesh-blue/20 to-mesh-teal/20 flex items-center justify-center p-4">
                    <h3 className="text-2xl font-bold font-monda text-center bg-clip-text ">
                      {project.name}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-500">
                      {project.description}
                    </p>

                    <div className="mt-6 flex justify-end text-mesh-teal hover:text-mesh-blue flex items-center text-sm font-medium transition-colors">
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
