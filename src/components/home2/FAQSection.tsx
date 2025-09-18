import Link from "next/link";
import { useState } from "react";

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number>(0);

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
        "Choose an account, complete quick verification, fund securely, and trade with clarity on MT5.",
      hasLink: true,
    },
  ];

  return (
    <>
      {/*==================== FAQ Section ====================*/}
      <section className="relative py-[clamp(8rem,12vw,10rem)]">
        {/*==================== Dark Overlay ====================*/}
        <div className="absolute inset-0 bg-n83-black"></div>
        {/*==================== End of Dark Overlay ====================*/}

        <div className="relative z-10 w-full max-w-container mx-auto px-container">
          {/*==================== Section Header ====================*/}
          <div className="mb-[clamp(6rem,8vw,8rem)] border-b pb-[clamp(3rem,4vw,4rem)]">
            <h2 className="font-display text-[clamp(5rem,8vw,9rem)] font-900 text-text-primary leading-[0.9] tracking-tight mb-[clamp(2rem,4vw,5rem)]">
              FAQ
            </h2>
            <p className="font-body text-[clamp(1.8rem,2.5vw,2.4rem)] font-500 text-text-secondary leading-[1.4] text-right">
              Common questions, straight answers.
            </p>
          </div>
          {/*==================== End of Section Header ====================*/}

          {/*==================== FAQ Items in Cascading Layout ====================*/}
          <div className="m-auto max-w-[100rem] space-y-[clamp(2rem,3vw,3rem)]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                style={{
                  transform: `translateX(${index * 4}rem)`,
                  maxWidth: `calc(100% - ${index * 4}rem)`,
                }}
                onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
              >
                {/*==================== Question ====================*/}
                <div className="bg-n83-black/40 backdrop-blur-md border-b p-[clamp(2.5rem,3vw,3rem)] group-hover:border-neon-primary/60 transition-all duration-500">
                  <div className="flex items-center justify-between gap-[2rem]">
                    <h3 className="font-body text-[clamp(1.8rem,2.2vw,2.2rem)] font-600 text-text-primary leading-[1.3] group-hover:text-neon-primary transition-colors duration-500">
                      {faq.question}
                    </h3>

                    {/*==================== Expand Icon ====================*/}
                    <div
                      className={`w-[3rem] h-[3rem] flex items-center justify-center border-2 border-text-tertiary/40 group-hover:border-neon-primary/60 transition-all duration-500 ${
                        openFAQ === index ? "rotate-45" : ""
                      }`}
                    >
                      <span
                        className={`font-body text-[2rem] font-300 transition-colors duration-500 ${
                          openFAQ === index
                            ? "text-neon-primary"
                            : "text-text-tertiary"
                        } group-hover:text-neon-primary`}
                      >
                        +
                      </span>
                    </div>
                    {/*==================== End of Expand Icon ====================*/}
                  </div>

                  {/*==================== Answer ====================*/}
                  <div
                    className={`overflow-hidden transition-all duration-700 ${
                      openFAQ === index
                        ? "max-h-[20rem] opacity-100 mt-[clamp(2rem,2.5vw,2.5rem)]"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="font-body text-[clamp(1.6rem,1.8vw,1.8rem)] font-400 text-text-secondary leading-[1.5] mb-[clamp(2rem,2.5vw,2.5rem)]">
                      {faq.answer}
                    </p>

                    {faq.hasLink && (
                      <Link
                        href="/accounts/compare"
                        className="inline-flex items-center font-body text-[clamp(1.5rem,1.7vw,1.7rem)] font-600 text-neon-primary hover:text-text-primary transition-colors duration-300"
                      >
                        Compare Accounts
                        <span className="ml-[1rem]">→</span>
                      </Link>
                    )}
                  </div>
                  {/*==================== End of Answer ====================*/}
                </div>
              </div>
            ))}
          </div>
          {/*==================== End of FAQ Items ====================*/}

          {/*==================== Bottom Spacing ====================*/}
          <div className="pt-[clamp(4rem,6vw,6rem)]"></div>
          {/*==================== End of Bottom Spacing ====================*/}
        </div>
      </section>
      {/*==================== End of FAQ Section ====================*/}
    </>
  );
};

export default FAQSection;
