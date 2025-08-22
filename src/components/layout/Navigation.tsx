import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/utils/cn";
import type { NavigationItem, DropdownMenuProps } from "@/types/navigation";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

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
    { href: "/markets/cryptos", label: "Cryptos" },
    { href: "/markets/stocks", label: "Stocks" },
    { href: "/markets/futures", label: "Futures" },
    { href: "/markets/commodities", label: "Commodities" },
    { href: "/markets/metals", label: "Metals" },
  ];

  const aboutItems: NavigationItem[] = [
    { href: "/about/company-info", label: "Company Info" },
    { href: "/about/economic-calendar", label: "Economic Calendar" },
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
      <span className="cursor-pointer text-[1.5rem] font-normal text-gray-600 transition-smooth hover:text-black flex items-center gap-1">
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
              className="block py-2 px-4 text-[1.4rem] text-gray-600 transition-smooth hover:bg-gray-50 hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );

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
          className="flex items-center justify-center gap-4 text-[2rem] font-semibold text-black"
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

        {/*==================== Navigation Menu ====================*/}
        <div className="flex">
          <ul className="flex gap-[clamp(2rem,4vw,4rem)] list-none">
            <li>
              <Link
                href="/"
                className="text-[1.5rem] font-normal text-gray-600 transition-smooth hover:text-black"
              >
                Home
              </Link>
            </li>
            <li>
              <DropdownMenu trigger="Markets" items={marketsItems} />
            </li>
            <li>
              <Link
                href="/account-type"
                className="text-[1.5rem] font-normal text-gray-600 transition-smooth hover:text-black"
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
                className="text-[1.5rem] font-normal text-gray-600 transition-smooth hover:text-black"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/*==================== End of Navigation Menu ====================*/}

        {/*==================== Action Buttons ====================*/}
        <div className="flex items-center gap-8">
          <Link
            href="/sign-in"
            className="text-black text-[1.5rem] font-normal transition-smooth hover:text-gray-600"
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
        {/*==================== End of Action Buttons ====================*/}
      </div>
    </nav>
  );
};

export default Navigation;
