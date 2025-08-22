import Image from "next/image";

const ForexN83Advantage = () => {
  const conditions = [
    "Tight spreads across major, minor, and exotic pairs",
    "Competitive leverage tailored to your needs",
    "Reliable execution with institutional-grade liquidity",
  ];

  const accountTypes = [
    {
      title: "Standard Account",
      description: "Perfect for new traders starting with smaller deposits.",
    },
    {
      title: "Advanced Account",
      description: "Lower spreads and more features for growing traders.",
    },
    {
      title: "Pro Account",
      description:
        "Designed for high-volume traders who want professional-grade execution.",
    },
    {
      title: "Islamic Account",
      description: "Swap-free and fully compliant with Sharia principles.",
    },
  ];

  return (
    <section className="relative bg-n83-gray-50 py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,8vw,8rem)]">
          <h2 className="m-0 word-spacing font-extrabold leading-[1.2] text-n83-black text-[clamp(4rem,5vw,6rem)] mb-[clamp(2rem,3vw,3rem)] uppercase tracking-tight">
            The N83-FX Advantage
          </h2>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Boutique Trading Conditions ====================*/}
        <div className="mb-[clamp(8rem,10vw,10rem)]">
          <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center">
            {/*==================== Left: Content ====================*/}
            <div className="flex flex-col justify-center">
              <h3 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(2.4rem,3vw,3.2rem)] mb-[clamp(3rem,4vw,4rem)]">
                Boutique Trading Conditions
              </h3>

              {/*==================== Conditions List ====================*/}
              <div className="grid gap-[clamp(2rem,3vw,3rem)]">
                {conditions.map((condition, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-[1.5rem] group"
                  >
                    <div className="w-[0.6rem] h-[0.6rem] bg-n83-black rounded-full mt-[1rem] flex-shrink-0 transition-transform duration-300 group-hover:scale-125"></div>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
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
                  src="/images/markets/forex/forex-advantage.avif"
                  alt="Professional forex trading conditions and tight spreads"
                  className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
                />
              </div>
            </div>
            {/*==================== End of Right: Visual ====================*/}
          </div>
        </div>
        {/*==================== End of Boutique Trading Conditions ====================*/}

        {/*==================== Trading Platform MT5 ====================*/}
        <div className="mb-[clamp(8rem,10vw,10rem)]">
          <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center">
            {/*==================== Left: Visual ====================*/}
            <div className="relative">
              <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
                <Image
                  width={800}
                  height={600}
                  src="/images/markets/forex/forex-mt5.jpg"
                  alt="MetaTrader 5 platform customized for clarity"
                  className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
                />
              </div>
            </div>
            {/*==================== End of Left: Visual ====================*/}

            {/*==================== Right: Content ====================*/}
            <div className="flex flex-col justify-center">
              <h3 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(2.4rem,3vw,3.2rem)] mb-[clamp(3rem,4vw,4rem)]">
                Trading Platform (MT5)
              </h3>

              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)] mb-[clamp(2rem,3vw,3rem)]">
                We use MetaTrader 5 (MT5) — the most trusted trading platform
                worldwide. At N83-FX, we customize MT5 for clarity. Every layout
                is designed to be simple to use, every alert purposeful, and
                every tool functional without being overwhelming.
              </p>
            </div>
            {/*==================== End of Right: Content ====================*/}
          </div>
        </div>
        {/*==================== End of Trading Platform MT5 ====================*/}

        {/*==================== Four Account Types ====================*/}
        <div className="p-[clamp(4rem,6vw,6rem)] border-t border-b border-n83-black">
          <div className="text-center mb-[clamp(4rem,5vw,5rem)]">
            <h3 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(2.4rem,3vw,3.2rem)] mb-[clamp(1.5rem,2vw,2rem)]">
              Four Account Types — A Fit for Every Trader
            </h3>
          </div>

          {/*==================== Account Types Grid ====================*/}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[clamp(2rem,3vw,3rem)]">
            {accountTypes.map((account, index) => (
              <div
                key={index}
                className="p-[clamp(2rem,3vw,3rem)] bg-n83-white rounded-[1.6rem] hover:border-n83-black/20 transition-all duration-300 hover:-translate-y-[2px]"
              >
                <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,2.1rem)] mb-[1rem]">
                  {account.title}
                </h4>
                <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
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

export default ForexN83Advantage;
