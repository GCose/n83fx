import AccountsComparison from "@/components/accounts/AccountsComparison";
import AccountsHero from "@/components/accounts/AccountsHero";
import AccountsProcess from "@/components/accounts/AccountsProcess";
import AccountsTypes from "@/components/accounts/AccountsType";
import AccountsWhyChoose from "@/components/accounts/AccountsWhyChoose";
import Layout from "@/components/layout/Layout";

const accountsMeta = {
  title: "N83-FX | Our Accounts in Detail",
  description:
    "Choose from Standard, Advanced, Pro, or Islamic accounts. Simple structure, full transparency, and respect for traders at every level.",
  keywords:
    "N83-FX accounts, Standard account, Advanced account, Pro account, Islamic account, swap-free trading, MetaTrader 5",
};

const Accounts = () => {
  return (
    <Layout meta={accountsMeta}>
      <AccountsHero />
      <AccountsTypes />
      <AccountsComparison />
      <AccountsWhyChoose />
      <AccountsProcess />
    </Layout>
  );
};

export default Accounts;
