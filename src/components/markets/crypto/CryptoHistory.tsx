import Image from "next/image";

const CryptoHistory = () => {
  return (
    <section className="relative bg-n83-gray-50 py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center">
          {/*==================== Left: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                width={800}
                height={600}
                src="/images/markets/crypto/crypto-history.jpg"
                alt="Bitcoin launch in 2009 and crypto evolution timeline"
                className="w-full h-screen object-cover transition-transform duration-[0.6s] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>
          </div>
          {/*==================== End of Left: Visual ====================*/}

          {/*==================== Right: Content ====================*/}
          <div className="flex flex-col justify-center">
            <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(3rem,4vw,4rem)] uppercase tracking-tight">
              A Brief History of Crypto
            </h2>

            <div className="space-y-[clamp(2.5rem,3vw,3rem)]">
              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                Bitcoin launched in 2009 as the first decentralized digital
                currency. Since then, thousands of cryptocurrencies have
                emerged, from platforms like Ethereum that support smart
                contracts to stablecoins pegged to traditional currencies.
              </p>

              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                Over time, crypto has evolved from niche communities into
                mainstream markets. Today, it is recognized by institutions,
                regulated exchanges, and retail traders across the world.
              </p>

              {/*==================== Evolution Points ====================*/}
              <div className="space-y-[clamp(2rem,2.5vw,2.5rem)] pt-[clamp(2rem,3vw,3rem)] border-t border-n83-black/20">
                <div className="flex items-start gap-[1.5rem] group">
                  <div
                    className="w-[2rem] h-[2rem] bg-n83-black rounded-sm mt-[0.8rem] flex-shrink-0 transition-transform duration-300 group-hover:rotate-45"
                    style={{ transform: "rotate(45deg)" }}
                  ></div>
                  <div>
                    <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,1.9rem)] mb-[0.5rem]">
                      Decentralized Currency
                    </h4>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      Bitcoin introduced peer-to-peer transactions without
                      central authorities.
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
                      Smart Contracts & Innovation
                    </h4>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      Ethereum brought programmable blockchain capabilities to
                      digital assets.
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
                      Mainstream Adoption
                    </h4>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      Institutional recognition and regulatory frameworks
                      brought crypto to global markets.
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

export default CryptoHistory;
