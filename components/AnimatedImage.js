import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// Utility function for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

const AnimatedImage = ({ src, alt, className, isHero = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(isHero); // Hero images start as in view
  const [imgSrc, setImgSrc] = useState(src);
  const imageRef = useRef(null);

  useEffect(() => {
    // Skip intersection observer for hero images
    if (isHero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isHero]);

  const handleError = () => {
    // Fallback to a default image if the specified one fails to load
    setImgSrc("/images/placeholder.jpg");
  };

  return (
    <div
      ref={imageRef}
      className={cn("relative overflow-hidden w-full h-full", className)}
    >
      <Image
        src={imgSrc}
        alt={alt}
        fill
        className={cn(
          "duration-700 ease-in-out object-cover",
          // For hero images, don't apply initial blur and scale effects
          isHero
            ? isLoaded
              ? "scale-100 blur-0"
              : "scale-100 blur-0"
            : isLoaded
            ? "scale-100 blur-0"
            : "scale-105 blur-2xl",
          isInView ? "opacity-100" : "opacity-0"
        )}
        onLoadingComplete={() => setIsLoaded(true)}
        onError={handleError}
        sizes={
          isHero
            ? "100vw"
            : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        }
        priority={isHero} // Always set priority for hero images
        fetchPriority={isHero ? "high" : "auto"}
        loading={isHero ? "eager" : "lazy"}
      />
    </div>
  );
};

export default AnimatedImage;
