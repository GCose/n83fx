import Link from "next/link";

const AccountsProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Choose Your Account",
      description: "Standard, Advanced, Pro, or Islamic.",
    },
    {
      number: "02",
      title: "Complete Verification",
      description: "Quick, secure KYC process.",
    },
    {
      number: "03",
      title: "Fund Safely",
      description: "Multiple secure funding methods.",
    },
    {
      number: "04",
      title: "Download MT5 and Trade",
      description: "Begin with confidence and clarity.",
    },
  ];

  return (
    <section className="relative py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Final CTA Section ====================*/}
        <div className="bg-n83-black rounded-[3rem] p-[clamp(4rem,6vw,6rem)] text-center">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-white text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(2rem,3vw,3rem)] uppercase tracking-tight">
            How to Open an Account
          </h2>

          <div className="space-y-[clamp(2rem,3vw,3rem)] mb-[clamp(6rem,8vw,8rem)]">
            <p className="m-0 font-normal leading-[1.5] text-n83-white text-[clamp(1.8rem,2vw,2rem)] max-w-[80rem] mx-auto">
              Getting started is straightforward — four simple steps to begin
              trading with clarity and confidence.
            </p>
          </div>

          {/*==================== Process Steps ====================*/}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(3rem,4vw,4rem)] mb-[clamp(6rem,8vw,8rem)]">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-[clamp(6rem,8vw,8rem)] h-[clamp(6rem,8vw,8rem)] bg-n83-white text-n83-black rounded-full flex items-center justify-center mx-auto mb-[clamp(2rem,3vw,3rem)] font-bold text-[clamp(2rem,2.5vw,2.5rem)]">
                  {step.number}
                </div>
                <h3 className="m-0 font-bold leading-[1.2] text-n83-white text-[clamp(1.8rem,2vw,2rem)] mb-[clamp(1rem,1.5vw,1.5rem)]">
                  {step.title}
                </h3>
                <p className="m-0 font-normal leading-[1.4] text-n83-white/80 text-[clamp(1.4rem,1.6vw,1.6rem)]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          {/*==================== End of Process Steps ====================*/}

          <div className="flex items-center gap-[clamp(2rem,3vw,3rem)] flex-col lg:flex-row justify-center mb-[clamp(4rem,5vw,5rem)]">
            <Link
              href="/account/open"
              className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-black bg-n83-white hover:-translate-y-[2px] hover:bg-n83-gray-50 hover:shadow-[0_8px_25px_rgba(255,255,255,0.15)] w-full lg:w-auto max-w-[30rem]"
            >
              Open Your Account Today
            </Link>
            <Link
              href="#compare"
              className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-white bg-transparent border-2 border-n83-white hover:text-n83-black hover:-translate-y-[2px] hover:bg-n83-white w-full lg:w-auto max-w-[30rem]"
            >
              Compare All Accounts
            </Link>
          </div>

          {/*==================== Bottom Tagline ====================*/}
          <div className="pt-[clamp(3rem,4vw,4rem)] border-t border-n83-white/20">
            <p className="m-0 font-medium leading-[1.4] text-n83-white/60 text-[clamp(1.4rem,1.6vw,1.6rem)] max-w-[60rem] mx-auto">
              Start trading with the account that matches your needs and goals —
              built on transparency and respect.
            </p>
          </div>
          {/*==================== End of Bottom Tagline ====================*/}
        </div>
        {/*==================== End of Final CTA Section ====================*/}
      </div>
    </section>
  );
};

export default AccountsProcess;
