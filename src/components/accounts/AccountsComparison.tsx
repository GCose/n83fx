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
    <section id="compare" className="py-[clamp(12rem,15vw,20rem)] bg-gray-50">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(8rem,10vw,12rem)]">
          <h2 className="m-0 font-800 leading-[1.4] tracking-[-0.02em] uppercase text-black text-[clamp(3rem,5vw,8rem)] mb-[clamp(3rem,4vw,4rem)] font-playfair">
            Compare All
            <br />
            Accounts
          </h2>
          <p className="m-0 font-normal leading-[1.5] max-w-[90rem] mx-auto text-gray-600 text-[clamp(1.7rem,2.5vw,2.7rem)]">
            Clear comparison of all account types — transparent pricing, honest
            conditions, no hidden details.
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Comparison Table ====================*/}
        <div className="mb-[clamp(8rem,10vw,12rem)]">
          {/*==================== Desktop Table ====================*/}
          <div className="hidden lg:block border border-black rounded-[3rem] overflow-hidden bg-white">
            {/*==================== Table Header ====================*/}
            <div className="bg-black text-white p-[clamp(2rem,3vw,3rem)]">
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
            <div className="divide-y divide-black">
              {comparisonData.map((account, index) => (
                <div
                  key={index}
                  className="p-[clamp(2rem,3vw,3rem)] hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="grid grid-cols-7 gap-[clamp(1rem,1.5vw,1.5rem)] items-center">
                    <div>
                      <h3 className="m-0 font-bold leading-[1.2] text-black text-[clamp(1.6rem,1.8vw,1.8rem)]">
                        {account.accountType}
                      </h3>
                    </div>
                    <div className="text-center">
                      <span className="font-medium text-black text-[clamp(1.4rem,1.6vw,1.6rem)]">
                        {account.minDeposit}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="font-medium text-black text-[clamp(1.4rem,1.6vw,1.6rem)]">
                        {account.spreads}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="font-medium text-black text-[clamp(1.4rem,1.6vw,1.6rem)]">
                        {account.leverage}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="font-medium text-black text-[clamp(1.4rem,1.6vw,1.6rem)]">
                        {account.commission}
                      </span>
                    </div>
                    <div className="text-center">
                      <span
                        className={`font-bold text-[clamp(1.4rem,1.6vw,1.6rem)] ${
                          account.swapFree === "Yes"
                            ? "text-black"
                            : "text-gray-600"
                        }`}
                      >
                        {account.swapFree}
                      </span>
                    </div>
                    <div className="text-center">
                      <p className="m-0 font-normal leading-[1.3] text-gray-600 text-[clamp(1.3rem,1.5vw,1.5rem)]">
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
                className="bg-white border border-black rounded-[2rem] p-[clamp(3rem,4vw,4rem)]"
              >
                <div className="text-center mb-[clamp(2rem,3vw,3rem)]">
                  <h3 className="m-0 font-bold leading-[1.2] text-black text-[clamp(2rem,2.5vw,2.5rem)] mb-[clamp(1rem,1.5vw,1.5rem)]">
                    {account.accountType}
                  </h3>
                  <div className="inline-block bg-black text-white rounded-full px-[clamp(1.5rem,2vw,2rem)] py-[clamp(0.5rem,1vw,1rem)] font-bold text-[clamp(1.4rem,1.6vw,1.6rem)]">
                    {account.minDeposit}
                  </div>
                </div>
                <div className="space-y-[clamp(1.5rem,2vw,2rem)]">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-600 text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      Spreads:
                    </span>
                    <span className="font-bold text-black text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      {account.spreads}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-600 text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      Leverage:
                    </span>
                    <span className="font-bold text-black text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      {account.leverage}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-600 text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      Commission:
                    </span>
                    <span className="font-bold text-black text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      {account.commission}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-600 text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      Swap-Free:
                    </span>
                    <span
                      className={`font-bold text-[clamp(1.4rem,1.6vw,1.6rem)] ${
                        account.swapFree === "Yes"
                          ? "text-black"
                          : "text-gray-600"
                      }`}
                    >
                      {account.swapFree}
                    </span>
                  </div>
                </div>
                <div className="mt-[clamp(2rem,3vw,3rem)] pt-[clamp(2rem,3vw,3rem)] border-t border-gray-200">
                  <p className="m-0 font-medium leading-[1.4] text-black text-[clamp(1.4rem,1.6vw,1.6rem)] text-center">
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
        <div className="bg-white p-[clamp(4rem,6vw,6rem)] text-center border-l border-r border-n83-black">
          <h3 className="m-0 font-bold leading-[1.3] text-black text-[clamp(2.5rem,3vw,3rem)] mb-[clamp(2rem,3vw,3rem)]">
            Risk Reminder
          </h3>
          <p className="m-0 font-normal leading-[1.5] text-gray-600 text-[clamp(1.8rem,2vw,2rem)] max-w-[100rem] mx-auto">
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
