import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useConfig } from "@/lib/config";
import Container from "@/components/Container";

// Import components from mesh-hacker-haven
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CohortSection from "@/components/CohortSection";
import ProjectsSection from "@/components/ProjectsSection";
import EventsSection from "@/components/EventsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 1,
  };
}

export default function IndexPage() {
  const router = useRouter();
  const BLOG = useConfig();

  useEffect(() => {
    document.body.classList.add("smooth-scroll");

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("smooth-scroll");
    };
  }, []);

  if (router.isFallback) return null;

  return (
    <Container
      layout="full"
      title="Mesh Hacker Haven"
      description="Community for hackers and builders"
      fullWidth={true}
    >
      <div className="min-h-screen bg-mesh-dark">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <CohortSection />
        <ProjectsSection />
        <EventsSection />
        <ContactSection />
      </div>
    </Container>
  );
}
