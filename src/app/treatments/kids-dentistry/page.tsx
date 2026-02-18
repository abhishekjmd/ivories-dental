export default function KidsDentistryPage() {
  return (
    <>
      <main className="bg-[#f7f6f8] font-[var(--font-manrope)] text-[#0B1F3A] selection:bg-[#24B9D7] selection:text-white">
        <section className="relative w-full overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <img
              alt="Kids Dentistry"
              className="h-full w-full object-cover object-center"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAubwkiMxx7N3BNAEsabIDsUW0_wAyCE3X_bDJQboz7ADXviFypAnUGeCnNNCHfNZBESHSEb8cp2h23XpT-4_W6daWQKRP0a4h_evdGVte1CkhB97JzXm2hYEUKIbzehvA3shrDka848VTUr9dG-4nmNKLYHpOJrBlD_0ZCj5YWZQFsmc0TIwqSd-fO6RpMLxKRG-ZmqLloTcZUm9oHdwiwfNiEza8toKwr2OkTh6GNIBCUhcA0l0-9i3R5DLWLOZOKR8H6abKrYQ"
            />
          </div>
          <div className="relative z-20 mx-auto max-w-7xl px-6">
            <div className="max-w-2xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#24B9D7]/10 px-3 py-1 text-xs font-bold tracking-widest text-[#24B9D7] uppercase">
                <span className="material-symbols-outlined text-sm">verified</span>
                Specialized Pediatric Care
              </span>
              <h1 className="mb-6 text-5xl leading-[1.1] font-bold text-[#0B1F3A] lg:text-7xl">
                Gentle and Specialized
                <span className="text-[#24B9D7] italic"> Kids Dentistry</span>
              </h1>
              <p className="mb-10 max-w-lg text-lg leading-relaxed text-[#0B1F3A]/70 lg:text-xl">
                Building healthy smiles for a lifetime with a compassionate,
                child-friendly approach that turns dental visits into positive
                adventures.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://wa.me/919825571401"
                  target="_blank"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#24B9D7] px-8 py-4 font-bold text-white shadow-xl shadow-[#24B9D7]/20 transition-all hover:bg-[#24B9D7]/90 text-center"
                >
                  Book a Pediatric Consultation
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
                <button className="flex items-center justify-center gap-2 rounded-lg border border-[#0B1F3A]/10 bg-white px-8 py-4 font-bold text-[#0B1F3A] transition-all hover:bg-[#0B1F3A]/5">
                  Explore Our Approach
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-[#24B9D7]/10 blur-3xl" />
              <img
                alt="Friendly dental care"
                className="relative z-10 aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeVIRlgtUboHcSoW5LO3BauPrHBxnVEQfOZVWJZM00utsEsnX6LsByrERpUiIGR0dOVNpYzqnGzH30idiuA-a6fHpNvQISoiAe_PATrkhEA2dc8gVSL7BkPsxCLRYgrbSKhTmbTDsitXGHLmb0TSs5zclTGgD0byfNCJcITi4jIBIBGMgad01L_waACH8pPyM6nRX3IudBE4fHVpKkSMdiayg8SusJK107qZOMJEBbpI3DrS6Y20Y4P-RdOU5kt2IciPX1WYBz8A"
              />
              <div className="absolute -right-6 -bottom-6 z-20 hidden rounded-2xl bg-[#0B1F3A] p-8 text-white shadow-xl md:block">
                <p className="mb-1 text-3xl font-bold">100%</p>
                <p className="text-xs font-bold tracking-widest text-[#24B9D7] uppercase">
                  Child-Friendly
                </p>
              </div>
            </div>
            <div>
              <h2 className="mb-8 text-4xl font-bold text-[#0B1F3A]">
                Give Your Child the Gift of a
                <span className="text-[#24B9D7]"> Healthy Smile</span>
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-[#0B1F3A]/70">
                Specialized care designed for unique needs, focusing on
                preventive services, fluoride treatments, and building long-term
                dental confidence in a supportive environment. Our pediatric
                wing is designed to put little ones at ease.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="flex gap-4 rounded-xl border border-[#0B1F3A]/5 bg-[#f7f6f8]/50 p-5 transition-all hover:border-[#24B9D7]/30 hover:shadow-lg">
                  <span className="material-symbols-outlined text-3xl text-[#24B9D7]">
                    sanitizer
                  </span>
                  <div>
                    <h3 className="mb-1 font-bold text-[#0B1F3A]">Preventive Cleanings</h3>
                    <p className="text-sm text-[#0B1F3A]/60">
                      Professional plaque removal and gentle polishing.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-xl border border-[#0B1F3A]/5 bg-[#f7f6f8]/50 p-5 transition-all hover:border-[#24B9D7]/30 hover:shadow-lg">
                  <span className="material-symbols-outlined text-3xl text-[#24B9D7]">
                    shield_moon
                  </span>
                  <div>
                    <h3 className="mb-1 font-bold text-[#0B1F3A]">Fluoride Treatments</h3>
                    <p className="text-sm text-[#0B1F3A]/60">
                      Strengthening enamel against early decay.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-xl border border-[#0B1F3A]/5 bg-[#f7f6f8]/50 p-5 transition-all hover:border-[#24B9D7]/30 hover:shadow-lg">
                  <span className="material-symbols-outlined text-3xl text-[#24B9D7]">
                    health_and_safety
                  </span>
                  <div>
                    <h3 className="mb-1 font-bold text-[#0B1F3A]">Cavity Protection</h3>
                    <p className="text-sm text-[#0B1F3A]/60">
                      Advanced sealants and proactive care strategies.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 rounded-xl border border-[#0B1F3A]/5 bg-[#f7f6f8]/50 p-5 transition-all hover:border-[#24B9D7]/30 hover:shadow-lg">
                  <span className="material-symbols-outlined text-3xl text-[#24B9D7]">
                    align_horizontal_center
                  </span>
                  <div>
                    <h3 className="mb-1 font-bold text-[#0B1F3A]">Early Orthodontics</h3>
                    <p className="text-sm text-[#0B1F3A]/60">
                      Monitoring growth for future alignment needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#0B1F3A] py-24 text-white">
          <div className="absolute top-0 right-0 h-full w-1/3 translate-x-1/2 -skew-x-12 transform bg-[#24B9D7]/5" />
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-6 text-4xl font-bold">
                Why Choose
                <span className="text-[#24B9D7] italic"> Ivories for Kids</span>?
              </h2>
              <p className="text-lg text-white/70">
                We&apos;ve redefined pediatric dentistry with a focus on
                psychological comfort and high-end medical precision.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-10 transition-all hover:bg-white/10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#24B9D7]/20 text-[#24B9D7]">
                  <span className="material-symbols-outlined text-3xl">spa</span>
                </div>
                <h3 className="mb-4 text-xl font-bold">Painless and Anxiety-Free</h3>
                <p className="leading-relaxed text-white/60">
                  Our clinical team is trained in gentle behavioral management
                  and advanced numbing techniques that minimize discomfort.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-10 transition-all hover:bg-white/10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#24B9D7]/20 text-[#24B9D7]">
                  <span className="material-symbols-outlined text-3xl">toys</span>
                </div>
                <h3 className="mb-4 text-xl font-bold">Pediatric Equipment</h3>
                <p className="leading-relaxed text-white/60">
                  We use specialized, smaller-scale tools and diagnostic
                  technology specifically calibrated for children&apos;s anatomy.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-10 transition-all hover:bg-white/10">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#24B9D7]/20 text-[#24B9D7]">
                  <span className="material-symbols-outlined text-3xl">meeting_room</span>
                </div>
                <h3 className="mb-4 text-xl font-bold">Welcoming Environment</h3>
                <p className="leading-relaxed text-white/60">
                  From the wait-free scheduling to our private consultation
                  suites, every touchpoint is designed to feel like home.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f7f6f8] py-24">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-16 text-center text-4xl font-bold text-[#0B1F3A]">
              Parental <span className="text-[#24B9D7]">FAQ</span>
            </h2>
            <div className="space-y-4">
              <details className="group rounded-xl border border-[#0B1F3A]/5 bg-white p-6" open>
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="text-lg font-bold text-[#0B1F3A]">
                    When should my child have their first dental visit?
                  </span>
                  <span className="material-symbols-outlined text-[#24B9D7] transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-[#0B1F3A]/70">
                  The American Academy of Pediatric Dentistry recommends that a
                  child visit the dentist by their first birthday or within six
                  months after their first tooth appears.
                </p>
              </details>
              <details className="group rounded-xl border border-[#0B1F3A]/5 bg-white p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="text-lg font-bold text-[#0B1F3A]">
                    How do you handle dental anxiety in children?
                  </span>
                  <span className="material-symbols-outlined text-[#24B9D7] transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-[#0B1F3A]/70">
                  We use the &quot;Tell-Show-Do&quot; method, where we explain what
                  we&apos;re going to do in kid-friendly terms, show them the tools,
                  and then perform the procedure gently.
                </p>
              </details>
              <details className="group rounded-xl border border-[#0B1F3A]/5 bg-white p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between">
                  <span className="text-lg font-bold text-[#0B1F3A]">
                    Are dental X-rays safe for kids?
                  </span>
                  <span className="material-symbols-outlined text-[#24B9D7] transition-transform group-open:rotate-180">
                    expand_more
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-[#0B1F3A]/70">
                  Yes. We use low-radiation digital X-rays and protective lead
                  aprons, following the ALARA (As Low As Reasonably Achievable)
                  principle to ensure maximum safety.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed right-8 bottom-8 z-50 flex flex-col gap-4">
        <a
          className="group relative flex items-center"
          href="https://wa.me/919825571401"
          target="_blank"
        >
          <span className="absolute right-14 whitespace-nowrap rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
            Emergency Call
          </span>
          <div className="flex h-12 w-12 animate-pulse items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition-transform hover:scale-110">
            <span className="material-symbols-outlined">call</span>
          </div>
        </a>
        <a
          className="group relative flex items-center"
          href="https://wa.me/919825571401"
          target="_blank"
        >
          <span className="absolute right-14 whitespace-nowrap rounded-full bg-[#25D366] px-3 py-1 text-xs font-bold text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
            Chat with Us
          </span>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110">
            <span className="material-symbols-outlined">chat</span>
          </div>
        </a>
      </div>
    </>
  );
}
