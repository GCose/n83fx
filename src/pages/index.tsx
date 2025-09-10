import AccountsSection from "@/components/home2/AccountsSection";
import FAQSection from "@/components/home2/FAQSection";
import HeroSection from "@/components/home2/HomeSection";
import SpeedSilenceSection from "@/components/home2/SpeedSection";
import TrustSection from "@/components/home2/TrustSection";
import ValueSection from "@/components/home2/ValueSection";
import WhySection from "@/components/home2/WhySection";
import Layout from "@/components/layout/Layout";
import { N83FXPageMeta } from "@/pageMeta/meta";

const Home = () => {
  return (
    <Layout meta={N83FXPageMeta.homePageMeta}>
      {/*==================== Fixed Video Background ====================*/}
      <div className="fixed inset-0 z-2 bg-n83-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero-section-2.mp4" type="video/mp4" />
        </video>
      </div>
      {/*==================== End of Fixed Video Background ====================*/}

      {/*==================== Page Content ====================*/}
      <div className="relative z-10">
        <HeroSection />
        <div className="relative">
          {/*==================== Falling Tech Particles ====================*/}
          <div className="falling__particles"></div>
          {/*==================== End of Falling Tech Particles ====================*/}
          <WhySection />
          <ValueSection />
          <AccountsSection />
          <SpeedSilenceSection />
          <TrustSection />
        </div>
        <FAQSection />
      </div>
      {/*==================== End of Page Content ====================*/}
    </Layout>
  );
};

export default Home;
