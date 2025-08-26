import Link from "next/link";
import Image from "next/image";

const HomeEducationTools = () => {
  const educationTools = [
    {
      title: "The Calm Trader",
      description: "Mindset, risk, and systems in short, practical lessons",
      image: "/images/home-page/education-calm-trader.jpg",
    },
    {
      title: "Economic Calendar",
      description: "What matters, when it matters",
      image: "/images/home-page/education-calendar.jpg",
    },
    {
      title: "Platform Guides",
      description: "MT5 made simple: orders, charts, risk tools",
      image: "/images/home-page/education-platform.jpg",
    },
    {
      title: "Funding & Withdrawals",
      description: "Clear methods and timelines in plain English",
      image: "/images/home-page/education-funding.jpg",
    },
  ];

  return (
    <section className="bg-n83-white py-[clamp(8rem,10vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-center mb-[clamp(6rem,7vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-black text-[clamp(3rem,4vw,6rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase tracking-tight">
            Education & tools
          </h2>
          <h3 className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.8rem,2vw,2.4rem)] max-w-[70rem] mx-auto">
            Guidance, not hype
          </h3>
          <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.7rem,1.8vw,2rem)] max-w-[70rem] mx-auto mt-[clamp(2rem,2.5vw,2.5rem)]">
            Skill outlasts speed. We teach habits that help you trade
            deliberately.
          </p>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Education Tools Grid ====================*/}
        <div className="grid md:grid-cols-2 gap-[clamp(4rem,6vw,6rem)] mb-[clamp(6rem,8vw,8rem)]">
          {educationTools.map((tool, index) => (
            <div key={index} className="group">
              {/*==================== Tool Visual ====================*/}
              <div className="overflow-hidden relative rounded-[2rem] bg-n83-black group-hover:scale-[1.02] transition-transform duration-300 mb-[clamp(3rem,4vw,4rem)]">
                <Image
                  width={600}
                  height={400}
                  src={tool.image}
                  alt={`${tool.title} educational resource interface`}
                  className="w-full h-full object-cover min-h-[clamp(25rem,30vh,35rem)] saturate-[0.8] contrast-[1.1] brightness-[0.95]"
                />
              </div>
              {/*==================== End of Tool Visual ====================*/}

              {/*==================== Tool Content ====================*/}
              <div>
                <h3 className="m-0 font-bold leading-[1.2] text-n83-black text-[clamp(1.8rem,2vw,2.1rem)] mb-[clamp(1.5rem,2vw,2rem)]">
                  {tool.title}
                </h3>
                <p className="m-0 font-normal leading-[1.4] text-n83-gray-600 text-[clamp(1.7rem,1.8vw,2rem)]">
                  {tool.description}
                </p>
              </div>
              {/*==================== End of Tool Content ====================*/}
            </div>
          ))}
        </div>
        {/*==================== End of Education Tools Grid ====================*/}

        {/*==================== CTA Section ====================*/}
        <div className="text-center">
          <div className="flex items-center gap-[clamp(2rem,3vw,3rem)] flex-col lg:flex-row justify-center">
            <Link
              href="/education"
              className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-white bg-n83-black hover:-translate-y-[2px] hover:bg-n83-gray-900 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] w-full lg:w-auto max-w-[30rem]"
            >
              Visit Education
            </Link>
            <Link
              href="/tools"
              className="cursor-pointer font-medium rounded-[3rem] items-center whitespace-nowrap inline-flex justify-center transition-smooth text-[clamp(1.6rem,1.8vw,1.9rem)] py-[clamp(1.6rem,2vw,1.8rem)] px-[clamp(3.2rem,4vw,4rem)] text-n83-black bg-transparent border-2 border-n83-black hover:text-n83-white hover:-translate-y-[2px] hover:bg-n83-black w-full lg:w-auto max-w-[30rem]"
            >
              See Tools
            </Link>
          </div>
        </div>
        {/*==================== End of CTA Section ====================*/}
      </div>
    </section>
  );
};

export default HomeEducationTools;
