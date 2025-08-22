import Image from "next/image";
import type { WhyChooseBenefit } from "@/types/home";

const WhyChoose = () => {
  const benefits: WhyChooseBenefit[] = [
    { title: "Thoughtful nudges,\nnot notifications." },
    { title: "Portfolio insights,\nnot overload." },
    { title: "Guardrails for \nsmart decisions." },
  ];
  return (
    <section className="overflow-hidden relative py-[clamp(8rem,12vw,12rem)] bg-n83-white">
      <div className="w-full px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,8vw,7rem)]">
          <h2 className="m-0 font-extrabold leading-[1.4] tracking-[-0.02em] uppercase text-n83-black text-[clamp(5rem,5vw,8rem)] mb-[clamp(2rem,3vw,3rem)]">
            Calm in <br />
            every section
          </h2>
          <p className="m-0 mx-auto font-normal leading-[1.5] max-w-[60rem] text-n83-black text-[clamp(1.8rem,2.5vw,2.7rem)]">
            While others complicate, we simplify. While others hide fees, we
            {"'"}re transparent.
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Benefits Grid ====================*/}
        <div className="grid pt-8 place-items-center gap-[clamp(3rem,5vw,5rem)] grid-cols-1 lg:grid-cols-3 border-t border-b border-n83-black">
          {benefits.map((benefit: WhyChooseBenefit, index: number) => (
            <div key={index} className="text-center">
              <h3 className="m-0 font-extrabold leading-[1.4] tracking-[-0.02em] text-n83-black text-[clamp(2.4rem,3vw,2.7rem)] mb-[clamp(2rem,3vw,3rem)] whitespace-pre-line">
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>
        {/*==================== End of Benefits Grid ====================*/}

        {/*==================== Main Visual ====================*/}
        <div className="mt-20">
          <Image
            width={1200}
            height={600}
            alt="Trading platform comparison showing our advantages"
            src="/images/home-page/why-section/why-choose-us.jpg"
            className="w-full h-full object-cover rounded-[2.4rem] md:rounded-[1.6rem] transition-transform duration-[0.6s] min-h-[clamp(40rem,50vh,60rem)] md:min-h-[clamp(30rem,40vh,45rem)]"
          />
        </div>
        {/*==================== End of Main Visual ====================*/}
      </div>
    </section>
  );
};

export default WhyChoose;
