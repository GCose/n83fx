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
    <section className="bg-n83-white py-[clamp(8rem,10vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="mb-[clamp(6rem,7vw,8rem)]">
          <h2 className="m-0 font-extrabold text-center leading-[1.2] text-n83-black text-[clamp(3.5rem,4vw,5rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase tracking-tight">
            Products & Platforms
          </h2>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Products Grid ====================*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[clamp(3rem,4vw,5rem)]">
          {productSections.map((section, index) => (
            <div
              key={index}
              className="bg-n83-gray-50 rounded-[2rem] p-[clamp(3rem,4vw,4rem)] text-center"
            >
              <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(2rem,2.5vw,2.8rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase">
                {section.title}
              </h3>
              <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
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
