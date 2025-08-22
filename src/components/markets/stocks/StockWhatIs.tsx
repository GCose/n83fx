import Image from "next/image";

const StocksWhatIs = () => {
  return (
    <section className="relative bg-n83-white py-[clamp(8rem,12vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,8rem)] items-start">
          {/*==================== Left: Content ====================*/}
          <div className="flex flex-col justify-center">
            <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(3rem,4vw,4rem)] uppercase tracking-tight">
              What is Stocks Trading?
            </h2>

            <div className="space-y-[clamp(2.5rem,3vw,3rem)]">
              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                Stocks represent ownership in a company. When you buy a share,
                you hold a piece of that business, along with the right to
                benefit from its growth and performance.
              </p>

              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                For traders, stocks are one of the most familiar and accessible
                markets. From global giants like Apple and Amazon to regional
                leaders, stock prices move daily with earnings reports,
                innovations, and global events.
              </p>

              <p className="m-0 font-normal leading-[1.5] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                At N83-FX, we make stocks trading straightforward: no
                unnecessary noise, no distractions — just clear access to the
                world{"'"}s top companies through our trusted trading platform.
              </p>

              {/*==================== Highlight Quote ====================*/}
              <div className="p-[clamp(2.5rem,3vw,3rem)] bg-n83-gray-50 border-l border-r border-n83-black">
                <p className="m-0 font-medium leading-[1.4] text-n83-black text-[clamp(1.8rem,2vw,2rem)]">
                  Stocks are more than numbers — they reflect real businesses,
                  innovations, and industries.
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
                src="/images/markets/stocks/stocks-whatis.jpg"
                alt="Global stock markets and company ownership visualization"
                className="w-full h-full object-cover transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] lg:min-h-[clamp(35rem,45vh,50rem)] md:min-h-[clamp(30rem,40vh,45rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95] group-hover:scale-[1.02]"
              />
            </div>

            {/*==================== Key Facts Grid ====================*/}
            <div className="mt-[clamp(3rem,4vw,4rem)] border-t border-n83-black border-b grid grid-cols-2 gap-[clamp(1.5rem,2vw,2rem)]">
              <div className="p-[clamp(2rem,3vw,3rem)] text-center">
                <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(2rem,2.5vw,2.5rem)] mb-[0.5rem]">
                  NYSE
                </h4>
                <p className="m-0 font-normal leading-[1.3] text-n83-gray-600 text-[clamp(1.3rem,1.5vw,1.5rem)]">
                  Global Exchange
                </p>
              </div>
              <div className="p-[clamp(2rem,3vw,3rem)] text-center">
                <h4 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(2rem,2.5vw,2.5rem)] mb-[0.5rem]">
                  NASDAQ
                </h4>
                <p className="m-0 font-normal leading-[1.3] text-n83-gray-600 text-[clamp(1.3rem,1.5vw,1.5rem)]">
                  Tech Leaders
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

export default StocksWhatIs;
