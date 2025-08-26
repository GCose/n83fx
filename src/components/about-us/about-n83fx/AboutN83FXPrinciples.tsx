import Image from "next/image";

const AboutN83FXPrinciples = () => {
  const principles = [
    {
      principle: "Stillness",
      meaning: "Fewer distractions. Smarter decisions.",
    },
    {
      principle: "Design",
      meaning: "Form follows emotional function.",
    },
    {
      principle: "Truth",
      meaning: "Radical transparency in pricing, execution, and intent.",
    },
    {
      principle: "Discretion",
      meaning: "Private by design. Built for quiet professionals.",
    },
    {
      principle: "Intention",
      meaning: "Everything we do, we do with care.",
    },
  ];

  return (
    <section className="bg-n83-gray-100 py-[clamp(8rem,10vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,7vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3.5rem,4vw,5rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase tracking-tight">
            What We Stand For
          </h2>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Main Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(2rem,8vw,4rem)] items-start">
          {/*==================== Left: Principles ====================*/}
          <div>
            <div className="space-y-[clamp(0.8rem,4vw,2rem)]">
              {principles.map((item, index) => (
                <div
                  key={index}
                  className="bg-n83-white rounded-[2rem] p-[clamp(3rem,3.5vw,3.5rem)] hover:-translate-y-[2px] transition-all duration-300 group"
                >
                  <div className="flex items-start gap-[clamp(2rem,2.5vw,2.5rem)]">
                    <div className="mt-[0.5rem] opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        width="20"
                        height="20"
                        fill="none"
                        viewBox="0 0 20 20"
                        className="text-n83-black"
                      >
                        <path d="M10 2L13 7H7L10 2Z" fill="currentColor" />
                        <path
                          d="M7 7H13L15 13L10 18L5 13L7 7Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.8rem,2vw,2.4rem)] mb-[clamp(1rem,1.5vw,1.5rem)] uppercase">
                        {item.principle}
                      </h3>
                      <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.7rem,1.6vw,2rem)]">
                        {item.meaning}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*==================== End of Left: Principles ====================*/}

          {/*==================== Right: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                width={800}
                height={900}
                src="/images/about/about-principles.jpg"
                alt="N83-FX core principles visualization - stillness, design, truth"
                className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(50rem,60vh,70rem)] lg:min-h-[clamp(45rem,55vh,65rem)] md:min-h-[clamp(40rem,50vh,60rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>
          </div>
          {/*==================== End of Right: Visual ====================*/}
        </div>
        {/*==================== End of Main Layout ====================*/}
      </div>
    </section>
  );
};

export default AboutN83FXPrinciples;
