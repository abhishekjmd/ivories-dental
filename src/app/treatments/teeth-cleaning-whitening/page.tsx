import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
});

export default function TeethCleaningWhiteningPage() {
  return (
    <main className={`${playfair.variable} bg-[#f7f6f8] text-[#200b3c] `}>
      <section className="relative flex min-h-[100vh] items-center  justify-centeroverflow-hidden ">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <img
            alt="Beautiful Smile"
            className="h-full w-full object-cover"
            data-alt="A woman with a bright confident smile"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-tyXwoSu4nIsab6hh-mKC6LwGkes4rW_xF5QGIPBXKJDTZg62lriCXoY5E9mmhVuGsuv2XYEvsMO5FXR-OUxIztowS--DjYQ66z7XcQd9Or7z7FEJG5KtTS6i0S94_NKR6bkpyCS8fUXByqbsQZ2u3ob6Vp0gQbvDGre4WxUsO4i2eKYnS2eITcvaMdkLLMth5IjcW2nnGTdP4GTuXFy55yOO0tt08vsuoVqSerTsS6Om_KUbiuyqI2vBojU5Y0gaAz4oxRh6rw"
          />
        </div>
        <div className="relative z-20 mx-auto w-full max-w-7xl px-6">
          <div className="max-w-2xl space-y-6">
            <span className="inline-block rounded-full bg-[#24B9D7]/10 px-4 py-1.5 mt-4 text-xs font-bold tracking-widest text-[#24B9D7] uppercase">
              Premium Dental Care
            </span>
            <h1 className="text-5xl leading-tight font-[var(--font-playfair)] text-[#200b3c] md:text-7xl ">
              Experience a Radiant,{" "}
              <span className="italic text-[#24B9D7]">Confident Smile</span>
            </h1>
            <p className="max-w-lg text-lg leading-relaxed text-gray-600 ">
              Professional teeth cleaning and whitening services tailored for
              your unique smile. Discover the luxury of expert dental care in a
              hygienic, modern environment.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 mb-10">
              <button className="rounded-lg bg-[#200b3c] px-8 py-4 text-lg font-bold text-white transition-all hover:shadow-xl">
                Book Your Visit
              </button>
              <button className="flex items-center gap-2 rounded-lg border-2 border-[#200b3c]/10 px-8 py-4 text-lg font-bold transition-all hover:border-[#24B9D7]">
                <span className="material-symbols-outlined">play_circle</span>
                See The Results
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 ">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 h-24 w-24 rounded-full bg-[#F7BB00]/20 blur-3xl" />
              <img
                alt="Dental Procedure"
                className="relative z-10 rounded-xl shadow-2xl"
                data-alt="Professional dentist cleaning teeth with precision"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5b7PBk0ErAurLuZTdTHvRzWPvUx5UZAPgxoP3G7AsB5dtUrxHuVN8JHyVW8l-XytFojBut67CG6Wkc6tirSk6bGmg0cPxsinU6ejCdq4n2yy8eTiJpTiob992JegsV4cF-E0JDwBuCQZ802kUG4cLvD2B1MTQxvbSYmiOFJo4FFy7Ztl8EDnsPRtc-nWScm2qLyVpTB8YsDmYp0mivEB0uhXBlGZbGtdLVCL6ZSIcH6ka6mPoexNTpexDtIlJUGSiRQnzUWznNg"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl font-[var(--font-playfair)] text-[#200b3c] ">
                The Ultimate Oral Care Experience
              </h2>
              <div className="h-1 w-20 bg-[#24B9D7]" />
              <p className="text-xl leading-relaxed text-gray-600 ">
                Our comprehensive treatment focuses on removing plaque, tartar,
                and stubborn surface stains. We combine advanced clinical
                techniques with a gentle touch to restore your teeth&apos;s
                natural brilliance and ensure optimal gum health.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#24B9D7]">
                    check_circle
                  </span>
                  <span className="font-semibold text-[#200b3c] ">
                    Clinical Excellence
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#24B9D7]">
                    check_circle
                  </span>
                  <span className="font-semibold text-[#200b3c] ">
                    Advanced Whitening
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#24B9D7]">
                    check_circle
                  </span>
                  <span className="font-semibold text-[#200b3c] ">
                    Pain-Free Tech
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#24B9D7]">
                    check_circle
                  </span>
                  <span className="font-semibold text-[#200b3c] ">
                    Expert Guidance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f8] py-24 ">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
            <h2 className="text-4xl font-[var(--font-playfair)] text-[#200b3c] ">
              Why Choose Professional Whitening
            </h2>
            <p className="text-gray-600 ">
              Experience the difference of medical-grade treatments over
              drugstore alternatives.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-xl border border-[#200b3c]/5 bg-white p-8 shadow-sm transition-all hover:border-[#24B9D7] ">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#24B9D7]/10 transition-colors group-hover:bg-[#24B9D7]">
                <span className="material-symbols-outlined text-[#24B9D7] group-hover:text-white">
                  verified_user
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Safe &amp; Effective</h3>
              <p className="text-sm leading-relaxed text-gray-500 ">
                Medical-grade gels and LED technology ensure zero damage to your
                enamel.
              </p>
            </div>
            <div className="group rounded-xl border border-[#200b3c]/5 bg-white p-8 shadow-sm transition-all hover:border-[#24B9D7] ">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#24B9D7]/10 transition-colors group-hover:bg-[#24B9D7]">
                <span className="material-symbols-outlined text-[#24B9D7] group-hover:text-white">
                  shutter_speed
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Long-Lasting Results</h3>
              <p className="text-sm leading-relaxed text-gray-500 ">
                Enjoy a brilliant smile that lasts up to 3x longer than at-home
                kits.
              </p>
            </div>
            <div className="group rounded-xl border border-[#200b3c]/5 bg-white p-8 shadow-sm transition-all hover:border-[#24B9D7] ">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#24B9D7]/10 transition-colors group-hover:bg-[#24B9D7]">
                <span className="material-symbols-outlined text-[#24B9D7] group-hover:text-white">
                  person
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Personalized Care</h3>
              <p className="text-sm leading-relaxed text-gray-500 ">
                Custom shade matching designed to complement your natural
                features.
              </p>
            </div>
            <div className="group rounded-xl border border-[#200b3c]/5 bg-white p-8 shadow-sm transition-all hover:border-[#24B9D7] ">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-[#24B9D7]/10 transition-colors group-hover:bg-[#24B9D7]">
                <span className="material-symbols-outlined text-[#24B9D7] group-hover:text-white">
                  healing
                </span>
              </div>
              <h3 className="mb-3 text-xl font-bold">Painless Procedure</h3>
              <p className="text-sm leading-relaxed text-gray-500 ">
                Sensitivity-reducing protocols make the experience comfortable
                and easy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white py-24 ">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-20 text-center text-4xl font-[var(--font-playfair)] text-[#200b3c] ">
            Your Journey to Radiance
          </h2>
          <div className="relative grid gap-12 md:grid-cols-3">
            <div className="absolute top-12 left-0 hidden h-0.5 w-full bg-[#200b3c]/10 md:block" />
            <div className="relative z-10 space-y-4 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#24B9D7] bg-white text-2xl font-black text-[#24B9D7] shadow-xl">
                01
              </div>
              <h4 className="text-xl font-bold">Consultation</h4>
              <p className="mx-auto max-w-xs text-gray-500">
                We assess your dental health and discuss your aesthetic goals.
              </p>
            </div>
            <div className="relative z-10 space-y-4 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#F7BB00] bg-white text-2xl font-black text-[#F7BB00] shadow-xl">
                02
              </div>
              <h4 className="text-xl font-bold">Professional Cleaning</h4>
              <p className="mx-auto max-w-xs text-gray-500">
                Full removal of plaque and tartar to prepare the surface for
                whitening.
              </p>
            </div>
            <div className="relative z-10 space-y-4 text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-[#24B9D7] bg-[#24B9D7] text-2xl font-black text-white shadow-xl shadow-[#24B9D7]/30">
                03
              </div>
              <h4 className="text-xl font-bold">Advanced Whitening</h4>
              <p className="mx-auto max-w-xs text-gray-500">
                Application of specialized whitening gel activated by modern LED
                light.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#200b3c] py-24 text-center text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#24B9D7] via-transparent to-transparent opacity-10" />
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="mb-8 flex justify-center gap-1 text-[#F7BB00]">
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
            <span className="material-symbols-outlined">star</span>
          </div>
          <p className="mb-10 text-3xl leading-relaxed font-[var(--font-playfair)] italic md:text-4xl">
            &quot;I never thought my teeth could be this bright without veneers.
            The process was completely painless, and the staff at Ivories made
            me feel like royalty. My confidence has skyrocketed!&quot;
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="h-14 w-14 rounded-full bg-[#24B9D7]/20 p-1">
              <div
                className="h-full w-full rounded-full bg-gray-400 bg-cover bg-center"
                data-alt="Patient profile picture"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoIzHxCyYFwIbB8qpdzvp3gUlgad8Htu9JIVC7OxVhTx2UzrMIN_k7dExw9vjptLxKWzwxeXS3VqRwT1IPWhrZM7hMFlhLsunZpexgLybgFvUgGwtupV4GGDG1wv4VIAd-5hVF0WYwYr5SILLPUnZCPBOxZQQb8FKUhvKw_XvFpjrmCBezeumcwj8R4h3iqVld-MlLAXUA9WbQ_UY9pg_SQBC5vW0lnpkgqOAxfYjer-behZdbqOj-IuLBN793EoeSo8LinhsiZQ')",
                }}
              />
            </div>
            <div className="text-left">
              <p className="text-lg font-bold">Sarah Jenkins</p>
              <p className="text-sm text-[#24B9D7]">
                Professional Whitening Patient
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 ">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="mb-16 text-center text-4xl font-[var(--font-playfair)] text-[#200b3c] ">
            Common Questions
          </h2>
          <div className="space-y-4">
            <details
              className="group rounded-xl bg-[#f7f6f8] p-6 transition-all "
              open
            >
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-bold text-[#200b3c] ">
                Is professional whitening safe for sensitive teeth?
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-gray-600 ">
                Yes! At Ivories, we use sensitivity-reducing agents and
                customized protocols specifically designed for patients with
                sensitive teeth. Most patients report zero to minimal
                discomfort.
              </div>
            </details>
            <details className="group rounded-xl bg-[#f7f6f8] p-6 transition-all ">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-bold text-[#200b3c] ">
                How long do the whitening results last?
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-gray-600 ">
                With proper care and maintenance, professional whitening results
                can last between 1 to 3 years. We provide an aftercare kit and
                guidance on avoiding staining foods to prolong your results.
              </div>
            </details>
            <details className="group rounded-xl bg-[#f7f6f8] p-6 transition-all ">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-bold text-[#200b3c] ">
                Professional vs. Over-the-counter products?
                <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="mt-4 leading-relaxed text-gray-600 ">
                Drugstore products are generic and often lack the concentration
                needed for significant results. Professional whitening is
                tailored to your tooth anatomy, ensuring even whitening and
                safer application on gums.
              </div>
            </details>
          </div>
        </div>
      </section>

      <section className="bg-[#200b3c] py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-20 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-4xl text-[#24B9D7]">
                  dentistry
                </span>
                <h2 className="text-3xl font-[var(--font-playfair)] font-bold">
                  Ivories Dental Clinic
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-gray-400">
                Bringing luxury and hygiene together to redefine your dental
                experience. Visit us for a transformation that begins with a
                smile.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#24B9D7]">
                    location_on
                  </span>
                  <span>123 Dental Excellence Way, Ivory Plaza, NY 10001</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#24B9D7]">
                    phone_in_talk
                  </span>
                  <span>+1 (555) 010-9876</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-[#24B9D7]">
                    mail
                  </span>
                  <span>hello@ivoriesclinic.com</span>
                </div>
              </div>
              <div className="flex gap-4 pt-6">
                <a
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#24B9D7]"
                  href="#"
                >
                  <span className="material-symbols-outlined">public</span>
                </a>
                <a
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#24B9D7]"
                  href="#"
                >
                  <span className="material-symbols-outlined">thumb_up</span>
                </a>
                <a
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-[#24B9D7]"
                  href="#"
                >
                  <span className="material-symbols-outlined">camera_alt</span>
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-2xl md:p-12">
              <h3 className="mb-8 text-2xl font-bold text-[#200b3c]">
                Send an Inquiry
              </h3>
              <form className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-bold tracking-wider text-gray-500 uppercase">
                      Full Name
                    </label>
                    <input
                      className="w-full rounded-lg border-none bg-[#f7f6f8] p-4 text-[#200b3c] focus:ring-2 focus:ring-[#24B9D7]"
                      placeholder="John Doe"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold tracking-wider text-gray-500 uppercase">
                      Email Address
                    </label>
                    <input
                      className="w-full rounded-lg border-none bg-[#f7f6f8] p-4 text-[#200b3c] focus:ring-2 focus:ring-[#24B9D7]"
                      placeholder="john@example.com"
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold tracking-wider text-gray-500 uppercase">
                    Service Required
                  </label>
                  <select className="w-full rounded-lg border-none bg-[#f7f6f8] p-4 text-[#200b3c] focus:ring-2 focus:ring-[#24B9D7]">
                    <option>Professional Whitening</option>
                    <option>Teeth Cleaning</option>
                    <option>General Consultation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold tracking-wider text-gray-500 uppercase">
                    Message
                  </label>
                  <textarea
                    className="w-full rounded-lg border-none bg-[#f7f6f8] p-4 text-[#200b3c] focus:ring-2 focus:ring-[#24B9D7]"
                    placeholder="Tell us about your dental goals..."
                    rows={4}
                  />
                </div>
                <button
                  className="w-full rounded-lg bg-[#200b3c] py-5 text-lg font-bold text-white shadow-xl shadow-[#200b3c]/20 transition-all hover:bg-[#200b3c]/90"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-gray-500">
            © 2024 Ivories Dental Clinic. All Rights Reserved. Luxury Dental
            Services.
          </div>
        </div>
      </section>
    </main>
  );
}
