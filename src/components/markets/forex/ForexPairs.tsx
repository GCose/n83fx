const ForexPairs = () => {
  const pairTypes = [
    {
      title: "Major Pairs",
      description:
        "The most traded, such as EUR/USD, GBP/USD, and USD/JPY. They are liquid and have the tightest spreads.",
      examples: "EUR/USD, GBP/USD, USD/JPY",
    },
    {
      title: "Minor Pairs",
      description:
        "Pairs that don't include the US dollar, like EUR/GBP or AUD/JPY. They provide diversification opportunities.",
      examples: "EUR/GBP, AUD/JPY, GBP/CAD",
    },
    {
      title: "Exotic Pairs",
      description:
        "Combinations of major currencies with smaller or emerging market currencies, such as USD/TRY or USD/ZAR. They can offer higher potential movement but also higher risk.",
      examples: "USD/TRY, USD/ZAR, EUR/TRY",
    },
  ];

  return (
    <section className="relative bg-n83-black py-[clamp(8rem,12vw,16rem)] border-t">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="mb-[clamp(8rem,12vw,10rem)] border-b">
          <h2 className="font-display text-[clamp(5rem,8vw,9rem)] font-900 text-text-primary leading-[0.9] tracking-tight mb-[clamp(2rem,4vw,6rem)]">
            Major, Minor, and Exotic Pairs
          </h2>
          <p className="font-body text-[clamp(1.8rem,2.5vw,2.4rem)] font-500 text-text-secondary leading-[1.4] text-right pb-6">
            When trading Forex, you always deal with two currencies: one you
            buy, and one you sell. These are called currency pairs.
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Pairs Grid ====================*/}
        <div className="grid lg:grid-cols-3 gap-[clamp(3rem,4vw,4rem)] mb-[clamp(4rem,5vw,5rem)]">
          {pairTypes.map((pair, index) => (
            <div
              key={index}
              className="bg-transparent border p-[clamp(3rem,4vw,4rem)] rounded-[2rem] hover:-translate-y-[4px] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
            >
              <h3 className="m-0 font-bold leading-[1.2] text-n83-white text-[clamp(2rem,2.2vw,2.4rem)] mb-[clamp(1.5rem,2vw,2rem)]">
                {pair.title}
              </h3>
              <p className="m-0 font-normal leading-[1.4] text-white/70 text-[clamp(1.6rem,1.8vw,1.9rem)] mb-[clamp(2rem,2.5vw,2.5rem)]">
                {pair.description}
              </p>
              <div className="pt-[clamp(1.5rem,2vw,2rem)] border-t border-n83-black/10">
                <p className="m-0 font-medium text-n83-white text-[clamp(1.6rem,1.8vw,1.9rem)]">
                  Examples:{" "}
                  <span className="font-normal text-white/70 text-[clamp(1.6rem,1.8vw,1.9rem)">
                    {pair.examples}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
        {/*==================== End of Pairs Grid ====================*/}

        {/*==================== Bottom Note ====================*/}
        <div className="text-center">
          <p className="m-0 font-medium leading-[1.4] border-l border-r border-neon-primary/50 p-3 bg-neon-primary/10 text-n83-gray-50 text-[clamp(2rem,2.2vw,2.4rem)] max-w-[80rem] mx-auto">
            At N83-FX, you have access to a wide range of currency pairs —
            whether you want the stability of majors or the opportunities in
            minors and exotics.
          </p>
        </div>
        {/*==================== End of Bottom Note ====================*/}
      </div>
    </section>
  );
};

export default ForexPairs;
