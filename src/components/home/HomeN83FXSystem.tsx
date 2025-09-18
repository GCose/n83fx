import Link from "next/link";
import Image from "next/image";

const HomeN83FXSystem = () => {
  const systemComponents = [
    {
      title: "Markets",
      description:
        "Access Forex, Commodities, Stocks, Indices, Crypto, Metals, Futures with transparent conditions and clear education.",
      image: "/images/home-page/n83fx-system/home-markets.jpg",
    },
    {
      title: "Accounts",
      description:
        "Four straightforward options that match different stages: Standard, Advanced, Pro, Islamic (swap-free).",
      image: "/images/home-page/n83fx-system/home-accounts.jpg",
    },
    {
      title: "Platform",
      description: "MT5, configured for clarity and consistency—not noise.",
      image: "/images/home-page/n83fx-system/home-platform.jpg",
    },
  ];

  return (
    <section className="bg-n83-gray-100 py-[clamp(8rem,10vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,7vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-white text-[clamp(3rem,4vw,6rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase tracking-tight">
            The N83-FX system
          </h2>
          <h3 className="m-0 font-normal leading-[1.4] text-white/70 text-[clamp(1.8rem,2vw,2.4rem)] max-w-[70rem] mx-auto">
            How everything fits together
          </h3>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== System Components Grid ====================*/}
        <div className="space-y-[clamp(6rem,8vw,8rem)] mb-[clamp(6rem,8vw,8rem)]">
          {systemComponents.map((component, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/*==================== Visual ====================*/}
              <div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
                  <Image
                    width={700}
                    height={500}
                    src={component.image}
                    alt={`N83-FX ${component.title.toLowerCase()} system component`}
                    className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(30rem,40vh,45rem)] saturate-[0.4] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              {/*==================== End of Visual ====================*/}

              {/*==================== Content ====================*/}
              <div
                className={`flex flex-col justify-center ${
                  index % 2 === 1 ? "lg:col-start-1" : ""
                }`}
              >
                <h3 className="m-0 font-extrabold leading-[1.2] text-n83-white text-[clamp(2.4rem,3vw,3.2rem)] mb-[clamp(2rem,3vw,3rem)]">
                  {component.title}
                </h3>
                <p className="m-0 font-normal leading-[1.5] text-white/70 text-[clamp(1.6rem,1.8vw,2rem)]">
                  {component.description}
                </p>
              </div>
              {/*==================== End of Content ====================*/}
            </div>
          ))}
        </div>
        {/*==================== End of System Components Grid ====================*/}

        {/*==================== CTA Section ====================*/}
        <div className="text-center">
          <div className="flex items-center gap-[clamp(2rem,3vw,3rem)] flex-col lg:flex-row justify-center">
            <Link
              href="/markets"
              className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-white bg-n83-black hover:-translate-y-[2px] hover:bg-neon-primary/20  w-full lg:w-auto max-w-[30rem]"
            >
              Explore Markets
            </Link>
            <Link
              href="/accounts"
              className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-white bg-transparent border-2  hover:text-n83-white hover:-translate-y-[2px] hover:bg-neon-primary/20 w-full lg:w-auto max-w-[30rem]"
            >
              Compare Accounts
            </Link>
          </div>
        </div>
        {/*==================== End of CTA Section ====================*/}
      </div>
    </section>
  );
};

export default HomeN83FXSystem;
