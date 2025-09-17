import Image from "next/image";

const AboutN83FXWhy = () => {
  const philosophyItems = [
    {
      title: "Clean Execution",
      description: "No unnecessary complexity or confusing interfaces",
    },
    {
      title: "Honest Design",
      description: "Every element serves the trader, not the platform",
    },
    {
      title: "Peace of Mind",
      description: "Regulated environment with transparent practices",
    },
  ];

  return (
    <section className="bg-n83-black py-[clamp(8rem,10vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-left mb-[clamp(4rem,4vw,6rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-white text-[clamp(5rem,8vw,9rem)] mb-2 uppercase tracking-tight">
            Why We Exist
          </h2>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Main Layout ====================*/}
        <div className="border-t border-neon-primary/60 pt-[clamp(4rem,6vw,8rem)] grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center mb-[clamp(6rem,8vw,8rem)]">
          {/*==================== Left: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                width={800}
                height={600}
                src="/images/about/about-why.jpg"
                alt="Calm trading environment vs chaotic market noise"
                className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>
          </div>
          {/*==================== End of Left: Visual ====================*/}

          {/*==================== Right: Content ====================*/}
          <div>
            <p className="m-0 font-normal leading-[1.5] text-white/50 text-[clamp(1.8rem,2.2vw,2.4rem)] mb-[clamp(4rem,5vw,5rem)]">
              In a financial world dominated by hype and chaos, we believe the
              next evolution of wealth is not more—it{"'"}s better. Not louder
              platforms. Not faster clicks. Not dopamine dashboards.
            </p>

            {/*==================== Philosophy Grid ====================*/}
            <div className="space-y-[clamp(2rem,2.5vw,2.5rem)] mb-[clamp(4rem,5vw,5rem)]">
              {philosophyItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-[1.6rem] group"
                >
                  <div
                    className="w-[2rem] h-[2rem] bg-n83-white mt-[0.8rem] flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
                    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                  ></div>
                  <div>
                    <h3 className="m-0 font-bold leading-[1.2] text-n83-white text-[clamp(1.9rem,1.8vw,2rem)] mb-[0.5rem]">
                      {item.title}
                    </h3>
                    <p className="m-0 font-normal leading-[1.4] text-white/50 text-[clamp(1.6rem,1.6vw,1.9rem)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/*==================== End of Philosophy Grid ====================*/}
          </div>
          {/*==================== End of Right: Content ====================*/}
        </div>
        {/*==================== End of Main Layout ====================*/}

        {/*==================== Closing Statement ====================*/}
        <div className="border-l border-r border-neon-primary bg-green-900/40 p-[clamp(3rem,4vw,4rem)] text-center">
          <p className="m-0 font-medium leading-[1.4] text-n83-white text-[clamp(1.8rem,2vw,2.2rem)]">
            N83-FX was created to bring stillness into the act of
            trading—because wealth, like architecture, should be built
            intentionally.
          </p>
        </div>
        {/*==================== End of Closing Statement ====================*/}
      </div>
    </section>
  );
};

export default AboutN83FXWhy;
