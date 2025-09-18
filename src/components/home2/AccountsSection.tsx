import Link from "next/link";

const AccountsSection = () => {
  const accountTypes = [
    {
      name: "Standard",
      subtitle: "Start simple",
      minDeposit: "$100",
      spreads: "[X] pips",
      leverage: "1:200",
      commission: "No",
      bestFor: "New traders and strategy testing",
      openLink: "/account/open?type=standard",
      compareLink: "/accounts/compare#standard",
      featured: false,
    },
    {
      name: "Advanced",
      subtitle: "Lower costs for frequent trading",
      minDeposit: "$500",
      spreads: "[Y] pips",
      leverage: "1:200",
      commission: "No",
      bestFor: "Active traders seeking tighter pricing",
      openLink: "/account/open?type=advanced",
      compareLink: "/accounts/compare#advanced",
      featured: false,
    },
    {
      name: "Pro",
      subtitle: "Tight pricing for large positions",
      minDeposit: "$2,000",
      spreads: "[Z] pips",
      leverage: "1:100",
      commission: "No",
      bestFor: "High-volume, professional strategies",
      openLink: "/account/open?type=pro",
      compareLink: "/accounts/compare#pro",
      featured: true,
    },
    {
      name: "Islamic",
      subtitle: "100% swap-free, no time limits",
      minDeposit: "$100",
      spreads: "Same as Standard",
      leverage: "1:200",
      commission: "No swaps",
      bestFor: "Sharia-compliant trading without fine print",
      openLink: "/account/open?type=islamic",
      compareLink: "/accounts/compare#islamic",
      featured: false,
    },
  ];

  return (
    <>
      {/*==================== Accounts Section ====================*/}
      <section className="relative py-[clamp(10rem,20vw,15rem)]">
        {/*==================== Dark Overlay for Readability ====================*/}
        <div className="absolute inset-0 bg-n83-black"></div>
        {/*==================== End of Dark Overlay ====================*/}

        <div className="relative z-10 w-full max-w-container mx-auto px-container">
          {/*==================== Section Header ====================*/}
          <div className="mb-[clamp(8rem,12vw,10rem)] border-b">
            <h2 className="font-display text-[clamp(5rem,8vw,9rem)] font-900 text-text-primary leading-[0.9] tracking-tight mb-[clamp(2rem,4vw,5rem)]">
              Account Types
            </h2>
            <p className="font-body text-[clamp(1.8rem,2.5vw,2.4rem)] font-500 text-text-secondary leading-[1.4] text-right pb-6">
              Four accounts. Clear differences. No hidden terms.
            </p>
          </div>
          {/*==================== End of Section Header ====================*/}

          {/*==================== Accounts Grid ====================*/}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(3rem,4vw,12rem)] mb-[clamp(8rem,10vw,10rem)]">
            {accountTypes.map((account, index) => (
              <div
                key={index}
                className={`relative p-[clamp(3rem,4vw,4rem)] border-neon-primary/50 rounded-[2rem] border transition-all duration-500 hover:-translate-y-[6px] group ${
                  account.featured
                    ? "bg-neon-primary/10 border-neon-primary"
                    : "bg-n83-black/0 hover:border-neon-primary/60"
                }`}
              >
                {/*==================== Account Header ====================*/}
                <div className="mb-[clamp(2.5rem,3vw,3rem)]">
                  <div className="flex items-baseline gap-[1rem] mb-[clamp(1rem,1.5vw,1.5rem)]">
                    <h3
                      className={`font-display text-center text-[clamp(2.4rem,3vw,3.2rem)] font-700 leading-[1.1] ${
                        account.featured
                          ? "text-neon-primary"
                          : "text-text-primary"
                      }`}
                    >
                      {account.name}
                    </h3>
                    {account.featured && (
                      <span className="px-[1.5rem] py-[0.5rem] bg-neon-primary/20 text-neon-primary text-[1.2rem] font-600 border border-neon-primary/40">
                        POPULAR
                      </span>
                    )}
                  </div>
                  <p className="font-body text-[clamp(1.4rem,1.8vw,1.6rem)] text-text-tertiary leading-[1.3]">
                    {account.subtitle}
                  </p>
                </div>
                {/*==================== End of Account Header ====================*/}

                {/*==================== Account Details ====================*/}
                <div className="space-y-[clamp(1.5rem,2vw,2rem)] mb-[clamp(3rem,4vw,4rem)]">
                  <div className="flex justify-between items-center py-[1rem] border-b border-text-tertiary/30">
                    <span className="font-body text-[clamp(1.6rem,1.6vw,1.8rem)] text-text-tertiary">
                      Minimum deposit:
                    </span>
                    <span className="font-body text-[clamp(1.6rem,1.8vw,1.8rem)] font-600 text-text-primary">
                      {account.minDeposit}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-[1rem] border-b border-text-tertiary/30">
                    <span className="font-body text-[clamp(1.6rem,1.6vw,1.8rem)] text-text-tertiary">
                      Spreads from:
                    </span>
                    <span className="font-body text-[clamp(1.6rem,1.8vw,1.8rem)] font-600 text-text-primary">
                      {account.spreads}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-[1rem] border-b border-text-tertiary/30">
                    <span className="font-body text-[clamp(1.6rem,1.6vw,1.8rem)] text-text-tertiary">
                      Leverage up to:
                    </span>
                    <span className="font-body text-[clamp(1.6rem,1.8vw,1.8rem)] font-600 text-text-primary">
                      {account.leverage}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-[1rem] border-b border-text-tertiary/30">
                    <span className="font-body text-[clamp(1.6rem,1.6vw,1.8rem)] text-text-tertiary">
                      Commission:
                    </span>
                    <span className="font-body text-[clamp(1.6rem,1.8vw,1.8rem)] font-600 text-text-primary">
                      {account.commission}
                    </span>
                  </div>
                </div>
                {/*==================== End of Account Details ====================*/}

                {/*==================== Best For ====================*/}
                <div className="mb-[clamp(3rem,4vw,4rem)]">
                  <p className="font-body text-[clamp(1.6rem,1.6vw,1.8rem)] text-text-tertiary mb-[1rem]">
                    Best for:
                  </p>
                  <p className="font-body text-[clamp(1.5rem,1.7vw,1.7rem)] text-text-secondary leading-[1.4]">
                    {account.bestFor}
                  </p>
                </div>
                {/*==================== End of Best For ====================*/}

                {/*==================== Account Actions ====================*/}
                <div className="flex flex-col sm:flex-row gap-[clamp(1.5rem,2vw,2rem)]">
                  <Link
                    href={account.openLink}
                    className={`group inline-flex items-center justify-center px-[clamp(2.5rem,3vw,3.5rem)] py-[clamp(1.2rem,1.5vw,1.4rem)] font-body font-600 text-[clamp(1.6rem,1.6vw,1.8rem)] border-2 transition-all duration-300 flex-1 ${
                      account.featured
                        ? "bg-neon-primary text-n83-black border-neon-primary hover:bg-transparent hover:text-neon-primary"
                        : "bg-transparent text-text-primary border-text-primary hover:border-neon-primary hover:text-neon-primary"
                    }`}
                  >
                    Open {account.name}
                    <span className="ml-[1rem] group-hover:translate-x-[0.3rem] transition-transform duration-300">
                      →
                    </span>
                  </Link>
                  <Link
                    href={account.compareLink}
                    className="inline-flex items-center justify-center px-[clamp(2.5rem,3vw,3.5rem)] py-[clamp(1.2rem,1.5vw,1.4rem)] bg-transparent text-text-tertiary font-body font-500 text-[clamp(1.6rem,1.6vw,1.8rem)] border-2 border-text-tertiary/40 hover:border-text-secondary hover:text-text-secondary transition-all duration-300"
                  >
                    Compare
                  </Link>
                </div>
                {/*==================== End of Account Actions ====================*/}
              </div>
            ))}
          </div>
          {/*==================== End of Accounts Grid ====================*/}

          {/*==================== Compare All CTA ====================*/}
          <div className="relative text-center">
            <Link
              href="/accounts/compare"
              className="group inline-flex items-center justify-center px-[clamp(4rem,6vw,8rem)] py-[clamp(1.5rem,2.5vw,1.7rem)] bg-transparent text-neon-primary font-body font-600 text-[clamp(1.6rem,2vw,2rem)] border-2 border-neon-primary hover:bg-neon-primary hover:text-n83-black transition-all duration-300"
            >
              Compare All Accounts
              <span className="ml-[1.5rem] group-hover:translate-x-[0.5rem] transition-transform duration-300">
                →
              </span>
            </Link>
          </div>
          {/*==================== End of Compare All CTA ====================*/}
        </div>
      </section>
      {/*==================== End of Accounts Section ====================*/}
    </>
  );
};

export default AccountsSection;
