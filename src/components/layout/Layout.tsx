import Head from "next/head";
import Footer from "./Footer";
import Navigation from "./Navigation";
import type { LayoutProps } from "@/types/index";

const Layout = ({ children, meta }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {meta.keywords && <meta name="keywords" content={meta.keywords} />}
        {meta.image && <meta property="og:image" content={meta.image} />}
        {meta.url && <meta property="og:url" content={meta.url} />}
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        {meta.image && <meta name="twitter:image" content={meta.image} />}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="icon"
          type="image/x-icon"
          href="/images/logos/logo-light.png"
        />
      </Head>

      <Navigation />
      {/*==================== Fixed Video Background ====================*/}
      <div className="fixed inset-0 z-2 bg-n83-black">
        <video
          loop
          muted
          autoPlay
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero-section-2.mp4" type="video/mp4" />
        </video>
      </div>
      {/*==================== End of Fixed Video Background ====================*/}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
