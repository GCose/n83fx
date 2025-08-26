import Link from "next/link";

const HomeTrustRegulation = () => {
  const legalDetails = [
    {
      label: "Entity:",
      value: "N83-FX Markets Ltd",
    },
    {
      label: "Regulator & License:",
      value: "[Authority Name] — License [XXXX]",
    },
    {
      label: "Registered Address:",
      value: "[Full address]",
    },
    {
      label: "Client Money:",
      value: "Held in segregated accounts with [Bank]",
    },
  ];

  const policies = [
    "Terms & Conditions",
    "Risk Disclosure",
    "Best Execution",
    "Privacy",
    "Complaints",
  ];

  const expectations = [
    "Straight answers, not scripts",
    "Clear status on orders, funding, and withdrawals",
    "Risk language you can actually understand",
    "A platform that protects attention instead of harvesting it",
  ];

  return (
    <section className="bg-n83-gray-100 py-[clamp(8rem,10vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Trust & Regulation ====================*/}
        <div className="mb-[clamp(8rem,10vw,10rem)]">
          {/*==================== Section Header ====================*/}
          <div className="text-center mb-[clamp(6rem,7vw,8rem)]">
            <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,6rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase tracking-tight">
              Trust & regulation
            </h2>
            <h3 className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.8rem,2vw,2.4rem)] max-w-[70rem] mx-auto">
              The proof
            </h3>
            <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.7rem,1.8vw,2rem)] max-w-[70rem] mx-auto mt-[clamp(2rem,2.5vw,2.5rem)]">
              We publish our legal details in one place so you never have to
              guess.
            </p>
          </div>
          {/*==================== End of Section Header ====================*/}

          <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-start">
            {/*==================== Left: Legal Details ====================*/}
            <div className="bg-n83-white rounded-[2rem] p-[clamp(3rem,4vw,4rem)]">
              <div className="space-y-[clamp(2rem,2.5vw,2.5rem)]">
                {legalDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="border-b border-n83-gray-50 pb-[clamp(1.5rem,2vw,2rem)] last:border-b-0 last:pb-0"
                  >
                    <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,1.9rem)] mb-[0.5rem]">
                      {detail.label}
                    </h4>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/*==================== End of Left: Legal Details ====================*/}

            {/*==================== Right: Key Policies ====================*/}
            <div className="bg-n83-white rounded-[2rem] p-[clamp(3rem,4vw,4rem)]">
              <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.8rem,2vw,2rem)] mb-[clamp(2rem,2.5vw,2.5rem)]">
                Key Policies:
              </h4>
              <div className="space-y-[clamp(1.5rem,2vw,2rem)]">
                {policies.map((policy, index) => (
                  <div key={index} className="flex items-center gap-[1.5rem]">
                    <div className="relative w-[2rem] h-[2rem] mt-[0.8rem] flex-shrink-0 transition-transform duration-300 group-hover:scale-125">
                      <div className="absolute w-full h-[5px] bg-n83-black top-1/2 -translate-y-1/2"></div>
                      <div className="absolute h-full w-[5px] bg-n83-black left-1/2 -translate-x-1/2"></div>
                    </div>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      {policy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/*==================== End of Right: Key Policies ====================*/}
          </div>

          {/*==================== Legal CTAs ====================*/}
          <div className="text-center mt-[clamp(4rem,5vw,5rem)]">
            <div className="flex items-center gap-[clamp(2rem,3vw,3rem)] flex-col lg:flex-row justify-center">
              <Link
                href="/about/company-profile"
                className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-white bg-n83-black hover:-translate-y-[2px] hover:bg-n83-gray-900 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] w-full lg:w-auto max-w-[30rem]"
              >
                See Company Profile
              </Link>
              <Link
                href="/regulation"
                className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-black bg-transparent border-2 border-n83-black hover:text-n83-white hover:-translate-y-[2px] hover:bg-n83-black w-full lg:w-auto max-w-[30rem]"
              >
                View Regulator Listing
              </Link>
            </div>
          </div>
          {/*==================== End of Legal CTAs ====================*/}
        </div>
        {/*==================== End of Trust & Regulation ====================*/}

        {/*==================== What You Can Expect ====================*/}
        <div>
          {/*==================== Section Header ====================*/}
          <div className="text-center mb-[clamp(4rem,5vw,5rem)]">
            <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase tracking-tight">
              What you can expect
            </h2>
          </div>
          {/*==================== End of Section Header ====================*/}

          {/*==================== Expectations List ====================*/}
          <div className="bg-n83-white border-l border-r border-n83-black p-[clamp(4rem,5vw,5rem)] max-w-[80rem] mx-auto">
            <div className="grid md:grid-cols-2 gap-[clamp(3rem,4vw,4rem)]">
              {expectations.map((expectation, index) => (
                <div
                  key={index}
                  className="flex items-start gap-[1.6rem] group"
                >
                  <div
                    className="w-[2rem] h-[2rem] bg-n83-black mt-[0.8rem] flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
                    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                  ></div>
                  <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                    {expectation}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/*==================== End of Expectations List ====================*/}
        </div>
        {/*==================== End of What You Can Expect ====================*/}
      </div>
    </section>
  );
};

export default HomeTrustRegulation;
