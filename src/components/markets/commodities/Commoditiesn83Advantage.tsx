import Image from "next/image";

const CommoditiesN83Advantage = () => {
  const conditions = [
    "Tight spreads on metals and energy products",
    "Competitive leverage options, tailored by account type",
    "Fast and reliable execution backed by institutional-grade liquidity",
  ];

  const accountTypes = [
    {
      title: "Standard Account",
      description: "Straightforward access to commodities trading",
    },
    {
      title: "Advanced Account",
      description: "Lower spreads and more flexibility",
    },
    {
      title: "Pro Account",
      description: "Designed for high-volume or professional traders",
    },
    {
      title: "Islamic Account",
      description: "Swap-free, Sharia-compliant option",
    },
  ];

  return (
    <section className="relative bg-n83-black py-[clamp(8rem,12vw,16rem)] border-t">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="mb-[clamp(8rem,12vw,10rem)] border-b">
          <h2 className="font-display text-[clamp(5rem,8vw,9rem)] font-900 text-text-primary leading-[0.9] tracking-tight mb-[clamp(2rem,4vw,5rem)]">
            The N83-FX Advantage
          </h2>
          <p className="font-body text-[clamp(1.8rem,2.5vw,2.4rem)] font-500 text-text-secondary leading-[1.4] text-right pb-6">
            Three pillars that make commodities trading at N83-FX different
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Boutique Trading Conditions ====================*/}
        <div className="mb-[clamp(6rem,8vw,8rem)]">
          <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center">
            {/*==================== Left: Content ====================*/}
            <div className="flex flex-col justify-center">
              <h3 className="m-0 font-extrabold leading-[1.2] text-n83-white text-[clamp(2.4rem,3vw,3.2rem)] mb-[clamp(2rem,3vw,3rem)]">
                Boutique Conditions
              </h3>

              {/*==================== Conditions List ====================*/}
              <div className="space-y-[clamp(2rem,2.5vw,2.5rem)]">
                {conditions.map((condition, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-[1.5rem] group"
                  >
                    <div className="relative w-[2rem] h-[2rem] flex-shrink-0 mt-[0.8rem]">
                      <div className="absolute w-full h-[5px] bg-n83-white top-1/2 -translate-y-1/2"></div>
                      <div className="absolute h-full w-[5px] bg-n83-white left-1/2 -translate-x-1/2"></div>
                    </div>
                    <p className="m-0 font-normal leading-[1.4] text-white/70 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      {condition}
                    </p>
                  </div>
                ))}
              </div>
              {/*==================== End of Conditions List ====================*/}
            </div>
            {/*==================== End of Left: Content ====================*/}

            {/*==================== Right: Visual ====================*/}
            <div className="relative">
              <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
                <Image
                  width={800}
                  height={600}
                  src="/images/markets/commodities/commodities-advantage.jpg"
                  alt="Professional commodities trading conditions and tight spreads"
                  className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
                />
              </div>
            </div>
            {/*==================== End of Right: Visual ====================*/}
          </div>
        </div>
        {/*==================== End of Boutique Trading Conditions ====================*/}

        {/*==================== Trading Platform MT5 ====================*/}
        <div className="mb-[clamp(6rem,8vw,8rem)]">
          <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center">
            {/*==================== Left: Visual ====================*/}
            <div className="relative">
              <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
                <Image
                  width={800}
                  height={600}
                  src="/images/markets/commodities/commodities-advantage-2.jpg"
                  alt="MetaTrader 5 platform optimized for commodities trading"
                  className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
                />
              </div>
            </div>
            {/*==================== End of Left: Visual ====================*/}

            {/*==================== Right: Content ====================*/}
            <div className="flex flex-col justify-center">
              <h3 className="m-0 font-extrabold leading-[1.2] text-n83-white text-[clamp(2.4rem,3vw,3.2rem)] mb-[clamp(2rem,3vw,3rem)]">
                Platform for Focus
              </h3>
              <p className="m-0 font-normal leading-[1.5] text-white/70 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                Trade commodities on MetaTrader 5 (MT5) — globally trusted,
                customized at N83-FX for simplicity. Every chart and every tool
                is organized so you can focus on what matters: the market, not
                the clutter.
              </p>
            </div>
            {/*==================== End of Right: Content ====================*/}
          </div>
        </div>
        {/*==================== End of Trading Platform MT5 ====================*/}

        {/*==================== Four Account Types ====================*/}
        <div className="p-[clamp(4rem,6vw,6rem)] border-t border-b ">
          <div className="text-center mb-[clamp(4rem,5vw,5rem)]">
            <h3 className="m-0 font-extrabold leading-[1.2] text-n83-white text-[clamp(2.4rem,3vw,3.2rem)] mb-[clamp(1.5rem,2vw,2rem)]">
              Four Account Types to Choose From
            </h3>
          </div>

          {/*==================== Account Types Grid ====================*/}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[clamp(2rem,3vw,3rem)]">
            {accountTypes.map((account, index) => (
              <div
                key={index}
                className="p-[clamp(2rem,3vw,3rem)] bg-white/10 rounded-[1.6rem] hover:/20 transition-all duration-300 hover:-translate-y-[2px]"
              >
                <h4 className="m-0 font-bold leading-[1.2] text-n83-white text-[clamp(1.6rem,1.8vw,2.1rem)] mb-[1rem]">
                  {account.title}
                </h4>
                <p className="m-0 font-normal leading-[1.4] text-white/70 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                  {account.description}
                </p>
              </div>
            ))}
          </div>
          {/*==================== End of Account Types Grid ====================*/}
        </div>
        {/*==================== End of Four Account Types ====================*/}
      </div>
    </section>
  );
};

export default CommoditiesN83Advantage;
