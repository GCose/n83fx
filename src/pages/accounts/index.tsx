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
      <AccountsHero />
      <AccountsTypes />
      <AccountsComparison />
      <AccountsWhyChoose />
      <AccountsProcess />
    </Layout>
  );
};

export default Accounts;
