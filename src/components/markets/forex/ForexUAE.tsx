import Image from "next/image";

const ForexUAE = () => {
  return (
    <section className="relative bg-n83-white py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center">
          {/*==================== Left: Content ====================*/}
          <div className="flex flex-col justify-center">
            <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(3rem,4vw,4rem)] uppercase tracking-tight">
              Forex Trading in the UAE
            </h2>

            <div className="space-y-[clamp(2.5rem,3vw,3rem)]">
              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                The UAE has become a global hub for financial services, and
                Forex trading is no exception. With growing investor interest,
                clear regulations from the Securities and Commodities Authority
                (SCA), and strong infrastructure, the UAE is one of the best
                places to trade Forex.
              </p>

              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                At N83-FX, we serve UAE-based traders with accounts that respect
                local needs, including Islamic accounts, while providing access
                to global markets.
              </p>

              {/*==================== UAE Benefits ====================*/}
              <div className="grid gap-[clamp(2rem,2.5vw,2.5rem)] py-[clamp(2rem,3vw,3rem)] border-t border-b border-n83-black">
                <div className="flex items-start gap-[1.5rem] group">
                  <div className="w-[0.6rem] h-[0.6rem] bg-n83-black rounded-full mt-[1rem] flex-shrink-0 transition-transform duration-300 group-hover:scale-125"></div>
                  <div>
                    <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,2rem)] mb-[0.5rem]">
                      Clear Regulatory Framework
                    </h4>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      SCA oversight provides transparency and investor
                      protection in all trading activities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-[1.5rem] group">
                  <div className="w-[0.6rem] h-[0.6rem] bg-n83-black rounded-full mt-[1rem] flex-shrink-0 transition-transform duration-300 group-hover:scale-125"></div>
                  <div>
                    <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,2rem)] mb-[0.5rem]">
                      Islamic Account Options
                    </h4>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      Sharia-compliant trading solutions that respect local
                      values and requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-[1.5rem] group">
                  <div className="w-[0.6rem] h-[0.6rem] bg-n83-black rounded-full mt-[1rem] flex-shrink-0 transition-transform duration-300 group-hover:scale-125"></div>
                  <div>
                    <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,1.9rem)] mb-[0.5rem]">
                      Growing Market Interest
                    </h4>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      Increasing participation from both local and international
                      investors.
                    </p>
                  </div>
                </div>
              </div>
              {/*==================== End of UAE Benefits ====================*/}
            </div>
          </div>
          {/*==================== End of Left: Content ====================*/}

          {/*==================== Right: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                width={800}
                height={600}
                src="/images/markets/forex/forex-uae.jpg"
                alt="Forex trading in UAE with SCA regulation and Islamic accounts"
                className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>

            {/*==================== SCA Highlight ====================*/}
            <div className="mt-[clamp(3rem,4vw,4rem)] p-[clamp(2.5rem,3vw,3rem)] bg-n83-gray-50 border-l border-r border-n83-black">
              <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,1.9rem)] mb-[1rem]">
                SCA Regulated
              </h4>
              <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                The Securities and Commodities Authority ensures transparent,
                secure trading environment for all UAE traders.
              </p>
            </div>
            {/*==================== End of SCA Highlight ====================*/}
          </div>
          {/*==================== End of Right: Visual ====================*/}
        </div>
        {/*==================== End of Section Layout ====================*/}
      </div>
    </section>
  );
};

export default ForexUAE;
