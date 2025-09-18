import Layout from "@/components/layout/Layout";
import StocksWhyDifferent from "@/components/markets/stocks/StocksDifference";
import StocksHero from "@/components/markets/stocks/StocksHero";
import StocksHistory from "@/components/markets/stocks/StocksHistory";
import StocksProcess from "@/components/markets/stocks/StocksProcess";
import StocksN83Advantage from "@/components/markets/stocks/StocksN83Advantage";
import StocksRisk from "@/components/markets/stocks/StocksRisk";
import StocksStartJourney from "@/components/markets/stocks/StocksStartJourney";
// import StocksUAE from "@/components/markets/stocks/StocksUAE";
import StocksWhy from "@/components/markets/stocks/StocksWhy";
import StocksWhyTrade from "@/components/markets/stocks/StocksWhyTrade";
import StocksWhatIs from "@/components/markets/stocks/StockWhatIs";
import { N83FXPageMeta } from "@/pageMeta/meta";

const Stocks = () => {
  return (
    <Layout meta={N83FXPageMeta.stocksMeta}>
      <div className="relative">
        {/*==================== Falling Tech Particles ====================*/}
        <div className="falling__particles"></div>
        {/*==================== End of Falling Tech Particles ====================*/}
        <StocksHero />
        <StocksWhatIs />
        <StocksHistory />
        <StocksWhy />
        <StocksWhyTrade />
        <StocksN83Advantage />
        {/* <StocksUAE /> */}
        <StocksProcess />
        <StocksRisk />
        <StocksWhyDifferent />
        <StocksStartJourney />
      </div>
    </Layout>
  );
};

export default Stocks;
