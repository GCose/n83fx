import Link from "next/link";

const AccountsTypes = () => {
  const accountTypes = [
    {
      title: "Standard Account",
      subtitle: "Start with Simplicity",
      minDeposit: "$100",
      description:
        "If you're new to trading or want to begin with smaller capital, the Standard Account gives you direct access to global markets without complexity.",
      features: [
        "Access to all instruments: Forex, Commodities, Stocks, Indices, Crypto, Metals, Futures",
        "No commission fees",
        "Same MT5 platform, same clarity",
      ],
      bestFor:
        "Best for beginners testing strategies and learning the markets.",
      cta: "Open Standard Account",
    },
    {
      title: "Advanced Account",
      subtitle: "More Flexibility, Lower Costs",
      minDeposit: "$500",
      description:
        "For traders who are ready to trade more actively, the Advanced Account offers tighter spreads and a better pricing environment.",
      features: [
        "Lower spreads compared to Standard",
        "No commissions",
        "Same calm and clear trading experience",
      ],
      bestFor: "Choose this if you're trading regularly and want lower costs.",
      cta: "Open Advanced Account",
    },
    {
      title: "Pro Account",
      subtitle: "Built for Professionals",
      minDeposit: "$2,000",
      description:
        "The Pro Account is designed for high-volume traders who need precision and top execution. With very tight spreads and professional conditions, this account is made for scaling.",
      features: [
        "Ultra-tight spreads",
        "Priority execution with institutional liquidity",
        "Lower leverage for disciplined trading",
      ],
      bestFor:
        "Best if you're managing large positions and advanced strategies.",
      cta: "Open Pro Account",
      popular: true,
    },
    {
      title: "Islamic Account",
      subtitle: "100% Swap-Free",
      minDeposit: "$100",
      description:
        "Respecting the principles of Sharia, the Islamic Account provides a fully swap-free option without time limits or hidden charges.",
      features: [
        "Same spreads and features as Standard",
        "No overnight swap charges — ever",
        "Fair and transparent terms",
      ],
      bestFor: "The right choice if you require halal, swap-free trading.",
      cta: "Open Islamic Account",
    },
  ];

  return (
    <section className="bg-transparent py-[clamp(8rem,10vw,12rem)] border-t backdrop-blur-lg">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="mb-[clamp(8rem,12vw,10rem)] border-b">
          <h2 className="font-display text-[clamp(5rem,8vw,9rem)] font-900 text-text-primary leading-[0.9] tracking-tight mb-[clamp(2rem,4vw,5rem)]">
            Four Clear Choices
          </h2>
          <p className="font-body text-[clamp(1.8rem,2.5vw,2.4rem)] font-500 text-text-secondary leading-[1.4] text-right pb-6">
            Each account designed for different trading needs, all built on the
            same foundation of clarity and transparency.
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Account Cards Grid ====================*/}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[clamp(3rem,4vw,4rem)]">
          {accountTypes.map((account, index) => (
            <div
              key={index}
              className={`relative bg-transparent border-neon-primary/50 rounded-[1.6rem] px-3 py-[clamp(3rem,4vw,4rem)] transition-all duration-300 hover:-translate-y-[2px] ${
                account.popular ? "border-2 " : "border border-n83-gray-200"
              }`}
            >
              {/*==================== Popular Badge ====================*/}
              {account.popular && (
                <div className="absolute -top-[1.5rem] left-1/2 -translate-x-1/2">
                  <div className="bg-n83-black text-n83-white px-[2rem] py-[0.8rem] rounded-full text-[1.4rem] font-medium uppercase tracking-wide">
                    Most Popular
                  </div>
                </div>
              )}
              {/*==================== End of Popular Badge ====================*/}

              {/*==================== Card Header ====================*/}
              <div className="text-left max-[480px]:mt-10 my-2">
                <h3 className="m-0 font-extrabold leading-[1.2] text-n83-white text-[clamp(2rem,2.4vw,2.4rem)] mb-[clamp(1.5rem,2vw,2rem)] uppercase tracking-tight">
                  {account.title}
                </h3>
                <div className="mb-[clamp(2rem,2.5vw,2.5rem)]">
                  <div className="text-[clamp(3.2rem,4vw,4.8rem)] font-extrabold text-n83-white mb-[0.5rem]">
                    {account.minDeposit}
                  </div>
                  <div className="text-[clamp(1.4rem,1.6vw,1.6rem)] text-white/70">
                    minimum deposit
                  </div>
                </div>
                <h4 className="m-0 font-bold leading-[1.3] text-n83-white text-[clamp(1.6rem,1.8vw,2rem)] mb-[clamp(1.5rem,2vw,2rem)]">
                  {account.subtitle}
                </h4>
                <p className="m-0 font-normal leading-[1.5] text-white/70 text-[clamp(1.5rem,1.6vw,1.8rem)]">
                  {account.description}
                </p>
              </div>
              {/*==================== End of Card Header ====================*/}

              {/*==================== Account Features ====================*/}
              <div className="space-y-[1.5rem] my-[clamp(2.5rem,3vw,3rem)]">
                {account.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-start gap-[1.5rem]"
                  >
                    <div
                      className="w-[2rem] h-[2rem] bg-n83-white rounded-sm mt-[0.8rem] flex-shrink-0"
                      style={{ transform: "rotate(45deg)" }}
                    ></div>
                    <p className="m-0 font-normal leading-[1.4] text-white/70 text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
              {/*==================== End of Account Features ====================*/}

              {/*==================== Best For Section ====================*/}
              <div className="p-[clamp(2rem,3vw,3rem)] bg-neon-primary/10 border-l border-r border-neon-primary/50 mb-[clamp(3rem,4vw,4rem)]">
                <p className="m-0 font-medium leading-[1.4] text-n83-white text-[clamp(1.5rem,1.7vw,1.7rem)]">
                  👉 {account.bestFor}
                </p>
              </div>
              {/*==================== End of Best For Section ====================*/}

              {/*==================== CTA Button ====================*/}
              <Link
                href="/account/open"
                className={`cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] w-full ${
                  account.popular
                    ? "text-n83-white bg-white/10 hover:-translate-y-[2px] hover:bg-green-500/35"
                    : "text-n83-white bg-transparent border-2 border-n83-white/60 hover:text-n83-white hover:-translate-y-[2px] hover:bg-green-400/30 hover:border-transparent"
                }`}
              >
                {account.cta}
              </Link>
              {/*==================== End of CTA Button ====================*/}
            </div>
          ))}
        </div>
        {/*==================== End of Account Cards Grid ====================*/}
      </div>
    </section>
  );
};

export default AccountsTypes;
