import Image from "next/image";
import Link from "next/link";

const ValueSection = () => {
  const features = [
    {
      title: "See your position, fast",
      description: "One clean view for entries, exits, and size. No clutter.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-[clamp(2.5rem,3vw,3.5rem)] h-[clamp(2.5rem,3vw,3.5rem)]"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M9 9h6v6H9z" fill="currentColor" />
        </svg>
      ),
    },
    {
      title: "Risk controls that keep you honest",
      description: "Set limits. Set stops. Keep your plan tight.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-[clamp(2.5rem,3vw,3.5rem)] h-[clamp(2.5rem,3vw,3.5rem)]"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 6v6l4 2"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
    },
    {
      title: "Clean alerts, not loud ones",
      description: "Only what matters. Right when it matters.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-[clamp(2.5rem,3vw,3.5rem)] h-[clamp(2.5rem,3vw,3.5rem)]"
        >
          <path
            d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M13.73 21a2 2 0 0 1-3.46 0"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      ),
    },
    {
      title: "Fast actions",
      description: "Fewer clicks. Quicker moves. More focus.",
      icon: (
        <svg
          viewBox="0 0 24 24"
          className="w-[clamp(2.5rem,3vw,3.5rem)] h-[clamp(2.5rem,3vw,3.5rem)]"
        >
          <polygon
            points="13,2 3,14 12,14 11,22 21,10 12,10"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  const FeatureCard = ({ feature }: { feature: (typeof features)[0] }) => (
    <div className="flex items-start gap-[clamp(2rem,3vw,3rem)]">
      {/*==================== Icon Card ====================*/}
      <div className="relative p-[1px] rounded-xl bg-gradient-to-r from-neon-primary/40 via-neon-primary/60 to-neon-primary/40 flex-shrink-0">
        {/*==================== Animated Border Effect ====================*/}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-primary/30 via-neon-primary/50 to-neon-primary/30 blur-sm animate-pulse"></div>
        {/*==================== End of Animated Border Effect ====================*/}

        {/*==================== Icon Container ====================*/}
        <div className="relative bg-n83-black rounded-xl w-[clamp(6rem,7vw,8rem)] h-[clamp(6rem,7vw,8rem)] flex items-center justify-center text-neon-primary">
          {feature.icon}
        </div>
        {/*==================== End of Icon Container ====================*/}
      </div>
      {/*==================== End of Icon Card ====================*/}

      {/*==================== Text Content ====================*/}
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-[clamp(1.8rem,2.2vw,2.8rem)] font-700 text-text-primary leading-[1.1] tracking-tight mb-[clamp(0.8rem,1.2vw,1.5rem)]">
          {feature.title}
        </h3>
        <p className="font-body text-[clamp(1.3rem,1.5vw,1.8rem)] text-text-secondary leading-[1.4] opacity-70">
          {feature.description}
        </p>
      </div>
      {/*==================== End of Text Content ====================*/}
    </div>
  );

  return (
    <>
      {/*==================== Value Section ====================*/}
      <section className="relative py-[clamp(10rem,20vw,15rem)] border-t">
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

          {/*==================== Desktop Zig-Zag Layout ====================*/}
          <div className="hidden lg:block">
            <div className="grid grid-cols-7 grid-rows-3 gap-[clamp(3rem,4vw,5rem)] max-w-[140rem] mx-auto min-h-[80rem]">
              {/*==================== Feature 1: Top Left ====================*/}
              <div className="col-span-2 row-span-1 self-end">
                <FeatureCard feature={features[0]} />
              </div>

              {/*==================== Central Image ====================*/}
              <div className="col-span-3 row-span-3 self-center">
                <div className="relative rounded-xl overflow-hidden bg-n83-black/50 backdrop-blur-sm h-[clamp(60rem,70vh,80rem)]">
                  <Image
                    width={800}
                    height={600}
                    src="/images/home-page/hero.jpg"
                    alt="Trading platform interface"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-n83-black/40 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/*==================== Feature 2: Center Right ====================*/}
              <div className="col-span-2 row-span-1 self-center">
                <FeatureCard feature={features[1]} />
              </div>

              {/*==================== Empty Spaces ====================*/}
              <div className="col-span-2"></div>
              <div className="col-span-2"></div>

              {/*==================== Feature 3: Bottom Left ====================*/}
              <div className="col-span-2 row-span-1 self-start">
                <FeatureCard feature={features[2]} />
              </div>

              {/*==================== Feature 4: Bottom Right ====================*/}
              <div className="col-span-2 row-span-1 self-start">
                <FeatureCard feature={features[3]} />
              </div>
            </div>
          </div>
          {/*==================== End of Desktop Zig-Zag Layout ====================*/}

          {/*==================== Mobile Vertical Layout ====================*/}
          <div className="lg:hidden space-y-[clamp(4rem,6vw,6rem)]">
            {/*==================== Central Image Mobile ====================*/}
            <div className="relative rounded-xl overflow-hidden bg-n83-black/50 backdrop-blur-sm h-[clamp(40rem,50vh,50rem)] mb-[clamp(6rem,8vw,8rem)]">
              <Image
                width={400}
                height={600}
                src="/images/home-page/hero.jpg"
                alt="Trading platform interface"
                className="w-full h-screen object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-n83-black/40 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/*==================== Features Stack Mobile ====================*/}
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
          {/*==================== End of Mobile Vertical Layout ====================*/}

          {/*==================== Call to Action ====================*/}
          <div className="mt-4 text-center">
            <Link
              href="/account/open"
              className="group inline-flex items-center justify-center px-[clamp(3rem,4vw,5rem)] py-[clamp(1.5rem,2.5vw,1.7rem)] bg-neon-primary/60 text-n83-white font-body font-700 text-[clamp(1.6rem,2vw,2rem)] hover:bg-transparent hover:text-neon-primary border-2 border-neon-primary transition-all duration-300"
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
