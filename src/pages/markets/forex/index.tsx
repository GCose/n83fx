import Layout from "@/components/layout/Layout";
import ForexAdvantage from "@/components/markets/forex/ForexAdvantage";
import ForexHero from "@/components/markets/forex/ForexHero";
import ForexHistory from "@/components/markets/forex/ForexHistory";
import ForexProcess from "@/components/markets/forex/ForexProcess";
import ForexRisk from "@/components/markets/forex/ForexRisk";
import ForexWhatIs from "@/components/markets/forex/ForexWhatIs";

const forexMeta = {
  title: "N83-FX | Forex Trading with Clarity™",
  description:
    "Trade the world's most liquid market through a platform built on simplicity, transparency, and focus. Over $6 trillion traded daily.",
  keywords:
    "forex trading, currency pairs, FX trading, UAE forex broker, MetaTrader 5",
};

const Forex = () => {
  return (
    <Layout meta={forexMeta}>
      <ForexHero />
      <ForexWhatIs />
      <ForexHistory />
      <ForexProcess />
      <ForexAdvantage />
      <ForexRisk />
    </Layout>
  );
};

export default Forex;
