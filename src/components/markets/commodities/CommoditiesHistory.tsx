import Image from "next/image";

const CommoditiesHistory = () => {
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
                src="/images/markets/commodities/commodities-history.jpg"
                alt="Historical evolution of commodity trading from ancient merchants to modern exchanges"
                className="w-full h-screen object-cover transition-transform duration-[0.6s] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>
          </div>
          {/*==================== End of Left: Visual ====================*/}

          {/*==================== Right: Content ====================*/}
          <div className="flex flex-col justify-center">
            <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(3rem,4vw,4rem)] uppercase tracking-tight">
              A Brief History of Commodity Trading
            </h2>

            <div className="space-y-[clamp(2.5rem,3vw,3rem)]">
              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                Commodity trading is as old as civilization itself. Ancient
                merchants exchanged goods across trade routes long before
                financial markets existed. In the 19th century, organized
                exchanges like the Chicago Board of Trade formalized commodity
                futures trading.
              </p>

              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                Today, digital platforms allow traders worldwide to access
                commodities markets instantly. Whether you{"'"}re buying oil,
                hedging with gold, or speculating on agricultural shifts,
                commodities remain central to finance and wealth protection.
              </p>

              {/*==================== Evolution Points ====================*/}
              <div className="grid gap-[clamp(2rem,3vw,3rem)]">
                <div className="flex items-start gap-[1.5rem] group">
                  <div
                    className="w-[2rem] h-[2rem] bg-n83-black rounded-sm mt-[0.8rem] flex-shrink-0 transition-transform duration-300 group-hover:rotate-45"
                    style={{ transform: "rotate(45deg)" }}
                  ></div>
                  <div>
                    <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,1.9rem)] mb-[0.5rem]">
                      Ancient Trade Routes
                    </h4>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      Merchants exchanged goods across civilizations before
                      financial markets existed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-[1.5rem] group">
                  <div
                    className="w-[2rem] h-[2rem] bg-n83-black rounded-sm mt-[0.8rem] flex-shrink-0 transition-transform duration-300 group-hover:rotate-45"
                    style={{ transform: "rotate(45deg)" }}
                  ></div>
                  <div>
                    <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,1.9rem)] mb-[0.5rem]">
                      Exchange Formalization
                    </h4>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      The Chicago Board of Trade organized standardized
                      commodity contracts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-[1.5rem] group">
                  <div
                    className="w-[2rem] h-[2rem] bg-n83-black rounded-sm mt-[0.8rem] flex-shrink-0 transition-transform duration-300 group-hover:rotate-45"
                    style={{ transform: "rotate(45deg)" }}
                  ></div>
                  <div>
                    <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,1.9rem)] mb-[0.5rem]">
                      Digital Access
                    </h4>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      Modern platforms provide instant global commodities market
                      access.
                    </p>
                  </div>
                </div>
              </div>
              {/*==================== End of Evolution Points ====================*/}
            </div>
          </div>
          {/*==================== End of Right: Content ====================*/}
        </div>
        {/*==================== End of Section Layout ====================*/}
      </div>
    </section>
  );
};

export default CommoditiesHistory;
