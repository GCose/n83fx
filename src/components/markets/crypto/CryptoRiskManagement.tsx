import Image from "next/image";

const CryptoManagingRisk = () => {
  const riskPoints = [
    "Always trade with stop-loss orders",
    "Avoid over-leveraging",
    "Diversify between crypto and traditional assets",
    "Only trade with capital you can afford to lose",
  ];

  return (
    <section className="relative bg-n83-gray-100 py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-start">
          {/*==================== Left: Content ====================*/}
          <div className="flex flex-col justify-center">
            <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(3rem,4vw,4rem)] uppercase tracking-tight">
              Managing Risk in Crypto
            </h2>

            <div className="space-y-[clamp(2.5rem,3vw,3rem)]">
              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                Crypto is highly volatile. Prices can surge or collapse quickly,
                sometimes within minutes. At N83-FX, we believe in stating risks
                as plainly as opportunities:
              </p>

              {/*==================== Risk Points ====================*/}
              <div className="space-y-[clamp(1.5rem,2vw,2rem)]">
                {riskPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-[1.5rem] group"
                  >
                    <svg
                      className="w-[1.6rem] h-[1.6rem] text-n83-black mt-[0.6rem] flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z" />
                    </svg>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
              {/*==================== End of Risk Points ====================*/}

              {/*==================== Transparency Quote ====================*/}
              <div className="p-[clamp(2.5rem,3vw,3rem)] bg-n83-white border-l border-r border-n83-black">
                <p className="m-0 font-medium leading-[1.4] text-n83-black text-[clamp(1.6rem,1.8vw,1.8rem)]">
                  This respect for risk ensures your trading remains
                  intentional, not emotional.
                </p>
              </div>
              {/*==================== End of Transparency Quote ====================*/}
            </div>
          </div>
          {/*==================== End of Left: Content ====================*/}

          {/*==================== Right: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                width={800}
                height={600}
                src="/images/markets/crypto/managing-risk.jpg"
                alt="Risk management tools and stop-loss controls in crypto trading"
                className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>

            {/*==================== Risk Management Highlight ====================*/}
            <div className="mt-[clamp(3rem,4vw,4rem)] p-[clamp(2.5rem,3vw,3rem)] bg-n83-white border-l border-r border-n83-black">
              <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,2.1rem)] mb-[1rem]">
                High Volatility Warning
              </h4>
              <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                Crypto prices can change dramatically within minutes. Always use
                proper risk management.
              </p>
            </div>
            {/*==================== End of Risk Management Highlight ====================*/}
          </div>
          {/*==================== End of Right: Visual ====================*/}
        </div>
        {/*==================== End of Section Layout ====================*/}
      </div>
    </section>
  );
};

export default CryptoManagingRisk;
