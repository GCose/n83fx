import Link from "next/link";

const CryptoBeginJourney = () => {
  return (
    <section className="relative py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Final CTA Section ====================*/}
        <div className="bg-n83-black rounded-[3rem] p-[clamp(4rem,6vw,6rem)] text-center">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-white text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(2rem,3vw,3rem)] uppercase tracking-tight">
            Begin Your Crypto Journey
          </h2>

          <div className="space-y-[clamp(2rem,3vw,3rem)] mb-[clamp(4rem,5vw,5rem)]">
            <p className="m-0 font-normal leading-[1.5] text-n83-white text-[clamp(1.8rem,2vw,2rem)] max-w-[80rem] mx-auto">
              Crypto is more than a market — it represents the future of
              finance. At N83-FX, we provide the clarity, transparency, and
              discipline needed to trade it wisely.
            </p>
          </div>

          <div className="flex items-center gap-[clamp(2rem,3vw,3rem)] flex-col lg:flex-row justify-center">
            <Link
              href="/account/open"
              className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-black bg-n83-white hover:-translate-y-[2px] hover:bg-n83-gray-50 hover:shadow-[0_8px_25px_rgba(255,255,255,0.15)] w-full lg:w-auto max-w-[30rem]"
            >
              Open an Account Today
            </Link>
            <Link
              href="/about/company-info"
              className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-white bg-transparent border-2 border-n83-white hover:text-n83-black hover:-translate-y-[2px] hover:bg-n83-white w-full lg:w-auto max-w-[30rem]"
            >
              Learn More About Us
            </Link>
          </div>

          {/*==================== Bottom Tagline ====================*/}
          <div className="mt-[clamp(3rem,4vw,4rem)] pt-[clamp(3rem,4vw,4rem)] border-t border-n83-white/20">
            <p className="m-0 font-medium leading-[1.4] text-n83-white/60 text-[clamp(1.4rem,1.6vw,1.6rem)] max-w-[60rem] mx-auto">
              Step into digital asset trading with a partner that values clarity
              and trust above hype.
            </p>
          </div>
          {/*==================== End of Bottom Tagline ====================*/}
        </div>
        {/*==================== End of Final CTA Section ====================*/}
      </div>
    </section>
  );
};

export default CryptoBeginJourney;
