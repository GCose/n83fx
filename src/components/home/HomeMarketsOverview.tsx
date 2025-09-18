import Link from "next/link";
import Image from "next/image";

const HomeMarketsOverview = () => {
  const markets = [
    {
      title: "Forex",
      description: "The world's most liquid market, made clear.",
      href: "/markets/forex",
      image: "/images/home-page/markets-section/home-forex.jpg",
    },
    {
      title: "Commodities",
      description: "Energy, metals, agriculture—real-world drivers.",
      href: "/markets/commodities",
      image: "/images/home-page/markets-section/home-commodities.jpg",
    },
    {
      title: "Stocks",
      description: "Trade global businesses you can research.",
      href: "/markets/stocks",
      image: "/images/home-page/markets-section/home-stocks.jpg",
    },
    {
      title: "Indices",
      description: "One position, market-wide exposure.",
      href: "/markets/indices",
      image: "/images/home-page/markets-section/home-indices.jpg",
    },
    {
      title: "Crypto",
      description: "24/7 digital assets, handled with discipline.",
      href: "/markets/crypto",
      image: "/images/home-page/markets-section/home-crypto.jpg",
    },
    {
      title: "Metals",
      description: "Gold, silver, and more—timeless stores of value.",
      href: "/markets/metals",
      image: "/images/home-page/markets-section/home-metals.jpg",
    },
    {
      title: "Futures",
      description: "Hedge and speculate across global contracts.",
      href: "/markets/futures",
      image: "/images/home-page/markets-section/home-futures.jpg",
    },
  ];

  return (
    <section className="bg-n83-gray-100 py-[clamp(8rem,10vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,7vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-white text-[clamp(3rem,4vw,6rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase tracking-tight">
            Pick your lane
          </h2>
          <h3 className="m-0 font-normal leading-[1.4] text-white/70 text-[clamp(1.8rem,2vw,2.4rem)] max-w-[70rem] mx-auto">
            Markets overview
          </h3>
          <p className="m-0 font-normal leading-[1.4] text-white/70 text-[clamp(1.7rem,1.8vw,2rem)] max-w-[70rem] mx-auto mt-[clamp(2rem,2.5vw,2.5rem)]">
            A clear path into each market—explained without hype.
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Markets Grid ====================*/}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[clamp(3rem,4vw,5rem)] mb-[clamp(6rem,8vw,8rem)]">
          {markets.map((market, index) => (
            <div
              key={index}
              className="rounded-[2rem] hover:-translate-y-[2px] transition-all duration-300 group"
            >
              {/*==================== Market Visual ====================*/}
              <div className="overflow-hidden relative rounded-[1.5rem] bg-n83-black group-hover:scale-[1.02] transition-transform duration-300 mb-[clamp(2rem,2.5vw,2.5rem)]">
                <Image
                  width={400}
                  height={250}
                  src={market.image}
                  alt={`${market.title} market trading interface`}
                  className="w-full h-full object-cover min-h-[clamp(15rem,20vh,20rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95]"
                />
              </div>
              {/*==================== End of Market Visual ====================*/}

              {/*==================== Market Content ====================*/}
              <div className="text-left">
                <h3 className="m-0 font-bold leading-[1.2] text-n83-white text-[clamp(1.8rem,2vw,2.1rem)] mb-[clamp(1rem,1.5vw,1.5rem)]">
                  {market.title}
                </h3>
                <p className="m-0 font-normal leading-[1.4] text-white/70 text-[clamp(1.7rem,1.8vw,2rem)] mb-[clamp(2rem,2.5vw,2.5rem)]">
                  {market.description}
                </p>

                {/*==================== Market CTA ====================*/}
                <Link
                  href={market.href}
                  className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.4rem,1.6vw,1.7rem)] py-[clamp(1.2rem,1.5vw,1.5rem)] px-[clamp(2.5rem,3vw,3rem)] text-n83-white bg-transparent border-2  hover:text-n83-white hover:-translate-y-[2px] hover:bg-neon-primary/20 w-full"
                >
                  Learn more
                </Link>
                {/*==================== End of Market CTA ====================*/}
              </div>
              {/*==================== End of Market Content ====================*/}
            </div>
          ))}
        </div>
        {/*==================== End of Markets Grid ====================*/}

        {/*==================== Final CTA ====================*/}
        <div className="text-center">
          <Link
            href="/markets"
            className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.8rem,2vw,2rem)] py-[clamp(2rem,2.5vw,2.5rem)] px-[clamp(4rem,5vw,5rem)] text-n83-white bg-n83-black hover:-translate-y-[2px] hover:bg-neon-primary/20  w-full lg:w-auto max-w-[40rem] mx-auto"
          >
            Explore All Markets
          </Link>
        </div>
        {/*==================== End of Final CTA ====================*/}
      </div>
    </section>
  );
};

export default HomeMarketsOverview;
