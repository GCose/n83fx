const ForexDifference = () => {
  const differences = [
    {
      title: "Honest Trading Conditions",
      description:
        "No hidden fees, no misleading promotions. What you see is what you get.",
    },
    {
      title: "A Calm, Reliable Environment",
      description:
        "A platform designed for focus and discipline, not emotional reactions.",
    },
    {
      title: "Long-term Trust with Our Clients",
      description:
        "We build relationships with our clients, not just transactions.",
    },
  ];

  return (
    <section className="relative bg-n83-gray-50 py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
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
        {/*==================== End of Section Header ====================*/}

        {/*==================== Focus Statement ====================*/}
        <div className="text-center mb-[clamp(6rem,8vw,8rem)]">
          <div className="p-[clamp(3rem,4vw,4rem)] bg-n83-white rounded-[2rem] border-l-4 border-n83-black max-w-[80rem] mx-auto">
            <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(2rem,2.5vw,2.5rem)] mb-[clamp(1.5rem,2vw,2rem)]">
              At N83-FX, we focus on what truly matters:
            </h3>
          </div>
        </div>
        {/*==================== End of Focus Statement ====================*/}

        {/*==================== Differences Grid ====================*/}
        <div className="grid lg:grid-cols-3 gap-[clamp(3rem,4vw,4rem)] mb-[clamp(6rem,8vw,8rem)]">
          {differences.map((difference, index) => (
            <div
              key={index}
              className="text-center p-[clamp(3rem,4vw,4rem)] bg-n83-white rounded-[2rem] border border-n83-black/10 hover:border-n83-black/20 transition-all duration-300 hover:-translate-y-[4px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
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
          <div className="p-[clamp(3rem,4vw,4rem)] bg-n83-white rounded-[2rem] border-l-4 border-n83-black max-w-[80rem] mx-auto">
            <p className="m-0 font-medium leading-[1.4] text-n83-black text-[clamp(1.8rem,2vw,2rem)]">
              We don{"'"}t want you to trade more — we want you to trade better.
            </p>
          </div>
        </div>
        {/*==================== End of Bottom Statement ====================*/}
      </div>
    </section>
  );
};

export default ForexDifference;
