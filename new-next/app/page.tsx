import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />

      {/* Placeholder sections for future development */}
      <AboutSection />

      <section
        id="valueprop"
        className="min-h-screen flex items-center justify-center bg-background"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            we’re here to help you take the next step
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            we’re here to help you take the next step
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto flex flex-row items-center justify-center">
            either in software,
            <div className="flex flex-row gap-4">
              <div className="h-70 w-70 bg-red-500 rounded-lg"></div>
              <div className="h-70 w-70 bg-red-500 rounded-lg"></div>
              <div className="h-70 w-70 bg-red-500 rounded-lg"></div>
              <div className="h-70 w-70 bg-red-500 rounded-lg"></div>
            </div>
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto flex flex-row items-center justify-center ">
            <div className="flex flex-row gap-4">
              <div className="h-70 w-70 bg-red-500 rounded-lg"></div>
              <div className="h-70 w-70 bg-red-500 rounded-lg"></div>
              <div className="h-70 w-70 bg-red-500 rounded-lg"></div>
              <div className="h-70 w-70 bg-red-500 rounded-lg"></div>
            </div>
            here or in hardware
          </p>
        </div>
      </section>

      <section
        id="philosophy"
        className="min-h-screen flex items-center justify-center bg-card/30"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            philosophy
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            BUILD. SHARE. HELP. Learn it by doing. Never met the tech? You’ll
            learn it here. Experimentation over perfection. We’re product-first.
            70% ready is ready. Community over ego. Feedback, pair-programming,
            shared wins. Shared knowledge. Openness to all skill levels, no
            limits. Collective ownership. mesh. philosophy and values.{" "}
          </p>
        </div>
      </section>

      <section
        id="agreement"
        className="min-h-screen flex items-center justify-center bg-background"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">agreement</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Coming soon: Meet our members and see the mesh what we propose A
            vibrant community and teammates Opportunities Mentorship Office
            space and tools A testing platform to showcase your work Initial
            steps within our engineer-led community Dedication Building
            something bold Frequent communication Activity inside the community
            what we require this is the equation to become a great builder at
            mesh. in action.
          </p>
        </div>
      </section>

      <section
        id="join"
        className="min-h-screen flex items-center justify-center bg-card/30"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">join</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            How to join? Fill out the application form and apply with a project
            Build for 8 weeks to show dedication Get selected to gain full
            access to our community Take part in the onboarding talk start
            building
          </p>
        </div>
      </section>
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center bg-card/30"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our projects Agroloon Project lead: Domokos Kertész Agroloon is
            transforming agriculture with high-altitude balloon technology,
            delivering affordable, high-resolution data for smarter farming and
            damage assessments. front back
          </p>
        </div>
      </section>
      <section
        id="events"
        className="min-h-screen flex items-center justify-center bg-card/30"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            LECTURES DEMO DAYS Events Once you’re a member, you’ll get access to
            all community events, like inside hackathons, office parties,
            workshops, hackerspace nights and many more.
          </p>
        </div>
      </section>
    </main>
  );
}
