import Link from "next/link";
import Image from "next/image";
import type { HeroFeature } from "@/types/home";

const Hero = () => {
  const heroFeatures: HeroFeature[] = [
    { icon: "✓", text: "Zero complexity" },
    { icon: "✓", text: "Transparent pricing" },
    { icon: "✓", text: "Built for everyone" },
  ];
  return (
    <section className="flex min-h-screen pt-[5rem] flex-col bg-n83-white">
      <div className="flex-1 w-full flex flex-col px-container py-[clamp(4rem,6vw,6rem)]">
        {/*==================== Hero Title ====================*/}
        <div className="w-full mx-auto max-w-[100rem] text-center">
          <h1 className="m-0 font-extrabold leading-[1.4] tracking-[-0.02em] uppercase text-n83-black text-[clamp(5rem,5vw,11rem)]">
            Trade with
            <br />
            clarity
          </h1>
        </div>
        {/*==================== End of Hero Title ====================*/}

        {/*==================== Hero Features & CTA Row ====================*/}
        <div className="flex max-w-full mt-16 mb-6 items-start gap-[clamp(3rem,6vw,6rem)] justify-between flex-col lg:flex-row">
          <div className="flex-1 flex gap-7 flex-col md:flex-row">
            {heroFeatures.map((feature: HeroFeature, index: number) => (
              <div key={index} className="flex gap-5 items-center">
                <span className="w-10 h-10 flex-shrink-0 font-semibold text-[1.4rem] rounded-full flex items-center justify-center text-n83-white bg-n83-black">
                  {feature.icon}
                </span>
                <span className="font-normal text-[1.8rem] text-n83-gray-600">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex-shrink-0 w-full lg:w-auto">
            <Link
              href="/start-trading"
              className="cursor-pointer font-medium text-[1.8rem] rounded-[3rem] items-center whitespace-nowrap inline-flex py-5 px-14 justify-center text-n83-white transition-smooth bg-n83-black hover:-translate-y-[2px] hover:bg-n83-gray-900 w-full lg:w-auto"
            >
              Start Trading
            </Link>
          </div>
        </div>
        {/*==================== End of Hero Features & CTA Row ====================*/}

        {/*==================== Hero Visual ====================*/}
        <div className="w-full">
          <div className="w-full mx-auto overflow-hidden relative rounded-[2.4rem] bg-n83-black group">
            <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] pointer-events-none bg-gradient-to-b from-black/86 via-transparent via-25% to-black/77"></div>
            <Image
              priority
              width={1200}
              height={600}
              alt="Simple trading interface"
              src="/images/home-page/hero.jpg"
              className="w-full h-full object-cover transition-transform duration-[0.6s] ease-out saturate-[0.8] contrast-[1.1] group-hover:scale-[1.02]"
            />
          </div>
        </div>
        {/*==================== End of Hero Visual ====================*/}
      </div>

      {/*==================== Hero Quote ====================*/}
      <div className="py-[clamp(4rem,6vw,6rem)] border-t border-black/20">
        <div className="mx-auto text-center max-w-container px-container">
          <blockquote className="font-normal leading-[1.4] max-w-[70rem] mx-auto italic mb-8 text-n83-black text-[clamp(2rem,3vw,2.4rem)]">
            {'"'}Finally, a trading platform that doesn{"'"}t feel like
            <br />
            you need a finance degree to use it.{'"'}
          </blockquote>
          <div className="flex gap-8 items-center justify-center flex-col md:flex-row">
            <div className="text-[#fbbf24] text-[1.8rem] tracking-[0.2rem]">
              ★★★★★
            </div>
            <cite className="font-medium text-[1.4rem] not-italic text-n83-gray-600">
              — Sarah M.
            </cite>
          </div>
        </div>
      </div>
      {/*==================== End of Hero Quote ====================*/}
    </section>
  );
};

export default Hero;
