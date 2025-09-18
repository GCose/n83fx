import Link from "next/link";

const CTASection = () => {
  return (
    <>
      {/*==================== Final CTA Section ====================*/}
      <section className="relative bg-n83-black py-[clamp(10rem,15vw,12rem)] border-t">
        <div className="relative z-40 w-full max-w-container mx-auto px-container">
          {/*==================== Main Content ====================*/}
          <div className="max-w-[80rem] mx-auto space-y-[clamp(4rem,6vw,6rem)]">
            {/*==================== Hero Statement ====================*/}
            <div className="space-y-[clamp(3rem,4vw,4rem)]">
              <h2 className="font-display text-center text-[clamp(6rem,12vw,10rem)] font-900 text-text-primary leading-[0.8] tracking-tight">
                Make Your{" "}
                <span className="text-neon-primary animate-glow">Move</span>
              </h2>

              <p className="font-body text-center text-[clamp(2rem,3vw,2.8rem)] font-500 text-text-secondary leading-[1.3] max-w-[60rem] mx-auto">
                Join a platform that respects your time and your focus.
              </p>
            </div>
            {/*==================== End of Hero Statement ====================*/}

            {/*==================== Primary CTAs ====================*/}
            <div className="flex flex-col sm:flex-row gap-[clamp(3rem,4vw,5rem)] justify-center items-center">
              <Link
                href="/account/open"
                className="group relative inline-flex items-center justify-center px-[clamp(3rem,4vw,5rem)] py-[clamp(1.5rem,2.5vw,1.7rem)] bg-neon-primary text-n83-white font-body font-700 text-[clamp(1.8rem,2.5vw,1.8rem)] border-2 border-neon-primary hover:bg-transparent hover:text-neon-primary transition-all duration-500 shadow-[0_0_3rem_rgba(0,255,136,0.3)] hover:shadow-[0_0_5rem_rgba(0,255,136,0.5)]"
              >
                <span className="relative z-10">Open Account</span>
                <span className="ml-[2rem] group-hover:translate-x-[1rem] transition-transform duration-500 text-[clamp(2rem,2.5vw,2.5rem)] relative z-10">
                  →
                </span>

                {/*==================== Button Glow Effect ====================*/}
                <div className="absolute inset-0 bg-neon-primary/20 blur-xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                {/*==================== End of Button Glow Effect ====================*/}
              </Link>

              <Link
                href="/pricing"
                className="group inline-flex items-center justify-center px-[clamp(3rem,4vw,5rem)] py-[clamp(1.5rem,2.5vw,1.7rem)] bg-transparent text-text-primary font-body font-600 text-[clamp(1.8rem,2.5vw,1.8rem)] border-2 border-text-primary hover:border-neon-primary hover:text-neon-primary transition-all duration-500"
              >
                See Pricing
                <span className="ml-[2rem] group-hover:translate-x-[1rem] transition-transform duration-500 text-[clamp(2rem,2.5vw,2.5rem)]">
                  →
                </span>
              </Link>
            </div>
            {/*==================== End of Primary CTAs ====================*/}

            {/*==================== Disclaimer ====================*/}
            <div className="pt-3 border-t">
              <p className="font-body text-center text-[clamp(1.4rem,1.8vw,1.8rem)] text-text-muted leading-[1.4] italic">
                Trading is risky. No returns are promised.
              </p>
            </div>
            {/*==================== End of Disclaimer ====================*/}

            {/*==================== Floating Elements ====================*/}
            <div className="absolute top-[10%] left-[10%] w-[2rem] h-[2rem] border-2 border-neon-primary/40 transform rotate-45 animate-pulse-neon delay-500"></div>
            <div className="absolute top-[20%] right-[15%] w-[1rem] h-[1rem] bg-neon-primary/60 rounded-full animate-pulse-neon delay-1500"></div>
            <div className="absolute bottom-[15%] left-[20%] w-[1.5rem] h-[1.5rem] border border-neon-secondary/40 rounded-full animate-pulse-neon delay-3000"></div>
            <div className="absolute bottom-[25%] right-[10%] w-[2.5rem] h-[2.5rem] border-2 border-neon-tertiary/40 transform rotate-12 animate-pulse-neon delay-2500"></div>
            {/*==================== End of Floating Elements ====================*/}
          </div>
        </div>
      </section>
      {/*==================== End of Final CTA Section ====================*/}
    </>
  );
};

export default CTASection;
