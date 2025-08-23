const CompanyProfileLegal = () => {
  const legalItems = [
    {
      label: "Entity",
      value: "[Legal entity name]",
    },
    {
      label: "Regulator",
      value: "[Authority name] — License #[Number]",
    },
    {
      label: "Registered Address",
      value: "[Full address]",
    },
    {
      label: "Registry Link",
      value: "[Link to regulator listing]",
    },
    {
      label: "Onboarding Entity (UAE clients)",
      value: "[Entity]",
    },
    {
      label: "Client Money",
      value: "Segregated accounts with [Bank(s)]",
    },
  ];

  return (
    <section className="bg-n83-black py-[clamp(8rem,10vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,7vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-white text-[clamp(3.5rem,4vw,5rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase tracking-tight">
            Legal & Licensing
          </h2>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Legal Information Grid ====================*/}
        <div className="space-y-[clamp(3rem,4vw,4rem)]">
          {legalItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-n83-white/20 pb-[clamp(2rem,2.5vw,2.5rem)]"
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-[clamp(1.5rem,2vw,2rem)]">
                <div className="lg:w-[30%] flex-shrink-0">
                  <h3 className="m-0 font-bold leading-[1.3] text-n83-white text-[clamp(1.6rem,1.8vw,2rem)] uppercase">
                    {item.label}
                  </h3>
                </div>
                <div className="lg:w-[70%]">
                  <p className="m-0 font-normal leading-[1.5] text-n83-white/80 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/*==================== End of Legal Information Grid ====================*/}
      </div>
    </section>
  );
};

export default CompanyProfileLegal;
