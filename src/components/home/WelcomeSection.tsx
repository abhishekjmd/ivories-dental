import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <div className="absolute top-0 right-0 size-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-[#24B9D7]/5 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -top-4 -left-4 h-full w-full rounded-2xl border-2 border-[#24B9D7]/20" />
          <img
            className="relative z-10 aspect-[4/5] w-full rounded-2xl object-cover shadow-2xl"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb-93QrR8qcNlGx4eaixKIFuvEAD35_5PuhJ2tOdzji5Wv_5M3QQa7Hk1HEZvjcTwcIPcoIuMtwR5atUgGXcDItrS3vrIAYkvHMhy7-QlgK4O8_4KDkW-DiGIRsMkem-kAE1GiI7zdqU2QNMZ2Wi4zv0B-TXVK_K2gJZvqG19jaOXsMdh9QLkB2rQ01MAUBTqPXS-YQd1C4M1g1gZ2N1F8WpvIE03g20mPZ7Ynu09ABm-8GHzXWsc6_fJwPbDM219mUJLnBl-_lQ"
            alt="Founders"
          />
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="mb-4 text-sm font-bold tracking-[0.3em] text-[#24B9D7] uppercase">
              About the Clinic
            </h2>
            <h3 className="mb-6 text-4xl font-extrabold text-[#200b3c]">
              Welcome to Ivories Dental Clinic
            </h3>
            <p className="text-lg leading-relaxed text-[#200b3c]/70">
              At Ivories, we believe that a smile is the most beautiful thing
              you can wear. Founded in 2004, our clinic has grown into a center
              of clinical excellence where medical ethics meet luxury care.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-4xl text-[#24B9D7]">
                verified_user
              </span>
              <div>
                <h4 className="font-bold">Sterilization</h4>
                <p className="text-sm text-[#200b3c]/60">
                  6-Step global sterilization protocol
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-4xl text-[#24B9D7]">
                neurology
              </span>
              <div>
                <h4 className="font-bold">Pain-Free</h4>
                <p className="text-sm text-[#200b3c]/60">
                  Advanced anesthesia and sedation
                </p>
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className="group flex items-center justify-center gap-3 rounded-lg bg-[#200b3c] px-8 py-4 font-bold tracking-tight text-white uppercase transition-all hover:bg-[#24B9D7]"
          >
            Our Story
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
