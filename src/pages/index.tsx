import BuiltAround from "@/components/home/BuiltAround";
import Hero from "@/components/home/Hero";
import TradingOptions from "@/components/home/TradingOptions";
import WhyChoose from "@/components/home/WhyChoose";
import YoureInControl from "@/components/home/YourInControl";
import Layout from "@/components/layout/Layout";
import { N83FXPageMeta } from "@/pageMeta/meta";

const Home = () => {
  return (
    <Layout meta={N83FXPageMeta.homePage}>
      <Hero />
      <TradingOptions />
      <WhyChoose />
      <BuiltAround />
      <YoureInControl />
    </Layout>
  );
};

export default Home;
