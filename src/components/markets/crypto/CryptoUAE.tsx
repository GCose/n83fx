import Image from "next/image";

const CryptoUAE = () => {
  return (
    <section className="relative bg-n83-gray-50 py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-start">
          {/*==================== Left: Content ====================*/}
          <div className="flex flex-col justify-center">
            <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(3rem,4vw,4rem)] uppercase tracking-tight">
              Crypto Trading in the UAE
            </h2>

            <div className="space-y-[clamp(2.5rem,3vw,3rem)]">
              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                The UAE has emerged as a global hub for blockchain and digital
                assets. Dubai{"'"}s Virtual Assets Regulatory Authority (VARA)
                has created one of the world{"'"}s first regulatory frameworks
                for crypto, attracting institutions and traders alike.
              </p>

              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                For UAE-based traders, this means crypto is no longer just
                speculation — it is part of the region{"'"}s financial future.
                At N83-FX, we align with this vision by providing safe, clear,
                and Sharia-compliant ways to access the crypto markets.
              </p>

              {/*==================== UAE Benefits ====================*/}
              <div className="grid gap-[clamp(2rem,2.5vw,4rem)] py-[clamp(2rem,3vw,3rem)] border-t border-b border-n83-black">
                <div className="flex items-start gap-[1.5rem] group">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-[2rem] h-[2rem] text-n83-black mt-[0.6rem] flex-shrink-0"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <div>
                    <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,2rem)] mb-[0.5rem]">
                      VARA Regulatory Framework
                    </h4>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      Dubai{"'"}s Virtual Assets Regulatory Authority provides
                      clear guidelines for crypto trading.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-[1.5rem] group">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-[2rem] h-[2rem] text-n83-black mt-[0.6rem] flex-shrink-0"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <div>
                    <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,2rem)] mb-[0.5rem]">
                      Sharia-Compliant Options
                    </h4>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      Islamic account solutions that respect local values and
                      religious requirements.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-[1.5rem] group">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-[2rem] h-[2rem] text-n83-black mt-[0.6rem] flex-shrink-0"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <div>
                    <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,2rem)] mb-[0.5rem]">
                      Regional Financial Future
                    </h4>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      Crypto is becoming integral to the UAE{"'"}s position as a
                      global financial center.
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
                src="/images/markets/crypto/crypto-uae.jpg"
                alt="Crypto trading in UAE with VARA regulation and blockchain innovation"
                className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>

            {/*==================== VARA Highlight ====================*/}
            <div className="mt-[clamp(3rem,4vw,4rem)] p-[clamp(2.5rem,3vw,3rem)] bg-n83-white border-l border-r border-n83-black">
              <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,2.1rem)] mb-[1rem]">
                VARA Regulated
              </h4>
              <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                Dubai{"'"}s Virtual Assets Regulatory Authority ensures secure,
                compliant crypto trading environment.
              </p>
            </div>
            {/*==================== End of VARA Highlight ====================*/}
          </div>
          {/*==================== End of Right: Visual ====================*/}
        </div>
        {/*==================== End of Section Layout ====================*/}
      </div>
    </section>
  );
};

export default CryptoUAE;
