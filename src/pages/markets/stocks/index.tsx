import Layout from "@/components/layout/Layout";
import StocksWhyDifferent from "@/components/markets/stocks/StocksDifference";
import StocksHero from "@/components/markets/stocks/StocksHero";
import StocksHistory from "@/components/markets/stocks/StocksHistory";
import StocksHowToStart from "@/components/markets/stocks/StocksHowToStart";
import StocksN83Advantage from "@/components/markets/stocks/StocksN83Advantage";
import StocksRisk from "@/components/markets/stocks/StocksRisk";
import StocksStartJourney from "@/components/markets/stocks/StocksStartJourney";
import StocksUAE from "@/components/markets/stocks/StocksUAE";
import StocksWhyTrade from "@/components/markets/stocks/StocksWhyTrade";
import StocksWhatIs from "@/components/markets/stocks/StockWhatIs";

const stocksMeta = {
  title: "Stocks Trading with N83-FX",
  description:
    "Access the world's most recognized companies with a platform built for clarity, simplicity, and respect for your capital.",
  keywords:
    "stocks trading, equities, global companies, UAE stock broker, MetaTrader 5",
};

const Stocks = () => {
  return (
    <Layout meta={stocksMeta}>
      <StocksHero />
      <StocksWhatIs />
      <StocksHistory />
      <StocksWhyTrade />
      <StocksWhyTrade />
      <StocksN83Advantage />
      <StocksUAE />
      <StocksHowToStart />
      <StocksRisk />
      <StocksWhyDifferent />
      <StocksStartJourney />
    </Layout>
  );
};

export default Stocks;
