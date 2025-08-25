import Image from "next/image";

const IndicesUAE = () => {
  return (
    <section className="relative bg-n83-gray-100 py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center">
          {/*==================== Left: Content ====================*/}
          <div className="flex flex-col justify-center">
            <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(3rem,4vw,4rem)] uppercase tracking-tight">
              Indices Trading in the UAE
            </h2>

            <div className="space-y-[clamp(2.5rem,3vw,3rem)]">
              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                The UAE has become a hub for international investors seeking
                global exposure. Traders in Dubai and Abu Dhabi often look to
                U.S. and European indices as benchmarks for growth and
                opportunity.
              </p>

              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                At N83-FX, we bridge local needs with global access. With
                Islamic account options and a platform built for clarity, we
                make indices trading both accessible and straightforward for
                UAE-based traders.
              </p>

              {/*==================== UAE Advantages ====================*/}
              <div className="grid gap-[clamp(1.5rem,2vw,2rem)] border-t border-b border-n83-black py-[clamp(2rem,3vw,3rem)]">
                <div className="flex items-start gap-[1.5rem] group">
                  <div
                    className="w-[2rem] h-[2rem] bg-n83-black rounded-sm mt-[0.8rem] flex-shrink-0 transition-transform duration-300 group-hover:rotate-45"
                    style={{ transform: "rotate(45deg)" }}
                  ></div>
                  <div>
                    <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,1.9rem)] mb-[0.5rem]">
                      Global Investment Hub
                    </h4>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      Dubai and Abu Dhabi as centers for international market
                      exposure.
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
                      Regional Bridge
                    </h4>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      Local understanding combined with global market access.
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
                      Islamic Compliance
                    </h4>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      Sharia-compliant trading options for regional investors.
                    </p>
                  </div>
                </div>
              </div>
              {/*==================== End of UAE Advantages ====================*/}
            </div>
          </div>
          {/*==================== End of Left: Content ====================*/}

          {/*==================== Right: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                width={800}
                height={600}
                src="/images/markets/indices/indices-uae.jpg"
                alt="UAE financial hub and global indices trading opportunities"
                className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
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

export default IndicesUAE;
