import Link from "next/link";
import Image from "next/image";

const HomeAccountsDetailed = () => {
  const accounts = [
    {
      title: "Standard",
      subtitle: "start simple",
      minDeposit: "Minimum deposit: $100",
      specs: "Spreads from: [X] pips · Leverage up to [1:200] · Commission: No",
      bestFor: "new traders and strategy testing",
      cta: "Open Standard",
      image: "/images/home-page/account-standard.jpg",
    },
    {
      title: "Advanced",
      subtitle: "lower costs for frequent trading",
      minDeposit: "Minimum deposit: $500",
      specs: "Spreads from: [Y] pips · Leverage up to [1:200] · Commission: No",
      bestFor: "active traders seeking tighter pricing",
      cta: "Open Advanced",
      image: "/images/home-page/account-advanced.jpg",
    },
    {
      title: "Pro",
      subtitle: "tight pricing for large positions",
      minDeposit: "Minimum deposit: $2,000",
      specs: "Spreads from: [Z] pips · Leverage up to [1:100] · Commission: No",
      bestFor: "high-volume, professional strategies",
      cta: "Open Pro",
      image: "/images/home-page/account-pro.jpg",
    },
    {
      title: "Islamic",
      subtitle: "100% swap-free, no time limits",
      minDeposit: "Minimum deposit: $100",
      specs: "Same features as Standard, no swaps",
      bestFor: "Sharia-compliant trading without fine print",
      cta: "Open Islamic",
      image: "/images/home-page/account-islamic.jpg",
    },
  ];

  return (
    <section className="bg-n83-white py-[clamp(8rem,10vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,7vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,6rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase tracking-tight">
            Choose your account in seconds
          </h2>
          <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,2.4rem)] max-w-[70rem] mx-auto">
            Four accounts. Clear differences. No hidden terms.
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Accounts Grid ====================*/}
        <div className="space-y-[clamp(8rem,10vw,10rem)] mb-[clamp(6rem,8vw,8rem)]">
          {accounts.map((account, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/*==================== Account Visual ====================*/}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
                  <Image
                    width={700}
                    height={500}
                    src={account.image}
                    alt={`N83-FX ${account.title} account type interface`}
                    className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(35rem,45vh,50rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              {/*==================== End of Account Visual ====================*/}

              {/*==================== Account Content ====================*/}
              <div
                className={`flex flex-col justify-center ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <div className="mb-[clamp(2rem,2.5vw,2.5rem)]">
                  <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.9rem,2vw,2.4rem)] mb-[clamp(1rem,1.5vw,1.5rem)]">
                    {account.title} — {account.subtitle}
                  </h3>
                  <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.7rem,1.8vw,2rem)] mb-[clamp(1.5rem,2vw,2rem)]">
                    {account.minDeposit}
                  </p>
                  <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.7rem,1.8vw,2rem)] mb-[clamp(2rem,2.5vw,2.5rem)]">
                    {account.specs}
                  </p>
                </div>

                {/*==================== Best For Section ====================*/}
                <div className="bg-n83-gray-50 border-l border-r border-n83-black p-[clamp(2.5rem,3vw,3rem)] mb-[clamp(3rem,4vw,4rem)]">
                  <p className="m-0 font-normal leading-[1.4] text-n83-black text-[clamp(1.6rem,1.8vw,1.9rem)]">
                    👉 Best for: {account.bestFor}
                  </p>
                </div>
                {/*==================== End of Best For Section ====================*/}

                {/*==================== Account CTAs ====================*/}
                <div className="flex items-center gap-[clamp(1.5rem,2vw,2rem)] flex-col sm:flex-row">
                  <Link
                    href="/account/open"
                    className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-white bg-n83-black hover:-translate-y-[2px] hover:bg-n83-gray-900 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] w-full sm:w-auto max-w-[25rem]"
                  >
                    {account.cta}
                  </Link>
                  <Link
                    href="/accounts"
                    className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-black bg-transparent border-2 border-n83-black hover:text-n83-white hover:-translate-y-[2px] hover:bg-n83-black w-full sm:w-auto max-w-[20rem]"
                  >
                    Compare
                  </Link>
                </div>
                {/*==================== End of Account CTAs ====================*/}
              </div>
              {/*==================== End of Account Content ====================*/}
            </div>
          ))}
        </div>
        {/*==================== End of Accounts Grid ====================*/}

        {/*==================== Final CTA ====================*/}
        <div className="text-center">
          <Link
            href="/accounts"
            className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.8rem,2vw,2rem)] py-[clamp(2rem,2.5vw,2.5rem)] px-[clamp(4rem,5vw,5rem)] text-n83-white bg-n83-black hover:-translate-y-[2px] hover:bg-n83-gray-900 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] w-full lg:w-auto max-w-[40rem] mx-auto"
          >
            Compare All Accounts
          </Link>
        </div>
        {/*==================== End of Final CTA ====================*/}
      </div>
    </section>
  );
};

export default HomeAccountsDetailed;
