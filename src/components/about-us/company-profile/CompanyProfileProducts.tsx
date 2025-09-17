const CompanyProfileProducts = () => {
  const productSections = [
    {
      title: "Markets",
      content: "Forex, Commodities, Stocks, Indices, Crypto, Metals, Futures",
    },
    {
      title: "Platform",
      content: "MetaTrader 5 (desktop, web, mobile)",
    },
    {
      title: "Accounts",
      content: "Standard · Advanced · Pro · Islamic (swap-free)",
    },
  ];

  return (
    <section className="bg-n83-black py-[clamp(8rem,10vw,10rem)] border-t">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="mb-[clamp(3rem,7vw,5rem)]">
          <h2 className="m-0 font-extrabold text-left leading-[1.2] text-n83-white text-[clamp(5rem,8vw,7rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase tracking-tight">
            Products & Platforms
          </h2>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Products Grid ====================*/}
        <div className="border-t border-neon-primary/60 py-[clamp(2rem,4vw,7rem)] grid grid-cols-1 lg:grid-cols-3 gap-[clamp(3rem,4vw,5rem)]">
          {productSections.map((section, index) => (
            <div
              key={index}
              className="bg-transparent border p-[clamp(3rem,4vw,4rem)] text-center"
            >
              <h3 className="m-0 font-bold leading-[1.2] text-n83-white text-[clamp(2rem,2.5vw,2.8rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase">
                {section.title}
              </h3>
              <p className="m-0 font-normal leading-[1.4] text-white/70 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                {section.content}
              </p>
            </div>
          ))}
        </div>
        {/*==================== End of Products Grid ====================*/}
      </div>
    </section>
  );
};

export default CompanyProfileProducts;
