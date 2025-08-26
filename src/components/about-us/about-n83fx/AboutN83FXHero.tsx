import Image from "next/image";

const AboutN83FXHero = () => {
  return (
    <section className="flex min-h-screen pt-[5rem] flex-col bg-n83-white">
      <div className="flex-1 w-full flex flex-col px-container py-[clamp(4rem,6vw,6rem)]">
        {/*==================== Hero Title ====================*/}
        <div className="w-full mx-auto max-w-[100rem] text-center mb-[clamp(4rem,5vw,5rem)]">
          <h1 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(4rem,5vw,6rem)] mb-[clamp(2rem,3vw,3rem)] uppercase tracking-tight">
            About N83-FX
          </h1>
          <p className="m-0 font-normal leading-[1.4] text-n83-black text-[clamp(1.9rem,2.5vw,2.4rem)] max-w-[60rem] mx-auto">
            A statement. A space. A philosophy of wealth.
          </p>
        </div>
        {/*==================== End of Hero Title ====================*/}

        {/*==================== Full Screen Hero Image ====================*/}
        <div className="w-full mb-[clamp(6rem,8vw,8rem)]">
          <div className="w-full mx-auto overflow-hidden relative rounded-[2.4rem] bg-n83-black group min-h-[clamp(50rem,60vh,70rem)]">
            <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] pointer-events-none bg-gradient-to-b from-n83-black/90 via-transparent via-30% to-n83-black/85"></div>
            <Image
              priority
              width={1200}
              height={800}
              src="/images/home-page/hero.jpg"
              alt="N83-FX trading philosophy visualization"
              className="w-full min-h-[clamp(50rem,60vh,70rem)] object-cover transition-transform duration-[600ms] ease-out saturate-[0.8] contrast-[1.1] group-hover:scale-[1.02]"
            />

            {/*==================== Overlay Content ====================*/}
            <div className="absolute top-0 left-0 right-0 bottom-0 z-[3] flex items-center justify-center p-[clamp(3rem,5vw,5rem)]">
              <div className="text-center max-w-[80rem] mx-auto">
                <h2 className="m-0 font-extrabold leading-[1.1] text-n83-white text-[clamp(3.5rem,4.5vw,5.5rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase tracking-tight">
                  Clarity is our currency.
                  <br />
                  Stillness is our strategy.
                </h2>
              </div>
            </div>
            {/*==================== End of Overlay Content ====================*/}
          </div>
          <div className="text-center mt-[clamp(2rem,3vw,4rem)]">
            <p className="m-0 font-medium leading-[1.4] text-n83-black text-[clamp(1.6rem,1.8vw,2rem)]">
              <em>Trust snapshot:</em> <strong>[Entity legal name]</strong>,
              licensed by <strong>[Regulator]</strong> (License{" "}
              <strong>[Number]</strong>). Client funds held in{" "}
              <strong>segregated accounts</strong>.
            </p>
          </div>
        </div>
        {/*==================== End of Full Screen Hero Image ====================*/}

        {/*==================== Trust Snapshot Stats ====================*/}
        <div className="border-t border-b border-n83-black py-[clamp(2rem,5vw,3rem)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[clamp(3rem,4vw,4rem)] text-center">
            <div>
              <h3 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(1.9rem,4vw,3rem)] mb-[clamp(1rem,1.5vw,1.5rem)]">
                MT5
              </h3>
              <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.4rem,1.6vw,1.9rem)]">
                Platform
              </p>
            </div>
            <div>
              <h3 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(1.9rem,4vw,3rem)] mb-[clamp(1rem,1.5vw,1.5rem)]">
                Licensed
              </h3>
              <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.4rem,1.6vw,1.9rem)]">
                & Regulated
              </p>
            </div>
            <div>
              <h3 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(1.9rem,4vw,3rem)] mb-[clamp(1rem,1.5vw,1.5rem)]">
                Segregated
              </h3>
              <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.4rem,1.6vw,1.9rem)]">
                Client Funds
              </p>
            </div>
            <div>
              <h3 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(1.9rem,4vw,3rem)] mb-[clamp(1rem,1.5vw,1.5rem)]">
                Boutique
              </h3>
              <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.4rem,1.6vw,1.9rem)]">
                Approach
              </p>
            </div>
          </div>
        </div>
        {/*==================== End of Trust Snapshot Stats ====================*/}
      </div>
    </section>
  );
};

export default AboutN83FXHero;
