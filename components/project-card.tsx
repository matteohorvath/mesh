import Image from "next/image";

interface ProjectCardProps {
  title: string;
  image: string;
  description: string;
  leadName: string;
  leadPhoto: string;
}

export default function ProjectCard({
  title,
  image,
  description,
  leadName,
  leadPhoto,
}: ProjectCardProps) {
  return (
    <div className="group perspective-1000 w-full max-w-sm mx-auto h-80">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-border/20 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-xl w-full h-full overflow-hidden">
            <div className="relative h-2/3 w-full">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
            <div className="p-6 h-1/3 flex items-center justify-center">
              <h3 className="text-xl font-semibold text-foreground text-center">
                {title}
              </h3>
            </div>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="bg-background/90 backdrop-blur-sm rounded-xl border border-primary/40 w-full h-full p-6 flex flex-col">
            <div className="flex-1 mb-4">
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {description}
              </p>
            </div>

            <div className="flex items-center gap-3 mt-auto">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                <Image
                  src={leadPhoto}
                  alt={leadName}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Project Lead</p>
                <p className="text-sm font-medium text-foreground">
                  {leadName}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
