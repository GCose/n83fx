import Link from "next/link";
import Image from "next/image";

const ForexRisk = () => {
  const riskPoints = [
    "Never risk more than they can afford to lose",
    "Use stop-loss orders and risk controls",
    "Trade with discipline instead of emotion",
  ];

  const differences = [
    {
      title: "Honest Trading Conditions",
      description:
        "No hidden fees, no misleading promotions. What you see is what you get.",
    },
    {
      title: "Calm, Reliable Environment",
      description:
        "A platform designed for focus and discipline, not emotional reactions.",
    },
    {
      title: "Long-term Trust",
      description:
        "We build relationships with our clients, not just transactions.",
    },
  ];

  return (
    <section className="relative py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Risk Management Section ====================*/}
        <div className="bg-n83-gray-50 rounded-[3rem] p-[clamp(4rem,6vw,6rem)] mb-[clamp(8rem,10vw,10rem)]">
          <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center">
            {/*==================== Left: Content ====================*/}
            <div className="flex flex-col justify-center">
              <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(3rem,4vw,4rem)] uppercase tracking-tight">
                Understanding Risk
              </h2>

              <p className="m-0 leading-[1.5] text-n83-black text-[clamp(1.8rem,2vw,2rem)] mb-[clamp(3rem,4vw,4rem)] font-medium">
                Forex trading involves leverage, which can amplify profits but
                also magnify losses. This is why risk management is central to
                our philosophy.
              </p>

              <div className="mb-[clamp(3rem,4vw,4rem)]">
                <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.8rem,2vw,2rem)] mb-[clamp(2rem,3vw,3rem)]">
                  At N83-FX, we encourage traders to:
                </h3>

                {/*==================== Risk Points ====================*/}
                <div className="space-y-[clamp(1.5rem,2vw,2rem)]">
                  {riskPoints.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-[1.5rem] group"
                    >
                      <div className="w-[0.6rem] h-[0.6rem] bg-n83-black rounded-full mt-[1rem] flex-shrink-0 transition-transform duration-300 group-hover:scale-125"></div>
                      <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.8rem)]">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
                {/*==================== End of Risk Points ====================*/}
              </div>

              <div className="p-[clamp(2rem,3vw,3rem)] bg-n83-white rounded-[1.6rem] border-l-4 border-n83-black">
                <p className="m-0 font-medium leading-[1.4] text-n83-black text-[clamp(1.6rem,1.8vw,1.8rem)]">
                  We believe transparency is respect. That{"'"}s why we make
                  risks as clear as the opportunities.
                </p>
              </div>
            </div>
            {/*==================== End of Left: Content ====================*/}

            {/*==================== Right: Visual ====================*/}
            <div className="relative">
              <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
                <Image
                  width={800}
                  height={600}
                  src="/images/markets/forex/risk-management.jpg"
                  alt="Risk management tools and stop-loss orders"
                  className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
                />
              </div>
            </div>
            {/*==================== End of Right: Visual ====================*/}
          </div>
        </div>
        {/*==================== End of Risk Management Section ====================*/}

        {/*==================== Why Different Section ====================*/}
        <div className="text-center mb-[clamp(6rem,8vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(4rem,5vw,6rem)] mb-[clamp(2rem,3vw,3rem)] uppercase tracking-tight">
            Why N83-FX is Different
          </h2>
          <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.8rem,2.2vw,2.4rem)] max-w-[80rem] mx-auto">
            Many platforms advertise bonuses, promotions, or flashy {'"'}zero
            commission{'"'} deals. These create short-term excitement but often
            confuse the real costs.
          </p>
        </div>

        {/*==================== Differences Grid ====================*/}
        <div className="grid lg:grid-cols-3 gap-[clamp(3rem,4vw,4rem)] mb-[clamp(8rem,10vw,10rem)]">
          {differences.map((difference, index) => (
            <div
              key={index}
              className="text-center p-[clamp(3rem,4vw,4rem)] bg-n83-white rounded-[2rem] border border-n83-black/10 hover:border-n83-black/20 transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
            >
              <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.8rem,2vw,2rem)] mb-[clamp(1.5rem,2vw,2rem)]">
                {difference.title}
              </h3>
              <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.4rem,1.6vw,1.6rem)]">
                {difference.description}
              </p>
            </div>
          ))}
        </div>
        {/*==================== End of Differences Grid ====================*/}

        {/*==================== Final CTA Section ====================*/}
        <div className="bg-n83-black rounded-[3rem] p-[clamp(4rem,6vw,6rem)] text-center">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-white text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(2rem,3vw,3rem)] uppercase tracking-tight">
            Start Your Forex Journey
          </h2>
          <p className="m-0 font-normal leading-[1.5] text-n83-white/80 text-[clamp(1.8rem,2vw,2rem)] max-w-[70rem] mx-auto mb-[clamp(4rem,5vw,5rem)]">
            Forex trading is about more than charts and numbers. It{"'"}s about
            making decisions in an environment that respects your time, your
            money, and your focus.
          </p>

          <div className="flex items-center gap-[clamp(2rem,3vw,3rem)] flex-col lg:flex-row justify-center">
            <Link
              href="/account/open"
              className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.8rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-black bg-n83-white hover:-translate-y-[2px] hover:bg-n83-gray-50 hover:shadow-[0_8px_25px_rgba(255,255,255,0.15)] w-full lg:w-auto max-w-[30rem]"
            >
              Open an Account Today
            </Link>
            <Link
              href="/about"
              className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.8rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-white bg-transparent border-2 border-n83-white hover:text-n83-black hover:-translate-y-[2px] hover:bg-n83-white w-full lg:w-auto max-w-[30rem]"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
        {/*==================== End of Final CTA Section ====================*/}
      </div>
    </section>
  );
};

export default ForexRisk;
