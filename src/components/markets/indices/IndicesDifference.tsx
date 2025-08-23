import Image from "next/image";

const IndicesDifference = () => {
  const differences = [
    {
      title: "Honest trading conditions",
      description:
        "No gimmicks, no flashy promises - just transparent conditions.",
    },
    {
      title: "Calm, boutique environment",
      description: "Built for focus and discipline, not distractions.",
    },
    {
      title: "Tools built for focus and discipline",
      description: "Everything designed to help you trade better, not more.",
    },
    {
      title: "Long-term trust with every client",
      description:
        "We measure success by lasting relationships, not short-term hype.",
    },
  ];

  return (
    <section className="relative bg-n83-white py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center">
          {/*==================== Left: Content ====================*/}
          <div className="flex flex-col justify-center">
            <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(3rem,4vw,4rem)] uppercase tracking-tight">
              Why N83-FX is Different
            </h2>

            <div className="space-y-[clamp(2.5rem,3vw,3rem)]">
              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                Some competitors focus on flashy promotions or over-promise
                results. At N83-FX, we focus on what matters:
              </p>

              {/*==================== Differences List ====================*/}
              <div className="space-y-[clamp(2rem,2.5vw,2.5rem)]">
                {differences.map((difference, index) => (
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
                        {difference.title}
                      </h4>
                      <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                        {difference.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/*==================== End of Differences List ====================*/}

              {/*==================== Philosophy Statement ====================*/}
              <div className="pt-[clamp(2rem,3vw,3rem)] border-t border-n83-black">
                <p className="m-0 font-medium leading-[1.5] text-n83-black text-[clamp(1.7rem,1.9vw,2rem)]">
                  We don{"'"}t want you to trade more. We want you to trade
                  better.
                </p>
              </div>
              {/*==================== End of Philosophy Statement ====================*/}
            </div>
          </div>
          {/*==================== End of Left: Content ====================*/}

          {/*==================== Right: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                width={800}
                height={600}
                src="/images/markets/indices/indices-difference.jpg"
                alt="N83-FX's unique approach to indices trading platform"
                className="w-full h-screen object-cover transition-transform duration-[0.6s] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>
          </div>
          {/*==================== End of Right: Visual ====================*/}
        </div>
        {/*==================== End of Section Layout ====================*/}
      </div>
    </section>
  );
};

export default IndicesDifference;
