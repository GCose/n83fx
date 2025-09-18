const AccountsComparison = () => {
  const comparisonData = [
    {
      accountType: "Standard",
      minDeposit: "$100",
      spreads: "From 1.5 pips",
      leverage: "Up to 1:200",
      commission: "No",
      swapFree: "No",
      bestFor: "New traders starting small",
    },
    {
      accountType: "Advanced",
      minDeposit: "$500",
      spreads: "From 1.0 pips",
      leverage: "Up to 1:200",
      commission: "No",
      swapFree: "No",
      bestFor: "Active traders who want better pricing",
    },
    {
      accountType: "Pro",
      minDeposit: "$2,000",
      spreads: "From 0.2 pips",
      leverage: "Up to 1:100",
      commission: "No",
      swapFree: "No",
      bestFor: "High-volume traders scaling strategies",
    },
    {
      accountType: "Islamic",
      minDeposit: "$100",
      spreads: "From 1.5 pips",
      leverage: "Up to 1:200",
      commission: "No",
      swapFree: "Yes",
      bestFor: "Traders seeking 100% swap-free, Sharia-compliant trading",
    },
  ];

  return (
    <section
      id="compare"
      className="py-[clamp(12rem,15vw,20rem)] backdrop-blur-lg border-t"
    >
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="mb-[clamp(8rem,12vw,10rem)] border-b border-neon-primary/60">
          <h2 className="font-display text-[clamp(5rem,8vw,9rem)] font-900 text-text-primary leading-[0.9] tracking-tight mb-[clamp(2rem,4vw,4rem)]">
            Compare All Accounts
          </h2>
          <p className="font-body text-[clamp(1.8rem,2.5vw,2.4rem)] font-500 text-text-secondary leading-[1.4] text-right pb-6">
            Clear comparison of all account types — transparent pricing, honest
            conditions, no hidden details.
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Comparison Table ====================*/}
        <div className="mb-[clamp(8rem,10vw,12rem)]">
          {/*==================== Desktop Table ====================*/}
          <div className="hidden lg:block border border-black rounded-[3rem] overflow-hidden bg-neon-primary/15">
            {/*==================== Table Header ====================*/}
            <div className="bg-white/20 text-white p-[clamp(2rem,3vw,3rem)]">
              <div className="grid grid-cols-7 gap-[clamp(1rem,1.5vw,1.5rem)] items-center">
                <div className="font-bold text-[clamp(1.4rem,1.6vw,1.6rem)]">
                  Account Type
                </div>
                <div className="font-bold text-[clamp(1.4rem,1.6vw,1.6rem)] text-center">
                  Min Deposit
                </div>
                <div className="font-bold text-[clamp(1.4rem,1.6vw,1.6rem)] text-center">
                  Spreads
                </div>
                <div className="font-bold text-[clamp(1.4rem,1.6vw,1.6rem)] text-center">
                  Leverage
                </div>
                <div className="font-bold text-[clamp(1.4rem,1.6vw,1.6rem)] text-center">
                  Commission
                </div>
                <div className="font-bold text-[clamp(1.4rem,1.6vw,1.6rem)] text-center">
                  Swap-Free
                </div>
                <div className="font-bold text-[clamp(1.4rem,1.6vw,1.6rem)] text-center">
                  Best For
                </div>
              </div>
            </div>
            {/*==================== Table Body ====================*/}
            <div className="divide-y divide-white">
              {comparisonData.map((account, index) => (
                <div
                  key={index}
                  className="p-[clamp(2rem,3vw,3rem)] hover:bg-gray-50/20 transition-colors duration-300"
                >
                  <div className="grid grid-cols-7 gap-[clamp(1rem,1.5vw,1.5rem)] items-center">
                    <div>
                      <h3 className="m-0 font-bold leading-[1.2] text-white/90 text-[clamp(1.6rem,1.8vw,1.8rem)]">
                        {account.accountType}
                      </h3>
                    </div>
                    <div className="text-center">
                      <span className="font-medium text-white/90 text-[clamp(1.4rem,1.6vw,1.6rem)]">
                        {account.minDeposit}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="font-medium text-white/90 text-[clamp(1.4rem,1.6vw,1.6rem)]">
                        {account.spreads}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="font-medium text-white/90 text-[clamp(1.4rem,1.6vw,1.6rem)]">
                        {account.leverage}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="font-medium text-white/90 text-[clamp(1.4rem,1.6vw,1.6rem)]">
                        {account.commission}
                      </span>
                    </div>
                    <div className="text-center">
                      <span
                        className={`font-bold text-[clamp(1.4rem,1.6vw,1.6rem)] ${
                          account.swapFree === "Yes"
                            ? "text-white"
                            : "text-white/80"
                        }`}
                      >
                        {account.swapFree}
                      </span>
                    </div>
                    <div className="text-center">
                      <p className="m-0 font-normal leading-[1.3] text-white/80 text-[clamp(1.3rem,1.5vw,1.5rem)]">
                        {account.bestFor}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*==================== End of Desktop Table ====================*/}

          {/*==================== Mobile Cards ====================*/}
          <div className="lg:hidden space-y-[clamp(3rem,4vw,4rem)]">
            {comparisonData.map((account, index) => (
              <div
                key={index}
                className="bg-transparent border border-neon-primary/50 rounded-[2rem] p-[clamp(3rem,4vw,4rem)]"
              >
                <div className="text-center mb-[clamp(2rem,3vw,3rem)]">
                  <h3 className="m-0 font-bold leading-[1.2] text-white text-[clamp(2rem,2.5vw,2.5rem)] mb-[clamp(1rem,1.5vw,1.5rem)]">
                    {account.accountType}
                  </h3>
                  <div className="inline-block bg-black text-white rounded-full px-[clamp(1.5rem,2vw,2rem)] py-[clamp(0.5rem,1vw,1rem)] font-bold text-[clamp(1.4rem,1.6vw,1.6rem)]">
                    {account.minDeposit}
                  </div>
                </div>
                <div className="space-y-[clamp(1.5rem,2vw,2rem)]">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white/80 text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      Spreads:
                    </span>
                    <span className="font-bold text-white text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      {account.spreads}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white/80 text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      Leverage:
                    </span>
                    <span className="font-bold text-white text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      {account.leverage}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white/80 text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      Commission:
                    </span>
                    <span className="font-bold text-white text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      {account.commission}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-white/80 text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      Swap-Free:
                    </span>
                    <span
                      className={`font-bold text-[clamp(1.4rem,1.6vw,1.6rem)] ${
                        account.swapFree === "Yes"
                          ? "text-red-500"
                          : "text-green-500"
                      }`}
                    >
                      {account.swapFree}
                    </span>
                  </div>
                </div>
                <div className="mt-[clamp(2rem,3vw,3rem)] pt-[clamp(2rem,3vw,3rem)] border-t border-gray-200">
                  <p className="m-0 font-medium leading-[1.4] text-white/80 text-[clamp(1.4rem,1.6vw,1.6rem)] text-center">
                    {account.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/*==================== End of Mobile Cards ====================*/}
        </div>
        {/*==================== End of Comparison Table ====================*/}

        {/*==================== Risk Reminder ====================*/}
        <div className="bg-neon-primary/5 p-[clamp(4rem,6vw,6rem)] text-center border-l border-r border-neon-primary/50">
          <h3 className="m-0 font-bold leading-[1.3] text-white text-[clamp(2.5rem,3vw,3rem)] mb-[clamp(2rem,3vw,3rem)]">
            Risk Reminder
          </h3>
          <p className="m-0 font-normal leading-[1.5] text-white/80 text-[clamp(1.8rem,2vw,2rem)] max-w-[100rem] mx-auto">
            Trading involves risk. Leverage can amplify both profits and losses.
            Only trade with money you can afford to lose. At N83-FX, we
            encourage disciplined, responsible trading.
          </p>
        </div>
        {/*==================== End of Risk Reminder ====================*/}
      </div>
    </section>
  );
};

export default AccountsComparison;
