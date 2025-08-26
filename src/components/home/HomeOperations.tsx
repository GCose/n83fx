import Image from "next/image";

const HomeOperations = () => {
  const operatingPrinciples = [
    "Clean layouts with generous white space",
    "Plain-English risk prompts before you confirm",
    "No ads. No engagement tricks.",
    "Consistent MetaTrader 5 (MT5) across desktop, web, and mobile",
    "UAE-aware support, 24/5",
  ];

  return (
    <section className="bg-n83-white py-[clamp(8rem,10vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(2rem,7vw,4rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,6rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase tracking-tight">
            How we operate
          </h2>
          <h3 className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.8rem,2vw,2.4rem)] max-w-[70rem] mx-auto">
            Design & conduct
          </h3>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Full Width Visual First ====================*/}
        <div className="mb-[clamp(6rem,8vw,8rem)]">
          <div className="w-full mx-auto overflow-hidden relative rounded-[2.4rem] bg-n83-black group min-h-[clamp(35rem,45vh,50rem)]">
            <Image
              width={1200}
              height={600}
              src="/images/home-page/how-operate.jpg"
              alt="N83-FX clean platform design vs cluttered trading interfaces"
              className="w-full h-full object-cover transition-transform duration-[600ms] ease-out saturate-[0.8] contrast-[1.1] group-hover:scale-[1.02]"
            />
          </div>
        </div>
        {/*==================== End of Full Width Visual First ====================*/}

        {/*==================== Content Below ====================*/}
        <div className="max-w-[90rem] mx-auto">
          <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-start">
            {/*==================== Left: Statement ====================*/}
            <div>
              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.8rem,2vw,2.4rem)] mb-[clamp(3rem,4vw,4rem)]">
                We design like a boutique, not a casino. Every element serves
                your focus.
              </p>
            </div>
            {/*==================== End of Left: Statement ====================*/}

            {/*==================== Right: Operating Principles ====================*/}
            <div>
              <div className="space-y-[clamp(2rem,2.5vw,2.5rem)]">
                {operatingPrinciples.map((principle, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-[1.6rem] group"
                  >
                    <div
                      className="w-[2rem] h-[2rem] bg-n83-black mt-[0.8rem] flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
                      style={{
                        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                      }}
                    ></div>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,2rem)]">
                      {principle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/*==================== End of Right: Operating Principles ====================*/}
          </div>

          {/*==================== Legal Statement ====================*/}
          <div className="mt-[clamp(6rem,8vw,8rem)]">
            <div className="bg-n83-gray-100 border-l border-r border-n83-black p-[clamp(3rem,4vw,4rem)] text-center">
              <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)] ">
                Client funds are held in segregated accounts with [Bank].
                Licensed by [Regulator], License [XXXX]. → [Company Profile]
              </p>
            </div>
          </div>
          {/*==================== End of Legal Statement ====================*/}
        </div>
        {/*==================== End of Content Below ====================*/}
      </div>
    </section>
  );
};

export default HomeOperations;
