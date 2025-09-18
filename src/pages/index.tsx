import Layout from "@/components/layout/Layout";
import { N83FXPageMeta } from "@/pageMeta/meta";
import WhySection from "@/components/home2/WhySection";
import CTASection from "@/components/home2/CTASection";
import FAQSection from "@/components/home2/FAQSection";
import HeroSection from "@/components/home2/HomeSection";
import TrustSection from "@/components/home2/TrustSection";
import ValueSection from "@/components/home2/ValueSection";
import AccountsSection from "@/components/home2/AccountsSection";
import SpeedSilenceSection from "@/components/home2/SpeedSection";

const Home = () => {
  return (
    <Layout meta={N83FXPageMeta.homePageMeta}>
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
          <FAQSection />
          <CTASection />
        </div>
      </div>
      {/*==================== End of Page Content ====================*/}
    </Layout>
  );
};

export default Home;
