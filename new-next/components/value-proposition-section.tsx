import Image from "next/image";

export default function ValuePropositionSection() {
  return (
    <section
      id="valueprop"
      className="min-h-screen flex items-center justify-center bg-background px-4 py-8"
    >
      <div className="text-center max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
          we&apos;re here to help you take the next step
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base">
          we&apos;re here to help you take the next step
        </p>

        <div className="flex flex-col items-center justify-center gap-8 sm:gap-12">
          {/* Software Section */}
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 w-full">
            <span className="text-muted-foreground text-base sm:text-lg font-medium order-1">
              either in software,
            </span>
            <div className="grid grid-cols-2 lg:flex lg:flex-row gap-2 sm:gap-4 order-2">
              <ValuePropositionImage image="/images/vr_2.jpeg" />
              <ValuePropositionImage image="/images/badc.jpeg" />
              <ValuePropositionImage image="/images/thrawn.jpeg" />
              <ValuePropositionImage image="/images/donat.jpeg" />
            </div>
          </div>

          {/* Hardware Section */}
          <div className="flex  flex-col lg:flex-row items-center gap-4 sm:gap-6 w-full">
            <div className="grid grid-cols-2 lg:flex lg:flex-row gap-2 sm:gap-4 order-2 lg:order-1">
              <ValuePropositionImage image="/images/carsim.jpeg" />
              <ValuePropositionImage image="/images/thermo.jpeg" />
              <ValuePropositionImage
                image="/images/ballon_domi_2.jpeg"
                rotate={true}
              />
              <ValuePropositionImage image="/images/cansat.jpg" rotate={true} />
            </div>
            <span className="text-muted-foreground text-base sm:text-lg font-medium order-1 lg:order-2">
              or in hardware
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuePropositionImage({
  image,
  rotate = false,
}: {
  image: string;
  rotate?: boolean;
}) {
  return (
    <div className="h-40 w-40 sm:h-44 sm:w-44 md:h-54 md:w-54 lg:h-60 lg:w-60 rounded-lg overflow-hidden">
      <Image
        src={image}
        alt="Value Proposition"
        className={`h-full w-full object-cover ${rotate ? "rotate-90" : ""}`}
        width={400}
        height={400}
      />
    </div>
  );
}
