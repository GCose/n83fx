import Image from "next/image";

const FuturesRisk = () => {
  const riskPrinciples = [
    "Always use stop-loss orders",
    "Avoid over-leverage",
    "Diversify across futures contracts",
    "Understand contract size and expiration dates",
    "Never trade without a clear strategy",
  ];

  return (
    <section className="relative bg-n83-gray-50 py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center">
          {/*==================== Left: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                width={800}
                height={600}
                src="/images/markets/futures/futures-risk.jpg"
                alt="Risk management tools and responsible futures trading strategies"
                className="w-full h-screen object-cover transition-transform duration-[0.6s] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>
          </div>
          {/*==================== End of Left: Visual ====================*/}

          {/*==================== Right: Content ====================*/}
          <div className="flex flex-col justify-center">
            <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(3rem,4vw,4rem)] uppercase tracking-tight">
              Managing Risk in Futures
            </h2>

            <div className="space-y-[clamp(2.5rem,3vw,3rem)]">
              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                Futures offer leverage, but leverage magnifies both gains and
                losses. At N83-FX, we stress responsible trading:
              </p>

              {/*==================== Risk Principles ====================*/}
              <div className="space-y-[clamp(1.5rem,2vw,2rem)]">
                {riskPrinciples.map((principle, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-[1.5rem] group"
                  >
                    <div
                      className="w-[2rem] h-[2rem] bg-n83-black rounded-sm mt-[0.8rem] flex-shrink-0 transition-transform duration-300 group-hover:rotate-45"
                      style={{ transform: "rotate(45deg)" }}
                    ></div>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      {principle}
                    </p>
                  </div>
                ))}
              </div>
              {/*==================== End of Risk Principles ====================*/}

              {/*==================== Goal Statement ====================*/}
              <div className="pt-[clamp(2rem,3vw,3rem)] border-t border-n83-black">
                <p className="m-0 font-medium leading-[1.5] text-n83-black text-[clamp(1.7rem,1.9vw,2rem)]">
                  Our goal is to help you trade futures with discipline, not
                  emotion.
                </p>
              </div>
              {/*==================== End of Goal Statement ====================*/}

              {/*==================== Risk Management Focus ====================*/}
              <div className="p-[clamp(2.5rem,3vw,3rem)] bg-n83-white border-l border-r border-n83-black">
                <p className="m-0 font-medium leading-[1.4] text-n83-black text-[clamp(1.8rem,2vw,2rem)]">
                  Leverage is a tool — when used responsibly, it enhances
                  opportunities. When misused, it amplifies risk.
                </p>
              </div>
              {/*==================== End of Risk Management Focus ====================*/}
            </div>
          </div>
          {/*==================== End of Right: Content ====================*/}
        </div>
        {/*==================== End of Section Layout ====================*/}
      </div>
    </section>
  );
};

export default FuturesRisk;
