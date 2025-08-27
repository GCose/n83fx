import AboutN83FXClosing from "@/components/about-us/about-n83fx/AboutN83FXClosing";
import AboutN83FXHero from "@/components/about-us/about-n83fx/AboutN83FXHero";
import AboutN83FXHow from "@/components/about-us/about-n83fx/AboutN83FXHow";
import AboutN83FXIntro from "@/components/about-us/about-n83fx/AboutN83FXIntro";
import AboutN83FXPrinciples from "@/components/about-us/about-n83fx/AboutN83FXPrinciples";
import AboutN83FXWho from "@/components/about-us/about-n83fx/AboutN83FXWho";
import AboutN83FXWhy from "@/components/about-us/about-n83fx/AboutN83FXWhy";
import Layout from "@/components/layout/Layout";
import { N83FXPageMeta } from "@/pageMeta/meta";

const AboutN83FX = () => {
  return (
    <Layout meta={N83FXPageMeta.aboutN83FXMeta}>
      <AboutN83FXHero />
      <AboutN83FXIntro />
      <AboutN83FXWhy />
      <AboutN83FXWho />
      <AboutN83FXHow />
      <AboutN83FXPrinciples />
      <AboutN83FXClosing />
    </Layout>
  );
};

export default AboutN83FX;
