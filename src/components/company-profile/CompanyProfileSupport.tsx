const CompanyProfileSupport = () => {
  const supportDetails = [
    {
      title: "Availability",
      content: "24/5 (market hours)",
    },
    {
      title: "Channels",
      content: "Live chat, email",
    },
    {
      title: "Response Target",
      content: "< [X] minutes (chat), < [Y] hours (email)",
    },
  ];

  return (
    <section className="bg-n83-white py-[clamp(8rem,10vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(6rem,8vw,10rem)] items-center">
          {/*==================== Left: Header ====================*/}
          <div>
            <h2 className="m-0 font-extrabold leading-[1.1] text-n83-black text-[clamp(3.5rem,4vw,5rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase tracking-tight">
              Support &<br />
              Hours
            </h2>
          </div>
          {/*==================== End of Left: Header ====================*/}

          {/*==================== Right: Support Details ====================*/}
          <div className="space-y-[clamp(3rem,4vw,4rem)]">
            {supportDetails.map((detail, index) => (
              <div
                key={index}
                className="bg-n83-gray-50 rounded-[1.5rem] p-[clamp(2.5rem,3vw,3rem)]"
              >
                <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.6rem,1.8vw,2rem)] mb-[clamp(1rem,1.5vw,1.5rem)] uppercase">
                  {detail.title}
                </h3>
                <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                  {detail.content}
                </p>
              </div>
            ))}
          </div>
          {/*==================== End of Right: Support Details ====================*/}
        </div>
        {/*==================== End of Section Layout ====================*/}
      </div>
    </section>
  );
};

export default CompanyProfileSupport;
