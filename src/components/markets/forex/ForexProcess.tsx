import Link from "next/link";
import Image from "next/image";

const ForexProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Open Your Account",
      description:
        "Choose from our four account types. Whether you start with Standard or go straight to Pro, the process is quick and secure.",
    },
    {
      number: "02",
      title: "Fund Your Account",
      description:
        "Deposit safely using trusted payment methods. Client funds are always held separately for protection.",
    },
    {
      number: "03",
      title: "Download MT5",
      description:
        "Access our customized MT5 platform for desktop, web, or mobile.",
    },
    {
      number: "04",
      title: "Start Trading",
      description:
        "Select your pairs, use the tools, and execute trades with clarity and confidence.",
    },
  ];

  const pairTypes = [
    {
      title: "Major Pairs",
      description:
        "The most traded, such as EUR/USD, GBP/USD, and USD/JPY. They are liquid and have the tightest spreads.",
      examples: "EUR/USD, GBP/USD, USD/JPY",
    },
    {
      title: "Minor Pairs",
      description:
        "Pairs that don't include the US dollar, like EUR/GBP or AUD/JPY. They provide diversification opportunities.",
      examples: "EUR/GBP, AUD/JPY, GBP/CAD",
    },
    {
      title: "Exotic Pairs",
      description:
        "Combinations of major currencies with smaller or emerging market currencies. Higher potential movement but also higher risk.",
      examples: "USD/TRY, USD/ZAR, EUR/TRY",
    },
  ];

  return (
    <section className="relative bg-n83-white py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Currency Pairs Section ====================*/}
        <div className="mb-[clamp(8rem,10vw,10rem)]">
          <div className="text-center mb-[clamp(6rem,8vw,8rem)]">
            <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(4rem,5vw,6rem)] mb-[clamp(2rem,3vw,3rem)] uppercase tracking-tight">
              Major, Minor, and Exotic Pairs
            </h2>
            <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.8rem,2.2vw,2.4rem)] max-w-[70rem] mx-auto">
              When trading Forex, you always deal with two currencies: one you
              buy, and one you sell.
            </p>
          </div>

          {/*==================== Pairs Grid ====================*/}
          <div className="grid lg:grid-cols-3 gap-[clamp(3rem,4vw,4rem)]">
            {pairTypes.map((pair, index) => (
              <div
                key={index}
                className="bg-n83-gray-50 p-[clamp(3rem,4vw,4rem)] rounded-[2rem] hover:-translate-y-[4px] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)]"
              >
                <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(2rem,2.2vw,2.4rem)] mb-[clamp(1.5rem,2vw,2rem)]">
                  {pair.title}
                </h3>
                <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.4rem,1.6vw,1.6rem)] mb-[clamp(2rem,2.5vw,2.5rem)]">
                  {pair.description}
                </p>
                <div className="pt-[clamp(1.5rem,2vw,2rem)] border-t border-n83-black/10">
                  <p className="m-0 font-medium text-n83-black text-[clamp(1.3rem,1.5vw,1.5rem)]">
                    Examples:{" "}
                    <span className="font-normal text-n83-gray-600">
                      {pair.examples}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/*==================== End of Pairs Grid ====================*/}
        </div>
        {/*==================== End of Currency Pairs Section ====================*/}

        {/*==================== How to Start Section ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center">
          {/*==================== Left: Content ====================*/}
          <div className="flex flex-col justify-center">
            <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(3rem,4vw,4rem)] uppercase tracking-tight">
              How to Start Trading Forex with N83-FX
            </h2>

            {/*==================== Steps ====================*/}
            <div className="space-y-[clamp(3rem,4vw,4rem)] mb-[clamp(4rem,5vw,5rem)]">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex gap-[clamp(2rem,3vw,3rem)] items-start group"
                >
                  <div className="w-[clamp(5rem,6vw,6rem)] h-[clamp(5rem,6vw,6rem)] bg-n83-black text-n83-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[clamp(1.4rem,1.6vw,1.6rem)] group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <div className="pt-[0.5rem]">
                    <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.8rem,2vw,2rem)] mb-[clamp(1rem,1.2vw,1.2rem)]">
                      {step.title}
                    </h3>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/*==================== End of Steps ====================*/}

            {/*==================== CTA ====================*/}
            <Link
              href="/account/open"
              className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.8rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-white bg-n83-black hover:-translate-y-[2px] hover:bg-n83-gray-900 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] w-full lg:w-auto max-w-[35rem]"
            >
              Start Your Forex Journey
            </Link>
            {/*==================== End of CTA ====================*/}
          </div>
          {/*==================== End of Left: Content ====================*/}

          {/*==================== Right: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                width={800}
                height={600}
                src="/images/markets/forex/forex-uae.jpg"
                alt="Forex trading in UAE with MetaTrader 5"
                className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>

            {/*==================== UAE Highlight ====================*/}
            <div className="mt-[clamp(3rem,4vw,4rem)] p-[clamp(2.5rem,3vw,3rem)] bg-n83-gray-50 rounded-[1.6rem] border-l-4 border-n83-black">
              <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,1.8rem)] mb-[1rem]">
                Forex Trading in the UAE
              </h4>
              <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.4rem,1.6vw,1.6rem)]">
                The UAE has become a global hub for financial services. With
                growing investor interest, clear regulations from the SCA, and
                strong infrastructure, the UAE is one of the best places to
                trade Forex.
              </p>
            </div>
            {/*==================== End of UAE Highlight ====================*/}
          </div>
          {/*==================== End of Right: Visual ====================*/}
        </div>
        {/*==================== End of How to Start Section ====================*/}
      </div>
    </section>
  );
};

export default ForexProcess;
