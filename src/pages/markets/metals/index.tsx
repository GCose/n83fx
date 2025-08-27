import Layout from "@/components/layout/Layout";
import MetalsDifference from "@/components/markets/metals/MetalsDifference";
import MetalsHero from "@/components/markets/metals/MetalsHero";
import MetalsHistory from "@/components/markets/metals/MetalsHistory";
import MetalsN83Advantage from "@/components/markets/metals/MetalsN83Advantage";
import MetalsProcess from "@/components/markets/metals/MetalsProcess";
import MetalsRisk from "@/components/markets/metals/MetalsRisk";
import MetalsStartJourney from "@/components/markets/metals/MetalsStartJourney";
// import MetalsUAE from "@/components/markets/metals/MetalsUAE";
import MetalsWhatIs from "@/components/markets/metals/MetalsWhatIs";
import MetalsWhy from "@/components/markets/metals/MetalsWhy";
import MetalsWhyTrade from "@/components/markets/metals/MetalsWhyTrade";
import { N83FXPageMeta } from "@/pageMeta/meta";

const Metals = () => {
  return (
    <Layout meta={N83FXPageMeta.metalsMeta}>
      <MetalsHero />
      <MetalsWhatIs />
      <MetalsHistory />
      <MetalsWhy />
      <MetalsWhyTrade />
      <MetalsN83Advantage />
      {/* <MetalsUAE /> */}
      <MetalsProcess />
      <MetalsRisk />
      <MetalsDifference />
      <MetalsStartJourney />
    </Layout>
  );
};

export default Metals;
