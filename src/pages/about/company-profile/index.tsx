import CompanyProfileCTA from "@/components/company-profile/CompanyProfileCTA";
import CompanyProfileHero from "@/components/company-profile/CompanyProfileHero";
import CompanyProfileLegal from "@/components/company-profile/CompanyProfileLegal";
import CompanyProfilePolicies from "@/components/company-profile/CompanyProfilePolicies";
import CompanyProfileProducts from "@/components/company-profile/CompanyProfileProducts";
import CompanyProfileSupport from "@/components/company-profile/CompanyProfileSupport";
import Layout from "@/components/layout/Layout";

const companyProfileMeta = {
  title: "N83-FX | Company Profile",
  description:
    "N83-FX is a boutique multi-asset broker focused on clarity, discipline, and respect for client capital. Licensed and regulated with segregated client funds.",
  keywords:
    "N83-FX company profile, licensed broker, regulated, client funds protection, multi-asset trading",
};

const CompanyProfile = () => {
  return (
    <Layout meta={companyProfileMeta}>
      <CompanyProfileHero />
      <CompanyProfileLegal />
      <CompanyProfileProducts />
      <CompanyProfilePolicies />
      <CompanyProfileSupport />
      <CompanyProfileCTA />
    </Layout>
  );
};

export default CompanyProfile;
