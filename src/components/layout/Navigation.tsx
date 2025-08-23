import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/cn";
import type { NavigationItem, DropdownMenuProps } from "@/types/navigation";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const updateNavbar = () => {
      setIsScrolled(window.pageYOffset > 100);
    };

    const onScroll = () => {
      requestAnimationFrame(updateNavbar);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const marketsItems: NavigationItem[] = [
    { href: "/markets/forex", label: "Forex" },
    { href: "/markets/crypto", label: "Crypto" },
    { href: "/markets/stocks", label: "Stocks" },
    { href: "/markets/futures", label: "Futures" },
    { href: "/markets/commodities", label: "Commodities" },
    { href: "/markets/metals", label: "Metals" },
    { href: "/markets/indices", label: "Indices" },
  ];

  const aboutItems: NavigationItem[] = [
    { href: "/about/company-profile", label: "Company Profile" },
    { href: "/about/about-n83fx", label: "About N83-FX" },
    { href: "/about/metatrader-5", label: "MetaTrader 5" },
    { href: "/about/currency-converter", label: "Currency Converter" },
  ];

  const toolsItems: NavigationItem[] = [
    { href: "/tools/market-news", label: "Market News" },
    { href: "/tools/blog", label: "Blog" },
  ];

  const legalItems: NavigationItem[] = [
    { href: "/legal/terms-conditions", label: "Terms & Conditions" },
    { href: "/legal/privacy-policy", label: "Privacy Policy" },
    {
      href: "/legal/regulation-authorization",
      label: "Regulation & Authorization",
    },
    { href: "/legal/disclaimer", label: "Disclaimer" },
  ];

  const DropdownMenu = ({ trigger, items }: DropdownMenuProps) => (
    <div className="group relative">
      <span className="cursor-pointer text-[clamp(1.6rem,1.8vw,1.9rem)] font-normal text-gray-600 transition-smooth hover:text-black flex items-center gap-1">
        {trigger}
        <svg
          className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
      <div className="absolute top-full left-0 mt-2 min-w-[20rem] rounded-lg bg-white shadow-lg border border-gray-100 opacity-0 invisible transform translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
        <div className="py-2">
          {items.map((item: NavigationItem) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 px-4 text-[1.7rem] text-gray-600 transition-smooth hover:bg-gray-50 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

  const MobileDropdown = ({ trigger, items }: DropdownMenuProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="border-b border-gray-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full text-left text-[2rem] font-normal text-gray-600 transition-smooth hover:text-black flex items-center justify-between py-4 px-4"
        >
          {trigger}
          <svg
            className={cn(
              "w-5 h-5 transition-transform duration-200",
              isOpen && "rotate-180"
            )}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isOpen && (
          <div className="bg-gray-50 border-t border-gray-200">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-8 text-[1.8rem] text-gray-600 transition-smooth hover:text-black hover:bg-gray-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] backdrop-blur-[10px] border-b transition-all duration-300 w-full",
        isScrolled
          ? "bg-white/98 border-black/10 shadow-sm"
          : "bg-white/95 border-black/5"
      )}
    >
      <div className="h-[7rem] flex items-center justify-between w-full px-[clamp(1.5rem,4vw,3rem)]">
        {/*==================== Logo ====================*/}
        <Link
          href="/"
          className="flex items-center justify-center gap-4 text-[2rem] font-semibold text-black relative z-50"
        >
          <Image
            width={20}
            height={20}
            alt="N83-FX Logo"
            src="/images/logos/logo-dark.svg"
          />
          <span>N83-FX</span>
        </Link>
        {/*==================== End of Logo ====================*/}

        {/*==================== Desktop Navigation Menu ====================*/}
        <div className="hidden lg:flex">
          <ul className="flex gap-[clamp(2rem,4vw,4rem)] list-none">
            <li>
              <Link
                href="/"
                className="text-[clamp(1.6rem,1.8vw,1.9rem)] font-normal text-gray-600 transition-smooth hover:text-black"
              >
                Home
              </Link>
            </li>
            <li>
              <DropdownMenu trigger="Markets" items={marketsItems} />
            </li>
            <li>
              <Link
                href="/accounts"
                className="text-[clamp(1.6rem,1.8vw,1.9rem)] font-normal text-gray-600 transition-smooth hover:text-black"
              >
                Accounts
              </Link>
            </li>
            <li>
              <DropdownMenu trigger="About Us" items={aboutItems} />
            </li>
            <li>
              <DropdownMenu trigger="Tools" items={toolsItems} />
            </li>
            <li>
              <DropdownMenu trigger="Legal" items={legalItems} />
            </li>
            <li>
              <Link
                href="/contact-us"
                className="text-[clamp(1.6rem,1.8vw,1.9rem)] font-normal text-gray-600 transition-smooth hover:text-black"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/*==================== End of Desktop Navigation Menu ====================*/}

        {/*==================== Desktop Action Buttons ====================*/}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="/sign-in"
            className="text-black text-[clamp(1.6rem,1.8vw,1.9rem)] font-normal transition-smooth hover:text-gray-600"
          >
            Sign In
          </Link>
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center px-8 py-4 text-[1.4rem] font-medium text-white bg-black rounded-[3rem] transition-smooth hover:bg-blue-600 hover:-translate-y-[1px]"
          >
            Get Started
          </Link>
        </div>
        {/*==================== End of Desktop Action Buttons ====================*/}

        {/*==================== Mobile Menu Button ====================*/}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative z-50 w-8 h-8 flex flex-col justify-center items-center"
        >
          <span
            className={cn(
              "block w-7 h-0.5 bg-black transition-all duration-300",
              isMobileMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
            )}
          />
          <span
            className={cn(
              "block w-7 h-0.5 bg-black transition-all duration-300",
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            )}
          />
          <span
            className={cn(
              "block w-7 h-0.5 bg-black transition-all duration-300",
              isMobileMenuOpen ? "-rotate-45 -translate-y-0" : "translate-y-2"
            )}
          />
        </button>
        {/*==================== End of Mobile Menu Button ====================*/}
      </div>

      {/*==================== Mobile Dropdown Menu ====================*/}
      <div
        className={cn(
          "lg:hidden bg-white border-t border-gray-200 shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="max-h-[70vh] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-[2rem] font-normal text-gray-600 transition-smooth hover:text-black py-4 px-4 border-b border-gray-200 hover:bg-gray-50"
          >
            Home
          </Link>

          <MobileDropdown trigger="Markets" items={marketsItems} />

          <Link
            href="/accounts"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-[2rem] font-normal text-gray-600 transition-smooth hover:text-black py-4 px-4 border-b border-gray-200 hover:bg-gray-50"
          >
            Accounts
          </Link>

          <MobileDropdown trigger="About Us" items={aboutItems} />
          <MobileDropdown trigger="Tools" items={toolsItems} />
          <MobileDropdown trigger="Legal" items={legalItems} />

          <Link
            href="/contact-us"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block text-[2rem] font-normal text-gray-600 transition-smooth hover:text-black py-4 px-4 border-b border-gray-200 hover:bg-gray-50"
          >
            Contact Us
          </Link>

          <div className="p-4 border-t border-gray-200 bg-gray-50">
            <Link
              href="/sign-in"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center text-black text-[2rem] font-normal transition-smooth hover:text-gray-600 py-3 mb-3"
            >
              Sign In
            </Link>
            <Link
              href="/get-started"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-center px-8 py-4 text-[1.8rem] font-medium text-white bg-black rounded-[3rem] transition-smooth hover:bg-blue-600"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
      {/*==================== End of Mobile Dropdown Menu ====================*/}
    </nav>
  );
};

export default Navigation;
