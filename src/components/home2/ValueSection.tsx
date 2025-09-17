import Image from "next/image";
import Link from "next/link";

const ValueSection = () => {
  const features = [
    {
      number: "1",
      title: "See your position, fast",
      description: "One clean view for entries, exits, and size. No clutter.",
      image: "/images/home-page/hero.jpg",
    },
    {
      number: "2",
      title: "Risk controls that keep you honest",
      description: "Set limits. Set stops. Keep your plan tight.",
      image: "/images/home-page/why-section/home-why.jpg",
    },
    {
      number: "3",
      title: "Clean alerts, not loud ones",
      description: "Only what matters. Right when it matters.",
      image: "/images/home-page/what-section/what.jpg",
    },
    {
      number: "4",
      title: "Fast actions",
      description: "Fewer clicks. Quicker moves. More focus.",
      image: "/images/home-page/operations-section/home-operations.jpg",
    },
  ];

  return (
    <>
      {/*==================== Value Section ====================*/}
      <section className="relative py-[clamp(10rem,20vw,15rem)]">
        {/*==================== Dark Overlay ====================*/}
        <div className="absolute inset-0 bg-n83-black z-0"></div>
        {/*==================== End of Dark Overlay ====================*/}

        <div className="relative z-10 w-full max-w-container mx-auto px-container">
          {/*==================== Section Title ====================*/}
          <div className="mb-[clamp(8rem,18vw,12rem)]">
            <h2 className="font-display text-[clamp(5rem,8vw,9rem)] font-900 text-text-primary leading-[0.9] tracking-tight">
              What You Get
            </h2>
          </div>
          {/*==================== End of Section Title ====================*/}

          {/*==================== Features Rows ====================*/}
          <div className="space-y-[clamp(12rem,15vw,18rem)]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-[clamp(1rem,4vw,4rem)] items-start border-t border-neon-primary/60 pt-6"
              >
                {/*==================== Column 1: Number ====================*/}
                <div className="col-span-1 md:col-span-1 lg:col-span-2 md:mb-4">
                  <span className="font-display text-[clamp(3rem,5vw,6rem)] font-900 text-neon-primary leading-[1]">
                    {feature.number}
                  </span>
                </div>
                {/*==================== End of Column 1 ====================*/}

                {/*==================== Column 2: Title ====================*/}
                <div className="col-span-1 md:col-span-2 lg:col-span-4 md:mb-4">
                  <h3 className="font-display text-[clamp(2.7rem,3vw,3.5rem)] font-700 text-text-primary leading-[1.1] tracking-tight">
                    {feature.title}
                  </h3>
                </div>
                {/*==================== End of Column 2 ====================*/}

                {/*==================== Column 3: Content + Image ====================*/}
                <div className="col-span-1 md:col-span-3 lg:col-span-6">
                  <p className="font-body text-[clamp(1.6rem,3vw,2.7rem)] text-left md:text-right text-text-secondary leading-[1.1] mb-[clamp(3rem,4vw,2rem)]">
                    {feature.description}
                  </p>

                  <div className="relative rounded-lg overflow-hidden">
                    <Image
                      width={1200}
                      height={800}
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-[clamp(40rem,60vh,40vh)] md:h-[clamp(50rem,70vh,25vh)] object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-n83-black/40 via-transparent to-transparent pointer-events-none"></div>
                  </div>
                </div>
                {/*==================== End of Column 3 ====================*/}
              </div>
            ))}
          </div>
          {/*==================== End of Features Rows ====================*/}

          {/*==================== Call to Action ====================*/}
          <div className="mt-[clamp(7rem,2vw,10rem)] text-center">
            <Link
              href="/account/open"
              className="group inline-flex items-center justify-center px-[clamp(3rem,4vw,5rem)] py-[clamp(1.5rem,2.5vw,1.7rem)] bg-neon-primary text-n83-black font-body font-700 text-[clamp(1.6rem,2vw,2rem)] hover:bg-transparent hover:text-neon-primary border-2 border-neon-primary transition-all duration-300"
            >
              Open Account
              <span className="ml-[1.5rem] group-hover:translate-x-[0.5rem] transition-transform duration-300">
                →
              </span>
            </Link>

            <p className="font-body text-[clamp(1.4rem,1.8vw,2rem)] text-text-muted mt-[clamp(2rem,3vw,3rem)]">
              Trading is risky. No returns are promised.
            </p>
          </div>
          {/*==================== End of Call to Action ====================*/}
        </div>
      </section>
      {/*==================== End of Value Section ====================*/}
    </>
  );
};

export default ValueSection;
