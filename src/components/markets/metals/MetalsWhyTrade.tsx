import Image from "next/image";

const MetalsWhyTrade = () => {
  const advantages = [
    {
      title: "Clarity in execution",
      description: "Straightforward spreads, no hidden costs.",
    },
    {
      title: "Calm environment",
      description:
        "Our platform reduces noise, helping you focus on market movement.",
    },
    {
      title: "Global access",
      description: "Trade precious and industrial metals side by side.",
    },
    {
      title: "Respect for your capital",
      description: "Transparent conditions and segregated funds.",
    },
  ];

  return (
    <section className="relative bg-n83-gray-100 py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center">
          {/*==================== Left: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                width={800}
                height={600}
                src="/images/markets/metals/metals-whytradewithus.jpg"
                alt="N83-FX metals trading advantages and platform benefits"
                className="w-full h-screen object-cover transition-transform duration-[0.6s] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>
          </div>
          {/*==================== End of Left: Visual ====================*/}

          {/*==================== Right: Content ====================*/}
          <div className="flex flex-col justify-center">
            <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(3rem,4vw,4rem)] uppercase tracking-tight">
              Why Trade Metals with N83-FX?
            </h2>

            <div className="space-y-[clamp(2.5rem,3vw,3rem)]">
              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                Many brokers showcase metals with flashy marketing but little
                depth. At N83-FX, we treat metals with the importance they
                deserve:
              </p>

              {/*==================== Advantages List ====================*/}
              <div className="space-y-[clamp(2rem,2.5vw,2.5rem)]">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-[1.5rem] group"
                  >
                    <div
                      className="w-[2rem] h-[2rem] bg-n83-black rounded-sm mt-[0.8rem] flex-shrink-0 transition-transform duration-300 group-hover:rotate-45"
                      style={{ transform: "rotate(45deg)" }}
                    ></div>
                    <div>
                      <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,1.9rem)] mb-[0.5rem]">
                        {advantage.title}
                      </h4>
                      <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/*==================== End of Advantages List ====================*/}
            </div>
          </div>
          {/*==================== End of Right: Content ====================*/}
        </div>
        {/*==================== End of Section Layout ====================*/}
      </div>
    </section>
  );
};

export default MetalsWhyTrade;
