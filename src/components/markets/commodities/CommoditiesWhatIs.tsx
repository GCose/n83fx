import Image from "next/image";

const CommoditiesWhatIs = () => {
  return (
    <section className="relative bg-n83-white py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-start">
          {/*==================== Left: Content ====================*/}
          <div className="flex flex-col justify-center">
            <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(3rem,4vw,4rem)] uppercase tracking-tight">
              What are Commodities?
            </h2>

            <div className="space-y-[clamp(2.5rem,3vw,3rem)]">
              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                Commodities are the raw materials that power the global economy.
                Oil fuels industries, gold stores value, and crops feed nations.
                From energy to agriculture, commodities are traded daily across
                global markets, influencing everything from inflation rates to
                currency strength.
              </p>

              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                For traders, commodities represent a way to diversify beyond
                currencies or stocks. They offer exposure to global trends like
                supply disruptions, political events, and shifts in consumer
                demand.
              </p>

              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                At N83-FX, commodities are presented simply — no noise, no
                confusion — just straightforward access to some of the most
                important markets in the world.
              </p>

              {/*==================== Highlight Quote ====================*/}
              <div className="p-[clamp(2.5rem,3vw,3rem)] bg-n83-gray-50 border-l border-r border-n83-black">
                <p className="m-0 font-medium leading-[1.4] text-n83-black text-[clamp(1.8rem,2vw,2rem)]">
                  Each commodity reacts to different forces. Oil moves with OPEC
                  decisions, gold rises during uncertainty, and agricultural
                  products shift with climate patterns.
                </p>
              </div>
              {/*==================== End of Highlight Quote ====================*/}
            </div>
          </div>
          {/*==================== End of Left: Content ====================*/}

          {/*==================== Right: Visual ====================*/}
          <div className="relative">
            <div className="overflow-hidden relative rounded-[2.4rem] md:rounded-[1.6rem] bg-n83-black group">
              <Image
                width={800}
                height={600}
                src="/images/markets/commodities/commodities-whatis.jpg"
                alt="Raw materials and global commodities markets visualization"
                className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>

            {/*==================== Key Facts Grid ====================*/}
            <div className="mt-[clamp(3rem,4vw,4rem)] border-t border-n83-black border-b grid grid-cols-2 gap-[clamp(1.5rem,2vw,2rem)]">
              <div className="p-[clamp(2rem,3vw,3rem)] text-center">
                <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(2rem,2.5vw,2.5rem)] mb-[0.5rem]">
                  Energy
                </h4>
                <p className="m-0 font-normal leading-[1.3] text-n83-gray-600 text-[clamp(1.3rem,1.5vw,1.5rem)]">
                  Oil & Gas
                </p>
              </div>
              <div className="p-[clamp(2rem,3vw,3rem)] text-center">
                <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(2rem,2.5vw,2.5rem)] mb-[0.5rem]">
                  Metals
                </h4>
                <p className="m-0 font-normal leading-[1.3] text-n83-gray-600 text-[clamp(1.3rem,1.5vw,1.5rem)]">
                  Gold & Silver
                </p>
              </div>
            </div>
            {/*==================== End of Key Facts Grid ====================*/}
          </div>
          {/*==================== End of Right: Visual ====================*/}
        </div>
        {/*==================== End of Section Layout ====================*/}
      </div>
    </section>
  );
};

export default CommoditiesWhatIs;
