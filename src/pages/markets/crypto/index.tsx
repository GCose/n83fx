import CryptoHero from "@/components/markets/crypto/CryptoHero";
import CryptoWhatIs from "@/components/markets/crypto/CryptoWhatIs";
import CryptoHistory from "@/components/markets/crypto/CryptoHistory";
import CryptoWhyTrade from "@/components/markets/crypto/CryptoWhy";
import CryptoWhyTradeWithUs from "@/components/markets/crypto/CryptoWhyTrade";
import CryptoN83Advantage from "@/components/markets/crypto/CryptoN83Advantage";
import CryptoUAE from "@/components/markets/crypto/CryptoUAE";
import CryptoHowToTrade from "@/components/markets/crypto/CryptoHowToTrade";
import CryptoManagingRisk from "@/components/markets/crypto/CryptoRiskManagement";
import CryptoWhyDifferent from "@/components/markets/crypto/CryptoDifference";
import CryptoBeginJourney from "@/components/markets/crypto/CryptoStartJourney";
import Layout from "@/components/layout/Layout";

const cryptoMeta = {
  title: "N83-FX | Crypto Trading with N83-FX",
  description:
    "Trade the future of finance with the clarity, transparency, and discipline that this market deserves.",
  keywords:
    "crypto trading, bitcoin, ethereum, digital assets, UAE crypto broker, MetaTrader 5",
};

const Crypto = () => {
  return (
    <Layout meta={cryptoMeta}>
      <CryptoHero />
      <CryptoWhatIs />
      <CryptoHistory />
      <CryptoWhyTrade />
      <CryptoWhyTradeWithUs />
      <CryptoN83Advantage />
      <CryptoUAE />
      <CryptoHowToTrade />
      <CryptoManagingRisk />
      <CryptoWhyDifferent />
      <CryptoBeginJourney />
    </Layout>
  );
};

export default Crypto;
