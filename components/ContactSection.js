import React, { useEffect, useRef, useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

// Utility function for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const ContactSection = () => {
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
      id="contact"
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
            Get in touch! 🤙🏻
          </h2>

          <div
            className={cn(
              "grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-700 delay-300",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-bold border-b border-gray-800 pb-2 mb-4">
                  Matteo Horváth 🤘🏻
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail size={20} className="mt-1 text-gray-400" />
                    <div>
                      <p className="font-mono">matteo.horvath@growmesh.io</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone size={20} className="mt-1 text-gray-400" />
                    <div>
                      <p className="font-mono">+36 30 746 5434</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold border-b border-gray-800 pb-2 mb-4">
                  János Mózer 🤘🏻
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail size={20} className="mt-1 text-gray-400" />
                    <div>
                      <p className="font-mono">janos.mozer@growmesh.io</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone size={20} className="mt-1 text-gray-400" />
                    <div>
                      <p className="font-mono">+36 20 286 4121</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold border-b border-gray-800 pb-2 mb-4">
                  Our Office 🌍
                </h3>
                <div className="flex items-start space-x-3">
                  <MapPin
                    size={20}
                    className="mt-1 flex-shrink-0 text-gray-400"
                  />
                  <div>
                    <p className="font-mono">
                      Bartók Béla út 51., 1114 Budapest, Hungary
                    </p>
                  </div>
                </div>
              </div>

              <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.639370298754!2d19.044833476670896!3d47.47686789686801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddab7a8b5d11%3A0x4b25d5919fe9b6c8!2zQmFydMOzayBCw6lsYSDDunQgNTEsIDExMTQgQnVkYXBlc3QsIEh1bmdhcnk!5e0!3m2!1sen!2sus!4v1696857264368!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="mesh location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
