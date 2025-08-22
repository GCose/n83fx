import Image from "next/image";

const ForexWhy = () => {
  const approaches = [
    {
      title: "Simplicity first",
      description:
        "Everything is presented clearly, so you can focus on your trades.",
    },
    {
      title: "Calm environment",
      description:
        "A platform designed to reduce distractions and help you stay in control.",
    },
    {
      title: "Transparency",
      description: "Straightforward trading conditions with no hidden costs.",
    },
    {
      title: "Respect for your capital",
      description: "Segregated client funds and reliable execution.",
    },
  ];

  return (
    <section className="relative bg-n83-white py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,8vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(4rem,5vw,6rem)] mb-[clamp(2rem,3vw,3rem)] uppercase tracking-tight">
            Why Trade Forex with N83-FX?
          </h2>
          <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.8rem,2.2vw,2.4rem)] max-w-[80rem] mx-auto">
            Most platforms make trading feel noisy and overwhelming. Flashing
            screens, unnecessary alerts, and complicated setups are common.
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Main Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center">
          {/*==================== Left: Content ====================*/}
          <div className="flex flex-col justify-center">
            <h3 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(2.4rem,3vw,3.2rem)] mb-[clamp(3rem,4vw,4rem)]">
              We take a different approach:
            </h3>

            {/*==================== Approaches Grid ====================*/}
            <div className="grid gap-[clamp(2rem,3vw,4rem)] mb-[clamp(4rem,5vw,5rem)]">
              {approaches.map((approach, index) => (
                <div
                  key={index}
                  className="flex items-start gap-[1.6rem] group"
                >
                  <div
                    className="w-[2rem] h-[2rem] bg-n83-black mt-[0.8rem] flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
                    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                  ></div>
                  <div>
                    <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,2.1rem)] mb-[0.5rem]">
                      {approach.title}
                    </h4>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      {approach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/*==================== End of Approaches Grid ====================*/}

            {/*==================== Closing Statement ====================*/}
            <div className="p-[clamp(2.5rem,3vw,3rem)] bg-n83-gray-50 border-l border-r border-n83-black">
              <p className="m-0 font-medium leading-[1.4] text-n83-black text-[clamp(1.6rem,1.8vw,1.9rem)]">
                Whether you are just starting or you are already experienced,
                our goal is the same: to give you a clean, secure environment
                where decisions are easier to make.
              </p>
            </div>
            {/*==================== End of Closing Statement ====================*/}
          </div>
          {/*==================== End of Left: Content ====================*/}

          {/*==================== Right: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                width={800}
                height={600}
                src="/images/markets/forex/forex-why.avif"
                alt="Clean forex trading platform showing simplicity and clarity"
                className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>
          </div>
          {/*==================== End of Right: Visual ====================*/}
        </div>
        {/*==================== End of Main Layout ====================*/}
      </div>
    </section>
  );
};

export default ForexWhy;
