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

  const investingItems: NavigationItem[] = [
    { href: "/investing/forex", label: "Forex" },
    { href: "/investing/cryptos", label: "Cryptos" },
    { href: "/investing/stocks", label: "Stocks" },
    { href: "/investing/futures", label: "Futures" },
    { href: "/investing/commodities", label: "Commodities" },
    { href: "/investing/metals", label: "Metals" },
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
      <span className="cursor-pointer text-[1.5rem] font-normal text-n83-gray-600 transition-smooth hover:text-n83-black">
        {trigger}
      </span>
      <div className="invisible absolute top-full left-0 z-50 min-w-[20rem] rounded-lg bg-n83-white p-4 shadow-lg group-hover:visible">
        {items.map((item: NavigationItem) => (
          <Link
            key={item.href}
            href={item.href}
            className="block py-2 px-4 text-[1.4rem] text-n83-gray-600 transition-smooth hover:bg-n83-gray-50 hover:text-n83-black"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] backdrop-blur-[10px] border-b transition-all duration-300",
        isScrolled
          ? "bg-n83-white/98 border-n83-black/10 shadow-sm"
          : "bg-n83-white/95 border-n83-black/5"
      )}
    >
      <div className="h-[7rem] flex items-center justify-between mx-auto px-container">
        {/*==================== Logo ====================*/}
        <Link
          href="/"
          className="flex items-center justify-center gap-4 text-[2rem] font-semibold text-n83-black"
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
        <div className="hidden lg:block">
          <ul className="flex gap-[clamp(2rem,calc(4vw + 0.5rem),4rem)] list-none">
            <li>
              <Link
                href="/"
                className="text-[1.5rem] font-normal text-n83-gray-600 transition-smooth hover:text-n83-black"
              >
                Home
              </Link>
            </li>
            <li>
              <DropdownMenu trigger="Investing" items={investingItems} />
            </li>
            <li>
              <Link
                href="/account-type"
                className="text-[1.5rem] font-normal text-n83-gray-600 transition-smooth hover:text-n83-black"
              >
                Account Type
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
                className="text-[1.5rem] font-normal text-n83-gray-600 transition-smooth hover:text-n83-black"
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
            className="hidden md:block text-n83-black text-[1.5rem] font-normal transition-smooth hover:text-n83-gray-600"
          >
            Sign In
          </Link>
          <Link
            href="/get-started"
            className="inline-flex items-center justify-center px-8 py-4 text-[1.4rem] font-medium text-n83-white bg-n83-black rounded-[3rem] transition-smooth hover:bg-n83-blue hover:-translate-y-[1px]"
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
