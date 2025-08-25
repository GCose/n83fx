import Link from "next/link";
import Image from "next/image";

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
      image: "/images/accounts/standard-account.jpg",
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
      image: "/images/accounts/advanced-account.jpg",
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
      image: "/images/accounts/pro-account.jpg",
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
      image: "/images/accounts/islamic-account.jpg",
    },
  ];

  return (
    <section className="relative bg-n83-gray-100 py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,8vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(2rem,3vw,3rem)] uppercase tracking-tight">
            Four Clear Choices
          </h2>
          <p className="m-0 font-normal leading-[1.5] max-w-[70rem] mx-auto text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
            Each account designed for different trading needs, all built on the
            same foundation of clarity and transparency.
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Account Types Grid ====================*/}
        <div className="grid gap-[clamp(6rem,16vw,26rem)] mb-[clamp(6rem,8vw,8rem)]">
          {accountTypes.map((account, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-[clamp(4rem,6vw,6rem)] items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/*==================== Account Visual ====================*/}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
                  <Image
                    width={800}
                    height={600}
                    src={account.image}
                    alt={`${account.title} trading interface and features`}
                    className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(35rem,45vh,50rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              {/*==================== End of Account Visual ====================*/}

              {/*==================== Account Content ====================*/}
              <div
                className={`flex flex-col justify-center ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <div className="flex items-baseline gap-[2rem] mb-[clamp(2rem,3vw,3rem)]">
                  <h3 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(2.4rem,3vw,3.2rem)] uppercase tracking-tight">
                    {account.title}
                  </h3>
                  <span className="font-medium text-n83-gray-600 text-[clamp(2rem,1.6vw,4rem)]">
                    {account.minDeposit}
                  </span>
                </div>

                <h4 className="m-0 font-bold leading-[1.3] text-n83-black text-[clamp(1.8rem,2vw,2rem)] mb-[clamp(1.5rem,2vw,2rem)]">
                  {account.subtitle}
                </h4>

                <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)] mb-[clamp(2.5rem,3vw,3rem)]">
                  {account.description}
                </p>

                {/*==================== Account Features ====================*/}
                <div className="space-y-[clamp(1.5rem,2vw,2rem)] mb-[clamp(2.5rem,3vw,3rem)]">
                  {account.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-start gap-[1.5rem]"
                    >
                      <div
                        className="w-[2rem] h-[2rem] bg-n83-black rounded-sm mt-[0.8rem] flex-shrink-0"
                        style={{ transform: "rotate(45deg)" }}
                      ></div>
                      <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
                {/*==================== End of Account Features ====================*/}

                {/*==================== Best For Section ====================*/}
                <div className="p-[clamp(2rem,3vw,3rem)] bg-n83-white border-l border-r border-n83-black mb-[clamp(3rem,4vw,4rem)]">
                  <p className="m-0 font-medium leading-[1.4] text-n83-black text-[clamp(1.6rem,1.8vw,1.9rem)]">
                    👉 {account.bestFor}
                  </p>
                </div>
                {/*==================== End of Best For Section ====================*/}

                {/*==================== Account CTA ====================*/}
                <Link
                  href="/account/open"
                  className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-white bg-n83-black hover:-translate-y-[2px] hover:bg-n83-gray-900 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] w-full lg:w-auto max-w-[35rem]"
                >
                  {account.cta}
                </Link>
                {/*==================== End of Account CTA ====================*/}
              </div>
              {/*==================== End of Account Content ====================*/}
            </div>
          ))}
        </div>
        {/*==================== End of Account Types Grid ====================*/}
      </div>
    </section>
  );
};

export default AccountsTypes;
