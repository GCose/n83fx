import Link from "next/link";
import Image from "next/image";

const AccountsHero = () => {
  return (
    <section className="relative bg-n83-white py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Editorial Header ====================*/}
        <div className="text-center mb-[clamp(6rem,8vw,8rem)]">
          <h1 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(4rem,6vw,7rem)] mb-[clamp(2rem,3vw,3rem)] uppercase tracking-tight">
            Our Accounts in Detail
          </h1>
          <p className="m-0 font-normal leading-[1.5] max-w-[80rem] mx-auto text-n83-gray-600 text-[clamp(1.8rem,2vw,2rem)]">
            Choose from Standard, Advanced, Pro, or Islamic accounts — each
            designed with simple structure, full transparency, and respect for
            traders at every level.
          </p>
        </div>
        {/*==================== End of Editorial Header ====================*/}

        {/*==================== Editorial Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-start">
          {/*==================== Left: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                width={800}
                height={600}
                src="/images/accounts/accounts-hero.jpg"
                alt="N83-FX account types and trading platform interface"
                className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(45rem,55vh,65rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>

            {/*==================== Account Stats Grid ====================*/}
            <div className="mt-[clamp(3rem,4vw,4rem)] border-t border-n83-black border-b grid grid-cols-2 gap-[clamp(1.5rem,2vw,2rem)]">
              <div className="p-[clamp(2rem,3vw,3rem)] text-center">
                <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(2rem,2.5vw,2.5rem)] mb-[0.5rem]">
                  4
                </h3>
                <p className="m-0 font-normal leading-[1.3] text-n83-gray-600 text-[clamp(1.3rem,1.5vw,1.5rem)]">
                  Account Types
                </p>
              </div>
              <div className="p-[clamp(2rem,3vw,3rem)] text-center">
                <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(2rem,2.5vw,2.5rem)] mb-[0.5rem]">
                  $100
                </h3>
                <p className="m-0 font-normal leading-[1.3] text-n83-gray-600 text-[clamp(1.3rem,1.5vw,1.5rem)]">
                  Minimum Start
                </p>
              </div>
            </div>
            {/*==================== End of Account Stats Grid ====================*/}
          </div>
          {/*==================== End of Left: Visual ====================*/}

          {/*==================== Right: Content ====================*/}
          <div className="flex flex-col justify-center">
            <div className="space-y-[clamp(2.5rem,3vw,3rem)]">
              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                Whether you{"'"}re starting small, scaling strategies, or
                trading professionally, there{"'"}s a clear path that respects
                your needs and goals.
              </p>

              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                From beginners testing strategies to professionals managing
                large positions — each account provides the same calm, clear
                trading experience on MetaTrader 5.
              </p>

              {/*==================== Editorial Quote ====================*/}
              <div className="p-[clamp(2.5rem,3vw,3rem)] bg-n83-gray-50 border-l border-r border-n83-black">
                <p className="m-0 font-medium leading-[1.4] text-n83-black text-[clamp(1.8rem,2vw,2rem)]">
                  Simple structure, full transparency, and respect for traders —
                  that{"'"}s how we{"'"}ve designed every account type.
                </p>
              </div>
              {/*==================== End of Editorial Quote ====================*/}
            </div>

            {/*==================== CTA Section ====================*/}
            <div className="mt-[clamp(4rem,5vw,5rem)] flex items-center gap-[clamp(2rem,3vw,3rem)] flex-col lg:flex-row">
              <Link
                href="/account/open"
                className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-white bg-n83-black hover:-translate-y-[2px] hover:bg-n83-gray-900 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] w-full lg:w-auto max-w-[30rem]"
              >
                Open Your Account Today
              </Link>
              <Link
                href="#compare"
                className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-black bg-transparent border-2 border-n83-black hover:text-n83-white hover:-translate-y-[2px] hover:bg-n83-black w-full lg:w-auto max-w-[30rem]"
              >
                Compare All Accounts
              </Link>
            </div>
            {/*==================== End of CTA Section ====================*/}
          </div>
          {/*==================== End of Right: Content ====================*/}
        </div>
        {/*==================== End of Editorial Layout ====================*/}
      </div>
    </section>
  );
};

export default AccountsHero;
