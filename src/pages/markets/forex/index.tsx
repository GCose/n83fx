import ForexHero from "@/components/markets/forex/ForexHero";
import ForexWhatIs from "@/components/markets/forex/ForexWhatIs";
import ForexHistory from "@/components/markets/forex/ForexHistory";
import ForexPairs from "@/components/markets/forex/ForexPairs";
import ForexWhy from "@/components/markets/forex/ForexWhy";
import ForexAdvantage from "@/components/markets/forex/ForexAdvantage";
import ForexUAE from "@/components/markets/forex/ForexUAE";
import ForexProcess from "@/components/markets/forex/ForexProcess";
import ForexRisk from "@/components/markets/forex/ForexRisk";
import ForexDifference from "@/components/markets/forex/ForexDifference";
import ForexStartJourney from "@/components/markets/forex/ForexStartJourney";
import Layout from "@/components/layout/Layout";

const forexMeta = {
  title: "N83-FX | Forex Trading with Clarity™ ",
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
      <ForexPairs />
      <ForexWhy />
      <ForexAdvantage />
      <ForexUAE />
      <ForexProcess />
      <ForexRisk />
      <ForexDifference />
      <ForexStartJourney />
    </Layout>
  );
};

export default Forex;
