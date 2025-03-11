import React, { useEffect, useRef, useState } from "react";
import { Calendar } from "lucide-react";

// Utility function for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const EventsSection = () => {
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
      id="events"
      ref={sectionRef}
      className="py-24 bg-mesh-dark text-white"
    >
      <div className="container mx-auto px-6 flex flex-col items-center">
        <Calendar size={48} className="mb-6 opacity-50" />
        <h3 className="text-xl mb-4 ">Upcoming Events</h3>
        <div className="w-full h-full flex justify-center items-center">
          <iframe
            src="https://lu.ma/embed/calendar/cal-zvrSBZL0tjY4yra/events?compact=true"
            width=""
            height="400"
            style={{ borderRadius: "4px", overflow: "hidden" }}
            title="Mesh. Events Calendar"
            className="mt-4"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
