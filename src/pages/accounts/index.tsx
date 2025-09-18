import AccountsComparison from "@/components/accounts/AccountsComparison";
import AccountsHero from "@/components/accounts/AccountsHero";
import AccountsProcess from "@/components/accounts/AccountsProcess";
import AccountsTypes from "@/components/accounts/AccountsType";
import AccountsWhyChoose from "@/components/accounts/AccountsWhyChoose";
import Layout from "@/components/layout/Layout";
import { N83FXPageMeta } from "@/pageMeta/meta";

const Accounts = () => {
  return (
    <Layout meta={N83FXPageMeta.accountsMeta}>
      {/*==================== Fixed Video Background ====================*/}
      <div className="fixed inset-0 z-2 bg-n83-black">
        <video
          loop
          muted
          autoPlay
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/hero-section-2.mp4" type="video/mp4" />
        </video>
      </div>
      {/*==================== End of Fixed Video Background ====================*/}

      {/*==================== Page Content ====================*/}
      <div className="relative z-10">
        <AccountsHero />
        <div className="relative">
          {/*==================== Falling Tech Particles ====================*/}
          <div className="falling__particles"></div>
          {/*==================== End of Falling Tech Particles ====================*/}
          <AccountsTypes />
          <AccountsComparison />
          <AccountsWhyChoose />
          <AccountsProcess />
        </div>
      </div>
    </Layout>
  );
};

export default Accounts;
