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
    <section className="bg-n83-white py-[clamp(10rem,15vw,18rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Layout ====================*/}
        <div className="grid lg:grid-cols-2 gap-[clamp(8rem,12vw,15rem)] items-center">
          {/*==================== Left: Header ====================*/}
          <div>
            <h2 className="m-0 font-extrabold leading-[1.1] text-n83-black text-[clamp(5rem,7vw,9rem)] mb-[clamp(2rem,3vw,4rem)] uppercase tracking-tight">
              Support &<br />
              Hours
            </h2>
          </div>
          {/*==================== End of Left: Header ====================*/}

          {/*==================== Right: Support Details ====================*/}
          <div className="space-y-[clamp(4rem,6vw,6rem)]">
            {supportDetails.map((detail, index) => (
              <div
                key={index}
                className="bg-n83-gray-50 rounded-[2rem] p-[clamp(3rem,4vw,4rem)]"
              >
                <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.8rem,2.2vw,2.5rem)] mb-[clamp(1.5rem,2vw,2rem)] uppercase">
                  {detail.title}
                </h3>
                <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.6rem,1.9vw,2.2rem)]">
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
