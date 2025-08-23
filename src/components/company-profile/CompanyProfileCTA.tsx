import Link from "next/link";

const CompanyProfileCTA = () => {
  return (
    <section className="bg-n83-black py-[clamp(8rem,10vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== CTA Section ====================*/}
        <div className="text-center mb-[clamp(6rem,8vw,10rem)]">
          <div className="flex items-center gap-[clamp(3rem,4vw,5rem)] flex-col lg:flex-row justify-center">
            <Link
              href="/accounts"
              className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.8rem,2.5vw,2.5rem)] px-[clamp(4rem,5vw,5rem)] text-n83-black bg-n83-white hover:-translate-y-[3px] hover:bg-n83-gray-50 w-full lg:w-auto max-w-[35rem]"
            >
              Compare Accounts
            </Link>
            <Link
              href="/account/open"
              className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.8rem,2.5vw,2.5rem)] px-[clamp(4rem,5vw,5rem)] text-n83-white bg-transparent border-2 border-n83-white hover:text-n83-black hover:-translate-y-[3px] hover:bg-n83-white w-full lg:w-auto max-w-[35rem]"
            >
              Open Account
            </Link>
          </div>
        </div>
        {/*==================== End of CTA Section ====================*/}

        {/*==================== Risk Warning ====================*/}
        <div className="border-t border-n83-white/20 pt-[clamp(4rem,5vw,6rem)]">
          <div className="max-w-[100rem] mx-auto text-center">
            <h3 className="m-0 font-bold leading-[1.2] text-n83-white text-[clamp(1.8rem,2vw,2.2rem)] mb-[clamp(2rem,2.5vw,2.5rem)] uppercase">
              Risk Warning
            </h3>
            <p className="m-0 font-normal leading-[1.5] text-n83-white/80 text-[clamp(1.6rem,1.8vw,1.9rem)]">
              CFDs are complex instruments and come with a high risk of losing
              money rapidly due to leverage. Consider whether you understand how
              CFDs work and whether you can afford to take the high risk of
              losing your money.
            </p>
          </div>
        </div>
        {/*==================== End of Risk Warning ====================*/}
      </div>
    </section>
  );
};

export default CompanyProfileCTA;
