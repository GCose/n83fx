import CommoditiesHero from "@/components/markets/commodities/CommoditiesHero";
import CommoditiesWhatIs from "@/components/markets/commodities/CommoditiesWhatIs";
import Layout from "@/components/layout/Layout";
import CommoditiesWhyTrade from "@/components/markets/commodities/CommoditesWhyTrade";
import CommoditiesWhyDifferent from "@/components/markets/commodities/CommoditiesDifference";
import CommoditiesN83Advantage from "@/components/markets/commodities/Commoditiesm83Advantage";
import CommoditiesRisk from "@/components/markets/commodities/CommoditiesRisk";
import CommoditiesStartJourney from "@/components/markets/commodities/CommoditiesStartJourney";
import CommoditiesUAE from "@/components/markets/commodities/CommoditiesUAE";
import CommoditiesHistory from "@/components/markets/commodities/CommoditiesHistory";
import CommoditiesWhy from "@/components/markets/commodities/CommoditiesWhy";
import CommoditiesProcess from "@/components/markets/commodities/CommoditesProcess";

const commoditiesMeta = {
  title: "NBA | Commodities Trading with N83-FX",
  description:
    "Diversify your portfolio with energy, metals, and agricultural markets — traded with clarity, transparency, and precision.",
  keywords:
    "commodities trading, energy, metals, agriculture, UAE commodities broker, MetaTrader 5",
};

const Commodities = () => {
  return (
    <Layout meta={commoditiesMeta}>
      <CommoditiesHero />
      <CommoditiesWhatIs />
      <CommoditiesHistory />
      <CommoditiesWhy />
      <CommoditiesWhyTrade />
      <CommoditiesN83Advantage />
      <CommoditiesUAE />
      <CommoditiesProcess />
      <CommoditiesRisk />
      <CommoditiesWhyDifferent />
      <CommoditiesStartJourney />
    </Layout>
  );
};

export default Commodities;
