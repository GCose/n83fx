import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      {/*==================== Hero Section ====================*/}
      <section className="relative h-screen w-full">
        {/*==================== Hero Content ====================*/}
        <div className="absolute bottom-0 left-0 right-0 pb-[clamp(3rem,4vw,4rem)]">
          <div className="w-full max-w-container mx-auto px-container">
            <div>
              {/*==================== Main Content ====================*/}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-1 items-end">
                {/*==================== Left Column ====================*/}
                <div className="lg:col-span-7">
                  {/*==================== Primary Headline ====================*/}
                  <div className="space-y-[clamp(1.7rem,3vw,2rem)]">
                    <h1 className="font-display text-[clamp(4rem,12vw,20rem)] font-900 leading-[0.85] text-text-primary tracking-tight">
                      Built for{" "}
                      <span className="text-neon-primary animate-glow">
                        Winners
                      </span>
                      .
                    </h1>
                  </div>
                  {/*==================== End of Primary Headline ====================*/}
                </div>
                {/*==================== End of Left Column ====================*/}

                {/*==================== Right Column ====================*/}
                <div className="lg:col-span-5 space-y-[clamp(3rem,4vw,4rem)]">
                  <p className="font-body text-[clamp(1.8rem,3vw,3rem)] font-500 text-text-secondary leading-[1.2] max-w-[90rem]">
                    Simple tools. Clean screen. Fast moves.
                  </p>

                  {/*==================== CTA Buttons ====================*/}
                  <div className="flex flex-col sm:flex-row gap-[clamp(2rem,3vw,4rem)]">
                    <Link
                      href="/account/open"
                      className="group relative inline-flex items-center justify-center px-[clamp(3rem,4vw,5rem)] py-[clamp(1.5rem,2.5vw,1.7rem)] bg-neon-primary text-n83-black font-body font-700 text-[clamp(1.6rem,2vw,2rem)] rounded-none border-2 border-neon-primary hover:bg-transparent hover:text-neon-primary transition-all duration-300"
                    >
                      Open Account
                      <span className="ml-[1rem] group-hover:translate-x-[0.5rem] transition-transform duration-300">
                        →
                      </span>
                    </Link>

                    <Link
                      href="/pricing"
                      className="group inline-flex items-center justify-center px-[clamp(3rem,4vw,5rem)] py-[clamp(1.5rem,2.5vw,1.7rem)] bg-transparent text-text-primary font-body font-600 text-[clamp(1.6rem,2vw,2rem)] border-2 border-text-primary hover:border-neon-primary hover:text-neon-primary transition-all duration-300"
                    >
                      See Pricing
                      <span className="ml-[1rem] group-hover:translate-x-[0.5rem] transition-transform duration-300">
                        →
                      </span>
                    </Link>
                  </div>
                  {/*==================== End of CTA Buttons ====================*/}
                </div>
                {/*==================== End of Right Column ====================*/}
              </div>
              {/*==================== End of Main Content ====================*/}
            </div>
          </div>
        </div>
        {/*==================== End of Hero Content ====================*/}
      </section>
      {/*==================== End of Hero Section ====================*/}
    </>
  );
};

export default HeroSection;
