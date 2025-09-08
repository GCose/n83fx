import HomeAccountsDetailed from "@/components/home/HomeAccountsDetailed";
import HomeEducationTools from "@/components/home/HomeEducationTools";
import HomeFAQFinalCTA from "@/components/home/HomeFAQFinalCTA";
import HomeHero from "@/components/home/HomeHero";
import HomeMarketsOverview from "@/components/home/HomeMarketsOverview";
import HomeN83FXSystem from "@/components/home/HomeN83FXSystem";
import HomeOperations from "@/components/home/HomeOperations";
import HomeTrustRegulation from "@/components/home/HomeTrustRegulation";
import HomeWhyExist from "@/components/home/HomeWhyExist";
import HeroSection from "@/components/home2/HomeSection";
import Layout from "@/components/layout/Layout";
import { N83FXPageMeta } from "@/pageMeta/meta";

const Home = () => {
  return (
    <Layout meta={N83FXPageMeta.homePageMeta}>
      <HeroSection />
      {/* <HomeHero /> */}
      <HomeWhyExist />
      <HomeOperations />
      <HomeN83FXSystem />
      <HomeAccountsDetailed />
      <HomeMarketsOverview />
      <HomeEducationTools />
      <HomeTrustRegulation />
      <HomeFAQFinalCTA />
    </Layout>
  );
};

export default Home;
