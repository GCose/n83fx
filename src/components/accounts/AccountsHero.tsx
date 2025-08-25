import Link from "next/link";
import Image from "next/image";

const AccountsHero = () => {
  return (
    <section className="flex min-h-screen pt-[5rem] flex-col bg-white">
      <div className="flex-1 w-full flex flex-col px-container py-[clamp(4rem,6vw,6rem)]">
        {/*==================== Editorial Title ====================*/}
        <div className="w-full mx-auto max-w-[120rem] text-center mb-[clamp(6rem,8vw,8rem)]">
          <h1 className="m-0 font-800 leading-[1.4] tracking-[-0.02em] uppercase text-black font-playfair text-[clamp(4rem,5vw,11rem)]">
            Our Accounts
            <br />
            in Detail
          </h1>
          <p className="mt-[clamp(3rem,4vw,4rem)] font-normal text-[clamp(1.8rem,2.5vw,2.7rem)] text-gray-600 max-w-[80rem] mx-auto leading-[1.5]">
            Choose from Standard, Advanced, Pro, or Islamic accounts — each
            designed with simple structure, full transparency, and respect for
            traders at every level.
          </p>
        </div>
        {/*==================== End of Editorial Title ====================*/}

        {/*==================== Full Screen Hero Image ====================*/}
        <div className="w-full mb-[clamp(8rem,10vw,10rem)]">
          <div className="w-full mx-auto overflow-hidden relative rounded-[2.4rem] bg-black group">
            <div className="absolute top-0 left-0 right-0 bottom-0 z-[2] pointer-events-none bg-gradient-to-b from-black/60 via-transparent via-40% to-black/80"></div>
            <Image
              priority
              width={1600}
              height={800}
              alt="N83-FX account types and trading interface"
              src="/images/accounts/accounts-hero.jpg"
              className="w-full h-full object-cover transition-transform duration-[600ms] ease-out saturate-[0.8] contrast-[1.1] group-hover:scale-[1.02] min-h-[80vh]"
            />

            {/*==================== Overlay Content ====================*/}
            <div className="absolute bottom-[clamp(6rem,8vw,8rem)] left-[clamp(3rem,6vw,6rem)] right-[clamp(3rem,6vw,6rem)] z-[3]">
              <div className="max-w-[100rem]">
                <h2 className="m-0 font-800 leading-[1.3] text-white font-playfair text-[clamp(4rem,4vw,8rem)] mb-[clamp(2rem,3vw,3rem)]">
                  Four Clear Choices
                </h2>
                <p className="m-0 font-normal leading-[1.5] text-white/90 text-[clamp(1.8rem,2vw,2.4rem)] max-w-[60rem]">
                  Whether you{"'"}re starting small, scaling strategies, or
                  trading professionally — there{"'"}s a clear path that
                  respects your needs and goals.
                </p>
              </div>
            </div>
            {/*==================== End of Overlay Content ====================*/}
          </div>
        </div>
        {/*==================== End of Full Screen Hero Image ====================*/}

        {/*==================== Editorial Stats Section ====================*/}
        <div className="border-t border-b border-black py-[clamp(4rem,2vw,5rem)] mb-[clamp(8rem,10vw,10rem)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[clamp(4rem,6vw,6rem)] text-center">
            <div>
              <h3 className="m-0 font-800 leading-[1.2] text-black text-[clamp(3rem,5vw,5rem)] mb-[clamp(1rem,2vw,2rem)]">
                4
              </h3>
              <p className="m-0 font-normal leading-[1.4] text-gray-600 text-[clamp(1.6rem,1.8vw,2rem)]">
                Account Types
              </p>
            </div>
            <div>
              <h3 className="m-0 font-800 leading-[1.2] text-black text-[clamp(3rem,5vw,5rem)] mb-[clamp(1rem,2vw,2rem)]">
                $100
              </h3>
              <p className="m-0 font-normal leading-[1.4] text-gray-600 text-[clamp(1.6rem,1.8vw,2rem)]">
                Minimum Start
              </p>
            </div>
            <div>
              <h3 className="m-0 font-800 leading-[1.2] text-black text-[clamp(3rem,5vw,5rem)] mb-[clamp(1rem,2vw,2rem)]">
                MT5
              </h3>
              <p className="m-0 font-normal leading-[1.4] text-gray-600 text-[clamp(1.6rem,1.8vw,2rem)]">
                Same Platform
              </p>
            </div>
            <div>
              <h3 className="m-0 font-800 leading-[1.2] text-black text-[clamp(3rem,5vw,5rem)] mb-[clamp(1rem,2vw,2rem)]">
                0%
              </h3>
              <p className="m-0 font-normal leading-[1.4] text-gray-600 text-[clamp(1.6rem,1.8vw,2rem)]">
                Commission Fees
              </p>
            </div>
          </div>
        </div>
        {/*==================== End of Editorial Stats Section ====================*/}

        {/*==================== CTA Section ====================*/}
        <div className="text-center">
          <div className="flex items-center gap-[clamp(3rem,4vw,4rem)] flex-col lg:flex-row justify-center">
            <Link
              href="/account/open"
              className="cursor-pointer font-medium text-[clamp(1.8rem,2vw,2.2rem)] rounded-[3rem] items-center whitespace-nowrap inline-flex py-[clamp(2rem,2.5vw,2.5rem)] px-[clamp(4rem,5vw,5rem)] justify-center text-white bg-black transition-smooth hover:-translate-y-0.5 hover:bg-gray-900 w-full lg:w-auto font-playfair max-w-[40rem]"
            >
              Open Your Account Today
            </Link>
            <Link
              href="#compare"
              className="cursor-pointer font-medium text-[clamp(1.8rem,2vw,2.2rem)] rounded-[3rem] items-center whitespace-nowrap inline-flex py-[clamp(2rem,2.5vw,2.5rem)] px-[clamp(4rem,5vw,5rem)] justify-center text-black bg-transparent border-2 border-black hover:text-white hover:-translate-y-0.5 hover:bg-black w-full lg:w-auto font-playfair max-w-[40rem] transition-smooth"
            >
              Compare All Accounts
            </Link>
          </div>
        </div>
        {/*==================== End of CTA Section ====================*/}
      </div>
    </section>
  );
};

export default AccountsHero;
