import Image from "next/image";

const ForexAdvantage = () => {
  const advantages = [
    {
      title: "Simplicity First",
      description:
        "Everything is presented clearly, so you can focus on your trades.",
    },
    {
      title: "Calm Environment",
      description:
        "A platform designed to reduce distractions and help you stay in control.",
    },
    {
      title: "Transparency",
      description: "Straightforward trading conditions with no hidden costs.",
    },
    {
      title: "Respect for Capital",
      description: "Segregated client funds and reliable execution.",
    },
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
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(4rem,5vw,6rem)] mb-[clamp(2rem,3vw,3rem)] uppercase tracking-tight">
            Why Trade Forex with N83-FX?
          </h2>
          <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.8rem,2.2vw,2.4rem)] max-w-[70rem] mx-auto">
            Most platforms make trading feel noisy and overwhelming. We take a
            different approach.
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Main Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center mb-[clamp(8rem,10vw,10rem)]">
          {/*==================== Left: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                width={800}
                height={600}
                src="/images/markets/forex/forex-platform.jpg"
                alt="Clean and simple forex trading interface"
                className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>
          </div>
          {/*==================== End of Left: Visual ====================*/}

          {/*==================== Right: Content ====================*/}
          <div className="flex flex-col justify-center">
            <h3 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(2.4rem,3vw,3.2rem)] mb-[clamp(3rem,4vw,4rem)]">
              Our Approach to Forex
            </h3>

            {/*==================== Advantages Grid ====================*/}
            <div className="grid gap-[clamp(2rem,3vw,3rem)]">
              {advantages.map((advantage, index) => (
                <div
                  key={index}
                  className="flex items-start gap-[1.5rem] group"
                >
                  <div className="w-[0.6rem] h-[0.6rem] bg-n83-black rounded-full mt-[1rem] flex-shrink-0 transition-transform duration-300 group-hover:scale-125"></div>
                  <div>
                    <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,1.8rem)] mb-[0.5rem]">
                      {advantage.title}
                    </h4>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/*==================== End of Advantages Grid ====================*/}
          </div>
          {/*==================== End of Right: Content ====================*/}
        </div>
        {/*==================== End of Main Layout ====================*/}

        {/*==================== Account Types Section ====================*/}
        <div className="bg-n83-white rounded-[3rem] p-[clamp(4rem,6vw,6rem)]">
          <div className="text-center mb-[clamp(4rem,5vw,5rem)]">
            <h3 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(2.4rem,3vw,3.2rem)] mb-[clamp(1.5rem,2vw,2rem)]">
              Four Account Types — A Fit for Every Trader
            </h3>
            <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.8rem)] max-w-[60rem] mx-auto">
              From beginners to professionals, we have the right account for
              your trading journey.
            </p>
          </div>

          {/*==================== Account Types Grid ====================*/}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[clamp(2rem,3vw,3rem)]">
            {accountTypes.map((account, index) => (
              <div
                key={index}
                className="p-[clamp(2rem,3vw,3rem)] border border-n83-black/10 rounded-[1.6rem] hover:border-n83-black/20 transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]"
              >
                <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,1.8rem)] mb-[1rem]">
                  {account.title}
                </h4>
                <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.3rem,1.5vw,1.5rem)]">
                  {account.description}
                </p>
              </div>
            ))}
          </div>
          {/*==================== End of Account Types Grid ====================*/}
        </div>
        {/*==================== End of Account Types Section ====================*/}
      </div>
    </section>
  );
};

export default ForexAdvantage;
