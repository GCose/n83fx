import Link from "next/link";
import Image from "next/image";
import type { TradingCategory, TradingStat } from "@/types/home";

const TradingOptions = () => {
  const tradingCategories: TradingCategory[] = [
    { title: "Zero Commission", description: "Trade without fees" },
    { title: "Real-time insights", description: "Live data, instant alerts" },
    {
      title: "Intelligent, human interface",
      description: "Adapts to your skill level",
    },
    {
      title: "Institutional-grade security",
      description: "Bank-level protection",
    },
  ];

  const tradingStats: TradingStat[] = [
    { number: "50,000+", label: "Stocks available" },
    { number: "$0", label: "Commission fees" },
  ];
  return (
    <section className="py-28 overflow-hidden relative bg-n83-gray-50">
      <div className="w-full px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,8vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.4] tracking-[-0.02em] uppercase text-n83-black text-[clamp(5rem,5vw,8rem)] mb-[clamp(2rem,3vw,3rem)]">
            Designed for <br />
            modern investors
          </h2>
          <p className="m-0 font-normal leading-[1.5] max-w-[60rem] mx-auto text-n83-gray-600 text-[clamp(1.8rem,2.5vw,2.7rem)]">
            Smart enough for pros. Simple enough for everyone.
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Investment Grid ====================*/}
        <div className="grid relative items-start gap-[clamp(6rem,8vw,4rem)] grid-cols-1 lg:grid-cols-[1fr_2.5fr]">
          {/*==================== Investment Categories ====================*/}
          <div className="flex flex-col gap-[clamp(3rem,4vw,7rem)]">
            {tradingCategories.map(
              (category: TradingCategory, index: number) => (
                <div
                  key={index}
                  className="relative pl-[clamp(2rem,3vw,3rem)] border-l-2 border-n83-black before:content-[''] before:absolute before:top-0 before:w-4 before:h-4 before:left-[-0.5rem] before:rounded-full before:bg-n83-black"
                >
                  <h3 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(2rem,2.5vw,2.4rem)] mb-[clamp(0.8rem,1vw,1rem)]">
                    {category.title}
                  </h3>
                  <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.5rem,1.8vw,1.7rem)]">
                    {category.description}
                  </p>
                </div>
              )
            )}
          </div>
          {/*==================== End of Investment Categories ====================*/}

          {/*==================== Visual Showcase ====================*/}
          <div className="flex flex-col gap-[clamp(3rem,4vw,4rem)]">
            <div className="overflow-hidden relative rounded-[2rem] bg-n83-black lg:rotate-[-1deg] lg:hover:rotate-[1deg] transition-transform duration-[0.6s]">
              <Image
                src="/images/home-page/what-section/what.jpg"
                alt="Trading platform showing various investment options"
                width={800}
                height={500}
                className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(35rem,45vh,50rem)] lg:hover:scale-[1.03]"
              />
              <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            <div className="grid gap-[clamp(2rem,3vw,3rem)] grid-cols-1 md:grid-cols-2 border-t border-b border-n83-gray-600">
              {tradingStats.map((stat: TradingStat, index: number) => (
                <div
                  key={index}
                  className="text-center rounded-[1rem] py-[clamp(2rem,3vw,3rem)]"
                >
                  <span className="block leading-[1] font-bold text-n83-black text-[clamp(2.4rem,3vw,3.2rem)] mb-[clamp(0.8rem,1vw,1rem)]">
                    {stat.number}
                  </span>
                  <span className="font-normal leading-[1.3] text-n83-gray-600 text-[clamp(1.4rem,1.6vw,1.6rem)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/*==================== End of Visual Showcase ====================*/}
        </div>
        {/*==================== End of Investment Grid ====================*/}

        {/*==================== Bottom CTA ====================*/}
        <div className="flex items-center gap-[clamp(3rem,5vw,5rem)] justify-between mt-[clamp(6rem,8vw,8rem)] flex-col lg:flex-row">
          <div className="flex-1">
            <h3 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(2rem,2.5vw,2.4rem)] mb-[clamp(1rem,1.5vw,1.5rem)]">
              Ready to start?
            </h3>
            <p className="m-0 w-full max-w-[50rem] font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.8rem)]">
              We stripped out the noise and rebuilt the trading experience from
              the ground up. From real-time execution to clean design, every
              detail is designed to help you focus, not react.
            </p>
          </div>
          <Link
            href="/explore"
            className="cursor-pointer font-medium flex-shrink-0 rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center text-n83-white transition-smooth bg-n83-black text-[clamp(1.6rem,1.8vw,1.8rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] hover:-translate-y-[2px] hover:bg-n83-gray-900 w-full lg:w-auto"
          >
            Explore N83-FX
          </Link>
        </div>
        {/*==================== End of Bottom CTA ====================*/}
      </div>
    </section>
  );
};

export default TradingOptions;
