"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Zap, Users } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToJoin = () => {
    const element = document.querySelector("#join");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-background/80"
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

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center grid grid-cols-2">
        <div className="space-y-8">
          {/* Main tagline */}
          <div className="space-y-4">
            <h1
              className={`text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight transition-all duration-1000 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <span className="text-foreground">dream it.</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                build it.
              </span>
            </h1>

            <p
              className={`text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {`We're a hackerlab where we seek and develop talent through hands-on building. 
              Join our community-driven approach to learning and creating.`}
            </p>
          </div>

          {/* Feature highlights */}
          <div
            className={`grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <Code className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">Learn by Doing</h3>
              <p className="text-sm text-muted-foreground text-center">
                {`Never met the tech? You'll learn it here through real projects.`}
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">
                Vibrant Community
              </h3>
              <p className="text-sm text-muted-foreground text-center">
                Connect with like-minded builders and get mentorship.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50">
              <Zap className="h-8 w-8 text-primary" />
              <h3 className="font-semibold text-foreground">Build Bold</h3>
              <p className="text-sm text-muted-foreground text-center">
                {`70% ready is ready. We're product-first, experimentation over perfection.`}
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              size="lg"
              onClick={scrollToJoin}
              className="bg-primary hover:bg-accent text-primary-foreground font-semibold text-lg px-8 py-4 group"
            >
              Start Building
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const element = document.querySelector("#about");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-lg px-8 py-4"
            >
              Learn More
            </Button>
          </div>
        </div>
        <Image
          src="/images/hero-image.png"
          alt="Hero Image"
          width={500}
          height={500}
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
