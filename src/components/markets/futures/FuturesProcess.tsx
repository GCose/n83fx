import Link from "next/link";
import Image from "next/image";

const FutureProcess = () => {
  const steps = [
    {
      number: "01",
      title: "Open Your Account",
      description: "Select from Standard, Advanced, Pro, or Islamic.",
    },
    {
      number: "02",
      title: "Fund Securely",
      description:
        "Deposit with peace of mind. Funds are held in segregated accounts.",
    },
    {
      number: "03",
      title: "Download MT5",
      description: "Trade futures from desktop, web, or mobile.",
    },
    {
      number: "04",
      title: "Select Your Futures Market",
      description: "Energy, metals, indices, or agricultural products.",
    },
    {
      number: "05",
      title: "Execute with Confidence",
      description:
        "Place trades with transparent pricing and risk management tools.",
    },
  ];

  return (
    <section className="relative bg-n83-white py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center">
          {/*==================== Left: Content ====================*/}
          <div className="flex flex-col justify-center">
            <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(3rem,4vw,4rem)] uppercase tracking-tight">
              How to Start Trading Futures with N83-FX
            </h2>

            <div className="space-y-[clamp(2.5rem,3vw,3rem)] mb-[clamp(4rem,5vw,5rem)]">
              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                Getting started with futures trading at N83-FX is
                straightforward. Follow these steps to begin your journey into
                global futures markets.
              </p>
            </div>

            {/*==================== Steps ====================*/}
            <div className="space-y-[clamp(3rem,4vw,4rem)] mb-[clamp(4rem,5vw,5rem)]">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-[clamp(2rem,3vw,3rem)] group"
                >
                  <div className="w-[clamp(4rem,5vw,5rem)] h-[clamp(4rem,5vw,5rem)] bg-n83-black text-n83-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[clamp(1.4rem,1.6vw,1.6rem)] group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  <div className="pt-[0.5rem]">
                    <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.8rem,2vw,2rem)] mb-[clamp(1rem,1.2vw,1.2rem)]">
                      {step.title}
                    </h3>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/*==================== End of Steps ====================*/}

            {/*==================== CTA ====================*/}
            <Link
              href="/account/open"
              className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-white bg-n83-black hover:-translate-y-[2px] hover:bg-n83-gray-900 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] w-full lg:w-auto max-w-[35rem]"
            >
              Get Started Today
            </Link>
            {/*==================== End of CTA ====================*/}
          </div>
          {/*==================== End of Left: Content ====================*/}

          {/*==================== Right: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                width={800}
                height={600}
                src="/images/markets/futures/futures-process.jpg"
                alt="Step-by-step futures trading account setup process"
                className="w-full h-screen object-cover transition-transform duration-[0.6s] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>
          </div>
          {/*==================== End of Right: Visual ====================*/}
        </div>
        {/*==================== End of Section Layout ====================*/}
      </div>
    </section>
  );
};

export default FutureProcess;
