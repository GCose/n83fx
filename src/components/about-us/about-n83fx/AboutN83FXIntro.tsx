import Link from "next/link";
import Image from "next/image";

const AboutN83FXIntro = () => {
  return (
    <section className="bg-n83-gray-100 py-[clamp(8rem,10vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center">
          {/*==================== Left: Content ====================*/}
          <div>
            <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.8rem,2.2vw,2.4rem)] mb-[clamp(4rem,5vw,5rem)]">
              We didn{"'"}t build N83-FX to compete in the trading app race. We
              built it to redefine the race—by opting out of it. While others
              push for speed, scale, and stickiness, we designed N83-FX for
              something different: Emotional clarity. Simplicity. Quiet power.
            </p>

            {/*==================== Definition Highlight ====================*/}
            <div className="bg-n83-white p-[clamp(3rem,4vw,4rem)] border-l border-r border-n83-black mb-[clamp(4rem,5vw,5rem)]">
              <p className="m-0 font-medium leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,2rem)]">
                N83-FX is a multi-asset broker on MT5, serving traders who value
                a calm, precise environment.
              </p>
            </div>
            {/*==================== End of Definition Highlight ====================*/}

            {/*==================== CTA Links ====================*/}
            <div className="flex items-center gap-[clamp(2rem,3vw,3rem)] flex-col lg:flex-row">
              <Link
                href="/markets"
                className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-white bg-n83-black hover:-translate-y-[2px] hover:bg-n83-gray-900 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] w-full lg:w-auto max-w-[30rem]"
              >
                Explore our Markets
              </Link>
              <Link
                href="/accounts"
                className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-black bg-transparent border-2 border-n83-black hover:text-n83-white hover:-translate-y-[2px] hover:bg-n83-black w-full lg:w-auto max-w-[30rem]"
              >
                View our Accounts
              </Link>
            </div>
            {/*==================== End of CTA Links ====================*/}
          </div>
          {/*==================== End of Left: Content ====================*/}

          {/*==================== Right: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                width={800}
                height={600}
                src="/images/about/about-philosophy.jpg"
                alt="N83-FX platform interface showing clean, minimal design"
                className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
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

export default AboutN83FXIntro;
