import Image from "next/image";

const CryptoWhyTradeWithUs = () => {
  const approaches = [
    {
      title: "Clarity first",
      description: "Simple, transparent access to leading cryptocurrencies.",
    },
    {
      title: "Calm environment",
      description:
        "No distractions, just tools and pricing designed to help you focus.",
    },
    {
      title: "Secure infrastructure",
      description:
        "Funds protected in segregated accounts, strong partnerships with liquidity providers.",
    },
    {
      title: "Respect for your capital",
      description:
        "Risk warnings and transparent trading conditions at every step.",
    },
  ];

  return (
    <section className="relative bg-n83-black py-[clamp(8rem,12vw,16rem)] border-t">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="mb-[clamp(8rem,12vw,10rem)] border-b">
          <h2 className="font-display text-[clamp(5rem,8vw,9rem)] font-900 text-text-primary leading-[0.9] tracking-tight mb-[clamp(2rem,4vw,6rem)]">
            Why Trade Crypto with N83-FX?
          </h2>
          <p className="font-body text-[clamp(1.8rem,2.5vw,2.4rem)] font-500 text-text-secondary leading-[1.4] text-right pb-6">
            Most platforms treat crypto like a hype-driven casino. At N83-FX, we
            take the opposite approach
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Main Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center">
          {/*==================== Left: Content ====================*/}
          <div className="flex flex-col justify-center">
            {/*==================== Approaches Grid ====================*/}
            <div className="grid gap-[clamp(2rem,3vw,5rem)]">
              {approaches.map((approach, index) => (
                <div
                  key={index}
                  className="flex items-start gap-[1.5rem] group"
                >
                  <div className="relative w-[2rem] h-[2rem] mt-[0.8rem] flex-shrink-0 transition-transform duration-300 group-hover:scale-125">
                    <div className="absolute w-full h-[5px] bg-n83-white top-1/2 -translate-y-1/2"></div>
                    <div className="absolute h-full w-[5px] bg-n83-white left-1/2 -translate-x-1/2"></div>
                  </div>
                  <div>
                    <h4 className="m-0 font-bold leading-[1.2] text-n83-white text-[clamp(1.6rem,1.8vw,2.2rem)] mb-[0.5rem]">
                      {approach.title}
                    </h4>
                    <p className="m-0 font-normal leading-[1.4] text-white/70 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      {approach.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/*==================== End of Approaches Grid ====================*/}
          </div>
          {/*==================== End of Left: Content ====================*/}

          {/*==================== Right: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-white group">
              <Image
                width={800}
                height={600}
                src="/images/markets/crypto/crypto-why-trade.jpg"
                alt="Clean crypto trading platform showing clarity and transparency"
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

export default CryptoWhyTradeWithUs;
