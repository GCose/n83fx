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
      <div className="relative">
        {/*==================== Falling Tech Particles ====================*/}
        <div className="falling__particles"></div>
        {/*==================== End of Falling Tech Particles ====================*/}
        <CompanyProfileHero />
        <CompanyProfileLegal />
        <CompanyProfileProducts />
        <CompanyProfilePolicies />
        <CompanyProfileSupport />
        <CompanyProfileCTA />
      </div>
    </Layout>
  );
};

export default CompanyProfile;
