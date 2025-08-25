const CryptoWhyDifferent = () => {
  const differences = [
    {
      title: "Transparent Conditions",
      description:
        "No hidden fees, no misleading promotions. What you see is what you get.",
    },
    {
      title: "Boutique, Calm Design Philosophy",
      description:
        "A platform designed for focus and discipline, not emotional reactions.",
    },
    {
      title: "A Focus on Long-term Relationships",
      description:
        "We build relationships with our clients, not just transactions.",
    },
    {
      title: "Secure, Reliable Execution",
      description:
        "Institutional-grade infrastructure and dependable trade execution.",
    },
  ];

  return (
    <section className="relative bg-n83-white py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,8vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(4rem,5vw,6rem)] mb-[clamp(2rem,3vw,3rem)] uppercase tracking-tight">
            Why N83-FX is Different
          </h2>
          <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.8rem,2.2vw,2.4rem)] max-w-[80rem] mx-auto">
            Many brokers market crypto with flashy promotions, unrealistic
            promises, or hidden costs. At N83-FX, we build trust through:
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Differences Grid ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(3rem,4vw,4rem)] mb-[clamp(6rem,8vw,8rem)]">
          {differences.map((difference, index) => (
            <div
              key={index}
              className="p-[clamp(3rem,4vw,4rem)] bg-n83-gray-100 rounded-[2rem] transition-all duration-300 hover:-translate-y-[4px]"
            >
              <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.8rem,2vw,2rem)] mb-[clamp(1.5rem,2vw,2rem)]">
                {difference.title}
              </h3>
              <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                {difference.description}
              </p>
            </div>
          ))}
        </div>
        {/*==================== End of Differences Grid ====================*/}

        {/*==================== Bottom Statement ====================*/}
        <div className="text-center">
          <div className="p-[clamp(3rem,4vw,4rem)] bg-n83-gray-50 border-l border-r border-n83-black max-w-[80rem] mx-auto">
            <p className="m-0 font-medium leading-[1.4] text-n83-black text-[clamp(1.8rem,2vw,2rem)]">
              We don{"'"}t chase hype. We provide the tools to trade
              responsibly.
            </p>
          </div>
        </div>
        {/*==================== End of Bottom Statement ====================*/}
      </div>
    </section>
  );
};

export default CryptoWhyDifferent;
