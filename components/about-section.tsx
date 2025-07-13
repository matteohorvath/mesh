"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AboutSection = ({ scrollToJoin }: { scrollToJoin: () => void }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-card/30 to-background/80 py-10"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse animation-delay-3000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(255,255,255,.05)_25px,rgba(255,255,255,.05)_26px,transparent_27px,transparent_74px,rgba(255,255,255,.05)_75px,rgba(255,255,255,.05)_76px,transparent_77px,transparent_24px),linear-gradient(rgba(255,255,255,.05)_25px,rgba(255,255,255,.05)_26px,transparent_27px,transparent_74px,rgba(255,255,255,.05)_75px,rgba(255,255,255,.05)_76px,transparent_77px,transparent)] bg-[length:100px_100px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Section Header */}
          <div
            className={`space-y-6 transition-all duration-1000 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              our{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
                story
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          {/* Story Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="prose prose-lg prose-invert max-w-none space-y-4">
              <p className="text-lg sm:text-xl leading-relaxed text-primary ">
                It all began in the cafeteria of a Budapest dorm, just a few
                friends talking about how fast we could learn if we stopped
                waiting and just started building. Three days later, we shipped
                our first real project for a real client. No sleep, no plan,
                just pure building. We were hooked.
              </p>

              <p className="text-lg sm:text-xl leading-relaxed text-primary ">
                From there, mesh. became our shared obsession. Thursday night ML
                sessions turned into demos with a huge audience. Random ideas
                turned into real prototypes. A dorm hack became a community. We
                found mentors, hosted events, welcomed a bunch of dedicated new
                builders and kept fire going day and night.
              </p>

              <p className="text-lg sm:text-xl leading-relaxed text-primary ">
                Now? We&apos;re a launchpad for the kind of builder who
                doesn&apos;t ask permission. Just show up. Build. Share. Figure
                it out with teammates who live for the same energy. mesh.
                isn&apos;t a startup, or a school. It&apos;s a commitment, a
                community, a space where you build.
              </p>
              <Link
                className="text-lg sm:text-xl leading-relaxed text-primary underline"
                href="https://growmesh.io/blog/mesh-retro"
                target="_blank"
              >
                more of this story on the link.
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div
            className={`pt-8 transition-all duration-1000 delay-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-xl text-muted-foreground mb-8">
              If that sounds like your kind of fun, let&apos;s build something
              together.
            </p>

            <Button
              size="lg"
              onClick={scrollToJoin}
              className="bg-primary hover:bg-accent text-primary-foreground font-semibold text-lg px-8 py-4 group"
            >
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
