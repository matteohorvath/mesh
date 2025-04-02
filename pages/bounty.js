import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useConfig } from "@/lib/config";
import Container from "@/components/Container";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Utility function for conditional class names
const cn = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 1,
  };
}

export default function BountyPage() {
  const router = useRouter();
  const BLOG = useConfig();
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

  if (router.isFallback) return null;

  return (
    <Container
      layout="full"
      title="Submit a Project - mesh."
      description="Submit your project to mesh for collaboration opportunities"
      fullWidth={true}
      main={true}
    >
      <div className="min-h-screen bg-mesh-dark w-full">
        <Navbar />

        <section
          ref={sectionRef}
          className="py-16 pt-28 bg-mesh-dark text-white"
        >
          <div className="container mx-auto px-6">
            <div
              className={cn(
                "max-w-4xl mx-auto transition-all duration-700",
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              <div className="bg-black/20 rounded-lg border border-mesh-teal/20 md:p-8 p-0">
                <iframe
                  src="https://growmesh.notion.site/ebd/1c93052c96d280e7ace7d677f22f41e8"
                  width="100%"
                  height="1400"
                  frameborder="0"
                  allowfullscreen
                  title="Submit a Project Form"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}
