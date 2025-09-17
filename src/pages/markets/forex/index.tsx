import ForexHero from "@/components/markets/forex/ForexHero";
import ForexWhatIs from "@/components/markets/forex/ForexWhatIs";
import ForexHistory from "@/components/markets/forex/ForexHistory";
import ForexPairs from "@/components/markets/forex/ForexPairs";
import ForexWhy from "@/components/markets/forex/ForexWhy";
import ForexAdvantage from "@/components/markets/forex/ForexAdvantage";
// import ForexUAE from "@/components/markets/forex/ForexUAE";
import ForexProcess from "@/components/markets/forex/ForexProcess";
import ForexRisk from "@/components/markets/forex/ForexRisk";
import ForexDifference from "@/components/markets/forex/ForexDifference";
import ForexStartJourney from "@/components/markets/forex/ForexStartJourney";
import Layout from "@/components/layout/Layout";
import { N83FXPageMeta } from "@/pageMeta/meta";

const Forex = () => {
  return (
    <Layout meta={N83FXPageMeta.forexMeta}>
      {/*==================== Falling Tech Particles ====================*/}
      <div className="falling__particles"></div>
      {/*==================== End of Falling Tech Particles ====================*/}

      {/*==================== Page Content ====================*/}
      <div className="relative">
        <ForexHero />
        <ForexWhatIs />
        <ForexHistory />
        <ForexPairs />
        <ForexWhy />
        <ForexAdvantage />
        {/* <ForexUAE /> */}
        <ForexProcess />
        <ForexRisk />
        <ForexDifference />
        <ForexStartJourney />
      </div>
    </Layout>
  );
};

export default Forex;
