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
      className="relative bg-n83-white py-[clamp(8rem,12vw,12rem)]"
    >
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,8vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(2rem,3vw,3rem)] uppercase tracking-tight">
            Compare All Accounts
          </h2>
          <p className="m-0 font-normal leading-[1.5] max-w-[70rem] mx-auto text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
            Clear comparison of all account types — transparent pricing, honest
            conditions, no hidden details.
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Comparison Table ====================*/}
        <div className="border border-n83-black rounded-[2.4rem] overflow-hidden bg-n83-white">
          {/*==================== Table Header ====================*/}
          <div className="bg-n83-black text-n83-white p-[clamp(2rem,3vw,3rem)]">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-[clamp(1rem,2vw,2rem)] items-center">
              <div className="font-bold text-[clamp(1.4rem,1.6vw,1.6rem)] col-span-2 md:col-span-1">
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
              <div className="font-bold text-[clamp(1.4rem,1.6vw,1.6rem)] text-center col-span-2 md:col-span-1">
                Best For
              </div>
            </div>
          </div>
          {/*==================== End of Table Header ====================*/}

          {/*==================== Table Body ====================*/}
          <div className="divide-y divide-n83-black">
            {comparisonData.map((account, index) => (
              <div
                key={index}
                className="p-[clamp(2rem,3vw,3rem)] hover:bg-n83-gray-50 transition-colors duration-300"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-[clamp(1rem,2vw,2rem)] items-center">
                  <div className="col-span-2 md:col-span-1">
                    <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      {account.accountType}
                    </h3>
                  </div>
                  <div className="text-center">
                    <span className="font-medium text-n83-black text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      {account.minDeposit}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="font-medium text-n83-black text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      {account.spreads}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="font-medium text-n83-black text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      {account.leverage}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="font-medium text-n83-black text-[clamp(1.4rem,1.6vw,1.6rem)]">
                      {account.commission}
                    </span>
                  </div>
                  <div className="text-center">
                    <span
                      className={`font-bold text-[clamp(1.4rem,1.6vw,1.6rem)] ${
                        account.swapFree === "Yes"
                          ? "text-n83-black"
                          : "text-n83-gray-600"
                      }`}
                    >
                      {account.swapFree}
                    </span>
                  </div>
                  <div className="col-span-2 md:col-span-1">
                    <p className="m-0 font-normal leading-[1.3] text-n83-gray-600 text-[clamp(1.3rem,1.5vw,1.5rem)]">
                      {account.bestFor}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/*==================== End of Table Body ====================*/}
        </div>
        {/*==================== End of Comparison Table ====================*/}

        {/*==================== Risk Reminder ====================*/}
        <div className="mt-[clamp(6rem,8vw,8rem)] p-[clamp(3rem,4vw,4rem)] bg-n83-gray-50 border-l border-r border-n83-black text-center">
          <h3 className="m-0 font-bold leading-[1.3] text-n83-black text-[clamp(1.8rem,2vw,2rem)] mb-[clamp(1.5rem,2vw,2rem)]">
            Risk Reminder
          </h3>
          <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)] max-w-[80rem] mx-auto">
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
