import Image from "next/image";

const AboutN83FXHow = () => {
  const buildingBlocks = [
    {
      title: "Minimalistic-inspired systems",
      description: "for visual clarity",
    },
    {
      title: "Emotionally intelligent UX",
      description: "that guides, not pressures",
    },
    {
      title: "Calm architecture",
      description: "that prioritizes reflection over reaction",
    },
  ];

  return (
    <section className="bg-n83-white py-[clamp(8rem,10vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,7vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3.5rem,4vw,5rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase tracking-tight">
            How We{"'"}re Built
          </h2>
          <p className="m-0 font-normal leading-[1.5] text-n83-black text-[clamp(1.8rem,2.2vw,2.4rem)] max-w-[70rem] mx-auto">
            N83-FX is designed like a boutique—not a casino. Every pixel, every
            flow, every word is intentional.
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Visual Comparison ====================*/}
        <div className="mb-[clamp(6rem,8vw,8rem)]">
          <div className="grid md:grid-cols-2 gap-[clamp(3rem,4vw,4rem)] items-center">
            {/*==================== Before/Chaos ====================*/}
            <div className="relative">
              <div className="overflow-hidden relative rounded-[2rem] bg-n83-black group">
                <Image
                  width={600}
                  height={400}
                  src="/images/about/chaotic-platform.jpg"
                  alt="Chaotic, overwhelming trading platform interface"
                  className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(25rem,30vh,35rem)] saturate-[0.6] contrast-[1.2] brightness-[0.8] opacity-80 group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-[2rem] left-[2rem] right-[2rem] z-[2]">
                  <h3 className="m-0 font-bold leading-[1.2] text-white text-[clamp(1.8rem,2vw,2.2rem)] mb-[0.5rem]">
                    Others: Noise & Chaos
                  </h3>
                  <p className="m-0 font-normal leading-[1.3] text-white/80 text-[clamp(1.4rem,1.5vw,1.6rem)]">
                    Overwhelming interfaces designed to distract
                  </p>
                </div>
              </div>
            </div>
            {/*==================== End of Before/Chaos ====================*/}

            {/*==================== After/Calm ====================*/}
            <div className="relative">
              <div className="overflow-hidden relative rounded-[2rem] bg-n83-black group">
                <Image
                  width={600}
                  height={400}
                  src="/images/about/calm-platform.jpg"
                  alt="N83-FX clean, minimal trading interface"
                  className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(25rem,30vh,35rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
                />
                <div className="absolute bottom-[2rem] left-[2rem] right-[2rem] z-[2]">
                  <h3 className="m-0 font-bold leading-[1.2] text-white text-[clamp(1.8rem,2vw,2.2rem)] mb-[0.5rem]">
                    N83-FX: Clarity & Calm
                  </h3>
                  <p className="m-0 font-normal leading-[1.3] text-white/80 text-[clamp(1.4rem,1.5vw,1.6rem)]">
                    Intentional design that respects focus
                  </p>
                </div>
              </div>
            </div>
            {/*==================== End of After/Calm ====================*/}
          </div>
        </div>
        {/*==================== End of Visual Comparison ====================*/}

        {/*==================== Building Blocks Grid ====================*/}
        <div className="grid md:grid-cols-3 gap-[clamp(3rem,4vw,4rem)] mb-[clamp(5rem,6vw,6rem)]">
          {buildingBlocks.map((block, index) => (
            <div
              key={index}
              className="bg-n83-gray-50 rounded-[2rem] p-[clamp(3rem,3.5vw,3.5rem)] text-center group hover:bg-n83-white hover:-translate-y-[2px] transition-all duration-300"
            >
              <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,2rem)] mb-[clamp(1rem,1.5vw,1.5rem)]">
                {block.title}
              </h3>
              <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.4rem,1.6vw,1.7rem)] italic">
                {block.description}
              </p>
            </div>
          ))}
        </div>
        {/*==================== End of Building Blocks Grid ====================*/}

        {/*==================== Ethics & Trust Section ====================*/}
        <div className="space-y-[clamp(3rem,4vw,4rem)]">
          {/*==================== Ethics Statement ====================*/}
          <div className="bg-n83-gray-50 p-[clamp(3rem,4vw,4rem)] border-t border-b border-n83-black text-center">
            <p className="m-0 font-normal leading-[1.4] text-n83-black text-[clamp(1.6rem,1.8vw,1.9rem)]">
              No ads. No selling of order flow. No compromises. <br />
              <span className="text-[clamp(1.4rem,1.5vw,1.6rem)] text-n83-gray-600 italic">
                *If applicable—confirm with legal; otherwise remove.
              </span>
            </p>
          </div>
          {/*==================== End of Ethics Statement ====================*/}

          {/*==================== Closing Statement ====================*/}
          <div className="bg-n83-black rounded-[2rem] p-[clamp(3rem,4vw,4rem)] text-center">
            <p className="m-0 font-medium leading-[1.4] text-n83-white text-[clamp(1.8rem,2vw,2.2rem)]">
              We don{"'"}t trick you into more trades. We build a space that
              earns your trust.
            </p>
          </div>
          {/*==================== End of Closing Statement ====================*/}
        </div>
        {/*==================== End of Ethics & Trust Section ====================*/}
      </div>
    </section>
  );
};

export default AboutN83FXHow;
