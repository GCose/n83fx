import Link from "next/link";
import Image from "next/image";

const ForexHero = () => {
  return (
    <section className="relative bg-n83-white py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Hero Grid ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center min-h-[80vh]">
          {/*==================== Left: Content ====================*/}
          <div className="flex flex-col justify-center">
            <div className="mb-[clamp(3rem,4vw,4rem)]">
              <h1 className="m-0 font-extrabold leading-[1.1] text-n83-black text-[clamp(4rem,6vw,7rem)] mb-[clamp(2rem,3vw,3rem)] uppercase tracking-tight">
                Forex Trading with Clarity
              </h1>
              <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.8rem,2.2vw,2.4rem)] max-w-[55rem]">
                Trade the world{"'"}s most liquid market through a platform
                built on simplicity, transparency, and focus.
              </p>
            </div>

            {/*==================== CTA Section ====================*/}
            <div className="flex items-center gap-[clamp(2rem,3vw,3rem)] flex-col lg:flex-row">
              <Link
                href="/account/open"
                className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-white bg-n83-black hover:-translate-y-[2px] hover:bg-n83-gray-900 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] w-full lg:w-auto max-w-[30rem]"
              >
                Open an Account Today
              </Link>
              <Link
                href="/platforms"
                className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-black bg-transparent border-2 border-n83-black hover:text-n83-white hover:-translate-y-[2px] hover:bg-n83-black w-full lg:w-auto max-w-[30rem]"
              >
                Download MT5
              </Link>
            </div>
            {/*==================== End of CTA Section ====================*/}
          </div>
          {/*==================== End of Left: Content ====================*/}

          {/*==================== Right: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                width={800}
                height={600}
                src="/images/markets/forex/forex-hero.jpg"
                alt="Forex trading platform showing major currency pairs"
                className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>
          </div>
          {/*==================== End of Right: Visual ====================*/}
        </div>
        {/*==================== End of Hero Grid ====================*/}
      </div>
    </section>
  );
};

export default ForexHero;
