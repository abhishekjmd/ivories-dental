export default function DentalImplantPage() {
  return (
    <main className="bg-[#f7f6f8] text-[#0B1F3A] selection:bg-[#24B9D7] selection:text-white">
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-16 md:flex-row md:px-20 md:py-24">
          <div className="z-10 flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#24B9D7]/10 px-4 py-1.5 text-xs font-bold tracking-widest text-[#24B9D7] uppercase">
              <span className="material-symbols-outlined text-sm">verified</span>
              Specialized Implant Care
            </div>
            <h1 className="text-5xl leading-[1.1] font-extrabold tracking-tight text-[#0B1F3A] md:text-7xl">
              Restore Your Smile with{" "}
              <span className="text-[#24B9D7]">Advanced</span> Dental Implants
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-[#0B1F3A]/70">
              Experience permanent tooth replacement led by Dr. Alaap Shah.
              Ivories uses advanced technology to ensure a painless, precise,
              and life-changing procedure.
            </p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <a
                href="https://wa.me/919825571401"
                target="_blank"
                className="rounded-xl bg-[#24B9D7] px-8 py-4 text-lg font-bold text-white shadow-xl shadow-[#24B9D7]/30 transition-all hover:bg-[#24B9D7]/90 text-center"
              >
                Start Your Journey
              </a>
              <button className="flex items-center justify-center gap-2 rounded-xl border-2 border-[#0B1F3A]/10 px-8 py-4 text-lg font-bold text-[#0B1F3A] transition-all hover:border-[#24B9D7]">
                <span className="material-symbols-outlined">play_circle</span>
                View Gallery
              </button>
            </div>
          </div>
          <div className="relative flex-1">
            <div className="absolute -top-10 -right-10 h-72 w-72 rounded-full bg-[#24B9D7]/5 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-[#F7BB00]/10 blur-3xl" />
            <img
              alt="Smiling patient showing white teeth"
              className="relative z-10 aspect-[4/5] w-full rounded-2xl border-8 border-white object-cover shadow-2xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs6zq_SYYctDksc90CtPP5zgFv_HmEBqEYlxBgPL3_XcXZWZeSovEzzo5JQIKZw7cOlDdz4_F_16XNQTgygXj51uVMd_PnfoAGw5rXDAEduGDeRmxRm6OoJ6UQhL6sYohCP_i0mm5f0FA0-_tIKRPRUAdASWXZ0-R-P1kPX-P7vKQoAsHIS48Vqba9L2482N7X64L3VJSd6WFTecrn7ek8JOml25hw9fSbyIWhZk1zGD4gl914MbW8zg5ux80AB4hQ1ZjePvQFng"
            />
            <div className="absolute bottom-6 -left-6 z-20 rounded-2xl border border-[#0B1F3A]/5 bg-white p-6 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#F7BB00] text-white">
                  <span className="material-symbols-outlined">star</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0B1F3A]/50 uppercase">
                    Patient Rating
                  </p>
                  <p className="text-lg font-extrabold text-[#0B1F3A]">
                    4.9/5 Excellent
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f8] py-20">
        <div className="mx-auto mb-16 max-w-7xl px-6 text-center md:px-20">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-[#0B1F3A]">
            Our Technology Focus
          </h2>
          <p className="mx-auto max-w-2xl text-[#0B1F3A]/60">
            We invest in the world&apos;s most advanced dental technologies to
            ensure your procedure is minimally invasive and highly accurate.
          </p>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3 md:px-20">
          <div className="group rounded-2xl border border-[#0B1F3A]/5 bg-white p-8 shadow-sm transition-all hover:border-[#24B9D7] hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B1F3A]/5 text-[#24B9D7] transition-all group-hover:bg-[#24B9D7] group-hover:text-white">
              <span className="material-symbols-outlined text-3xl">biotech</span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#0B1F3A]">
              Microscopic Precision
            </h3>
            <p className="leading-relaxed text-[#0B1F3A]/70">
              Unmatched accuracy for complex implant placements using
              high-definition surgical microscopes.
            </p>
          </div>
          <div className="group rounded-2xl border border-[#0B1F3A]/5 bg-white p-8 shadow-sm transition-all hover:border-[#24B9D7] hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B1F3A]/5 text-[#24B9D7] transition-all group-hover:bg-[#24B9D7] group-hover:text-white">
              <span className="material-symbols-outlined text-3xl">
                3d_rotation
              </span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#0B1F3A]">
              Digital 3D Scans
            </h3>
            <p className="leading-relaxed text-[#0B1F3A]/70">
              Comprehensive CBCT mapping for a perfect fit, predictable
              outcomes, and significantly faster recovery times.
            </p>
          </div>
          <div className="group rounded-2xl border border-[#0B1F3A]/5 bg-white p-8 shadow-sm transition-all hover:border-[#24B9D7] hover:shadow-xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B1F3A]/5 text-[#24B9D7] transition-all group-hover:bg-[#24B9D7] group-hover:text-white">
              <span className="material-symbols-outlined text-3xl">flare</span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-[#0B1F3A]">
              Laser Technology
            </h3>
            <p className="leading-relaxed text-[#0B1F3A]/70">
              Minimally invasive procedures that reduce discomfort and promote
              rapid tissue healing without sutures.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-20">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-[#0B1F3A]">
              Your Patient Journey
            </h2>
            <p className="text-[#0B1F3A]/60">
              Three simple steps to your forever smile.
            </p>
          </div>
          <div className="relative grid grid-cols-1 gap-16 md:grid-cols-3">
            <div className="relative text-center">
              <div className="relative z-10 mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#F7BB00] bg-white text-3xl font-black text-[#F7BB00] shadow-lg">
                1
              </div>
              <div className="absolute top-10 left-1/2 -z-0 hidden w-full border-t-2 border-dashed border-[#F7BB00]/30 md:block" />
              <h4 className="mb-4 text-xl font-bold text-[#0B1F3A]">
                Initial Consultation
              </h4>
              <p className="text-[#0B1F3A]/70">
                Meet Dr. Shah for a detailed 3D scan and a personalized
                treatment plan tailored to your health goals.
              </p>
            </div>
            <div className="relative text-center">
              <div className="relative z-10 mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#F7BB00] bg-white text-3xl font-black text-[#F7BB00] shadow-lg">
                2
              </div>
              <div className="absolute top-10 left-1/2 -z-0 hidden w-full border-t-2 border-dashed border-[#F7BB00]/30 md:block" />
              <h4 className="mb-4 text-xl font-bold text-[#0B1F3A]">
                Precision Placement
              </h4>
              <p className="text-[#0B1F3A]/70">
                Using guided surgery, the implant is placed with microscopic
                accuracy in a single, painless visit.
              </p>
            </div>
            <div className="relative text-center">
              <div className="relative z-10 mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border-4 border-[#F7BB00] bg-white text-3xl font-black text-[#F7BB00] shadow-lg">
                3
              </div>
              <h4 className="mb-4 text-xl font-bold text-[#0B1F3A]">
                The Final Smile
              </h4>
              <p className="text-[#0B1F3A]/70">
                After healing, a custom-crafted porcelain crown is attached,
                looking and feeling exactly like a natural tooth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F3A] py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-20">
          <div className="mb-16 flex flex-col items-end gap-12 md:flex-row">
            <div className="flex-1">
              <h2 className="mb-4 text-4xl font-extrabold tracking-tight">
                Why Choose Dental Implants?
              </h2>
              <p className="text-white/70">
                The gold standard in tooth replacement, offering lifetime
                benefits.
              </p>
            </div>
            <div className="flex-none">
              <button className="rounded-lg bg-[#F7BB00] px-6 py-3 font-bold text-[#0B1F3A]">
                Download Patient Guide
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10">
              <span className="material-symbols-outlined mb-6 text-4xl text-[#24B9D7]">
                face
              </span>
              <h4 className="mb-3 text-lg font-bold">Natural Look &amp; Feel</h4>
              <p className="text-sm text-white/60">
                Engineered to match your existing teeth in color, shape, and
                function.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10">
              <span className="material-symbols-outlined mb-6 text-4xl text-[#24B9D7]">
                all_inclusive
              </span>
              <h4 className="mb-3 text-lg font-bold">Permanent Solution</h4>
              <p className="text-sm text-white/60">
                Unlike dentures, implants are fixed and can last a lifetime
                with proper care.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10">
              <span className="material-symbols-outlined mb-6 text-4xl text-[#24B9D7]">
                restaurant
              </span>
              <h4 className="mb-3 text-lg font-bold">Improved Chewing</h4>
              <p className="text-sm text-white/60">
                Restore 100% of your bite force and enjoy all your favorite
                foods again.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:bg-white/10">
              <span className="material-symbols-outlined mb-6 text-4xl text-[#24B9D7]">
                health_metrics
              </span>
              <h4 className="mb-3 text-lg font-bold">Bone Health</h4>
              <p className="text-sm text-white/60">
                Prevents bone loss by stimulating the jaw, maintaining your
                facial structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-20">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-[#0B1F3A]">
              Smile Transformations
            </h2>
            <p className="text-[#0B1F3A]/60">
              Real results from Dr. Alaap Shah&apos;s patients.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl border border-[#0B1F3A]/10 shadow-lg">
                <img
                  alt="Close up of perfect white dental smile"
                  className="h-[400px] w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1kOtXllNuioOEAko3vkoC6FjGk0HgnT7_2cZN-EK9Lj2ORuNfMRD5WZlead6Gylx33xJpuuveg5L5PGPzdYeei2dKWBIA-MiXrmqjplhX4YTCMch3Nu3ff49yk-_4nBvR0X5T62GdBgptc1SzCfdxFHgUiAtdu3Hyc--dvgchH4z45G54bIpPDQ57EhcoR6VV2_LPrp5S7hY36twD8RF4pp2TOcy1dUPVnObbw5VZHUi8o_AEDEJT_SMFE8ynYJMyHxd4u3yjRA"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-8">
                  <span className="rounded-full bg-[#24B9D7] px-4 py-1 text-sm font-bold text-white">
                    Case Study: Full Arch Replacement
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl border border-[#0B1F3A]/10 shadow-lg">
                <img
                  alt="Man smiling with dental implants"
                  className="h-[400px] w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtjXqNEkB1ZkzAtoGFMZlFRZaeQtOMqBgeUwIEf-rWFRCPn-zItMxJm1BuwGJ8EWuszCDl0pqmFRpqdsThVOGbiKgTCC4vOEpmk3QZ0RXlge9YdnvZVCz0SfwEuP6MfqCmWgKAQu6vQ0KaTKlxKt4vN17KpaNy2l6FZT0pVnQQSoFvxfS3rm4DK8bQjUaO7-ZiaAx0XeTed3NS9S3U_5M7qAylKdP9VM0QWbQ8zRmmYdhQX3r6OLQHPPq3r50IvS7RjYle7yqNHg"
                />
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-8">
                  <span className="rounded-full bg-[#24B9D7] px-4 py-1 text-sm font-bold text-white">
                    Case Study: Single Front Tooth
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f8] py-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-[#0B1F3A]">
              Frequently Asked Questions
            </h2>
            <p className="text-[#0B1F3A]/60">
              Everything you need to know about the procedure.
            </p>
          </div>
          <div className="space-y-4">
            <details
              className="group rounded-xl border border-[#0B1F3A]/10 bg-white open:border-[#24B9D7]"
              open
            >
              <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                <h4 className="text-lg font-bold text-[#0B1F3A]">
                  How much do dental implants cost?
                </h4>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 leading-relaxed text-[#0B1F3A]/70">
                The cost of a dental implant varies based on your specific
                needs, such as the number of teeth being replaced and if any
                preparatory treatments are required. We offer transparent
                pricing and flexible financing plans starting at $199/month.
              </div>
            </details>
            <details className="group rounded-xl border border-[#0B1F3A]/10 bg-white open:border-[#24B9D7]">
              <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                <h4 className="text-lg font-bold text-[#0B1F3A]">
                  Is the procedure painful?
                </h4>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 leading-relaxed text-[#0B1F3A]/70">
                With advanced local anesthesia and our laser technology, most
                patients report very little to no discomfort during the
                procedure. We also offer sedation options for patients with
                dental anxiety.
              </div>
            </details>
            <details className="group rounded-xl border border-[#0B1F3A]/10 bg-white open:border-[#24B9D7]">
              <summary className="flex cursor-pointer list-none items-center justify-between p-6">
                <h4 className="text-lg font-bold text-[#0B1F3A]">
                  How long does the entire process take?
                </h4>
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-6 pb-6 leading-relaxed text-[#0B1F3A]/70">
                The surgical placement usually takes about 60-90 minutes.
                However, the full process including osseointegration can take
                between 3 to 6 months before the final crown is placed.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 md:px-20">
          <div className="relative isolate overflow-hidden rounded-3xl bg-[#0B1F3A] shadow-2xl">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(36,185,215,0.18),transparent_45%)]" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2">
              <div className="flex min-w-0 flex-col justify-center p-8 text-white sm:p-10 lg:p-16">
                <h2 className="mb-6 text-3xl leading-tight font-extrabold md:text-5xl">
                  Start Your Journey to a New Smile
                </h2>
                <p className="mb-10 max-w-xl text-base leading-relaxed text-white/75 md:text-lg">
                  Book a complimentary consultation with Dr. Alaap Shah and
                  find out how dental implants can change your life.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-[#F7BB00]">
                      call
                    </span>
                    <span className="text-lg font-bold md:text-xl">
                      +1 (555) 0123 4567
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-[#F7BB00]">
                      mail
                    </span>
                    <span className="text-base md:text-lg">
                      hello@ivoriesclinic.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 bg-white/5 p-8 text-white sm:p-10 lg:border-t-0 lg:border-l lg:p-16">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-bold text-white/70">
                        First Name
                      </label>
                      <input
                        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-all focus:border-[#24B9D7] focus:ring-1 focus:ring-[#24B9D7]"
                        placeholder="First name"
                        type="text"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-bold text-white/70">
                        Last Name
                      </label>
                      <input
                        className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-all focus:border-[#24B9D7] focus:ring-1 focus:ring-[#24B9D7]"
                        placeholder="Last name"
                        type="text"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-white/70">
                      Email Address
                    </label>
                    <input
                      className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-all focus:border-[#24B9D7] focus:ring-1 focus:ring-[#24B9D7]"
                      placeholder="you@example.com"
                      type="email"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-white/70">
                      Preferred Date
                    </label>
                    <input
                      className="w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white outline-none transition-all focus:border-[#24B9D7] focus:ring-1 focus:ring-[#24B9D7]"
                      type="date"
                    />
                  </div>
                  <a
                    href="https://wa.me/919825571401"
                    target="_blank"
                    className="w-full block text-center rounded-xl bg-[#24B9D7] py-4 text-lg font-black text-white shadow-xl shadow-[#24B9D7]/20 transition-all hover:bg-[#24B9D7]/90"
                  >
                    Book My Consultation
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
