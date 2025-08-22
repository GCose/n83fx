import Link from "next/link";
import Image from "next/image";
import type { BuiltAroundFeature } from "@/types/home";

const BuiltAround = () => {
  const features: BuiltAroundFeature[] = [
    { title: "Beginner View", description: "Simple, clean interface" },
    { title: "Expert Mode", description: "Advanced trading tools" },
    { title: "Advanced Analytics", description: "Deep market insights" },
    { title: "Withdraw Anytime", description: "No hidden fees" },
  ];
  return (
    <section className="py-28 overflow-hidden relative bg-n83-white">
      <div className="w-full px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,8vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.4] tracking-[-0.02em] uppercase text-n83-black text-[clamp(5rem,5vw,8rem)] mb-[clamp(2rem,3vw,3rem)]">
            Built Around You
          </h2>
          <p className="m-0 font-normal leading-[1.5] max-w-[70rem] mx-auto text-n83-gray-600 text-[clamp(1.8rem,2.5vw,2.7rem)]">
            Whether it{"'"}s your first trade or your thousandth, you{"'"}re
            home.
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Main Layout Grid ====================*/}
        <div className="grid gap-[clamp(6rem,8vw,8rem)] grid-cols-1 lg:grid-cols-2">
          {/*==================== Left Side: Visual & Features ====================*/}
          <div className="flex flex-col gap-[clamp(4rem,5vw,5rem)] py-[clamp(4rem,6vw,6rem)]">
            {/*==================== Image ====================*/}
            <div className="overflow-hidden relative rounded-[2rem] md:rounded-[1.5rem] bg-n83-black group">
              <Image
                src="/images/home-page/around-you-section/around-you.jpg"
                alt="Trading platform dashboard showing user customization"
                width={600}
                height={400}
                className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(30rem,40vh,45rem)] md:min-h-[clamp(25rem,35vh,40rem)] saturate-[0.8] contrast-[1.1] group-hover:scale-[1.02]"
              />
            </div>
            {/*==================== End of Image ====================*/}

            {/*==================== Features Grid ====================*/}
            <div className="grid grid-cols-1 md:grid-cols-2 border-t border-b border-n83-black">
              {features.map((feature: BuiltAroundFeature, index: number) => (
                <div
                  key={index}
                  className={`py-[clamp(2rem,3vw,3rem)] md:py-[clamp(1.5rem,2vw,2rem)] ${
                    index % 2 === 0 ? "pr-0 md:pr-4" : "pl-0 md:pl-4"
                  } ${
                    index < 2
                      ? "border-b md:border-b-0"
                      : "border-t md:border-t-0"
                  } ${
                    index % 2 === 0 ? "md:border-r" : ""
                  } border-n83-black md:border-n83-gray-600`}
                >
                  <h4 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,1.8rem)] mb-[clamp(0.5rem,0.8vw,0.8rem)]">
                    {feature.title}
                  </h4>
                  <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.3rem,1.5vw,1.5rem)]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            {/*==================== End of Features Grid ====================*/}
          </div>
          {/*==================== End of Left Side: Visual & Features ====================*/}

          {/*==================== Right Side: Content ====================*/}
          <div className="flex items-center rounded-[3rem_0_0_3rem] bg-n83-gray-50 py-[clamp(4rem,6vw,6rem)] px-[clamp(3rem,4vw,4rem)] lg:py-[clamp(4rem,5vw,5rem)] lg:px-0">
            <div className="w-full relative lg:text-center">
              <div className="relative pl-12 lg:pl-0 mb-[clamp(4rem,5vw,5rem)] before:content-[''] before:absolute before:top-0 before:left-0 before:w-1 before:h-32 before:bg-gradient-to-b before:from-n83-black before:to-n83-gray-600 lg:before:hidden">
                <p className="m-0 font-normal leading-[1.6] text-n83-black text-[clamp(1.6rem,1.8vw,1.8rem)] mb-[clamp(2rem,2.5vw,2.5rem)] first:font-semibold first:text-[clamp(1.8rem,2vw,5rem)]">
                  We designed our platform for two kinds of users: The curious
                  beginner. And the confident operator.
                </p>
                <p className="m-0 font-normal leading-[1.6] text-n83-black text-[clamp(1.6rem,1.8vw,1.8rem)]">
                  Toggle between modes. Customize your dashboard. Stay in
                  control at every level.
                </p>
              </div>

              <div className="pl-12 lg:pl-0">
                <Link
                  href="/demo"
                  className="cursor-pointer font-semibold rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center text-n83-white transition-smooth bg-n83-black text-[clamp(1.6rem,1.8vw,1.8rem)] shadow-[0_8px_25px_rgba(0,0,0,0.1)] py-[clamp(1.8rem,2vw,2rem)] px-[clamp(4rem,5vw,5rem)] hover:-translate-y-[3px] hover:bg-n83-gray-900 hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)] w-full lg:w-auto max-w-[30rem]"
                >
                  Try Demo View
                </Link>
              </div>
            </div>
          </div>
          {/*==================== End of Right Side: Content ====================*/}
        </div>
        {/*==================== End of Main Layout Grid ====================*/}
      </div>
    </section>
  );
};

export default BuiltAround;
