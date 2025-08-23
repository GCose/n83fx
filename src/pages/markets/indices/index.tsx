import IndicesHero from "@/components/markets/indices/IndicesHero";
import IndicesWhatIs from "@/components/markets/indices/IndicesWhatIs";
import IndicesHistory from "@/components/markets/indices/IndicesHistory";
import IndicesWhy from "@/components/markets/indices/IndicesWhy";
import IndicesWhyTrade from "@/components/markets/indices/IndicesWhyTrade";
import IndicesN83Advantage from "@/components/markets/indices/IndicesN83Advantage";
import IndicesUAE from "@/components/markets/indices/IndicesUAE";
import IndicesProcess from "@/components/markets/indices/IndicesProcess";
import IndicesRiskManagement from "@/components/markets/indices/IndicesRisk";
import IndicesDifference from "@/components/markets/indices/IndicesDifference";
import IndicesStartJourney from "@/components/markets/indices/IndicesStartJourney";
import Layout from "@/components/layout/Layout";

const indicesMeta = {
  title: "N83-FX | Indices Trading with N83-FX",
  description:
    "Trade the performance of global markets through carefully selected stock indices — with clarity, transparency, and discipline.",
  keywords:
    "indices trading, S&P 500, Dow Jones, FTSE 100, DAX 40, Nikkei 225, UAE indices broker, MetaTrader 5",
};

const Indices = () => {
  return (
    <Layout meta={indicesMeta}>
      <IndicesHero />
      <IndicesWhatIs />
      <IndicesHistory />
      <IndicesWhy />
      <IndicesWhyTrade />
      <IndicesN83Advantage />
      <IndicesUAE />
      <IndicesProcess />
      <IndicesRiskManagement />
      <IndicesDifference />
      <IndicesStartJourney />
    </Layout>
  );
};

export default Indices;
