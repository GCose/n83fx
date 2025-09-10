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
      <section className="relative py-[clamp(10rem,20vw,15rem)]">
        {/*==================== Dark Overlay ====================*/}
        <div className="absolute inset-0 bg-n83-black backdrop-blur-sm"></div>
        {/*==================== End of Dark Overlay ====================*/}

        <div className="relative z-10 w-full max-w-container mx-auto px-container">
          {/*==================== Section Title ====================*/}
          <div className="mb-[clamp(8rem,12vw,10rem)]">
            <h2 className="font-display text-[clamp(5rem,8vw,12rem)] font-900 text-text-primary leading-[0.9] tracking-tight">
              Why N83-FX
            </h2>
          </div>
          {/*==================== End of Section Title ====================*/}

          {/*==================== Cards Row with Borders ====================*/}
          <div className="border-t border-b border-neon-primary/60 py-[clamp(2rem,4vw,4rem)] mb-[clamp(8rem,10vw,12rem)]">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[clamp(5rem,6vw,4rem)]">
              {reasons.map((reason, index) => (
                <div key={index} className="lg:text-left">
                  <h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] font-700 text-neon-primary mb-[clamp(1.7rem,3vw,2.3rem)] uppercase tracking-tight">
                    {reason.title}
                  </h3>
                  <p className="font-body text-[clamp(1.6rem,2.2vw,2rem)] text-text-secondary leading-[1.4] max-w-[40rem] mx-auto lg:mx-0">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/*==================== End of Cards Row ====================*/}

          {/*==================== Video Section ====================*/}
          <div className="mb-[clamp(8rem,10vw,12rem)]">
            <div className="relative rounded-lg overflow-hidden">
              <video
                loop
                muted
                autoPlay
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/videos/hero-section.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          {/*==================== End of Video Section ====================*/}

          {/*==================== Call to Action ====================*/}
          <div className="text-center">
            <Link
              href="/about/about-n83fx"
              className="group inline-flex items-center justify-center px-[clamp(4rem,6vw,8rem)] py-[clamp(1.5rem,2.5vw,1.7rem)] bg-transparent text-neon-primary font-body font-600 text-[clamp(1.6rem,2vw,2rem)] border-2 border-neon-primary hover:bg-neon-primary hover:text-n83-black transition-all duration-300"
            >
              See the Platform
              <span className="ml-[1.5rem] group-hover:translate-x-[0.5rem] transition-transform duration-300">
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
