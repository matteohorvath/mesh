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
    // Handle hash links for smooth scrolling
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        // Wait a bit for the page to fully load
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    };

    // Initial check for hash in URL
    if (window.location.hash) {
      handleHashChange();
    }

    // Add event listener for hash changes
    window.addEventListener("hashchange", handleHashChange);

    // Add smooth scrolling to all internal links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });

          // Update URL hash without jumping
          window.history.pushState(null, null, `#${targetId}`);
        }
      });
    });

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
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
        {/* Add smooth scroll behavior via CSS */}
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          @media (prefers-reduced-motion: reduce) {
            html {
              scroll-behavior: auto;
            }
          }
        `}</style>
      </Head>
      <div className="min-h-screen bg-mesh-dark w-full">
        <Navbar />
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="cohort">
          <CohortSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="events">
          <EventsSection />
        </div>
        <div id="contact">
          <ContactSection />
        </div>
      </div>
    </Container>
  );
}
