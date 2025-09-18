const CryptoWhyTrade = () => {
  const reasons = [
    {
      title: "Offers volatility",
      description:
        "Prices can move significantly, creating opportunities for both short- and long-term strategies.",
    },
    {
      title: "Is open 24/7",
      description:
        "Unlike Forex or stocks, crypto never sleeps — markets are always accessible.",
    },
    {
      title: "Provides diversification",
      description:
        "Crypto moves differently from traditional assets, adding a new dimension to trading portfolios.",
    },
    {
      title: "Represents innovation",
      description:
        "By trading crypto, you participate in one of the fastest-growing areas of modern finance.",
    },
  ];

  return (
    <section className="relative bg-n83-black py-[clamp(8rem,12vw,16rem)] border-t">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="mb-[clamp(8rem,12vw,10rem)] border-b">
          <h2 className="font-display text-[clamp(5rem,8vw,9rem)] font-900 text-text-primary leading-[0.9] tracking-tight mb-[clamp(2rem,4vw,6rem)]">
            Why Trade Crypto?
          </h2>
          <p className="font-body text-[clamp(1.8rem,2.5vw,2.4rem)] font-500 text-text-secondary leading-[1.4] text-right pb-6">
            Crypto trading is attractive because it:
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Reasons Grid ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(3rem,4vw,4rem)]">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-transparent border p-[clamp(3rem,4vw,4rem)] rounded-[2rem] hover:-translate-y-[4px] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
            >
              <h3 className="m-0 font-bold leading-[1.2] text-n83-white text-[clamp(1.8rem,2vw,2.5rem)] mb-[clamp(1.5rem,2vw,2rem)]">
                {reason.title}
              </h3>
              <p className="m-0 font-normal leading-[1.4] text-white/70 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
        {/*==================== End of Reasons Grid ====================*/}
      </div>
    </section>
  );
};

export default CryptoWhyTrade;
