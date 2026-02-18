export default function TeethRemovalPage() {
  return (
    <main className="bg-[#f7f6f8] text-[#0B1F3A] selection:bg-[#24B9D7]/30">
      <section className="relative flex min-h-[600px] w-full items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0B1F3A]/90 via-[#0B1F3A]/40 to-transparent" />
          <img
            alt="Modern luxury dental clinic interior"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuI9kznebwUkbzM4gitie06wPf4oK3ND_FEPPJFM0apyiOpjZmsHLKkqbgvPwJWeQRF0F3a4QTMGb2B82daxzXY0oXQbscvrjUuAsCRIOycmeMSZ22HUeuf6Qrw18HoQN6zM1-H6H7UNx-bPs-sreC28ZiN-W07nlGt7Ujje196VK6V2LWVB15SvZPG5M_Ht-BDRhJd_FN9FF_i253F3KMneeBRpUWLYnqB7HfIX-Phs6oJsST1i2I8D17kkq9LQs-VMYOHx6SNA"
          />
        </div>
        <div className="relative z-20 mx-auto max-w-7xl px-6 py-20 text-white lg:px-20">
          <div className="max-w-2xl space-y-6">
            <span className="inline-block rounded-full bg-[#24B9D7]/20 px-4 py-1 text-sm font-bold tracking-widest text-[#24B9D7] uppercase backdrop-blur-sm">
              Premium Oral Surgery
            </span>
            <h1 className="text-5xl leading-tight font-bold lg:text-7xl">
              Gentle Teeth Removal and Extractions
            </h1>
            <p className="text-lg leading-relaxed font-light text-white/80 lg:text-xl">
              Experience clinical excellence and unmatched patient comfort. Our
              advanced sedation options and expert techniques ensure your
              procedure is entirely pain-free.
            </p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <a
                href="https://wa.me/919825571401"
                target="_blank"
                className="flex items-center justify-center gap-3 rounded-xl bg-[#200b3c] px-8 py-4 text-base font-bold text-white transition-transform hover:scale-[1.02]"
              >
                Book Your Consultation
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
              <button className="rounded-lg border border-white/30 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20">
                View Our Technology
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="mb-16 space-y-4 text-center">
            <h2 className="text-4xl font-bold text-[#0B1F3A] lg:text-5xl">
              Why Extraction Might Be Necessary
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#0B1F3A]/60">
              Our goal is always to save your natural teeth, but sometimes an
              extraction is the best step for your long-term oral health.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-xl border border-transparent bg-[#f7f6f8] p-8 transition-all duration-300 hover:border-[#24B9D7]/30 hover:bg-white hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#24B9D7]/10 text-[#24B9D7] transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">skull</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#0B1F3A]">Severe Decay</h3>
              <p className="leading-relaxed text-[#0B1F3A]/70">
                When a tooth is too structurally compromised for a filling or
                crown to provide lasting support.
              </p>
            </div>

            <div className="group rounded-xl border border-transparent bg-[#f7f6f8] p-8 transition-all duration-300 hover:border-[#24B9D7]/30 hover:bg-white hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#24B9D7]/10 text-[#24B9D7] transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">coronavirus</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#0B1F3A]">Infection and Abscess</h3>
              <p className="leading-relaxed text-[#0B1F3A]/70">
                Removing the source of infection prevents bacteria from
                spreading to the jawbone and blood.
              </p>
            </div>

            <div className="group rounded-xl border border-transparent bg-[#f7f6f8] p-8 transition-all duration-300 hover:border-[#24B9D7]/30 hover:bg-white hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#24B9D7]/10 text-[#24B9D7] transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">emergency_home</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#0B1F3A]">Impacted Wisdom</h3>
              <p className="leading-relaxed text-[#0B1F3A]/70">
                Relieving pain and protecting adjacent teeth from damage caused
                by lack of eruption space.
              </p>
            </div>

            <div className="group rounded-xl border border-transparent bg-[#f7f6f8] p-8 transition-all duration-300 hover:border-[#24B9D7]/30 hover:bg-white hover:shadow-xl">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#24B9D7]/10 text-[#24B9D7] transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-3xl">grid_view</span>
              </div>
              <h3 className="mb-3 text-xl font-bold text-[#0B1F3A]">Overcrowding</h3>
              <p className="leading-relaxed text-[#0B1F3A]/70">
                Creating space for orthodontic treatment to ensure a perfectly
                aligned and functional smile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0B1F3A] py-24 text-white">
        <div className="absolute top-0 right-0 h-full w-1/3 translate-x-20 -skew-x-12 transform bg-[#24B9D7]/5" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <span className="mb-4 block text-sm font-bold tracking-widest text-[#24B9D7] uppercase">
                The Experience
              </span>
              <h2 className="mb-8 text-4xl leading-tight font-bold lg:text-5xl">
                Our Pain-Free Process
              </h2>

              <div className="space-y-12">
                <div className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#24B9D7] text-xl font-bold text-[#24B9D7]">
                    1
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold">Detailed Diagnostics</h4>
                    <p className="text-white/70">
                      We use high-resolution 3D CT scans to map the tooth
                      structure and nerve pathways with 99.9% precision.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#24B9D7] text-xl font-bold text-[#24B9D7]">
                    2
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold">Absolute Comfort</h4>
                    <p className="text-white/70">
                      Using computerized local anesthesia or IV sedation, we
                      ensure you feel nothing but peace throughout the
                      procedure.
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#24B9D7] text-xl font-bold text-[#24B9D7]">
                    3
                  </div>
                  <div>
                    <h4 className="mb-2 text-xl font-bold">Micro-Invasive Removal</h4>
                    <p className="text-white/70">
                      Our specialized instruments allow for atraumatic
                      extraction, preserving as much bone and tissue as possible
                      for faster healing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-6 rounded-xl border border-white/10 bg-white/5 p-6">
                <span className="material-symbols-outlined text-5xl text-[#F7BB00]">
                  verified_user
                </span>
                <div>
                  <h5 className="font-bold text-[#F7BB00]">Pain-Free Guarantee</h5>
                  <p className="text-sm font-bold tracking-wider text-white/60 uppercase">
                    Clinical Standards of Excellence
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                alt="Professional dentist at work"
                className="relative z-10 rounded-2xl shadow-2xl"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCo7YPwB8DlMFYqRJcbyRFKaOztHEH87DX54t7C5luBfxqq-BmD-5xRR_iklbBNc519URw7LODKcLKYQEqwsDTlROCSJcy9jBdNpl2HOJzh7xfxm77md0fPU-xwPB38X84U_aZxBzvUVz4XOd-IYllNPw_hQTFKa8wlpMIj8w5nv9HA4kx4gFb3QHOa5Ai9cutYxbGWApapVq_0KZZe8aVqKinyEiUBafe5CKWIq7hthQ9nFAWoeruSy_FAzAp2dFkP2G3ac6BCgg"
              />
              <div className="absolute -right-6 -bottom-6 -z-0 h-64 w-64 rounded-2xl bg-[#24B9D7]/20" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f8] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-[#0B1F3A]">
              Aftercare and Recovery
            </h2>
            <p className="text-[#0B1F3A]/60">
              Expert guidance for a seamless healing journey.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <span className="material-symbols-outlined mb-4 text-4xl text-[#24B9D7]">
                restaurant
              </span>
              <h4 className="mb-4 text-xl font-bold text-[#0B1F3A]">What to Eat</h4>
              <ul className="space-y-3 text-[#0B1F3A]/70">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined mt-1 text-sm text-[#24B9D7]">
                    check_circle
                  </span>
                  Greek yogurt and smoothies
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined mt-1 text-sm text-[#24B9D7]">
                    check_circle
                  </span>
                  Mashed potatoes and soups
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined mt-1 text-sm text-[#24B9D7]">
                    check_circle
                  </span>
                  Avoid seeds and crunchy foods
                </li>
              </ul>
            </div>

            <div className="rounded-xl border-t-4 border-[#24B9D7] bg-white p-8 shadow-sm">
              <span className="material-symbols-outlined mb-4 text-4xl text-[#24B9D7]">
                healing
              </span>
              <h4 className="mb-4 text-xl font-bold text-[#0B1F3A]">Healing Tips</h4>
              <ul className="space-y-3 text-[#0B1F3A]/70">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined mt-1 text-sm text-[#24B9D7]">
                    check_circle
                  </span>
                  Rest with head elevated
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined mt-1 text-sm text-[#24B9D7]">
                    check_circle
                  </span>
                  Use cold compress for 24h
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined mt-1 text-sm text-[#24B9D7]">
                    check_circle
                  </span>
                  No smoking or using straws
                </li>
              </ul>
            </div>

            <div className="rounded-xl bg-white p-8 shadow-sm">
              <span className="material-symbols-outlined mb-4 text-4xl text-[#24B9D7]">
                call_quality
              </span>
              <h4 className="mb-4 text-xl font-bold text-[#0B1F3A]">When to Call Us</h4>
              <ul className="space-y-3 text-[#0B1F3A]/70">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined mt-1 text-sm text-[#24B9D7]">
                    check_circle
                  </span>
                  Severe, worsening pain
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined mt-1 text-sm text-[#24B9D7]">
                    check_circle
                  </span>
                  Bleeding that won&apos;t stop
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined mt-1 text-sm text-[#24B9D7]">
                    check_circle
                  </span>
                  Signs of fever or chills
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold text-[#0B1F3A]">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl border border-[#0B1F3A]/10">
              <button className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-[#f7f6f8]">
                <span className="text-lg font-bold text-[#0B1F3A]">
                  Does the procedure hurt?
                </span>
                <span className="material-symbols-outlined">expand_more</span>
              </button>
              <div className="px-6 pb-6 leading-relaxed text-[#0B1F3A]/70">
                With our advanced local anesthesia and sedation options, you
                will not feel any pain during the extraction. You may feel some
                pressure, but the area will be completely numb. Post-operative
                discomfort is managed with personalized medication plans.
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#0B1F3A]/10">
              <button className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-[#f7f6f8]">
                <span className="text-lg font-bold text-[#0B1F3A]">
                  How long is the recovery time?
                </span>
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            </div>

            <div className="overflow-hidden rounded-xl border border-[#0B1F3A]/10">
              <button className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-[#f7f6f8]">
                <span className="text-lg font-bold text-[#0B1F3A]">
                  What are my replacement options?
                </span>
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0B1F3A] py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1F3A] via-[#0B1F3A] to-[#24B9D7]/20" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-20">
          <div className="mx-auto max-w-3xl space-y-8">
            <h2 className="text-4xl leading-tight font-bold text-white lg:text-6xl">
              Need an Urgent Extraction?
            </h2>
            <p className="text-xl text-white/70">
              We prioritize dental emergencies. Contact us immediately for
              same-day evaluation and pain relief.
            </p>
            <div className="flex flex-col items-center gap-6">
              <button className="rounded-lg bg-[#F7BB00] px-12 py-5 text-xl font-black text-[#0B1F3A] shadow-2xl transition-transform hover:scale-105">
                BOOK EMERGENCY APPOINTMENT
              </button>
              <div className="flex items-center gap-4 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <span className="material-symbols-outlined text-[#24B9D7]">
                    call
                  </span>
                </div>
                <span className="text-3xl font-bold tracking-tighter">
                  0800-IVORIES-CARE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
