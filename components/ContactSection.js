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
          <div className="text-center mb-16">
            <h2
              className={cn(
                "text-center text-3xl md:text-5xl font-bold font-monda mb-6 transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              Get in touch! 🤙🏻
            </h2>
            <div className="mx-auto w-24 h-1 bg-gradient-to-r from-mesh-blue to-mesh-teal rounded-full mb-8"></div>
          </div>
          <div
            className={cn(
              "text-center mb-12 transition-all duration-700 delay-200",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            <p className="text-lg font-monda mb-4">
              Around in Budapest? Let's grab a coffee! ☕️
            </p>
            <p className="text-gray-400">
              We love meeting new people and discussing exciting ideas.
              <br />
              Drop us a message and let's connect!
            </p>
          </div>

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
                <h3 className="text-lg font-bold font-monda border-b border-gray-800 pb-2 mb-4">
                  Matteo Horváth 🤘🏻 Co-Founder
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail size={20} className="mt-1 text-mesh-teal" />
                    <div>
                      <p className="font-monda">matteo.horvath@growmesh.io</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone size={20} className="mt-1 text-mesh-teal" />
                    <div>
                      <p className="font-monda">+36 30 746 5434</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold font-monda border-b border-gray-800 pb-2 mb-4">
                  János Mózer 🤘🏻 Co-Founder
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail size={20} className="mt-1 text-mesh-teal" />
                    <div>
                      <p className="font-monda">janos.mozer@growmesh.io</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Phone size={20} className="mt-1 text-mesh-teal" />
                    <div>
                      <p className="font-monda">+36 20 286 4121</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold font-monda border-b border-gray-800 pb-2 mb-4">
                  Our Office 🌍
                </h3>
                <div className="flex items-start space-x-3">
                  <MapPin
                    size={20}
                    className="mt-1 flex-shrink-0 text-mesh-teal"
                  />
                  <div>
                    <p className="font-monda">
                      Bartók Béla út 51., 1114 Budapest, Hungary
                    </p>
                  </div>
                </div>
              </div>

              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-mesh-blue/10 to-mesh-teal/10 rounded-sm overflow-hidden border border-gray-800">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.639370298754!2d19.044833476670896!3d47.47686789686801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddab7a8b5d11%3A0x4b25d5919fe9b6c8!2zQmFydMOzayBCw6lsYSDDunQgNTEsIDExMTQgQnVkYXBlc3QsIEh1bmdhcnk!5e0!3m2!1sen!2sus!4v1696857264368!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="mesh. location"
                ></iframe>
              </div>

              <div className="mt-8">
                <a
                  href="https://discord.gg/yMf868g6cU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-mesh-blue to-mesh-teal text-white py-3 px-8 text-lg font-monda hover:from-mesh-blue hover:to-mesh-blue transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-mesh-teal focus:ring-offset-2 focus:ring-offset-black rounded-md shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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
      </div>
    </section>
  );
};

export default ContactSection;
