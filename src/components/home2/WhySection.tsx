import Link from "next/link";

const WhySection = () => {
  const reasons = [
    {
      title: "Identity",
      description: "Be the person who shows up. Calm. Ready. In control.",
    },
    {
      title: "Discipline",
      description: "Think first. Then trade. No noise. No rush.",
    },
    {
      title: "Design",
      description: "A clear screen helps you make a clear call.",
    },
  ];

  return (
    <>
      {/*==================== Why N83-FX Section ====================*/}
      <section className="relative min-h-[250vh] py-[clamp(8rem,10vw,12rem)] border-t">
        {/*==================== Dark Overlay for Readability ====================*/}
        <div className="absolute inset-0 bg-n83-black/85 backdrop-blur-sm"></div>
        {/*==================== End of Dark Overlay ====================*/}

        <div className="relative z-10 w-full max-w-container mx-auto px-container">
          {/*==================== Section Title ====================*/}
          <div className="mb-[clamp(15rem,20vw,25rem)]">
            <h2 className="font-display text-[clamp(4rem,8vw,12rem)] font-900 text-text-primary leading-[0.9] tracking-tight">
              Why N83-FX
            </h2>
          </div>
          {/*==================== End of Section Title ====================*/}

          {/*==================== Reasons Grid - Creative 12-Column Layout ====================*/}
          <div className="grid grid-cols-12 gap-[clamp(2rem,3vw,4rem)] mb-[clamp(20rem,25vw,30rem)]">
            {/*==================== Identity Card ====================*/}
            <div className="col-span-12 lg:col-span-4 lg:col-start-2 mb-[clamp(12rem,15vw,18rem)] lg:mb-0">
              <div className="bg-dark-200/90 backdrop-blur-md border border-neon-primary/40 p-[clamp(4rem,5vw,6rem)] rounded-lg hover:border-neon-primary/80 transition-all duration-500 group hover:scale-105">
                <h3 className="font-display text-[clamp(3rem,4vw,5rem)] font-700 text-neon-primary mb-[clamp(3rem,4vw,4rem)] group-hover:animate-glow">
                  {reasons[0].title}
                </h3>
                <p className="font-body text-[clamp(1.8rem,2.5vw,3rem)] text-text-secondary leading-[1.3]">
                  {reasons[0].description}
                </p>
              </div>
            </div>
            {/*==================== End of Identity Card ====================*/}

            {/*==================== Discipline Card ====================*/}
            <div className="col-span-12 lg:col-span-4 lg:col-start-8 mb-[clamp(12rem,15vw,18rem)] lg:mb-0 lg:mt-[clamp(8rem,10vw,12rem)]">
              <div className="bg-dark-200/90 backdrop-blur-md border border-neon-primary/40 p-[clamp(4rem,5vw,6rem)] rounded-lg hover:border-neon-primary/80 transition-all duration-500 group hover:scale-105">
                <h3 className="font-display text-[clamp(3rem,4vw,5rem)] font-700 text-neon-primary mb-[clamp(3rem,4vw,4rem)] group-hover:animate-glow">
                  {reasons[1].title}
                </h3>
                <p className="font-body text-[clamp(1.8rem,2.5vw,3rem)] text-text-secondary leading-[1.3]">
                  {reasons[1].description}
                </p>
              </div>
            </div>
            {/*==================== End of Discipline Card ====================*/}

            {/*==================== Design Card ====================*/}
            <div className="col-span-12 lg:col-span-4 lg:col-start-4 lg:mt-[clamp(16rem,20vw,24rem)]">
              <div className="bg-dark-200/90 backdrop-blur-md border border-neon-primary/40 p-[clamp(4rem,5vw,6rem)] rounded-lg hover:border-neon-primary/80 transition-all duration-500 group hover:scale-105">
                <h3 className="font-display text-[clamp(3rem,4vw,5rem)] font-700 text-neon-primary mb-[clamp(3rem,4vw,4rem)] group-hover:animate-glow">
                  {reasons[2].title}
                </h3>
                <p className="font-body text-[clamp(1.8rem,2.5vw,3rem)] text-text-secondary leading-[1.3]">
                  {reasons[2].description}
                </p>
              </div>
            </div>
            {/*==================== End of Design Card ====================*/}
          </div>
          {/*==================== End of Reasons Grid ====================*/}

          {/*==================== Call to Action ====================*/}
          <div className="text-center">
            <Link
              href="/about/about-n83fx"
              className="group inline-flex items-center justify-center px-[clamp(5rem,6vw,8rem)] py-[clamp(1.5rem,2.5vw,1.7rem)] bg-transparent text-neon-primary font-body font-600 text-[clamp(1.6rem,2vw,2rem)] border-2 border-neon-primary hover:bg-neon-primary hover:text-n83-black transition-all duration-300 hover:scale-105"
            >
              See the Platform
              <span className="ml-[2rem] group-hover:translate-x-[0.5rem] transition-transform duration-300 text-[clamp(2rem,3vw,3.5rem)]">
                →
              </span>
            </Link>
          </div>
          {/*==================== End of Call to Action ====================*/}
        </div>
      </section>
      {/*==================== End of Why N83-FX Section ====================*/}
    </>
  );
};

export default WhySection;
