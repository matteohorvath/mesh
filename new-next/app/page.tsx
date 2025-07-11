import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* Placeholder sections for future development */}
      <AboutSection />

      <section
        id="join"
        className="min-h-screen flex items-center justify-center bg-background"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            How to Join
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Coming soon: 4-step process to become part of the mesh community.
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center bg-card/30"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Coming soon: Showcase of community projects and member achievements.
          </p>
        </div>
      </section>

      <section
        id="community"
        className="min-h-screen flex items-center justify-center bg-background"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Community</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Coming soon: Meet our members and see the mesh community in action.
          </p>
        </div>
      </section>

      <section
        id="events"
        className="min-h-screen flex items-center justify-center bg-card/30"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Events</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Coming soon: Lectures, hackathons, demo days and more community
            events.
          </p>
        </div>
      </section>
    </main>
  );
}
