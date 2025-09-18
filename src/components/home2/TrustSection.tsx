import Link from "next/link";

const TrustSection = () => {
  const legalDetails = [
    {
      label: "Entity",
      value: "N83-FX Markets Ltd",
    },
    {
      label: "Regulator & License",
      value: "[Authority Name] — License [XXXX]",
    },
    {
      label: "Registered Address",
      value: "[Full address]",
    },
    {
      label: "Client Money",
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

  return (
    <>
      {/*==================== Trust & Regulation Section ====================*/}
      <section className="relative py-[clamp(8rem,12vw,10rem)]">
        {/*==================== Dark Overlay ====================*/}
        <div className="absolute inset-0 bg-n83-black"></div>
        {/*==================== End of Dark Overlay ====================*/}

        <div className="relative z-10 w-full max-w-container mx-auto px-container">
          {/*==================== Section Header ====================*/}
          <div className="mb-[clamp(6rem,8vw,8rem)] border-b pb-[clamp(3rem,4vw,4rem)]">
            <h2 className="font-display text-[clamp(5rem,8vw,9rem)] font-900 text-text-primary leading-[0.9] tracking-tight mb-[clamp(2rem,4vw,5rem)]">
              Trust & Regulation
            </h2>
            <p className="font-body text-[clamp(1.8rem,2.5vw,2.4rem)] font-500 text-text-secondary leading-[1.4] text-right">
              We publish our legal details in one place so you never have to
              guess.
            </p>
          </div>
          {/*==================== End of Section Header ====================*/}

          {/*==================== Main Content Grid ====================*/}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-[clamp(4rem,6vw,6rem)] mb-[clamp(6rem,8vw,8rem)]">
            {/*==================== Legal Details ====================*/}
            <div className="lg:col-span-2 space-y-[clamp(3rem,4vw,4rem)]">
              {legalDetails.map((detail, index) => (
                <div
                  key={index}
                  className="group bg-n83-black/30 border-b p-[clamp(2.5rem,3vw,3rem)] hover:border-neon-primary/60 transition-all duration-500"
                  style={{
                    transform: `translateY(${index * -1}rem)`,
                    zIndex: legalDetails.length - index,
                  }}
                >
                  <h4 className="font-display text-[clamp(1.8rem,2.2vw,2rem)] font-700 text-neon-primary mb-[clamp(1rem,1.5vw,1.5rem)] group-hover:text-neon-primary transition-colors duration-500">
                    {detail.label}:
                  </h4>
                  <p className="font-body text-[clamp(1.6rem,1.8vw,1.8rem)] font-400 text-text-secondary leading-[1.5]">
                    {detail.value}
                  </p>
                </div>
              ))}
            </div>
            {/*==================== End of Legal Details ====================*/}

            {/*==================== Key Policies Column ====================*/}
            <div className="space-y-[clamp(3rem,4vw,4rem)]">
              <div className="bg-neon-primary/10 border border-neon-primary/40 p-[clamp(3rem,4vw,4rem)]">
                <h4 className="font-display text-[clamp(2rem,2.5vw,2.2rem)] font-700 text-neon-primary mb-[clamp(2.5rem,3vw,3rem)]">
                  Key Policies
                </h4>
                <div className="space-y-[clamp(2rem,2.5vw,2.5rem)]">
                  {policies.map((policy, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-[1.5rem] group"
                    >
                      <div className="w-[1rem] h-[1rem] bg-neon-primary mt-[1rem] flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                      <p className="font-body text-[clamp(1.5rem,1.7vw,1.7rem)] font-400 text-text-secondary leading-[1.4] group-hover:text-text-primary transition-colors duration-300">
                        {policy}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/*==================== End of Key Policies Column ====================*/}
          </div>
          {/*==================== End of Main Content Grid ====================*/}

          {/*==================== CTA Section ====================*/}
          <div className="flex flex-col justify-center sm:flex-row gap-[clamp(2rem,3vw,4rem)]">
            <Link
              href="/about/company-profile"
              className="group inline-flex items-center justify-center px-[clamp(3rem,4vw,5rem)] py-[clamp(1.5rem,2.5vw,1.7rem)] bg-transparent text-text-primary font-body font-600 text-[clamp(1.6rem,2vw,2rem)] border-2 border-text-primary hover:border-neon-primary hover:text-neon-primary transition-all duration-300"
            >
              See Company Profile
              <span className="ml-[1rem] group-hover:translate-x-[0.5rem] transition-transform duration-300">
                →
              </span>
            </Link>

            <Link
              href="/regulation"
              className="group inline-flex items-center justify-center px-[clamp(3rem,4vw,5rem)] py-[clamp(1.5rem,2.5vw,1.7rem)] bg-transparent text-text-tertiary font-body font-500 text-[clamp(1.6rem,2vw,2rem)] border-2 border-text-tertiary/40 hover:border-text-secondary hover:text-text-secondary transition-all duration-300"
            >
              View Regulator Listing
              <span className="ml-[1rem] group-hover:translate-x-[0.5rem] transition-transform duration-300">
                →
              </span>
            </Link>
          </div>
          {/*==================== End of CTA Section ====================*/}
        </div>
      </section>
      {/*==================== End of Trust & Regulation Section ====================*/}
    </>
  );
};

export default TrustSection;
