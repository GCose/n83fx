import AboutN83FXClosing from "@/components/about-us/about-n83fx/AboutN83FXClosing";
import AboutN83FXHero from "@/components/about-us/about-n83fx/AboutN83FXHero";
import AboutN83FXHow from "@/components/about-us/about-n83fx/AboutN83FXHow";
import AboutN83FXIntro from "@/components/about-us/about-n83fx/AboutN83FXIntro";
import AboutN83FXPrinciples from "@/components/about-us/about-n83fx/AboutN83FXPrinciples";
import AboutN83FXWho from "@/components/about-us/about-n83fx/AboutN83FXWho";
import AboutN83FXWhy from "@/components/about-us/about-n83fx/AboutN83FXWhy";
import Layout from "@/components/layout/Layout";
import { N83FXPageMeta } from "@/pageMeta/meta";

const AboutN83FX = () => {
  return (
    <Layout meta={N83FXPageMeta.aboutN83FXMeta}>
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

      <div className="relative z-10 backdrop-blur-sm  ">
        <AboutN83FXHero />
        <AboutN83FXIntro />
        <div className="relative">
          {/*==================== Falling Tech Particles ====================*/}
          <div className="falling__particles"></div>
          {/*==================== End of Falling Tech Particles ====================*/}
          <AboutN83FXWhy />
          <AboutN83FXWho />
          <AboutN83FXHow />
          <AboutN83FXPrinciples />
          <AboutN83FXClosing />
        </div>
      </div>
    </Layout>
  );
};

export default AboutN83FX;
