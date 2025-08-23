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
    <section className="bg-n83-white py-[clamp(10rem,15vw,18rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="mb-[clamp(8rem,12vw,15rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(5rem,7vw,9rem)] mb-[clamp(2rem,3vw,4rem)] uppercase tracking-tight">
            Products &<br />
            Platforms
          </h2>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Products Grid ====================*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[clamp(4rem,6vw,8rem)]">
          {productSections.map((section, index) => (
            <div
              key={index}
              className="bg-n83-gray-50 rounded-[3rem] p-[clamp(4rem,6vw,6rem)] text-center"
            >
              <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(2.5rem,3.5vw,4rem)] mb-[clamp(3rem,4vw,5rem)] uppercase">
                {section.title}
              </h3>
              <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.9vw,2.2rem)]">
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
