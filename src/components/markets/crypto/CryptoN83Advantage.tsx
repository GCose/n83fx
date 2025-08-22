import Image from "next/image";

const CryptoN83Advantage = () => {
  const conditions = [
    "Access to major coins such as Bitcoin, Ethereum, Litecoin, and more",
    "Competitive spreads and leverage tailored by account type",
    "24/7 trading availability with institutional-grade execution",
  ];

  const accountTypes = [
    {
      title: "Standard Account",
      description: "Simple access to crypto markets",
    },
    {
      title: "Advanced Account",
      description: "Lower spreads and more flexibility",
    },
    {
      title: "Pro Account",
      description: "Designed for high-volume traders",
    },
    {
      title: "Islamic Account",
      description: "Swap-free, Sharia-compliant trading option",
    },
  ];

  return (
    <section className="relative bg-n83-white py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,8vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(4rem,5vw,6rem)] mb-[clamp(2rem,3vw,3rem)] uppercase tracking-tight">
            The N83-FX Advantage
          </h2>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Boutique Trading Conditions ====================*/}
        <div className="mb-[clamp(8rem,10vw,10rem)]">
          <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center">
            {/*==================== Left: Content ====================*/}
            <div className="flex flex-col justify-center">
              <h3 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(2.4rem,3vw,3.2rem)] mb-[clamp(3rem,4vw,4rem)]">
                Boutique Trading Conditions
              </h3>

              {/*==================== Conditions List ====================*/}
              <div className="grid gap-[clamp(2rem,3vw,3rem)]">
                {conditions.map((condition, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-[1.5rem] group"
                  >
                    <div className="relative w-[2rem] h-[2rem] mt-[0.8rem] flex-shrink-0 transition-transform duration-300 group-hover:scale-125">
                      <div className="absolute w-full h-[5px] bg-n83-black top-1/2 -translate-y-1/2"></div>
                      <div className="absolute h-full w-[5px] bg-n83-black left-1/2 -translate-x-1/2"></div>
                    </div>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      {condition}
                    </p>
                  </div>
                ))}
              </div>
              {/*==================== End of Conditions List ====================*/}
            </div>
            {/*==================== End of Left: Content ====================*/}

            {/*==================== Right: Visual ====================*/}
            <div className="relative">
              <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
                <Image
                  width={800}
                  height={600}
                  src="/images/markets/crypto/boutique-conditions.jpg"
                  alt="Professional crypto trading conditions and competitive spreads"
                  className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
                />
              </div>
            </div>
            {/*==================== End of Right: Visual ====================*/}
          </div>
        </div>
        {/*==================== End of Boutique Trading Conditions ====================*/}

        {/*==================== Four Account Types ====================*/}
        <div className="mb-[clamp(8rem,10vw,10rem)]">
          <div className="text-center mb-[clamp(4rem,5vw,5rem)]">
            <h3 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(2.4rem,3vw,3.2rem)] mb-[clamp(1.5rem,2vw,2rem)]">
              Four Account Types
            </h3>
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
                <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                  {account.description}
                </p>
              </div>
            ))}
          </div>
          {/*==================== End of Account Types Grid ====================*/}
        </div>
        {/*==================== End of Four Account Types ====================*/}

        {/*==================== Platform for Focus ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center">
          {/*==================== Left: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                src="/images/markets/crypto/mt5-platform.jpg"
                alt="MetaTrader 5 platform with crypto integration"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>
          </div>
          {/*==================== End of Left: Visual ====================*/}

          {/*==================== Right: Content ====================*/}
          <div className="flex flex-col justify-center">
            <h3 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(2.4rem,3vw,3.2rem)] mb-[clamp(3rem,4vw,4rem)]">
              Platform for Focus
            </h3>

            <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
              Trade crypto through MetaTrader 5 (MT5), fully integrated with
              digital assets. Our boutique design ensures every tool is clear
              and every execution straightforward.
            </p>
          </div>
          {/*==================== End of Right: Content ====================*/}
        </div>
        {/*==================== End of Platform for Focus ====================*/}
      </div>
    </section>
  );
};

export default CryptoN83Advantage;
