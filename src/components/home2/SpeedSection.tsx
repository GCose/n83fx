import Image from "next/image";
import Link from "next/link";

const SpeedSilenceSection = () => {
  const features = [
    "One-tap actions for common tasks",
    "Alerts that don't shout",
    "A layout that saves brainpower",
  ];

  return (
    <>
      {/*==================== Speed & Silence Section ====================*/}
      <section className="relative py-[clamp(10rem,20vw,15rem)]">
        {/*==================== Dark Overlay ====================*/}
        <div className="absolute inset-0 bg-n83-black"></div>
        {/*==================== End of Dark Overlay ====================*/}

        <div className="relative z-10 w-full max-w-container mx-auto px-container">
          {/*==================== Section Header ====================*/}
          <div className="mb-[clamp(8rem,12vw,10rem)] border-b border-neon-primary/60 pb-[clamp(3rem,4vw,4rem)]">
            <h2 className="font-display text-[clamp(5rem,8vw,12rem)] font-900 text-text-primary leading-[0.9] tracking-tight mb-[clamp(2rem,4vw,4rem)]">
              Speed & Silence
            </h2>
            <p className="font-body text-[clamp(1.8rem,2.5vw,2.4rem)] font-500 text-text-secondary leading-[1.4] text-right">
              Move fast, without the drama.
            </p>
          </div>
          {/*==================== End of Section Header ====================*/}

          {/*==================== Main Content Grid ====================*/}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[clamp(8rem,10vw,12rem)] items-center">
            {/*==================== Left: Features in Diagonal Flow ====================*/}
            <div className="lg:col-span-5 space-y-[clamp(6rem,8vw,8rem)]">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group"
                  style={{
                    transform: `translateX(${index * 6}rem)`,
                    maxWidth: "calc(100% - " + index * 6 + "rem)",
                  }}
                >
                  <div className="flex items-start gap-[clamp(3rem,4vw,4rem)]">
                    {/*==================== Animated Bullet ====================*/}
                    <div className="flex-shrink-0 pt-[1rem]">
                      <div className="w-[2rem] h-[2rem] border-2 border-neon-primary transform rotate-45 group-hover:scale-125 group-hover:bg-neon-primary/20 transition-all duration-500"></div>
                    </div>
                    {/*==================== End of Animated Bullet ====================*/}

                    {/*==================== Feature Content ====================*/}
                    <div className="bg-n83-black/40 backdrop-blur-md border-b border-neon-primary/60 p-[clamp(3rem,4vw,4rem)] group-hover:border-neon-primary/60 transition-all duration-500">
                      <p className="font-body text-[clamp(1.8rem,2.2vw,2.2rem)] font-500 text-text-primary leading-[1.4] group-hover:text-neon-primary transition-colors duration-500">
                        {feature}
                      </p>
                    </div>
                    {/*==================== End of Feature Content ====================*/}
                  </div>
                </div>
              ))}

              {/*==================== CTA Section ====================*/}
              <div>
                <Link
                  href="/about/about-n83fx"
                  className="group inline-flex items-center justify-center px-[clamp(4rem,6vw,8rem)] py-[clamp(1.5rem,2.5vw,1.7rem)] bg-transparent text-neon-primary font-body font-600 text-[clamp(1.6rem,2vw,2rem)] border-2 border-neon-primary hover:bg-neon-primary hover:text-n83-black transition-all duration-300"
                >
                  See the Platform
                  <span className="ml-[1.5rem] group-hover:translate-x-[0.5rem] transition-transform duration-300">
                    →
                  </span>
                </Link>
              </div>
              {/*==================== End of CTA Section ====================*/}
            </div>
            {/*==================== End of Left: Features ====================*/}

            {/*==================== Right: Rotated Image ====================*/}
            <div className="lg:col-span-7 flex items-center justify-center">
              <div className="relative transform group">
                <div className="relative overflow-hidden bg-n83-black shadow-[0_2rem_6rem_rgba(0,255,136,0.2)] transition-all duration-700 group-hover:shadow-[0_3rem,8rem_rgba(0,255,136,0.4)] group-hover:rotate-[3deg]">
                  <Image
                    width={600}
                    height={800}
                    src="/images/home-page/education-tools/home-calm-trader.jpg"
                    alt="N83-FX platform showing speed and silent operation"
                    className="w-screen h-full object-cover transition-transform duration-700 saturate-[0.8] contrast-[1.1] brightness-[0.95]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-n83-black/60 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
            {/*==================== End of Right: Image ====================*/}
          </div>
          {/*==================== End of Main Content Grid ====================*/}
        </div>
      </section>
      {/*==================== End of Speed & Silence Section ====================*/}
    </>
  );
};

export default SpeedSilenceSection;
