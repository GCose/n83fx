import CompanyProfileCTA from "@/components/about-us/company-profile/CompanyProfileCTA";
import CompanyProfileHero from "@/components/about-us/company-profile/CompanyProfileHero";
import CompanyProfileLegal from "@/components/about-us/company-profile/CompanyProfileLegal";
import CompanyProfilePolicies from "@/components/about-us/company-profile/CompanyProfilePolicies";
import CompanyProfileProducts from "@/components/about-us/company-profile/CompanyProfileProducts";
import CompanyProfileSupport from "@/components/about-us/company-profile/CompanyProfileSupport";
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
