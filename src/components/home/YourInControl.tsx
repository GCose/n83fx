import Link from "next/link";
import Image from "next/image";

const YoureInControl = () => {
  return (
    <section className="h-full py-28 bg-n83-white">
      <div className="w-full px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,8vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.4] tracking-[-0.02em] uppercase text-n83-black text-[clamp(5rem,5vw,8rem)] mb-[clamp(2rem,3vw,3rem)]">
            You{"'"}re In Control
          </h2>
          <h3 className="m-0 font-normal leading-[1.2] text-n83-black text-[clamp(2.4rem,4vw,2.7rem)]">
            No stress. No pressure. No commission.
          </h3>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Content Grid ====================*/}
        <div className="grid items-center h-[80vh] gap-[clamp(6rem,8vw,8rem)] grid-cols-1 lg:grid-cols-[1fr_2fr]">
          {/*==================== Left: Content ====================*/}
          <div className="max-w-[60rem] lg:max-w-full">
            <div>
              <p className="m-0 font-extrabold leading-[1.5] text-n83-black mb-[clamp(3rem,4vw,4rem)] text-[clamp(1.8rem,2.2vw,2.2rem)]">
                Everything we do is built around your trust:
              </p>

              {/*==================== Trust Points ====================*/}
              <div className="grid grid-cols-1 mb-[clamp(3rem,4vw,4rem)] border-t border-b border-n83-black">
                <div className="transition-smooth py-[clamp(2rem,3vw,3rem)] md:py-[clamp(1.5rem,2vw,2rem)] border-b border-black/10 last:border-b-0 hover:translate-x-[5px]">
                  <span className="font-light leading-[1.3] text-n83-black text-[clamp(1.8rem,2.2vw,2.2rem)]">
                    No hidden spreads
                  </span>
                </div>
                <div className="transition-smooth py-[clamp(2rem,3vw,3rem)] md:py-[clamp(1.5rem,2vw,2rem)] border-b border-black/10 last:border-b-0 hover:translate-x-[5px]">
                  <span className="font-light leading-[1.3] text-n83-black text-[clamp(1.8rem,2.2vw,2.2rem)]">
                    No gamification
                  </span>
                </div>
                <div className="transition-smooth py-[clamp(2rem,3vw,3rem)] md:py-[clamp(1.5rem,2vw,2rem)] border-b border-black/10 last:border-b-0 hover:translate-x-[5px]">
                  <span className="font-light leading-[1.3] text-n83-black text-[clamp(1.8rem,2.2vw,2.2rem)]">
                    No selling your order flow
                  </span>
                </div>
              </div>
              {/*==================== End of Trust Points ====================*/}

              <p className="m-0 font-semibold leading-[1.4] text-n83-black mb-[clamp(4rem,5vw,5rem)] text-[clamp(1.8rem,2.2vw,2.2rem)]">
                Just full transparency, always.
              </p>

              {/*==================== CTA Section ====================*/}
              <div className="flex items-center gap-[clamp(2rem,3vw,3rem)] flex-col lg:flex-row">
                <Link
                  href="/pricing"
                  className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-white bg-n83-black hover:-translate-y-[2px] hover:bg-n83-gray-900 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] w-full lg:w-auto max-w-[30rem]"
                >
                  View our pricing
                </Link>
                <Link
                  href="/transparency"
                  className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-black bg-transparent border-2 border-n83-black hover:text-n83-white hover:-translate-y-[2px] hover:bg-n83-black w-full lg:w-auto max-w-[30rem]"
                >
                  How we make money
                </Link>
              </div>
              {/*==================== End of CTA Section ====================*/}
            </div>
          </div>
          {/*==================== End of Left: Content ====================*/}

          {/*==================== Right: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                src="/images/home-page/control-section/control-3.jpg"
                alt="Transparent pricing and fee structure dashboard"
                width={800}
                height={600}
                className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>
          </div>
          {/*==================== End of Right: Visual ====================*/}
        </div>
      </div>
    </section>
  );
};

export default YoureInControl;
