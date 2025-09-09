import HomeAccountsDetailed from "@/components/home/HomeAccountsDetailed";
import HomeEducationTools from "@/components/home/HomeEducationTools";
import HomeFAQFinalCTA from "@/components/home/HomeFAQFinalCTA";
import HomeMarketsOverview from "@/components/home/HomeMarketsOverview";
import HomeN83FXSystem from "@/components/home/HomeN83FXSystem";
import HomeOperations from "@/components/home/HomeOperations";
import HomeTrustRegulation from "@/components/home/HomeTrustRegulation";
import HeroSection from "@/components/home2/HomeSection";
import WhySection from "@/components/home2/WhySection";
import Layout from "@/components/layout/Layout";
import { N83FXPageMeta } from "@/pageMeta/meta";

const Home = () => {
  return (
    <Layout meta={N83FXPageMeta.homePageMeta}>
      {/*==================== Fixed Video Background ====================*/}
      <div className="fixed inset-0 z-2">
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
        <WhySection />
        <HomeOperations />
        <HomeN83FXSystem />
        <HomeAccountsDetailed />
        <HomeMarketsOverview />
        <HomeEducationTools />
        <HomeTrustRegulation />
        <HomeFAQFinalCTA />
      </div>
      {/*==================== End of Page Content ====================*/}
    </Layout>
  );
};

export default Home;
