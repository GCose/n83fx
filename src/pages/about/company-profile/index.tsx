import CompanyProfileCTA from "@/components/about-us/company-profile/CompanyProfileCTA";
import CompanyProfileHero from "@/components/about-us/company-profile/CompanyProfileHero";
import CompanyProfileLegal from "@/components/about-us/company-profile/CompanyProfileLegal";
import CompanyProfilePolicies from "@/components/about-us/company-profile/CompanyProfilePolicies";
import CompanyProfileProducts from "@/components/about-us/company-profile/CompanyProfileProducts";
import CompanyProfileSupport from "@/components/about-us/company-profile/CompanyProfileSupport";
import Layout from "@/components/layout/Layout";
import { N83FXPageMeta } from "@/pageMeta/meta";

const CompanyProfile = () => {
  return (
    <Layout meta={N83FXPageMeta.companyProfileMeta}>
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
