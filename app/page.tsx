"use client";

import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/navigation";
import ProjectCard from "@/components/project-card";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import ValuePropositionSection from "@/components/value-proposition-section";

export default function Home() {
  const scrollToJoin = () => {
    const element = document.querySelector("#join");
    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <main className="mt-4">
      <Navigation />
      <HeroSection scrollToJoin={scrollToJoin} />

      {/* Placeholder sections for future development */}
      <AboutSection scrollToJoin={scrollToJoin} />

      <ValuePropositionSection />

      <section
        id="philosophy"
        className="relative  flex items-center justify-center bg-gradient-to-br from-card/30 to-card/10 px-4 py-8 overflow-hidden py-20"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent/15 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-2/3 left-2/3 w-32 h-32 bg-primary/25 rounded-full blur-2xl animate-bounce animation-delay-1000"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto">
          {/* Main motto */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6">
              <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                BUILD.
              </span>
              <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
                SHARE.
              </span>
              <span className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                HELP.
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                mesh. philosophy
              </span>
            </h2>
          </div>

          {/* Philosophy principles */}
          <div className="flex flex-wrap gap-6 max-w-5xl mx-auto items-center justify-center">
            <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-primary/30 hover:border-primary/50 transition-all duration-300 flex-1 basis-[300px] group">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-110 transition-transform"></div>
                <h3 className="text-lg font-semibold text-foreground">
                  Learn by Doing
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Never met the tech? You&apos;ll learn it here. Experimentation
                over perfection.
              </p>
            </div>

            <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-accent/30 hover:border-accent/50 transition-all duration-300 flex-1 basis-[300px] group">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-110 transition-transform"></div>
                <h3 className="text-lg font-semibold text-foreground">
                  Product-First
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                We&apos;re product-first. 70% ready is ready. Ship fast, iterate
                faster.
              </p>
            </div>

            <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-primary/30 hover:border-primary/50 transition-all duration-300 flex-1 basis-[300px] group">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-110 transition-transform"></div>
                <h3 className="text-lg font-semibold text-foreground">
                  Community Over Ego
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Feedback, pair-programming, shared wins. Collective ownership.
              </p>
            </div>

            <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-accent/30 hover:border-accent/50 transition-all duration-300 flex-1 basis-[300px] group">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-110 transition-transform"></div>
                <h3 className="text-lg font-semibold text-foreground">
                  Shared Knowledge
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Open collaboration and knowledge sharing across all projects.
              </p>
            </div>

            <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-primary/30 hover:border-primary/50 transition-all duration-300 flex-1 basis-[300px] group">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-110 transition-transform"></div>
                <h3 className="text-lg font-semibold text-foreground">
                  Openness to All
                </h3>
              </div>
              <p className="text-muted-foreground text-sm">
                All skill levels welcome. No limits, no barriers to entry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="agreement"
        className="relative  flex items-center justify-center bg-gradient-to-br from-background to-background/80 overflow-hidden py-20"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/30 rounded-full blur-2xl animate-bounce animation-delay-1000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(255,255,255,.05)_25px,rgba(255,255,255,.05)_26px,transparent_27px,transparent_74px,rgba(255,255,255,.05)_75px,rgba(255,255,255,.05)_76px,transparent_77px,transparent_24px),linear-gradient(rgba(255,255,255,.05)_25px,rgba(255,255,255,.05)_26px,transparent_27px,transparent_74px,rgba(255,255,255,.05)_75px,rgba(255,255,255,.05)_76px,transparent_77px,transparent)] bg-[length:100px_100px]"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                agreement
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* What we propose */}
            <div className="bg-background/50 backdrop-blur-sm rounded-xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                what we propose
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>A vibrant community and teammates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Opportunities for growth and learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Mentorship from experienced builders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Office space and professional tools</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>A testing platform to showcase your work</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Initial steps within our engineer-led community</span>
                </li>
              </ul>
            </div>

            {/* What we require */}
            <div className="bg-background/50 backdrop-blur-sm rounded-xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                what we require
              </h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Dedication to building something bold</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Frequent communication with the team</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Active participation in community activities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Commitment to continuous learning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                  <span>Collaborative mindset and openness to feedback</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground">
              <span className="text-primary font-semibold">
                this is the equation
              </span>{" "}
              to become a great builder at{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent font-bold">
                mesh.
              </span>
            </p>
          </div>
          <div className="flex justify-center">
            <Button
              size="lg"
              onClick={scrollToJoin}
              className="bg-primary hover:bg-accent text-primary-foreground font-semibold text-lg px-8 py-4 group mt-12 justify-center mb-12"
            >
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <section
        id="join"
        className="relative flex items-center justify-center bg-gradient-to-br from-background to-background/80 overflow-hidden py-20"
      >
        {/* Animated background elements similar to hero */}
        <div className="absolute inset-0 opacity-10 sm:opacity-20">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-primary/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-accent/10 rounded-full blur-2xl sm:blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-32 sm:h-32 bg-primary/30 rounded-full blur-xl sm:blur-2xl animate-bounce animation-delay-1000"></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(255,255,255,.05)_25px,rgba(255,255,255,.05)_26px,transparent_27px,transparent_74px,rgba(255,255,255,.05)_75px,rgba(255,255,255,.05)_76px,transparent_77px,transparent_24px),linear-gradient(rgba(255,255,255,.05)_25px,rgba(255,255,255,.05)_26px,transparent_27px,transparent_74px,rgba(255,255,255,.05)_75px,rgba(255,255,255,.05)_76px,transparent_77px,transparent)] bg-[length:100px_100px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent ">
                how to join
              </span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              Your journey to becoming a mesh. builder starts here
            </p>
          </div>

          {/* Flowchart */}
          <div className="flex flex-col md:flex-row  space-y-3 sm:space-x-4 md:space-x-6">
            {/* Step 1: Application */}
            <div className="relative w-full ">
              <div className="bg-background/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-primary/40 hover:border-primary/60 transition-all duration-300 shadow-lg hover:shadow-xl max-w-xs sm:max-w-md mx-auto">
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm sm:text-base">
                    1
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 text-center leading-tight">
                  Fill Application Form
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm text-center px-2 leading-relaxed">
                  Apply with a Project and tell us about yourself and your
                  passion for building
                </p>
              </div>
              {/* Arrow down */}
              <div className="flex justify-center mt-2 sm:mt-3 md:mt-4 md:hidden">
                <div className="w-0.5 h-4 sm:h-6 md:h-8 bg-gradient-to-b from-primary to-accent"></div>
                <div className="absolute mt-2 sm:mt-4 md:mt-6 w-2 h-2 sm:w-3 sm:h-3 bg-primary rotate-45 transform translate-y-1"></div>
              </div>
            </div>

            {/* Step 2: Project */}
            <div className="relative w-full">
              <div className="bg-background/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-primary/40 hover:border-primary/60 transition-all duration-300 shadow-lg hover:shadow-xl max-w-xs sm:max-w-md mx-auto">
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm sm:text-base">
                    2
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 text-center leading-tight">
                  Building Phase
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm text-center px-2 leading-relaxed">
                  Work on your project for 8 weeks and show us what you&apos;ve
                  built
                </p>
              </div>
              {/* Arrow down */}
              <div className="flex justify-center mt-2 sm:mt-3 md:mt-4 md:hidden">
                <div className="w-0.5 h-4 sm:h-6 md:h-8 bg-gradient-to-b from-primary to-accent"></div>
                <div className="absolute mt-2 sm:mt-4 md:mt-6 w-2 h-2 sm:w-3 sm:h-3 bg-primary rotate-45 transform translate-y-1"></div>
              </div>
            </div>

            {/* Step 3: Build */}
            <div className="relative w-full">
              <div className="bg-background/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-accent/40 hover:border-accent/60 transition-all duration-300 shadow-lg hover:shadow-xl max-w-xs sm:max-w-md mx-auto">
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm sm:text-base">
                    3
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 text-center leading-tight">
                  Demo
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm text-center px-2 leading-relaxed">
                  Demonstrate your project to the community on the monthly demo
                  day
                </p>
              </div>
              {/* Arrow down */}
              <div className="flex justify-center mt-2 sm:mt-3 md:mt-4 md:hidden">
                <div className="w-0.5 h-4 sm:h-6 md:h-8 bg-gradient-to-b from-accent to-primary"></div>
                <div className="absolute mt-2 sm:mt-4 md:mt-6 w-2 h-2 sm:w-3 sm:h-3 bg-accent rotate-45 transform translate-y-1"></div>
              </div>
            </div>

            {/* Step 4: Selection */}
            <div className="relative w-full">
              <div className="bg-background/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-accent/40 hover:border-accent/60 transition-all duration-300 shadow-lg hover:shadow-xl max-w-xs sm:max-w-md mx-auto">
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm sm:text-base">
                    4
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 text-center leading-tight">
                  Get Selected
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm text-center px-2 leading-relaxed">
                  Gain full access to our community and resources
                </p>
              </div>
              {/* Arrow down */}
              <div className="flex justify-center mt-2 sm:mt-3 md:mt-4 md:hidden  ">
                <div className="w-0.5 h-4 sm:h-6 md:h-8 bg-gradient-to-b from-accent to-primary"></div>
                <div className="absolute mt-2 sm:mt-4 md:mt-6 w-2 h-2 sm:w-3 sm:h-3 bg-accent rotate-45 transform translate-y-1"></div>
              </div>
            </div>

            {/* Step 5: Start Building */}
            <div className="relative w-full">
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border-2 border-primary/60 hover:border-primary/80 transition-all duration-300 shadow-xl hover:shadow-2xl max-w-xs sm:max-w-md mx-auto">
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm sm:text-base animate-pulse">
                    ✨
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 text-center leading-tight">
                  Start Building
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm text-center px-2 leading-relaxed">
                  Welcome to mesh. - let&apos;s build something amazing together
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8 sm:mt-12 px-4">
            <Link href="/apply">
              <Button
                size="lg"
                className="bg-primary hover:bg-accent text-primary-foreground font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group w-full sm:w-auto"
              >
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="flex items-center justify-center bg-card/30 px-4 py-8 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our projects
            </h2>
            <p className="text-muted-foreground w-full mx-auto">
              Discover the innovative projects our community is building from
              zero
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <ProjectCard
              title="Agroloon"
              image="/images/ballon.jpeg"
              description="Transforming agriculture with high-altitude balloon technology, delivering affordable, high-resolution data for smarter farming and damage assessments."
              leadName="Domokos Kertész"
              leadPhoto="/images/ballon_domi.jpeg"
            />

            <ProjectCard
              title="Gaem Lab"
              image="/images/vr_1.jpeg"
              description="Immersive virtual reality experiences that bridge the gap between digital and physical worlds, creating new possibilities for interaction and engagement."
              leadName="Bendegúz Skultéty"
              leadPhoto="/images/vr_2.jpeg"
            />

            <ProjectCard
              title="Thermal Control"
              image="/images/thermo.jpeg"
              description="Advanced thermal management systems for optimizing energy efficiency and temperature control in various applications."
              leadName="Donát Káli"
              leadPhoto="/images/badc.jpeg"
            />

            <ProjectCard
              title="Car Simulation"
              image="/images/carsim.jpeg"
              description="High-fidelity automotive simulation platform for testing, validation, and development of vehicle systems and autonomous driving technologies."
              leadName="Bendegúz Skultéty"
              leadPhoto="/images/thrawn.jpeg"
            />
          </div>
        </div>
      </section>
      <section
        id="events"
        className="flex items-center justify-center bg-card/30 px-4 py-8 py-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Events
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Join our vibrant community events and connect with fellow builders
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Event Types */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                What to Expect
              </h3>

              <div className="space-y-4">
                <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-border/20">
                  <h4 className="font-semibold text-foreground mb-2">
                    🎯 Demo Days
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Monthly showcases where members present their projects and
                    get feedback from the community
                  </p>
                </div>

                <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-border/20">
                  <h4 className="font-semibold text-foreground mb-2">
                    📚 Workshops & Lectures
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Learn new technologies and techniques from industry experts
                    and experienced builders
                  </p>
                </div>

                <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-border/20">
                  <h4 className="font-semibold text-foreground mb-2">
                    🚀 Hackathons
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Intensive building sessions where teams collaborate to
                    create innovative solutions
                  </p>
                </div>

                <div className="bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-border/20">
                  <h4 className="font-semibold text-foreground mb-2">
                    🎉 Community Gatherings
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Office parties, hackerspace nights, and casual meetups to
                    build connections
                  </p>
                </div>
              </div>
            </div>

            {/* Lu.ma Events Iframe */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Upcoming Events
              </h3>

              <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border/20">
                <div className="w-full">
                  <iframe
                    src="https://lu.ma/embed/calendar/cal-zvrSBZL0tjY4yra/events?compact=true"
                    width="100%"
                    height="400"
                    style={{ borderRadius: "4px", overflow: "hidden" }}
                    title="Mesh. Events Calendar"
                    className="border-0"
                  ></iframe>
                </div>
              </div>

              <p className="text-muted-foreground text-sm text-center">
                Once you&apos;re a member, you&apos;ll get access to all
                community events and exclusive gatherings
              </p>
            </div>
          </div>
        </div>
      </section>
      <ContactSection />
      <Footer />
    </main>
  );
}
