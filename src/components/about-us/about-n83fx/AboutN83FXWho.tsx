import Image from "next/image";

const AboutN83FXWho = () => {
  const targetAudience = [
    "A creative mind investing with discipline",
    "A private professional managing capital quietly",
    "A new investor seeking emotional control—not confusion",
  ];

  return (
    <section className="bg-n83-gray-50 py-[clamp(8rem,10vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,7vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3.5rem,4vw,5rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase tracking-tight">
            Who We Serve
          </h2>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Main Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-center mb-[clamp(6rem,8vw,8rem)]">
          {/*==================== Left: Content ====================*/}
          <div>
            <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.8rem,2.2vw,2.4rem)] mb-[clamp(4rem,5vw,5rem)]">
              This is not a product for everyone. It{"'"}s a space for those who
              think deeply, act deliberately, and operate calmly.
            </p>

            <div className="mb-[clamp(4rem,5vw,5rem)]">
              <p className="m-0 font-medium leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,2rem)] mb-[clamp(2rem,2.5vw,2.5rem)]">
                Whether you{"'"}re:
              </p>

              {/*==================== Target Audience List ====================*/}
              <div className="space-y-[clamp(1.5rem,2vw,2rem)]">
                {targetAudience.map((audience, index) => (
                  <div key={index} className="flex items-start gap-[1.6rem]">
                    <div className="relative w-[2rem] h-[2rem] mt-[0.8rem] flex-shrink-0 transition-transform duration-300 group-hover:scale-125">
                      <div className="absolute w-full h-[5px] bg-n83-black top-1/2 -translate-y-1/2"></div>
                      <div className="absolute h-full w-[5px] bg-n83-black left-1/2 -translate-x-1/2"></div>
                    </div>
                    <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                      {audience}
                    </p>
                  </div>
                ))}
              </div>
              {/*==================== End of Target Audience List ====================*/}
            </div>

            {/*==================== Philosophy Statement ====================*/}
            <div className="bg-n83-white p-[clamp(3rem,4vw,4rem)] border-l border-r border-n83-black">
              <p className="m-0 font-medium leading-[1.4] text-n83-black text-[clamp(1.6rem,1.8vw,1.9rem)] mb-[clamp(1.5rem,2vw,2rem)]">
                N83-FX gives you what the market rarely offers:{" "}
                <strong>a platform that respects your attention</strong>.
              </p>
              <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                We don{"'"}t push. We don{"'"}t gamify. We provide the
                environment—
                <strong>you bring the intelligence</strong>.
              </p>
            </div>
            {/*==================== End of Philosophy Statement ====================*/}
          </div>
          {/*==================== End of Left: Content ====================*/}

          {/*==================== Right: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                width={800}
                height={600}
                src="/images/about/who-we-serve.jpg"
                alt="Professional traders in focused, calm environment"
                className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>

            {/*==================== Key Stats Overlay ====================*/}
            <div className="mt-[clamp(3rem,4vw,4rem)] border-t border-n83-black border-b grid grid-cols-2 gap-[clamp(1.5rem,2vw,2rem)]">
              <div className="p-[clamp(2rem,3vw,3rem)] text-center">
                <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(2rem,2.5vw,2.5rem)] mb-[0.5rem]">
                  Focused
                </h4>
                <p className="m-0 font-normal leading-[1.3] text-n83-gray-600 text-[clamp(1.3rem,1.5vw,1.5rem)]">
                  Traders
                </p>
              </div>
              <div className="p-[clamp(2rem,3vw,3rem)] text-center">
                <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(2rem,2.5vw,2.5rem)] mb-[0.5rem]">
                  Calm
                </h4>
                <p className="m-0 font-normal leading-[1.3] text-n83-gray-600 text-[clamp(1.3rem,1.5vw,1.5rem)]">
                  Environment
                </p>
              </div>
            </div>
            {/*==================== End of Key Stats Overlay ====================*/}
          </div>
          {/*==================== End of Right: Visual ====================*/}
        </div>
        {/*==================== End of Main Layout ====================*/}
      </div>
    </section>
  );
};

export default AboutN83FXWho;
