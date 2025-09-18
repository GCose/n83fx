const CompanyProfilePolicies = () => {
  const policies = [
    "Terms & Conditions",
    "Risk Disclosure",
    "Best Execution Policy",
    "Privacy Policy",
    "Complaints Handling",
  ];

  return (
    <section className="bg-n83-black py-[clamp(8rem,10vw,12rem)]">
      <div className="w-full max-w-container mx-auto px-container">
        {/*==================== Section Header ====================*/}
        <div className="text-left mb-[clamp(6rem,7vw,8rem)]">
          <h2 className="m-0 font-extrabold leading-[1.2] text-n83-white text-[clamp(5rem,8vw,7rem)] mb-[clamp(2rem,2.5vw,3rem)] uppercase tracking-tight">
            Policies & Disclosures
          </h2>
        </div>
        {/*==================== End of Section Header ====================*/}

        {/*==================== Policies List ====================*/}
        <div className="max-w-[60rem] mx-auto">
          <div className="bg-tranparent border p-[clamp(4rem,5vw,6rem)]">
            <div className="space-y-[clamp(2rem,2.5vw,3rem)]">
              {policies.map((policy, index) => (
                <div
                  key={index}
                  className="border-b border-n83-gray-50 pb-[clamp(1.5rem,2vw,2rem)] last:border-b-0"
                >
                  <h3 className="m-0 font-medium leading-[1.3] text-n83-white text-[clamp(1.6rem,1.8vw,2rem)]">
                    {policy}
                  </h3>
                </div>
              ))}
            </div>
            <div className="mt-[clamp(3rem,4vw,4rem)] pt-[clamp(2rem,2.5vw,2.5rem)] border-t border-n83-gray-50">
              <p className="m-0 font-normal leading-[1.4] text-white/70 text-[clamp(1.4rem,1.6vw,1.6rem)] text-center">
                (Each item links to the live PDF/HTML.)
              </p>
            </div>
          </div>
        </div>
        {/*==================== End of Policies List ====================*/}
      </div>
    </section>
  );
};

export default CompanyProfilePolicies;
