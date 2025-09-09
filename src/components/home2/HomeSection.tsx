import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <section className="relative min-h-screen w-full overflow-hidden bg-n83-black">
        {/*==================== Video Background ====================*/}
        <div className="absolute inset-0 z-0">
          <video
            loop
            muted
            autoPlay
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/videos/hero-section-2.mp4" type="video/mp4" />
          </video>

          {/*==================== Gradient Overlays ====================*/}
          <div className="absolute inset-0 bg-gradient-to-r from-n83-black/20 via-n83-black/10 to-transparent" />
          {/*==================== End of Gradient Overlays ====================*/}
        </div>
        {/*==================== End of Video Background ====================*/}

        {/*==================== Hero Content ====================*/}
        <div className="relative z-10 flex min-h-screen items-center">
          <div className="w-full max-w-container mx-auto px-container">
            <div className="flex items-center">
              {/*==================== Main Content ====================*/}
              <div className="space-y-3 md:space-y-8">
                {/*==================== Primary Headline ====================*/}
                <div>
                  <h1 className="typography-display text-[clamp(5rem,10vw,19rem)] leading-1 text-text-primary">
                    Built for{" "}
                    <span className="text-neon-primary animate-glow">
                      Winners
                    </span>
                    .
                  </h1>

                  <p className="typography-body pt-2 md:pt-0 text-[clamp(var(--text-lg),3vw,var(--text-xl))] font-500 text-text-secondary max-w-[80rem]">
                    Simple tools. Clean screen. Fast moves.
                  </p>
                </div>
                {/*==================== End of Primary Headline ====================*/}

                {/*==================== CTA Buttons ====================*/}
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 pt-2 ">
                  <Link
                    href="/account/open"
                    className="group relative inline-flex items-center justify-center px-4 py-2 bg-neon-primary text-n83-black typography-body font-700 text-[var(--text-lg)] rounded-none border-2 border-neon-primary hover:bg-transparent hover:text-neon-primary transition-all duration-300 animate-pulse-neon"
                  >
                    Open Account
                    <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </Link>

                  <Link
                    href="/pricing"
                    className="group inline-flex items-center justify-center px-4 py-2 bg-transparent text-text-primary typography-body font-600 text-[var(--text-lg)] border-2 border-text-primary hover:border-neon-primary hover:text-neon-primary transition-all duration-300"
                  >
                    See Pricing
                    <span className="ml-3 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </Link>
                </div>
                {/*==================== End of CTA Buttons ====================*/}
              </div>
              {/*==================== End of Main Content ====================*/}
            </div>
          </div>
        </div>
        {/*==================== End of Hero Content ====================*/}
      </section>
    </>
  );
};

export default HeroSection;
