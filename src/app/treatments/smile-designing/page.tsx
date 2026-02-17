export default function SmileDesigningPage() {
  return (
    <main className="bg-[#f7f6f8] text-[#200b3c]">
      <section className="relative flex min-h-[85vh] items-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#f7f6f8]/90 via-[#f7f6f8]/70 to-transparent" />
          <img
            alt="Woman with a perfect white radiant smile"
            className="h-full w-full object-cover object-center"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD20_BKtI5tPiqUR--0u-Y_3WoPoQ8rXC69TtGCMizY6OgcgPx2f3Y_aTG3ld44HlCI5_cpE0mltVtRytStunmK547NRaGD6qBURXj3iIaBV5Ydb_KecaoPysBDlJ0xJiM-hAg_pjZGsWcqtU5KDretKGjAKwbHpLkE7K15JnBwus0WBihBUzJqwMn8bTyOXpRsDG8U3IjGbXWeM8ueIMTdo3Hy0Cw2tK172DZlYOpJ0GfqUxDu8jzJkp012h1yEyvhnnD3SLOsEA"
          />
        </div>
        <div className="relative z-20 mx-auto w-full max-w-7xl px-6 py-20 lg:px-20">
          <div className="max-w-2xl">
            <span className="mb-6 inline-block rounded-full bg-[#24B9D7]/10 px-4 py-1.5 text-xs font-bold tracking-widest text-[#24B9D7] uppercase">
              Premier Cosmetic Dentistry
            </span>
            <h1 className="mb-8 text-5xl leading-[1.1] font-extrabold text-[#0B1F3A] md:text-7xl">
              Smile Designing: <br />
              <span className="font-light italic text-[#200b3c]/70">
                The Art of Perfection
              </span>
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-[#0B1F3A]/80 md:text-xl">
              Experience a bespoke smile transformation where artistic vision
              meets clinical precision. Tailored to your unique facial features
              for a radiant, natural result.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="rounded-xl bg-[#200b3c] px-8 py-4 text-base font-bold text-white transition-all hover:bg-[#0B1F3A]">
                Book Your Consultation
              </button>
              <button className="flex items-center justify-center gap-2 px-8 py-4 font-bold text-[#0B1F3A] transition-colors hover:text-[#24B9D7]">
                <span className="material-symbols-outlined">play_circle</span>
                View Transformations
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                <img
                  alt="Dentist carefully analyzing a digital dental model"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMRk9vCoCBu-fATRGkluHRG4M5YYxLErkZ_1t9F8CGTJlRZLxKIHflhxoiMCt2v5ruIyBML-uE78HGkbiKmQzjDSV5TaDiKCP9G0UcOeBAD8NLB8B3QXHDdR6oj4_rG_-jGdoD0qmrPHi8FZexytOhTuJPCDhweRjjCAqVNIqXSWqeDQRaJHpgQBOq21tVC4JEFbDMJo_KyWBjqWKY14_Wsd7qUxSlcUOilopqLSe7VVaH8PV54K4I6lRfE-wzafQdJUyaR-s6UA"
                />
              </div>
              <div className="absolute -right-6 -bottom-8 hidden max-w-xs rounded-2xl border border-[#200b3c]/5 bg-white p-8 shadow-xl md:block">
                <span className="material-symbols-outlined mb-4 text-4xl text-[#24B9D7]">
                  brush
                </span>
                <p className="text-sm leading-relaxed font-medium text-[#0B1F3A]">
                  &quot;Every smile is a unique masterpiece. We don&apos;t just
                  fix teeth; we sculpt confidence.&quot;
                </p>
              </div>
            </div>
            <div>
              <h2 className="mb-8 text-3xl leading-tight font-extrabold text-[#0B1F3A] md:text-4xl">
                The Art of Smile Design
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-[#0B1F3A]/70">
                <p>
                  At Ivories, we believe a smile is a masterpiece. Our
                  signature approach blends advanced cosmetic techniques with
                  personalized care, ensuring every contour and shade
                  harmonizes with your natural beauty.
                </p>
                <p>
                  It&apos;s more than dentistry; it&apos;s artistry. We consider your
                  facial symmetry, lip line, and skin tone to create a result
                  that looks authentic, vibrant, and uniquely yours.
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div>
                  <span className="mb-1 block text-3xl font-bold text-[#24B9D7]">
                    15+
                  </span>
                  <span className="text-xs font-bold tracking-widest text-[#0B1F3A]/50 uppercase">
                    Years Experience
                  </span>
                </div>
                <div>
                  <span className="mb-1 block text-3xl font-bold text-[#24B9D7]">
                    5k+
                  </span>
                  <span className="text-xs font-bold tracking-widest text-[#0B1F3A]/50 uppercase">
                    Smiles Crafted
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F3A] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="mx-auto mb-20 max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold">Your Journey to Perfection</h2>
            <p className="text-lg text-white/60">
              A clear, step-by-step guide to how we achieve your dream smile
              with precision and care.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="group text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 transition-all duration-300 group-hover:border-[#24B9D7] group-hover:bg-[#24B9D7]">
                <span className="material-symbols-outlined text-3xl text-white">chat</span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Consultation</h3>
              <p className="text-sm leading-relaxed text-white/50">
                A deep dive into your goals, facial aesthetics, and dental
                health profile.
              </p>
            </div>

            <div className="group text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 transition-all duration-300 group-hover:border-[#24B9D7] group-hover:bg-[#24B9D7]">
                <span className="material-symbols-outlined text-3xl text-white">
                  biotech
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Digital Mockup</h3>
              <p className="text-sm leading-relaxed text-white/50">
                Preview your new smile using advanced 3D digital imaging
                technology.
              </p>
            </div>

            <div className="group text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 transition-all duration-300 group-hover:border-[#24B9D7] group-hover:bg-[#24B9D7]">
                <span className="material-symbols-outlined text-3xl text-white">
                  auto_fix_high
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Precision Artistry</h3>
              <p className="text-sm leading-relaxed text-white/50">
                Our specialists apply veneers or crowns with micron-level
                accuracy.
              </p>
            </div>

            <div className="group text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 transition-all duration-300 group-hover:border-[#24B9D7] group-hover:bg-[#24B9D7]">
                <span className="material-symbols-outlined text-3xl text-white">
                  celebration
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold">The Reveal</h3>
              <p className="text-sm leading-relaxed text-white/50">
                Walk out with a confident, radiant smile that reflects the real
                you.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="flex flex-col items-center gap-20 lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-3xl font-extrabold text-[#0B1F3A]">
                Cutting-Edge Technology
              </h2>
              <p className="mb-10 text-lg text-[#0B1F3A]/70">
                We integrate the world&apos;s most advanced dental technology to
                ensure predictable, long-lasting, and stunning results.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#24B9D7]/10">
                    <span className="material-symbols-outlined text-[#24B9D7]">
                      desktop_windows
                    </span>
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-[#0B1F3A]">
                      Digital Smile Design (DSD)
                    </h4>
                    <p className="text-sm text-[#0B1F3A]/60">
                      Using algorithmic beauty standards to calculate the
                      perfect proportions for your teeth.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#24B9D7]/10">
                    <span className="material-symbols-outlined text-[#24B9D7]">
                      3d_rotation
                    </span>
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-[#0B1F3A]">
                      3D Intraoral Scanning
                    </h4>
                    <p className="text-sm text-[#0B1F3A]/60">
                      No more messy impressions. We use high-precision lasers
                      to create a digital map of your mouth.
                    </p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#24B9D7]/10">
                    <span className="material-symbols-outlined text-[#24B9D7]">
                      diamond
                    </span>
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-[#0B1F3A]">
                      Premium Materials
                    </h4>
                    <p className="text-sm text-[#0B1F3A]/60">
                      Ultra-thin porcelain veneers from top-tier dental labs in
                      Switzerland and Germany.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img
                  alt="Modern 3D dental scanner being used"
                  className="mt-8 rounded-2xl shadow-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD70IiPCnR4dZW52sUZiUUNQJ30iNc75QbAVp4MC1dt60bZQNIdxaCXBPIlhSRi4T4pmO12MNZTvShoBFSwNrw4o_2JIgiWtLwPpWLjChhWTxxYYfVWvhqWV3AJJC8fOs0jSCtFtbv6bS5-nfZ_O9DoARI8wHVAfJNxCk6koGVhHqHzYP2WHd63eYS6ClbLj3NNFB-_ANcdcx_Ox559tiSxEpXLy7XulXK8zbhkvAXhrYfU7xctllqFCIHaEXQjUuQ4payXCRFnMQ"
                />
                <img
                  alt="Digital dental modeling on a high resolution screen"
                  className="rounded-2xl shadow-lg"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5KqGwY2ZiIGgPyof9nj61a6RKJ7F5QsvKlapEOjgsn5IVKGmrQsHzuv-9CsANxB-HV5nV97cpmBTSqNn4tx2JeE2aTFWuRmfDZkr9__e6pPBc9VUywjri3g_IlBhJEUth4iLC5R-UBoD2reZAQrVNWkahVCm8qZkMWkGRX7KaNSc64O8hSHncR3fBuxLSWo4U3EwzisBsFkE5fLzdq3LIJzT0-roFn-Y3WXfKxQ2jw8sobCvx1RIvMWCM3h5L_Oh_T9dmjo0rYw"
                />
              </div>
              <div className="absolute inset-0 -z-10 translate-x-1/4 scale-110 rounded-full bg-[#24B9D7]/5 blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#200b3c]/5 bg-[#f7f6f8] py-24">
        <div className="mx-auto max-w-7xl px-6 text-center lg:px-20">
          <h2 className="mb-16 text-3xl font-extrabold text-[#0B1F3A]">
            Why Trust Ivories?
          </h2>
          <div className="grid gap-12 md:grid-cols-3">
            <div className="rounded-2xl border border-[#200b3c]/5 bg-white p-10 shadow-sm">
              <span className="material-symbols-outlined mb-6 text-5xl text-[#24B9D7]">
                verified_user
              </span>
              <h3 className="mb-4 text-xl font-bold">Clinical Precision</h3>
              <p className="text-sm leading-relaxed text-[#0B1F3A]/60">
                Our specialists are trained at world-class institutions,
                ensuring every procedure meets rigorous medical standards.
              </p>
            </div>
            <div className="rounded-2xl border border-[#200b3c]/5 bg-white p-10 shadow-sm">
              <span className="material-symbols-outlined mb-6 text-5xl text-[#24B9D7]">
                palette
              </span>
              <h3 className="mb-4 text-xl font-bold">Aesthetic Mastery</h3>
              <p className="text-sm leading-relaxed text-[#0B1F3A]/60">
                We don&apos;t believe in cookie-cutter smiles. Each design is
                uniquely sculpted to your personality and features.
              </p>
            </div>
            <div className="rounded-2xl border border-[#200b3c]/5 bg-white p-10 shadow-sm">
              <span className="material-symbols-outlined mb-6 text-5xl text-[#24B9D7]">
                volunteer_activism
              </span>
              <h3 className="mb-4 text-xl font-bold">Patient-Centric Care</h3>
              <p className="text-sm leading-relaxed text-[#0B1F3A]/60">
                From the first call to the final reveal, your comfort and
                satisfaction are our absolute priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-20">
          <div className="relative overflow-hidden rounded-3xl bg-[#200b3c] p-12 text-center md:p-20">
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#24B9D7] blur-3xl" />
              <div className="absolute right-0 bottom-0 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-[#24B9D7] blur-3xl" />
            </div>
            <h2 className="relative z-10 mb-8 text-4xl font-extrabold text-white md:text-5xl">
              Start Your Smile Transformation Today
            </h2>
            <p className="relative z-10 mx-auto mb-12 max-w-2xl text-lg text-white/70">
              Schedule a personal consultation with our expert smile designers
              and take the first step toward a more confident you.
            </p>
            <button className="relative z-10 rounded-xl bg-[#24B9D7] px-10 py-4 text-lg font-bold text-[#0B1F3A] shadow-xl shadow-[#24B9D7]/20 transition-transform hover:scale-105">
              Book Your Consultation Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
