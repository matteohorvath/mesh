import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useConfig } from "@/lib/config";
import Container from "@/components/Container";
import Head from "next/head";

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
      title="mesh."
      description="Community for hackers and builders"
      fullWidth={true}
      main={true}
    >
      <Head>
        {/* Preload the hero image */}
        <link
          rel="preload"
          href="/images/hero.jpg"
          as="image"
          fetchpriority="high"
        />
        {/* Preconnect to any third-party domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="min-h-screen bg-mesh-dark w-full ">
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
