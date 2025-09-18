import Link from "next/link";
import Image from "next/image";

const AboutN83FXClosing = () => {
  return (
    <section className="bg-n83-black py-[clamp(8rem,10vw,12rem)] border-t">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Main Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center">
          {/*==================== Left: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] bg-n83-black group shadow-[0_1rem_2rem_rgba(0,255,136,0.2)] shadow-neon-primary">
              <Image
                width={600}
                height={700}
                src="/images/about/about-cta.jpg"
                alt="N83-FX - Trading with clarity and intention"
                className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(50rem,55vh,60rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>
          </div>
          {/*==================== End of Left: Visual ====================*/}

          {/*==================== Right: Content ====================*/}
          <div>
            <p className="m-0 font-normal leading-[1.5] text-white/60 text-[clamp(1.8rem,2vw,2rem)] mb-[clamp(4rem,5vw,5rem)]">
              N83-FX isn{"'"}t here to shout louder than other platforms. It
              {"'"}s here to speak to a different kind of investor—one who doesn
              {"'"}t need noise to know they{"'"}re doing it right; one who sees
              capital as a tool, not a toy; one who trades with clarity.
            </p>

            {/*==================== Brand Statements ====================*/}
            <div className="mb-[clamp(4rem,5vw,5rem)]">
              <p className="m-0 font-extrabold leading-[1] text-white text-[clamp(1.8rem,2vw,2rem)] mb-[clamp(2rem,2.5vw,2.5rem)]">
                This is N83-FX.
              </p>
              <p className="m-0 font-extrabold leading-[1] text-white text-[clamp(1.8rem,2vw,2rem)] mb-[clamp(2rem,2.5vw,2.5rem)]">
                This is Stillness-as-a-Service™.
              </p>
              <p className="m-0 font-extrabold leading-[1] text-white text-[clamp(1.8rem,2vw,2rem)] mb-[clamp(3rem,4vw,4rem)]">
                And this is only the beginning.
              </p>
            </div>
            {/*==================== End of Brand Statements ====================*/}

            {/*==================== Risk Reminder ====================*/}
            <div className="bg-neon-primary/10 border-l border-r border-neon-primary/50 p-[clamp(2.5rem,3vw,3rem)] mb-[clamp(4rem,5vw,5rem)]">
              <p className="m-0 font-normal leading-[1.5] text-white/60 text-[clamp(1.8rem,2vw,2rem)]">
                Risk reminder: CFDs are complex instruments and carry a high
                risk of loss due to leverage. Trade only what you can afford to
                lose.
              </p>
            </div>
            {/*==================== End of Risk Reminder ====================*/}

            {/*==================== CTA Section ====================*/}
            <div className="flex items-center gap-[clamp(2rem,3vw,3rem)] flex-col lg:flex-row">
              <Link
                href="/account/open"
                className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.8rem,2vw,2rem)] py-[clamp(2rem,2.5vw,2.5rem)] px-[clamp(4rem,5vw,5rem)] text-n83-white border-2 border-n83-white/50 bg-n83-black hover:-translate-y-[2px] hover:bg-n83-gray-900 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] w-full lg:w-auto max-w-[35rem]"
              >
                Start Trading
              </Link>
              <Link
                href="/accounts"
                className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.8rem,2vw,2rem)] py-[clamp(2rem,2.5vw,2.5rem)] px-[clamp(4rem,5vw,5rem)] text-n83-white bg-transparent border-2 border-n83-white/50 hover:text-n83-white hover:-translate-y-[2px] hover:bg-n83-white/15 w-full lg:w-auto max-w-[35rem]"
              >
                Compare Accounts
              </Link>
            </div>
            {/*==================== End of CTA Section ====================*/}
          </div>
          {/*==================== End of Right: Content ====================*/}
        </div>
        {/*==================== End of Main Layout ====================*/}
      </div>
    </section>
  );
};

export default AboutN83FXClosing;
