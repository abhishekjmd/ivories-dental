import type { Metadata } from "next";
import FloatingActions from "@/components/home/FloatingActions";

export const metadata: Metadata = {
  title: "About Us | Expert Dentists at Ivories Dental Clinic",
  description:
    "Meet Dr. Alaap Shah and Dr. Kinjal Shah, the visionaries behind Ivories Dental Clinic. With 19+ years of experience and NYU training, we provide world-class dental care in Ahmedabad.",
};

const trustBadges = [
  {
    icon: "workspace_premium",
    label: "ISO 9001:2015 Certified",
  },
  {
    icon: "public",
    label: "NYU Trained Expertise",
  },
  {
    icon: "history_edu",
    label: "19+ Years Legacy",
  },
  {
    icon: "health_and_safety",
    label: "International Standards",
  },
];

const specializations = [
  { icon: "medical_services", title: "Dental Implants" },
  { icon: "architecture", title: "Full Mouth Rehab" },
  { icon: "auto_awesome", title: "Cosmetic Dentistry" },
  { icon: "biotech", title: "Microscopic RCT" },
];

const infraGallery = [
  {
    alt: "Modern dental clinic consultation room with advanced equipment",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHvmWHJRbp0aGlaUa7_4oBvnepl3msa96-07NgRfRxluh66pN1W6B5cdnGqJ5PnNZui1pwKmsfMSQbi1oLimq7s3Ln-8M_TFwR7_ZfIacwZS2yBnCvcG3wYq2h3WBiAdeE34hPREVFRaAhqABWmeSGjrtxPJJe0CYLa30OsPtfl7sbZaGckP628lBaA-osny1Rc5aOqBJegRrcTXQ_4QXAJ4KHKAaVZpbMCIdOG6dQboTW9dFbgW5f5W0RI5lf1FyH2njo-rzPIg",
    caption: "MODERN CONSULTATION SUITE",
  },
  {
    alt: "High-tech dental microscope for root canal procedures",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRuz3sjNp43vOzYFS1DtpKx24h9EJ_xpXQmbM61FhJ0jP17Nth8GeGRu4q1xWZVgL8JeEBOk9EzviivCM4KaryqLRUO9nLe9NIawOezbtM-S4JhmTqZw--rQVk64Rd-z_xPrXypyh4TzyfN-5F-wWKFU7rBYjTSQNDMQ_EFpqYYAKPRh_jbd1kUiW7e_8S2wF6G_4rg0uMhKSReuc2D4-dLZlNk7i6JWt3YhY8uY4r-KO5m7jIr5-ecBWO_mSkTJyjU5MPG36qmA",
    caption: "MICROSCOPIC PRECISION UNIT",
  },
  {
    alt: "Advanced dental sterilization and laboratory area",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkJoD8LpRICCBRKViv1O6GzOTl02jCUnRN6qD9HDDMiLdMaIalL1Zk3rq5YqPbnuer3Y2NwGbsZgmHE0sNgX-w4TCLOZQBMAQ2ewxDOXA2w25AbclkUBqegAjUwn7RvyR7EXV8kb150Rm7dPXDjAo7n7tvFColtbWPr7srTt9cji3p47_59ZvzcG8OZYW3977_RvPkJll0l_e0oAIpmMBgOM_THC-nYd-WIVFBJq5ahjvTpmCwKy81vaGOspJNX_PSwuCfElXZ3g",
    caption: "ISO-CERTIFIED STERILIZATION ZONE",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#f7f6f8] text-[#200b3c]">
      <section id="treatments" className="bg-white px-6 py-16 lg:px-40">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#24B9D7]/10 px-4 py-1.5 text-xs font-black tracking-widest text-[#24B9D7] uppercase">
            <span className="material-symbols-outlined text-sm">verified</span>
            World-Class Clinical Expertise
          </div>
          <h1 className="mb-6 text-4xl leading-tight font-black lg:text-6xl">
            Meet the Visionaries Behind Your
            <span className="text-[#24B9D7] italic"> Ivory Smile</span>
          </h1>
          <p className="text-lg font-medium text-[#200b3c]/70">
            Led by pioneers in modern dentistry, our clinic combines
            international academic training with 19 years of clinical
            excellence to deliver unparalleled results in oral healthcare.
          </p>
        </div>
      </section>

      <section className="border-t border-[#200b3c]/5 px-6 py-20 lg:px-40">
        <div className="flex flex-col items-start gap-16 lg:flex-row">
          <div className="group relative w-full lg:w-1/2">
            <div className="absolute -top-4 -left-4 -z-10 h-24 w-24 rounded-xl bg-[#F7BB00]/20 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="absolute -right-4 -bottom-4 -z-10 h-32 w-32 rounded-xl bg-[#24B9D7]/10" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-200 shadow-2xl">
              <img
                alt="Dr. Alaap Shah"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD497tf3-Wcw_bVQ3DYcloSle2984VpuOeRO4tXTunshlw-6bz5uPZy6rFa68JL5s-EK4e4YYliDTXCrMOu3xVfvXxiHIYYzzmiBg2-8IQrthrLVY835CDPVtMBM0bW9axaR9EERuKitaMKWEZv619AMBCEFa5qUP7P5RTgewsRDW9kwob88LH-8O1IC1y16dmUCUONCChrjzlCq_HLStFsTcC-okKMkciNcjQXMgMJR_w-tsJkhx8hUJkT9xl3wHW9guTXJgTTkg"
              />
              <div className="absolute right-6 bottom-6 left-6 rounded-lg bg-white/90 p-6 shadow-xl backdrop-blur">
                <p className="mb-1 text-xs font-black tracking-widest text-[#24B9D7] uppercase">
                  Chief Implantologist
                </p>
                <h2 className="text-2xl font-black text-[#200b3c]">Dr. Alaap Shah</h2>
                <p className="text-sm font-medium text-[#200b3c]/60">
                  BDS, MDS, cED (NYU, USA)
                </p>
              </div>
            </div>
          </div>

          <div className="w-full space-y-8 lg:w-1/2">
            <div>
              <h3 className="mb-2 text-sm font-bold tracking-widest text-[#200b3c]/40 uppercase">
                Credentials and Background
              </h3>
              <p className="mb-6 text-xl leading-relaxed font-medium text-[#200b3c]/90">
                Dr. Alaap Shah is a distinguished
                <span className="font-black text-[#200b3c] underline decoration-[#24B9D7] underline-offset-4">
                  {" "}
                  Prosthodontist and Dental Implantologist
                </span>
                with over 19 years of excellence. As an Assistant Professor at
                Ahmedabad Dental College, he bridges the gap between academic
                innovation and clinical mastery.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 rounded-xl border border-[#200b3c]/5 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                  <span className="material-symbols-outlined text-3xl text-[#24B9D7]">
                    school
                  </span>
                  <div>
                    <h4 className="font-bold text-[#200b3c]">NYU (USA) Certified</h4>
                    <p className="text-sm text-[#200b3c]/60">
                      Advanced training in Esthetic Dentistry and complex
                      clinical cases.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-xl border border-[#200b3c]/5 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
                  <span className="material-symbols-outlined text-3xl text-[#F7BB00]">
                    magnification_small
                  </span>
                  <div>
                    <h4 className="font-bold text-[#200b3c]">Precision Specialist</h4>
                    <p className="text-sm text-[#200b3c]/60">
                      Expert in microscopic endodontics and high-precision
                      restorative surgery.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-bold tracking-widest text-[#200b3c]/40 uppercase">
                Core Specializations
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {specializations.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-lg border border-[#200b3c]/10 bg-[#200b3c]/5 p-4 transition-colors hover:border-[#24B9D7]"
                  >
                    <span className="material-symbols-outlined mb-2 text-[#24B9D7]">
                      {item.icon}
                    </span>
                    <p className="text-sm font-bold">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#200b3c]/5 px-6 py-12 lg:px-40">
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-70 grayscale transition-all hover:grayscale-0 lg:gap-24">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="flex flex-col items-center">
              <span className="material-symbols-outlined mb-2 text-4xl text-[#200b3c]">
                {badge.icon}
              </span>
              <span className="text-[10px] font-black tracking-widest uppercase">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-white px-6 py-20 lg:px-40">
        <div className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-[#24B9D7]/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#F7BB00]/5 blur-3xl" />

        <div className="relative flex flex-col items-start gap-16 lg:flex-row-reverse">
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-200 shadow-2xl">
              <img
                alt="Dr. Kinjal Shah"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc02g_CFE6SMR5loRCWFkcXO0i06PldP62iO9mgKYKsec0CpnJFIaH7nHCwt1p1XeVB2DQUrd3iXj50zHdu4IOGklfA8cR-EEG1ptLMobBs9SjIx16EBc7AZVL4iPxhqMXEyGb8nLXnPpHB2a1cXxL8BtwduAUBh_SvgS0EeHw2DG9EYHQrDw2g_tzcFoVNrT7l5sNgeDUTYjhor7Qmas6SeSEjRNYWZImypzV68R0qN1plOW_Y7IWoi8E4-YWqibJPaXi6FAv_w"
              />
              <div className="absolute right-6 bottom-6 left-6 rounded-lg border-l-4 border-[#F7BB00] bg-white/90 p-6 shadow-xl backdrop-blur">
                <p className="mb-1 text-xs font-black tracking-widest text-[#F7BB00] uppercase">
                  Aesthetic Specialist
                </p>
                <h2 className="text-2xl font-black text-[#200b3c]">Dr. Kinjal Shah</h2>
                <p className="text-sm font-medium text-[#200b3c]/60">BDS, MDS</p>
              </div>
            </div>
          </div>

          <div className="w-full space-y-8 lg:w-1/2">
            <div>
              <h3 className="mb-2 text-sm font-bold tracking-widest text-[#200b3c]/40 uppercase">
                Clinical Expertise
              </h3>
              <p className="mb-6 text-xl leading-relaxed font-medium text-[#200b3c]/90">
                Dr. Kinjal Shah specializes in
                <span className="font-black text-[#24B9D7] underline decoration-[#F7BB00] underline-offset-4">
                  {" "}
                  Aesthetic Dentistry and Pediatric Care
                </span>
                . Her patient-first philosophy focuses on preventive treatments
                and creating a stress-free environment for families.
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-[#200b3c]/5 bg-[#f7f6f8] p-6">
                  <span className="material-symbols-outlined mb-4 text-4xl text-[#F7BB00]">
                    face_6
                  </span>
                  <h4 className="mb-2 font-bold text-[#200b3c]">Smile Design</h4>
                  <p className="text-sm text-[#200b3c]/60">
                    Crafting personalized aesthetic enhancements using the
                    latest digital technologies.
                  </p>
                </div>
                <div className="rounded-xl border border-[#200b3c]/5 bg-[#f7f6f8] p-6">
                  <span className="material-symbols-outlined mb-4 text-4xl text-[#24B9D7]">
                    child_care
                  </span>
                  <h4 className="mb-2 font-bold text-[#200b3c]">Pediatric Care</h4>
                  <p className="text-sm text-[#200b3c]/60">
                    Gentle, specialized dental care designed specifically for
                    children&apos;s comfort.
                  </p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-[#200b3c] p-8 text-white">
              <div className="absolute top-0 right-0 scale-150 p-4 opacity-10 transition-transform group-hover:rotate-12">
                <span className="material-symbols-outlined text-8xl">verified_user</span>
              </div>
              <h4 className="mb-4 flex items-center gap-2 text-xl font-black">
                <span className="material-symbols-outlined text-[#F7BB00]">stars</span>
                Commitment to Prevention
              </h4>
              <p className="mb-6 rounded-lg bg-white/10 p-4 text-sm leading-relaxed font-medium text-white/80">
                &ldquo;We believe that the best dentistry is preventive dentistry.
                Our goal is to empower patients with the knowledge and care
                needed to maintain natural smiles for a lifetime.&rdquo;
              </p>
              <a
                href="https://wa.me/919825571401"
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-lg bg-[#F7BB00] px-6 py-3 text-sm font-black text-[#200b3c] transition-transform hover:scale-105"
              >
                CONSULT DR. KINJAL
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f8] px-6 py-20 lg:px-40">
        <div className="mb-12 flex items-end justify-between">
          <div className="max-w-2xl">
            <h3 className="mb-4 text-xs font-black tracking-[0.3em] text-[#24B9D7] uppercase">
              State-of-the-Art
            </h3>
            <h2 className="text-3xl font-black lg:text-4xl">
              International Standard Infrastructure
            </h2>
          </div>
          <button className="hidden items-center gap-2 border-b-2 border-[#200b3c] pb-1 text-sm font-black md:flex">
            VIRTUAL TOUR
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {infraGallery.map((item) => (
            <div
              key={item.caption}
              className="group relative aspect-video overflow-hidden rounded-xl bg-gray-200"
            >
              <img
                alt={item.alt}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={item.src}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#200b3c]/80 to-transparent p-6 opacity-0 transition-opacity group-hover:opacity-100">
                <p className="text-sm font-bold tracking-wider text-white">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FloatingActions />
    </main>
  );
}

