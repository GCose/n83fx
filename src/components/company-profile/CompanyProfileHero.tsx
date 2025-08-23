const CompanyProfileHero = () => {
  return (
    <section className="bg-n83-white py-[clamp(8rem,10vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Main Header ====================*/}
        <div className="text-center mb-[clamp(6rem,8vw,8rem)]">
          <h1 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(4rem,5vw,6rem)] mb-[clamp(3rem,4vw,4rem)] uppercase tracking-tight">
            Company Profile
          </h1>
        </div>
        {/*==================== End of Main Header ====================*/}

        {/*==================== Overview Section ====================*/}
        <div className="bg-n83-gray-50 rounded-[3rem] p-[clamp(4rem,5vw,5rem)] text-center">
          <h2 className="m-0 font-bold leading-[1.3] text-n83-black text-[clamp(2.5rem,3vw,3.5rem)] mb-[clamp(2.5rem,3vw,3rem)] uppercase">
            Overview
          </h2>
          <p className="m-0 font-normal leading-[1.5] text-n83-black text-[clamp(1.8rem,2vw,2.2rem)] max-w-[80rem] mx-auto">
            N83-FX is a boutique multi-asset broker focused on clarity,
            discipline, and respect for client capital.
          </p>
        </div>
        {/*==================== End of Overview Section ====================*/}
      </div>
    </section>
  );
};

export default CompanyProfileHero;
