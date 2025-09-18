import IndicesHero from "@/components/markets/indices/IndicesHero";
import IndicesWhatIs from "@/components/markets/indices/IndicesWhatIs";
import IndicesHistory from "@/components/markets/indices/IndicesHistory";
import IndicesWhy from "@/components/markets/indices/IndicesWhy";
import IndicesWhyTrade from "@/components/markets/indices/IndicesWhyTrade";
import IndicesN83Advantage from "@/components/markets/indices/IndicesN83Advantage";
// import IndicesUAE from "@/components/markets/indices/IndicesUAE";
import IndicesProcess from "@/components/markets/indices/IndicesProcess";
import IndicesRiskManagement from "@/components/markets/indices/IndicesRisk";
import IndicesDifference from "@/components/markets/indices/IndicesDifference";
import IndicesStartJourney from "@/components/markets/indices/IndicesStartJourney";
import Layout from "@/components/layout/Layout";
import { N83FXPageMeta } from "@/pageMeta/meta";

const Indices = () => {
  return (
    <Layout meta={N83FXPageMeta.indicesMeta}>
      <div className="relative">
        {/*==================== Falling Tech Particles ====================*/}
        <div className="falling__particles"></div>
        {/*==================== End of Falling Tech Particles ====================*/}
        <IndicesHero />
        <IndicesWhatIs />
        <IndicesHistory />
        <IndicesWhy />
        <IndicesWhyTrade />
        <IndicesN83Advantage />
        {/* <IndicesUAE /> */}
        <IndicesProcess />
        <IndicesRiskManagement />
        <IndicesDifference />
        <IndicesStartJourney />
      </div>
    </Layout>
  );
};

export default Indices;
