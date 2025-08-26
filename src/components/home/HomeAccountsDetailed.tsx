import Link from "next/link";

const HomeAccountsDetailed = () => {
  const accounts = [
    {
      title: "Standard",
      subtitle: "start simple",
      minDeposit: "$100",
      spreads: "[X] pips",
      leverage: "1:200",
      commission: "No",
      bestFor: "new traders and strategy testing",
      cta: "Open Standard",
    },
    {
      title: "Advanced",
      subtitle: "lower costs for frequent trading",
      minDeposit: "$500",
      spreads: "[Y] pips",
      leverage: "1:200",
      commission: "No",
      bestFor: "active traders seeking tighter pricing",
      cta: "Open Advanced",
    },
    {
      title: "Pro",
      subtitle: "tight pricing for large positions",
      minDeposit: "$2,000",
      spreads: "[Z] pips",
      leverage: "1:100",
      commission: "No",
      bestFor: "high-volume, professional strategies",
      cta: "Open Pro",
    },
    {
      title: "Islamic",
      subtitle: "100% swap-free, no time limits",
      minDeposit: "$100",
      spreads: "Same as Standard",
      leverage: "1:200",
      commission: "No swaps",
      bestFor: "Sharia-compliant trading without fine print",
      cta: "Open Islamic",
    },
  ];

  return (
    <section className="bg-n83-white py-[clamp(8rem,10vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,7vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase tracking-tight">
            Choose your account in seconds
          </h2>
          <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)] max-w-[70rem] mx-auto">
            Four accounts. Clear differences. No hidden terms.
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Accounts Grid ====================*/}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[clamp(2rem,3vw,3rem)] mb-[clamp(6rem,8vw,8rem)]">
          {accounts.map((account, index) => (
            <div
              key={index}
              className="bg-n83-gray-100 rounded-[2rem] p-[clamp(2.5rem,3vw,3rem)] hover:-translate-y-[2px] transition-all duration-300"
            >
              {/*==================== Account Header ====================*/}
              <div className="text-center mb-[clamp(2rem,2.5vw,6rem)]">
                <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.8rem,2vw,2rem)] mb-[clamp(0.5rem,1vw,1rem)] uppercase">
                  {account.title}
                </h3>
                <p className="m-0 font-normal leading-[1.3] text-n83-gray-600 text-[clamp(1.4rem,1.6vw,1.7rem)]">
                  {account.subtitle}
                </p>
              </div>
              {/*==================== End of Account Header ====================*/}

              {/*==================== Account Specs ====================*/}
              <div className="space-y-[clamp(1.5rem,2vw,4rem)] my-[clamp(2.5rem,3vw,3rem)]">
                <div className="flex justify-between items-center border-b border-n83-gray pb-[clamp(1rem,1.5vw,1.5rem)]">
                  <span className="font-normal text-n83-gray-600 text-[clamp(1.4rem,1.6vw,1.7rem)]">
                    Min deposit
                  </span>
                  <span className="font-bold text-n83-black text-[clamp(1.4rem,1.6vw,1.7rem)]">
                    {account.minDeposit}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-n83-gray pb-[clamp(1rem,1.5vw,1.5rem)]">
                  <span className="font-normal text-n83-gray-600 text-[clamp(1.4rem,1.6vw,1.7rem)]">
                    Spreads from
                  </span>
                  <span className="font-bold text-n83-black text-[clamp(1.4rem,1.6vw,1.7rem)]">
                    {account.spreads}
                  </span>
                </div>
                <div className="flex justify-between items-center border-b border-n83-gray pb-[clamp(1rem,1.5vw,1.5rem)]">
                  <span className="font-normal text-n83-gray-600 text-[clamp(1.4rem,1.6vw,1.7rem)]">
                    Leverage up to
                  </span>
                  <span className="font-bold text-n83-black text-[clamp(1.4rem,1.6vw,1.7rem)]">
                    {account.leverage}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-normal text-n83-gray-600 text-[clamp(1.4rem,1.6vw,1.7rem)]">
                    Commission
                  </span>
                  <span className="font-bold text-n83-black text-[clamp(1.4rem,1.6vw,1.7rem)]">
                    {account.commission}
                  </span>
                </div>
              </div>
              {/*==================== End of Account Specs ====================*/}

              {/*==================== Best For ====================*/}
              <div className="bg-n83-white border-l border-r border-n83-black p-[clamp(2rem,2.5vw,2.5rem)] mb-[clamp(2.5rem,3vw,3rem)]">
                <p className="m-0 font-normal leading-[1.3] text-n83-black text-[clamp(1.4rem,1.6vw,1.7rem)] text-center">
                  Best for: {account.bestFor}
                </p>
              </div>
              {/*==================== End of Best For ====================*/}

              {/*==================== Account CTA ====================*/}
              <div className="text-center">
                <Link
                  href="/account/open"
                  className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.4rem,1.6vw,1.7rem)] py-[clamp(1.4rem,1.8vw,1.8rem)] px-[clamp(2.5rem,3vw,3rem)] text-n83-white bg-n83-black hover:-translate-y-[2px] hover:bg-n83-gray-900 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] w-full"
                >
                  {account.cta}
                </Link>
              </div>
              {/*==================== End of Account CTA ====================*/}
            </div>
          ))}
        </div>
        {/*==================== End of Accounts Grid ====================*/}

        {/*==================== Final CTA ====================*/}
        <div className="text-center">
          <Link
            href="/accounts"
            className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.8rem,2vw,2rem)] py-[clamp(2rem,2.5vw,2.5rem)] px-[clamp(4rem,5vw,5rem)] text-n83-black bg-transparent border-2 border-n83-black hover:text-n83-white hover:-translate-y-[2px] hover:bg-n83-black w-full lg:w-auto max-w-[40rem] mx-auto"
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
