import Link from "next/link";
import Image from "next/image";

const HomeHero = () => {
  return (
    <section className="flex min-h-screen pt-[5rem] flex-col bg-n83-white">
      <div className="flex-1 w-full flex flex-col px-container py-[clamp(4rem,6vw,6rem)]">
        {/*==================== Hero Title ====================*/}
        <div className="w-full mx-auto max-w-[120rem] text-center mb-[clamp(4rem,5vw,5rem)]">
          <h1 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(4rem,5vw,8rem)] mb-[clamp(2rem,3vw,3rem)] uppercase tracking-tight">
            Trade With
            <br />
            Clarity.
          </h1>
          <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.8rem,2vw,2.4rem)] max-w-[90rem] mx-auto">
            Clarity is our currency, stillness is our strategy.
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
              alt="N83-FX boutique trading platform interface"
              className="w-full min-h-[clamp(50rem,60vh,70rem)] object-cover transition-transform duration-[600ms] ease-out saturate-[0.8] contrast-[1.1] group-hover:scale-[1.02]"
            />
          </div>
        </div>
        {/*==================== End of Full Screen Hero Image ====================*/}

        {/*==================== Trust Snapshot ====================*/}
        <div className="text-center mb-[clamp(4rem,5vw,5rem)]">
          <div className="bg-n83-gray-50 border-l border-r border-n83-black p-[clamp(3rem,4vw,4rem)] max-w-[90rem] mx-auto mb-[clamp(4rem,5vw,5rem)]">
            <p className="m-0 font-normal leading-[1.4] text-n83-black text-[clamp(1.6rem,1.8vw,2rem)]">
              N83-FX Markets Ltd — Licensed by [Regulator] (License [XXXX]).
              Registered address: [Address]. Client funds held in segregated
              accounts with [Bank].
              <br />
              <span className="text-n83-gray-600">
                [See Company Profile] · [Compare Accounts]
              </span>
            </p>
          </div>

          {/*==================== CTA Buttons ====================*/}
          <div className="flex items-center gap-[clamp(2rem,3vw,3rem)] flex-col lg:flex-row justify-center">
            <Link
              href="/account/open"
              className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.8rem,2vw,2rem)] py-[clamp(2rem,2.5vw,2.5rem)] px-[clamp(4rem,5vw,5rem)] text-n83-white bg-n83-black hover:-translate-y-[2px] hover:bg-n83-gray-900 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] w-full lg:w-auto max-w-[35rem]"
            >
              Open Account
            </Link>
          </div>
        </div>
        {/*==================== End of Trust Snapshot ====================*/}
      </div>
    </section>
  );
};

export default HomeHero;
