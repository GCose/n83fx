import StocksHero from "@/components/markets/stocks/StocksHero";
import StocksWhatIs from "@/components/markets/stocks/StocksWhatIs";
import StocksHistory from "@/components/markets/stocks/StocksHistory";
import StocksWhyTrade from "@/components/markets/stocks/StocksWhyTrade";
import StocksWhyTradeWithUs from "@/components/markets/stocks/StocksWhyTradeWithUs";
import StocksN83Advantage from "@/components/markets/stocks/StocksN83Advantage";
import StocksUAE from "@/components/markets/stocks/StocksUAE";
import StocksHowToStart from "@/components/markets/stocks/StocksHowToStart";
import StocksRiskAndResponsibility from "@/components/markets/stocks/StocksRiskAndResponsibility";
import StocksWhyDifferent from "@/components/markets/stocks/StocksWhyDifferent";
import StocksStartJourney from "@/components/markets/stocks/StocksStartJourney";
import Layout from "@/components/layout/Layout";

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
      <StocksWhyTradeWithUs />
      <StocksN83Advantage />
      <StocksUAE />
      <StocksHowToStart />
      <StocksRiskAndResponsibility />
      <StocksWhyDifferent />
      <StocksStartJourney />
    </Layout>
  );
};

export default Stocks;
