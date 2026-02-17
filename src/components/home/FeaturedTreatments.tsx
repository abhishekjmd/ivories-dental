import Link from "next/link";

const treatments = [
  {
    title: "Painfree RCT",
    href: "/treatments/root-canal-treatment",
    description:
      "Single visit root canal therapy using precision rotary instruments for zero discomfort.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFCotbTxyPb8AV2nv94pA-VKLcuwS6gB4XGH1xZXbRmCTfqBWiUHpZyTFlk-4yzbf0zWbPfRiP-b5q2b7P2gtf-vgxDFPYwcqSUJIqkgDc54h1sMMUap5MQs6arPPFxB3hxdPzYcAE7wZZzNCDvBLFK7zF887Fh3UwB2qisnPkqE2QPuRD2gDoMLOoSGNHvSRrcW6PpUwB9NTz7qybSUx-fM4Y2hm0gBRRk9JOIO_48iiHRp_VvA71eo4B_HhUytgq_cmChGGXbQ",
  },
  {
    title: "Dental Implants",
    href: "#",
    description:
      "Lifetime solutions for missing teeth using world-class implant systems from Switzerland.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCs8RZUIK0yPEsZ0PjHan50Csn8zzN3xfPhLkhAO-gxyN01PxCrm_6gOy28LQLjirpm41CQW_TTCk4xvxeya3JobGDADfaJZVCyOK8FSVuoe8QCNSkx38vAywnZW7mIsiMLIaq3fQIQdzkv8jIOZ9b05Xp44yT0y0cUipcwWw6b8fuFPVgxkw54TmIwAzuJEZVQN7i2Yl7IBAwAQbhSplqQdRTex3pyIC86mlWGT4PyxgpXPJUU3N3NQ5WKQpnQwQIzj-0fxivx9g",
  },
  {
    title: "Healthy Mouth Plan",
    href: "#",
    description:
      "Comprehensive oral health assessment and maintenance for the entire family.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBJN9rjzQVi6A347k2NCN4VjAcQ9_I-h_2dLClOWrGDGMIox7urvytcgHAG6ZOcUbPsGAe-Q63UwwSJg5z9NUbjJphT6HQxjduz9NmF16O79agg0DOB7UX-jneqEFeZwBpcWLY3a_PtGige7kW1CE4fR9nTqNbvoTdoHq0ZAtI6zYxuc8hFej0i9_JeSUn_4yXyUJ_gMHYr6AnpBoUr59Khy-ww27yuBbcNUe3w7DioTIDsvYAAwIb-hYImlNj_Nrs0BF0w73uyUA",
  },
  {
    title: "Cosmetic Veneers",
    href: "/treatments/smile-designing",
    description:
      "Digital smile designing with ultra-thin porcelain veneers for a Hollywood transformation.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhQfGNOH-IqP5PEyHLUS6qGNIH0UpsVCkhJQQF5sKWqm_nesmy0ilbs0hFMhc2RAcvZj2BIpWKISTjyBytKGudxQ58_ZDkIm31alySF-9LI9byVDHXx_mNovmdug36-J-kVXU2wVk39lC6U-TsM1yHQC0ZzFyrME-cAz8gKoAuUrmUWJbTYhP2nyO3qgE4EdvGH0nbI8YwPqKX7_OBdjDEyQZx-4fFoKFMiKLkRVyUVBynGPZS_pyBcemHDZOKSxvCcgggP76ubg",
  },
];

export default function FeaturedTreatments() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
        <div className="max-w-xl">
          <h2 className="mb-4 text-sm font-bold tracking-[0.3em] text-[#24B9D7] uppercase">
            Our Specialities
          </h2>
          <h3 className="text-4xl font-extrabold text-[#200b3c]">
            Featured Treatments
          </h3>
          <p className="mt-4 font-medium text-[#200b3c]/60">
            Providing specialized solutions for complex dental cases using the
            latest medical innovations and painless techniques.
          </p>
        </div>
        <a
          className="border-b-2 border-[#24B9D7] pb-1 text-sm font-bold tracking-widest text-[#200b3c] uppercase transition-colors hover:text-[#24B9D7]"
          href="#"
        >
          View All Treatments
        </a>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {treatments.map((item) => (
          <div
            key={item.title}
            className="group overflow-hidden rounded-xl border border-[#200b3c]/5 bg-white shadow-xl shadow-[#200b3c]/5 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="h-56 overflow-hidden">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="space-y-3 p-6">
              <h4 className="text-xl font-bold transition-colors group-hover:text-[#24B9D7]">
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed text-[#200b3c]/60">
                {item.description}
              </p>
              <Link
                className="inline-flex items-center gap-2 text-sm font-bold tracking-tighter text-[#24B9D7] uppercase transition-all hover:gap-4"
                href={item.href}
              >
                Learn More
                <span className="material-symbols-outlined text-sm">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
