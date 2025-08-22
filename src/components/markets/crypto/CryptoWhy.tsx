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
    <section className="relative bg-n83-white py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,8vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(4rem,5vw,6rem)] mb-[clamp(2rem,3vw,3rem)] uppercase tracking-tight">
            Why Trade Crypto?
          </h2>
          <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.8rem,2.2vw,2.4rem)] max-w-[70rem] mx-auto">
            Crypto trading is attractive because it:
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Reasons Grid ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(3rem,4vw,4rem)]">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-n83-gray-50 p-[clamp(3rem,4vw,4rem)] rounded-[2rem] hover:-translate-y-[4px] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
            >
              <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.8rem,2vw,2rem)] mb-[clamp(1.5rem,2vw,2rem)]">
                {reason.title}
              </h3>
              <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
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
