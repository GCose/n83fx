import Link from "next/link";
import Image from "next/image";

const HomeWhyExist = () => {
  const approaches = [
    "Clarity over clutter. If it isn't clear, we fix it.",
    "Calm decisions > fast clicks. Good outcomes need presence, not pressure.",
    "Transparency by default. Plain language, verifiable facts, no gimmicks.",
    "Respect for capital. Your money and attention are treated as scarce resources.",
  ];

  return (
    <section className="bg-n83-gray-100 py-[clamp(8rem,10vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,7vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,6rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase tracking-tight">
            Why We Exist
          </h2>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Main Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center mb-[clamp(6rem,8vw,8rem)]">
          {/*==================== Left: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                width={800}
                height={600}
                src="/images/home-page/why-section/home-why.jpg"
                alt="Calm trading vs noisy trading platforms comparison"
                className="w-full h-screen object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>
          </div>
          {/*==================== End of Left: Visual ====================*/}

          {/*==================== Right: Content ====================*/}
          <div>
            <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,2rem)] mb-[clamp(3rem,4vw,4rem)]">
              Most platforms make markets feel louder—flashing prompts, crowded
              screens, pressure to trade more. We built N83-FX for people who
              want the opposite: a clear space to think, act, and stay in
              control.
            </p>

            <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.8rem,2vw,2rem)] mb-[clamp(3rem,4vw,4rem)]">
              Our approach is simple:
            </h3>

            {/*==================== Approaches List ====================*/}
            <div className="space-y-[clamp(2rem,2.5vw,2.5rem)] mb-[clamp(4rem,5vw,5rem)]">
              {approaches.map((approach, index) => (
                <div
                  key={index}
                  className="flex items-start gap-[1.6rem] group"
                >
                  <div
                    className="w-[2rem] h-[2rem] bg-n83-black mt-[0.8rem] flex-shrink-0 transition-transform duration-300 group-hover:scale-125"
                    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                  ></div>
                  <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                    {approach}
                  </p>
                </div>
              ))}
            </div>
            {/*==================== End of Approaches List ====================*/}

            {/*==================== CTA Link ====================*/}
            <Link
              href="/about/about-n83fx"
              className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-white bg-n83-black hover:-translate-y-[2px] hover:bg-n83-gray-900 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] w-full lg:w-auto max-w-[30rem]"
            >
              Read About N83-FX
            </Link>
            {/*==================== End of CTA Link ====================*/}
          </div>
          {/*==================== End of Right: Content ====================*/}
        </div>
        {/*==================== End of Main Layout ====================*/}
      </div>
    </section>
  );
};

export default HomeWhyExist;
