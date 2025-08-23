import Image from "next/image";

const AccountsWhyChoose = () => {
  const reasons = [
    {
      title: "Simple Structure",
      description: "Only four accounts, easy to compare.",
    },
    {
      title: "Full Transparency",
      description: "No hidden swaps, no gimmicks.",
    },
    {
      title: "Respect for Traders",
      description:
        "Whether you're starting, scaling, or trading ethically, there's a clear path.",
    },
    {
      title: "Boutique Experience",
      description: "Calm, focused trading on MetaTrader 5 (MT5).",
    },
  ];

  return (
    <section className="relative bg-n83-gray-50 py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Editorial Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center">
          {/*==================== Left: Content ====================*/}
          <div className="flex flex-col justify-center">
            <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(3rem,4vw,4rem)] uppercase tracking-tight">
              Why Traders Choose N83-FX Accounts
            </h2>

            <div className="space-y-[clamp(2.5rem,3vw,3rem)]">
              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                Four clear reasons why traders choose our account structure over
                complex alternatives:
              </p>

              {/*==================== Reasons List ====================*/}
              <div className="space-y-[clamp(2rem,2.5vw,2.5rem)]">
                {reasons.map((reason, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-[1.5rem] group"
                  >
                    <div
                      className="w-[2rem] h-[2rem] bg-n83-black rounded-sm mt-[0.8rem] flex-shrink-0 transition-transform duration-300 group-hover:rotate-45"
                      style={{ transform: "rotate(45deg)" }}
                    ></div>
                    <div>
                      <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,1.9rem)] mb-[0.5rem]">
                        {reason.title}
                      </h4>
                      <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/*==================== End of Reasons List ====================*/}

              {/*==================== Editorial Quote ====================*/}
              <div className="pt-[clamp(2rem,3vw,3rem)] border-t border-n83-black">
                <p className="m-0 font-medium leading-[1.5] text-n83-black text-[clamp(1.7rem,1.9vw,2rem)]">
                  Every account type provides the same foundation: clarity,
                  transparency, and respect for your trading journey.
                </p>
              </div>
              {/*==================== End of Editorial Quote ====================*/}
            </div>
          </div>
          {/*==================== End of Left: Content ====================*/}

          {/*==================== Right: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                width={800}
                height={600}
                src="/images/accounts/accounts-why-choose.jpg"
                alt="N83-FX account benefits and trader-focused approach"
                className="w-full h-screen object-cover transition-transform duration-[0.6s] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>

            {/*==================== Platform Features ====================*/}
            <div className="mt-[clamp(3rem,4vw,4rem)] border-t border-n83-black border-b grid grid-cols-1 gap-[clamp(1.5rem,2vw,2rem)]">
              <div className="p-[clamp(2rem,3vw,3rem)] text-center">
                <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.8rem,2vw,2rem)] mb-[0.5rem]">
                  MetaTrader 5
                </h4>
                <p className="m-0 font-normal leading-[1.3] text-n83-gray-600 text-[clamp(1.4rem,1.6vw,1.6rem)]">
                  Same platform across all accounts
                </p>
              </div>
            </div>
            {/*==================== End of Platform Features ====================*/}
          </div>
          {/*==================== End of Right: Visual ====================*/}
        </div>
        {/*==================== End of Editorial Layout ====================*/}
      </div>
    </section>
  );
};

export default AccountsWhyChoose;
