import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-n83-black text-n83-white py-[clamp(8rem,12vw,12rem)] pb-[clamp(4rem,6vw,6rem)]">
      <div className="w-full mx-auto max-w-[140rem] px-container">
        {/*==================== Main Footer Content ====================*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[clamp(6rem,8vw,8rem)] mb-[clamp(6rem,8vw,8rem)]">
          {/*==================== Brand Section ====================*/}
          <div className="max-w-[40rem]">
            <Link
              href="/"
              className="flex items-center gap-4 w-full font-extrabold text-[clamp(2.4rem,3vw,3.2rem)] text-n83-white mb-[clamp(3rem,4vw,4rem)]"
            >
              <Image
                src="/images/logos/logo-light.svg"
                alt="N83-FX Logo"
                width={200}
                height={40}
              />
            </Link>
            <p className="text-[clamp(1.8rem,2.2vw,2.2rem)] font-normal leading-[1.5] text-white/80 mb-[clamp(3rem,4vw,4rem)]">
              Trading made simple. Emotions made calm.
            </p>
            <p className="text-[clamp(1.5rem,1.8vw,1.7rem)] leading-[1.6] text-white/70">
              We believe investing should feel good. No complexity, no pressure,
              just straightforward tools for building wealth.
            </p>
          </div>

          {/*==================== Platform Links ====================*/}
          <div>
            <h4 className="text-[clamp(1.6rem,1.8vw,1.8rem)] font-semibold text-n83-white mb-[clamp(2rem,3vw,3rem)]">
              Platform
            </h4>
            <div className="flex flex-col gap-[clamp(1rem,1.5vw,1.5rem)]">
              <Link
                href="/platform/zero-commission"
                className="text-[clamp(1.4rem,1.6vw,1.6rem)] text-white/70 transition-smooth hover:text-n83-white hover:translate-x-[3px]"
              >
                Zero Commission Trading
              </Link>
              <Link
                href="/platform/real-time-insights"
                className="text-[clamp(1.4rem,1.6vw,1.6rem)] text-white/70 transition-smooth hover:text-n83-white hover:translate-x-[3px]"
              >
                Real-time Insights
              </Link>
              <Link
                href="/platform/beginner-mode"
                className="text-[clamp(1.4rem,1.6vw,1.6rem)] text-white/70 transition-smooth hover:text-n83-white hover:translate-x-[3px]"
              >
                Beginner Mode
              </Link>
              <Link
                href="/platform/expert-tools"
                className="text-[clamp(1.4rem,1.6vw,1.6rem)] text-white/70 transition-smooth hover:text-n83-white hover:translate-x-[3px]"
              >
                Expert Tools
              </Link>
            </div>
          </div>

          {/*==================== Learn Links ====================*/}
          <div>
            <h4 className="text-[clamp(1.6rem,1.8vw,1.8rem)] font-semibold text-n83-white mb-[clamp(2rem,3vw,3rem)]">
              Learn
            </h4>
            <div className="flex flex-col gap-[clamp(1rem,1.5vw,1.5rem)]">
              <Link
                href="/learn/trading-basics"
                className="text-[clamp(1.4rem,1.6vw,1.6rem)] text-white/70 transition-smooth hover:text-n83-white hover:translate-x-[3px]"
              >
                Trading Basics
              </Link>
              <Link
                href="/learn/market-education"
                className="text-[clamp(1.4rem,1.6vw,1.6rem)] text-white/70 transition-smooth hover:text-n83-white hover:translate-x-[3px]"
              >
                Market Education
              </Link>
              <Link
                href="/learn/emotional-investing"
                className="text-[clamp(1.4rem,1.6vw,1.6rem)] text-white/70 transition-smooth hover:text-n83-white hover:translate-x-[3px]"
              >
                Emotional Investing
              </Link>
              <Link
                href="/learn/help-center"
                className="text-[clamp(1.4rem,1.6vw,1.6rem)] text-white/70 transition-smooth hover:text-n83-white hover:translate-x-[3px]"
              >
                Help Center
              </Link>
            </div>
          </div>

          {/*==================== Company Links ====================*/}
          <div>
            <h4 className="text-[clamp(1.6rem,1.8vw,1.8rem)] font-semibold text-n83-white mb-[clamp(2rem,3vw,3rem)]">
              Company
            </h4>
            <div className="flex flex-col gap-[clamp(1rem,1.5vw,1.5rem)]">
              <Link
                href="/about/company-info"
                className="text-[clamp(1.4rem,1.6vw,1.6rem)] text-white/70 transition-smooth hover:text-n83-white hover:translate-x-[3px]"
              >
                About N83-FX
              </Link>
              <Link
                href="/transparency-report"
                className="text-[clamp(1.4rem,1.6vw,1.6rem)] text-white/70 transition-smooth hover:text-n83-white hover:translate-x-[3px]"
              >
                Transparency Report
              </Link>
              <Link
                href="/security"
                className="text-[clamp(1.4rem,1.6vw,1.6rem)] text-white/70 transition-smooth hover:text-n83-white hover:translate-x-[3px]"
              >
                Security
              </Link>
              <Link
                href="/careers"
                className="text-[clamp(1.4rem,1.6vw,1.6rem)] text-white/70 transition-smooth hover:text-n83-white hover:translate-x-[3px]"
              >
                Careers
              </Link>
            </div>
          </div>
        </div>

        {/*==================== Footer Bottom ====================*/}
        <div className="flex flex-col md:flex-row items-center justify-between pt-[clamp(4rem,6vw,6rem)] border-t border-white/10 gap-8 md:gap-0">
          <div className="flex flex-wrap justify-center md:justify-start gap-[clamp(2rem,3vw,3rem)]">
            <Link
              href="/legal/privacy-policy"
              className="text-[clamp(1.3rem,1.5vw,1.5rem)] text-white/60 transition-smooth hover:text-n83-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/legal/terms-conditions"
              className="text-[clamp(1.3rem,1.5vw,1.5rem)] text-white/60 transition-smooth hover:text-n83-white"
            >
              Terms of Service
            </Link>
            <Link
              href="/legal/risk-disclosure"
              className="text-[clamp(1.3rem,1.5vw,1.5rem)] text-white/60 transition-smooth hover:text-n83-white"
            >
              Risk Disclosure
            </Link>
          </div>
          <p className="text-[clamp(1.3rem,1.5vw,1.5rem)] text-white/60 text-center md:text-left">
            © 2025 N83-FX. Securities by SIPC.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
