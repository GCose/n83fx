import Link from "next/link";

const HomeFAQFinalCTA = () => {
  const faqs = [
    {
      question: "What makes N83-FX different?",
      answer:
        "A calm, precise trading environment with clear terms and a focus on decision quality—not trading volume.",
    },
    {
      question: "Do you offer an Islamic (swap-free) account?",
      answer:
        "Yes. It's genuinely swap-free with no time limits or hidden conditions.",
    },
    {
      question: "Which platform do you support?",
      answer:
        "MetaTrader 5 (MT5) on desktop, web, and mobile—configured for clarity.",
    },
    {
      question: "How do I open an account?",
      answer:
        "Choose an account, complete quick verification, fund securely, and trade with clarity on MT5. [Compare Accounts]",
    },
  ];

  return (
    <>
      {/*==================== FAQ Section ====================*/}
      <section className="bg-n83-white py-[clamp(8rem,10vw,12rem)]">
        <div className="w-full max-w-container mx-auto px-container">
          {/*==================== Section Header ====================*/}
          <div className="text-center mb-[clamp(6rem,7vw,8rem)]">
            <h2 className="m-0 font-extrabold leading-[1.2] text-n83-white text-[clamp(3rem,4vw,4.5rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase tracking-tight">
              FAQ
            </h2>
            <h3 className="m-0 font-normal leading-[1.4] text-white/70 text-[clamp(1.8rem,2vw,2rem)] max-w-[70rem] mx-auto">
              (quick, honest answers)
            </h3>
          </div>
          {/*==================== End of Section Header ====================*/}

          {/*==================== FAQ Grid ====================*/}
          <div className="max-w-[90rem] mx-auto">
            <div className="space-y-[clamp(3rem,4vw,4rem)]">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-n83-gray-100 rounded-[2rem] p-[clamp(3rem,4vw,4rem)]"
                >
                  <h3 className="m-0 font-bold leading-[1.2] text-n83-white text-[clamp(1.8rem,2vw,2rem)] mb-[clamp(1.5rem,2vw,2rem)]">
                    {faq.question}
                  </h3>
                  <p className="m-0 font-normal leading-[1.4] text-white/70 text-[clamp(1.6rem,1.8vw,1.9rem)]">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/*==================== End of FAQ Grid ====================*/}
        </div>
      </section>
      {/*==================== End of FAQ Section ====================*/}N
      {/*==================== Final CTA Section ====================*/}
      <section className="bg-n83-gray-100 py-[clamp(8rem,10vw,12rem)]">
        <div className="w-full max-w-container mx-auto px-container">
          {/*==================== Final Statement ====================*/}
          <div className="text-center mb-[clamp(6rem,8vw,8rem)]">
            <h2 className="m-0 font-extrabold leading-[1.2] text-n83-white text-[clamp(3rem,4vw,6rem)] mb-[clamp(3rem,4vw,4rem)] uppercase tracking-tight">
              Join a platform that respects your time and your focus.
            </h2>

            {/*==================== Final CTAs ====================*/}
            <div className="flex items-center gap-[clamp(2rem,3vw,3rem)] flex-col lg:flex-row justify-center mb-[clamp(4rem,5vw,5rem)]">
              <Link
                href="/account/open"
                className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.8rem,2vw,2rem)] py-[clamp(2rem,2.5vw,2.5rem)] px-[clamp(4rem,5vw,5rem)] text-n83-white bg-n83-black hover:-translate-y-[2px] hover:bg-neon-primary/20hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] w-full lg:w-auto max-w-[35rem]"
              >
                Open Account
              </Link>
              <Link
                href="/pricing"
                className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-white bg-transparent border-2  hover:text-n83-white hover:-translate-y-[2px] hover:bg-n83-black w-full lg:w-auto max-w-[30rem]"
              >
                See Pricing
              </Link>
            </div>
            {/*==================== End of Final CTAs ====================*/}

            {/*==================== Risk Reminder ====================*/}
            <div className="bg-n83-white border-l border-r  p-[clamp(3rem,4vw,4rem)] max-w-[80rem] mx-auto">
              <p className="m-0 font-normal leading-[1.4] text-white/70 text-[clamp(1.6rem,1.8vw,1.9rem)] ">
                Risk reminder: CFDs are complex instruments and carry a high
                risk of loss due to leverage. You should consider whether you
                understand how CFDs work and whether you can afford to take the
                high risk of losing your money.
              </p>
            </div>
            {/*==================== End of Risk Reminder ====================*/}
          </div>
          {/*==================== End of Final Statement ====================*/}
        </div>
      </section>
      {/*==================== End of Final CTA Section ====================*/}
    </>
  );
};

export default HomeFAQFinalCTA;
