import Head from "next/head";
import Navigation from "./Navigation";
import Footer from "./Footer";
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
      <main className="mx-auto max-w-container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
