import FuturesHero from "@/components/markets/futures/FuturesHero";
import FuturesWhatIs from "@/components/markets/futures/FuturesWhatIs";
import FuturesHistory from "@/components/markets/futures/FuturesHistory";
import FuturesWhyTrade from "@/components/markets/futures/FuturesWhy";
import FuturesWhyTradeWithUs from "@/components/markets/futures/FuturesWhyTrade";
import FuturesN83Advantage from "@/components/markets/futures/FuturesN83Advantage";
// import FuturesUAE from "@/components/markets/futures/FuturesUAE";
import Layout from "@/components/layout/Layout";
import FuturesRisk from "@/components/markets/futures/FuturesRisk";
import FuturesStartJourney from "@/components/markets/futures/FutureStartJourney";
import FuturesDifference from "@/components/markets/futures/FuturesDifference";
import FuturesProcess from "@/components/markets/futures/FuturesProcess";
import { N83FXPageMeta } from "@/pageMeta/meta";

const Futures = () => {
  return (
    <Layout meta={N83FXPageMeta.futuresMeta}>
      <div className="relative">
        {/*==================== Falling Tech Particles ====================*/}
        <div className="falling__particles"></div>
        {/*==================== End of Falling Tech Particles ====================*/}
        <FuturesHero />
        <FuturesWhatIs />
        <FuturesHistory />
        <FuturesWhyTrade />
        <FuturesWhyTradeWithUs />
        <FuturesN83Advantage />
        {/* <FuturesUAE /> */}
        <FuturesProcess />
        <FuturesRisk />
        <FuturesDifference />
        <FuturesStartJourney />
      </div>
    </Layout>
  );
};

export default Futures;
