import FuturesHero from "@/components/markets/futures/FuturesHero";
import FuturesWhatIs from "@/components/markets/futures/FuturesWhatIs";
import FuturesHistory from "@/components/markets/futures/FuturesHistory";
import FuturesWhyTrade from "@/components/markets/futures/FuturesWhyTrade";
import FuturesWhyTradeWithUs from "@/components/markets/futures/FuturesWhyTradeWithUs";
import FuturesN83Advantage from "@/components/markets/futures/FuturesN83Advantage";
import FuturesUAE from "@/components/markets/futures/FuturesUAE";
import FuturesHowToStart from "@/components/markets/futures/FuturesHowToStart";
import FuturesRisk from "@/components/markets/futures/FuturesRisk";
import FuturesWhyDifferent from "@/components/markets/futures/FuturesWhyDifferent";
import FuturesStartJourney from "@/components/markets/futures/FuturesStartJourney";
import Layout from "@/components/layout/Layout";

const futuresMeta = {
  title: "B83-FX | Futures Trading with N83-FX",
  description:
    "Trade global futures contracts with a platform built for clarity, discipline, and respect for your capital.",
  keywords:
    "futures trading, commodities, indices, energy, UAE futures broker, MetaTrader 5",
};

const Futures = () => {
  return (
    <Layout meta={futuresMeta}>
      <FuturesHero />
      <FuturesWhatIs />
      <FuturesHistory />
      <FuturesWhyTrade />
      <FuturesWhyTradeWithUs />
      <FuturesN83Advantage />
      <FuturesUAE />
      <FuturesHowToStart />
      <FuturesRisk />
      <FuturesWhyDifferent />
      <FuturesStartJourney />
    </Layout>
  );
};

export default Futures;
