import Image from "next/image";

const DoctorsSection = () => {
  return (
    <div id="doctors-section">
      {/* Hero Section */}
      <section className="py-16 px-6 lg:px-40 bg-white ">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-teal/10 text-accent-teal text-xs font-black mb-6 tracking-widest uppercase">
            <span className="material-symbols-outlined text-sm">verified</span>
            World-Class Clinical Expertise
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6 leading-tight text-primary">
            Meet the Visionaries Behind Your <span className="text-accent-teal italic">Ivory Smile</span>
          </h2>
          <p className="text-lg text-primary/70 font-medium">
            Led by pioneers in modern dentistry, our clinic combines international academic training with 19 years of clinical excellence to deliver unparalleled results in oral healthcare.
          </p>
        </div>
      </section>

      {/* Dr. Alaap Shah Profile */}
      <section className="py-20 px-6 lg:px-40 border-t border-primary/5 bg-background-light ">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/2 relative group">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-gold/20 rounded-xl -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-teal/10 rounded-xl -z-10"></div>
            <div className="aspect-[4/5] bg-gray-200 rounded-xl overflow-hidden shadow-2xl relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD497tf3-Wcw_bVQ3DYcloSle2984VpuOeRO4tXTunshlw-6bz5uPZy6rFa68JL5s-EK4e4YYliDTXCrMOu3xVfvXxiHIYYzzmiBg2-8IQrthrLVY835CDPVtMBM0bW9axaR9EERuKitaMKWEZv619AMBCEFa5qUP7P5RTgewsRDW9kwob88LH-8O1IC1y16dmUCUONCChrjzlCq_HLStFsTcC-okKMkciNcjQXMgMJR_w-tsJkhx8hUJkT9xl3wHW9guTXJgTTkg"
                alt="Dr. Alaap Shah"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur rounded-lg shadow-xl">
                <p className="text-xs font-black text-accent-teal uppercase tracking-widest mb-1">Chief Implantologist</p>
                <h3 className="text-2xl font-black text-primary">Dr. Alaap Shah</h3>
                <p className="text-sm font-medium text-primary/60">BDS, MDS, cED (NYU, USA)</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h4 className="text-primary/40  text-sm font-bold uppercase tracking-widest mb-2">Credentials & Background</h4>
              <p className="text-xl font-medium leading-relaxed mb-6 text-primary/90 ">
                Dr. Alaap Shah is a distinguished <span className="text-primary  font-black underline decoration-accent-teal underline-offset-4">Prosthodontist & Dental Implantologist</span> with over 19 years of excellence. As an Assistant Professor at Ahmedabad Dental College, he bridges the gap between academic innovation and clinical mastery.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-xl bg-white  border border-primary/5 shadow-sm hover:shadow-md transition-shadow">
                  <span className="material-symbols-outlined text-accent-teal text-3xl">school</span>
                  <div>
                    <h5 className="font-bold text-primary">NYU (USA) Certified</h5>
                    <p className="text-sm text-primary/60">Advanced training in Esthetic Dentistry and complex clinical cases.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-xl bg-white  border border-primary/5 shadow-sm hover:shadow-md transition-shadow">
                  <span className="material-symbols-outlined text-accent-gold text-3xl">magnification_small</span>
                  <div>
                    <h5 className="font-bold text-primary">Precision Specialist</h5>
                    <p className="text-sm text-primary/60">Expert in microscopic endodontics and high-precision restorative surgery.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-primary/40  text-sm font-bold uppercase tracking-widest mb-4">Core Specializations</h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "medical_services", label: "Dental Implants" },
                  { icon: "architecture", label: "Full Mouth Rehab" },
                  { icon: "auto_awesome", label: "Cosmetic Dentistry" },
                  { icon: "biotech", label: "Microscopic RCT" },
                ].map((spec) => (
                  <div key={spec.label} className="p-4 bg-primary/5  rounded-lg border border-primary/10 hover:border-accent-teal transition-colors">
                    <span className="material-symbols-outlined text-accent-teal mb-2">{spec.icon}</span>
                    <h6 className="font-bold text-sm text-primary">{spec.label}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <div className="bg-primary/5  py-12 px-6 lg:px-40">
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-70 grayscale hover:grayscale-0 transition-all">
          {[
            { icon: "workspace_premium", label: "ISO 9001:2015 Certified" },
            { icon: "public", label: "NYU trained Expertise" },
            { icon: "history_edu", label: "19+ Years Legacy" },
            { icon: "health_and_safety", label: "International Standards" },
          ].map((badge) => (
            <div key={badge.label} className="flex flex-col items-center">
              <span className="material-symbols-outlined text-4xl mb-2 text-primary">{badge.icon}</span>
              <span className="text-[10px] font-black tracking-widest uppercase text-primary">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Dr. Kinjal Shah Profile */}
      <section className="py-20 px-6 lg:px-40 bg-white  overflow-hidden relative">
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-gold/5 rounded-full blur-3xl"></div>
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-start">
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-[4/5] bg-gray-200 rounded-xl overflow-hidden shadow-2xl relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc02g_CFE6SMR5loRCWFkcXO0i06PldP62iO9mgKYKsec0CpnJFIaH7nHCwt1p1XeVB2DQUrd3iXj50zHdu4IOGklfA8cR-EEG1ptLMobBs9SjIx16EBc7AZVL4iPxhqMXEyGb8nLXnPpHB2a1cXxL8BtwduAUBh_SvgS0EeHw2DG9EYHQrDw2g_tzcFoVNrT7l5sNgeDUTYjhor7Qmas6SeSEjRNYWZImypzV68R0qN1plOW_Y7IWoi8E4-YWqibJPaXi6FAv_w"
                alt="Dr. Kinjal Shah"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur rounded-lg shadow-xl border-l-4 border-accent-gold">
                <p className="text-xs font-black text-accent-gold uppercase tracking-widest mb-1">Aesthetic Specialist</p>
                <h3 className="text-2xl font-black text-primary">Dr. Kinjal Shah</h3>
                <p className="text-sm font-medium text-primary/60">BDS, MDS</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h4 className="text-primary/40  text-sm font-bold uppercase tracking-widest mb-2">Clinical Expertise</h4>
              <p className="text-xl font-medium leading-relaxed mb-6 text-primary/90">
                Dr. Kinjal Shah specializes in <span className="text-accent-teal font-black underline decoration-accent-gold underline-offset-4">Aesthetic Dentistry and Pediatric Care</span>. Her patient-first philosophy focuses on preventive treatments and creating a stress-free environment for families.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-background-light  border border-primary/5">
                  <span className="material-symbols-outlined text-accent-gold text-4xl mb-4">face_6</span>
                  <h5 className="font-bold text-primary  mb-2">Smile Design</h5>
                  <p className="text-sm text-primary/60 ">Crafting personalized aesthetic enhancements using the latest digital technologies.</p>
                </div>
                <div className="p-6 rounded-xl bg-background-light  border border-primary/5">
                  <span className="material-symbols-outlined text-accent-teal text-4xl mb-4">child_care</span>
                  <h5 className="font-bold text-primary  mb-2">Pediatric Care</h5>
                  <p className="text-sm text-primary/60 ">Gentle, specialized dental care designed specifically for children's comfort.</p>
                </div>
              </div>
            </div>
            <div className="bg-primary p-8 rounded-2xl text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 scale-150 transform transition-transform group-hover:rotate-12">
                <span className="material-symbols-outlined text-8xl">verified_user</span>
              </div>
              <h5 className="text-xl font-black mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-accent-gold">stars</span>
                Commitment to Prevention
              </h5>
              <div className="bg-white/10 p-4 rounded-lg text-sm leading-relaxed mb-6 font-medium text-white/80">
                "We believe that the best dentistry is preventive dentistry. Our goal is to empower patients with the knowledge and care needed to maintain natural smiles for a lifetime."
              </div>
              <button className="flex items-center gap-2 bg-accent-gold text-primary font-black text-sm px-6 py-3 rounded-lg hover:scale-105 transition-transform">
                CONSULT DR. KINJAL <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Clinic Environment Section */}
      <section className="py-20 px-6 lg:px-40 bg-background-light ">
        <div className="mb-12 flex items-end justify-between">
          <div className="max-w-2xl">
            <h4 className="text-accent-teal text-xs font-black uppercase tracking-[0.3em] mb-4">State-of-the-Art</h4>
            <h3 className="text-3xl lg:text-4xl font-black text-primary ">International Standard Infrastructure</h3>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-black border-b-2 border-primary  pb-1 text-primary">
            VIRTUAL TOUR <span className="material-symbols-outlined text-sm">open_in_new</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHvmWHJRbp0aGlaUa7_4oBvnepl3msa96-07NgRfRxluh66pN1W6B5cdnGqJ5PnNZui1pwKmsfMSQbi1oLimq7s3Ln-8M_TFwR7_ZfIacwZS2yBnCvcG3wYq2h3WBiAdeE34hPREVFRaAhqABWmeSGjrtxPJJe0CYLa30OsPtfl7sbZaGckP628lBaA-osny1Rc5aOqBJegRrcTXQ_4QXAJ4KHKAaVZpbMCIdOG6dQboTW9dFbgW5f5W0RI5lf1FyH2njo-rzPIg",
              label: "MODERN CONSULTATION SUITE"
            },
            {
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRuz3sjNp43vOzYFS1DtpKx24h9EJ_xpXQmbM61FhJ0jP17Nth8GeGRu4q1xWZVgL8JeEBOk9EzviivCM4KaryqLRUO9nLe9NIawOezbtM-S4JhmTqZw--rQVk64Rd-z_xPrXypyh4TzyfN-5F-wWKFU7rBYjTSQNDMQ_EFpqYYAKPRh_jbd1kUiW7e_8S2wF6G_4rg0uMhKSReuc2D4-dLZlNk7i6JWt3YhY8uY4r-KO5m7jIr5-ecBWO_mSkTJyjU5MPG36qmA",
              label: "MICROSCOPIC PRECISION UNIT"
            },
            {
              src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkJoD8LpRICCBRKViv1O6GzOTl02jCUnRN6qD9HDDMiLdMaIalL1Zk3rq5YqPbnuer3Y2NwGbsZgmHE0sNgX-w4TCLOZQBMAQ2ewxDOXA2w25AbclkUBqegAjUwn7RvyR7EXV8kb150Rm7dPXDjAo7n7tvFColtbWPr7srTt9cji3p47_59ZvzcG8OZYW3977_RvPkJll0l_e0oAIpmMBgOM_THC-nYd-WIVFBJq5ahjvTpmCwKy81vaGOspJNX_PSwuCfElXZ3g",
              label: "ISO-CERTIFIED STERILIZATION ZONE"
            },
          ].map((item) => (
            <div key={item.label} className="aspect-video bg-gray-200 rounded-xl overflow-hidden group relative">
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-sm font-bold tracking-wider">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DoctorsSection;
