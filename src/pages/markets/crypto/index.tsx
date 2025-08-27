import CryptoHero from "@/components/markets/crypto/CryptoHero";
import CryptoWhatIs from "@/components/markets/crypto/CryptoWhatIs";
import CryptoHistory from "@/components/markets/crypto/CryptoHistory";
import CryptoWhyTrade from "@/components/markets/crypto/CryptoWhy";
import CryptoWhyTradeWithUs from "@/components/markets/crypto/CryptoWhyTrade";
import CryptoN83Advantage from "@/components/markets/crypto/CryptoN83Advantage";
// import CryptoUAE from "@/components/markets/crypto/CryptoUAE";
import CryptoHowToTrade from "@/components/markets/crypto/CryptoHowToTrade";
import CryptoManagingRisk from "@/components/markets/crypto/CryptoRiskManagement";
import CryptoWhyDifferent from "@/components/markets/crypto/CryptoDifference";
import CryptoBeginJourney from "@/components/markets/crypto/CryptoStartJourney";
import Layout from "@/components/layout/Layout";
import { N83FXPageMeta } from "@/pageMeta/meta";

const Crypto = () => {
  return (
    <Layout meta={N83FXPageMeta.cryptoMeta}>
      <CryptoHero />
      <CryptoWhatIs />
      <CryptoHistory />
      <CryptoWhyTrade />
      <CryptoWhyTradeWithUs />
      <CryptoN83Advantage />
      {/* <CryptoUAE /> */}
      <CryptoHowToTrade />
      <CryptoManagingRisk />
      <CryptoWhyDifferent />
      <CryptoBeginJourney />
    </Layout>
  );
};

export default Crypto;
