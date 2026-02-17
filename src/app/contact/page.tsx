"use client";

import { Manrope, Playfair_Display } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

// ─── Section Components ──────────────────────────────────────────────────────

const HeroSection = () => (
  <section className="relative overflow-hidden bg-white py-20 lg:py-32">
    {/* Mesh Background Overlay */}
    <div
      className="absolute inset-0 z-0 bg-white"
      style={{
        backgroundImage:
          "radial-gradient(at 0% 0%, rgba(36, 185, 215, 0.05) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(11, 31, 58, 0.05) 0px, transparent 50%)",
      }}
    />

    <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-10">
      <span className="mb-4 inline-block rounded-full bg-[#24B9D7]/10 px-4 py-1.5 text-xs font-bold tracking-widest text-[#24B9D7] uppercase">
        World-Class Care
      </span>
      <h2
        className={`${playfair.className} text-5xl font-medium leading-tight text-[#0B1F3A] lg:text-7xl`}
      >
        Get in Touch with <br />
        <span className="italic text-[#24B9D7]">Our Experts</span>
      </h2>
      <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-slate-600 lg:text-xl">
        Whether you have a question or are ready to schedule your consultation,
        we&apos;re here to help you achieve your perfect smile with precision and
        luxury care.
      </p>
    </div>

    {/* Decorative Blurs */}
    <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#24B9D7]/5 blur-3xl" />
    <div className="absolute bottom-0 -left-20 h-64 w-64 rounded-full bg-[#0B1F3A]/5 blur-3xl" />
  </section>
);

const InfoCard = ({
  icon,
  title,
  children,
  linkText,
  href,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
  linkText: string;
  href: string;
}) => (
  <div className="group flex flex-col rounded-2xl border border-slate-50 bg-white p-8 shadow-xl shadow-slate-200/50 transition-all hover:-translate-y-1">
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0B1F3A] text-white transition-colors group-hover:bg-[#24B9D7]">
      <span className="material-symbols-outlined text-3xl">{icon}</span>
    </div>
    <h3 className="mb-3 text-xl font-bold">{title}</h3>
    <div className="mb-6 flex-grow text-sm leading-relaxed text-slate-500">
      {children}
    </div>
    <a
      href={href}
      className="inline-flex items-center font-bold text-[#24B9D7] hover:underline"
    >
      {linkText}
      <span className="material-symbols-outlined ml-1 text-sm">
        {icon === "location_on" ? "arrow_outward" : "chevron_right"}
      </span>
    </a>
  </div>
);

const ContactGrid = () => (
  <section className="relative z-10 -mt-16 px-6 lg:px-10">
    <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
      <InfoCard
        icon="location_on"
        title="Visit Our Clinic"
        linkText="Get Directions"
        href="#"
      >
        302, 303, 304 Maulik Arcade, Opposite Mansi Tower, Above Karnavati
        Pagarkha Bazaar, Vastrapur, Ahmedabad, Gujarat 380015
      </InfoCard>

      <InfoCard
        icon="call"
        title="Call or Message Us"
        linkText="Call Now"
        href="tel:+917948000766"
      >
        <div className="space-y-2">
          <p className="text-sm font-medium text-slate-700">
            Phone:{" "}
            <span className="font-bold text-[#0B1F3A]">+91 79 48000766</span>
          </p>
          <p className="text-sm font-medium text-slate-700">
            WhatsApp:{" "}
            <span className="font-bold text-[#0B1F3A]">+91 9879936039</span>
          </p>
        </div>
      </InfoCard>

      <InfoCard
        icon="mail"
        title="Email Our Team"
        linkText="ivoriesdentalclinic@gmail.com"
        href="mailto:ivoriesdentalclinic@gmail.com"
      >
        For general inquiries, corporate tie-ups, or support, reach out via
        email and we&apos;ll respond within 24 hours.
      </InfoCard>
    </div>
  </section>
);

const InquirySection = () => (
  <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
    <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
      {/* Form */}
      <div className="rounded-3xl bg-slate-50 p-8 lg:p-12">
        <h3 className="mb-2 text-3xl font-bold text-[#0B1F3A]">
          Send Us a Message
        </h3>
        <p className="mb-10 text-slate-500">
          Please fill out the form below and our patient coordinator will
          contact you shortly.
        </p>
        <form action="#" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                Full Name
              </label>
              <input
                className="w-full rounded-xl border-slate-200 bg-white p-4 text-sm transition-all focus:border-[#24B9D7] focus:ring-[#24B9D7]/20"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                Email Address
              </label>
              <input
                className="w-full rounded-xl border-slate-200 bg-white p-4 text-sm transition-all focus:border-[#24B9D7] focus:ring-[#24B9D7]/20"
                placeholder="john@example.com"
                type="email"
              />
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                Phone Number
              </label>
              <input
                className="w-full rounded-xl border-slate-200 bg-white p-4 text-sm transition-all focus:border-[#24B9D7] focus:ring-[#24B9D7]/20"
                placeholder="+91 00000 00000"
                type="tel"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-wider text-slate-400 uppercase">
                Service of Interest
              </label>
              <select className="w-full rounded-xl border-slate-200 bg-white p-4 text-sm transition-all focus:border-[#24B9D7] focus:ring-[#24B9D7]/20">
                <option>General Checkup</option>
                <option>Dental Implants</option>
                <option>Orthodontics (Braces/Aligners)</option>
                <option>Teeth Whitening</option>
                <option>Cosmetic Dentistry</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold tracking-wider text-slate-400 uppercase">
              Your Message
            </label>
            <textarea
              className="w-full rounded-xl border-slate-200 bg-white p-4 text-sm transition-all focus:border-[#24B9D7] focus:ring-[#24B9D7]/20"
              placeholder="How can we help you?"
              rows={4}
            />
          </div>
          <button
            className="w-full rounded-xl bg-[#24B9D7] py-4 text-sm font-bold text-white shadow-lg shadow-[#24B9D7]/20 transition-all hover:bg-[#0B1F3A] active:scale-95"
            type="submit"
          >
            Send Inquiry
          </button>
        </form>
      </div>

      {/* Map */}
      <div className="h-full min-h-[500px] overflow-hidden rounded-3xl bg-slate-100 shadow-inner">
        <div className="relative h-full w-full">
          <img
            alt="Map showing Vastrapur area Ahmedabad"
            className="h-full w-full object-cover opacity-80 grayscale brightness-90"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNQtCYGfvdD-YbxzZZX9jzfm9Q5fPhJQ2gfpUX8ML3DCPig2hOLByWj44T6SOeT5UrWTpcBzCWNWz4HsadTFHBhKDg_BoPrsLiTge9eDlAA-dkE__PD4dRHjrZ3qq0BM9zni0sexjHcvScqDV3YYKvOl0-CexP7wE8agL2Z3tr55FTJjGsGroDzgWPQe4Y0RarYrHCNLPq6zS83vP3-thExCLVb8R19rM2-G3_0Z3DfLADsfhlaMo7Xp2znQ9l6R6Bd2BksbzMww"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 animate-pulse items-center justify-center rounded-full bg-[#24B9D7]/20">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#24B9D7] text-white shadow-lg">
                <span className="material-symbols-outlined text-lg">
                  location_on
                </span>
              </div>
            </div>
          </div>
          <div className="absolute right-6 bottom-6 left-6 rounded-2xl bg-white/95 p-4 shadow-xl backdrop-blur">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#0B1F3A] text-white">
                <span className="material-symbols-outlined">directions</span>
              </div>
              <div className="text-left">
                <p className="text-xs font-bold tracking-wider text-[#24B9D7] uppercase">
                  Quick Nav
                </p>
                <p className="text-sm font-bold text-[#0B1F3A]">
                  Vastrapur, Ahmedabad
                </p>
              </div>
              <button className="ml-auto rounded-lg bg-[#0B1F3A] px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-[#24B9D7]">
                Open Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HoursSection = () => (
  <section className="bg-[#F8FAFC] py-24">
    <div className="mx-auto max-w-4xl px-6 lg:px-10">
      <div className="mb-16 text-center">
        <h3
          className={`${playfair.className} text-4xl font-medium text-[#0B1F3A]`}
        >
          Clinic Hours
        </h3>
        <div className="mx-auto mt-4 h-1 w-20 bg-[#D4AF37]" />
      </div>
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-8 py-5 text-sm font-bold tracking-wider text-slate-500 uppercase">
                Day
              </th>
              <th className="px-8 py-5 text-sm font-bold tracking-wider text-slate-500 uppercase">
                Timings
              </th>
              <th className="px-8 py-5 text-sm font-bold tracking-wider text-slate-500 uppercase">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="px-8 py-5 font-bold text-[#0B1F3A]">
                Monday - Saturday
              </td>
              <td className="px-8 py-5 text-slate-600">9:30 AM - 8:30 PM</td>
              <td className="px-8 py-5">
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                  Open
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-8 py-5 font-bold text-[#0B1F3A]">Sunday</td>
              <td className="px-8 py-5 text-slate-600">10:30 AM - 1:30 PM</td>
              <td className="px-8 py-5">
                <span className="inline-flex items-center rounded-full bg-[#24B9D7]/10 px-2.5 py-0.5 text-xs font-bold text-[#24B9D7]">
                  By Appointment
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-center text-sm text-slate-500 italic">
        Note: Clinical timings may vary during public holidays. Please call
        ahead to confirm.
      </p>
    </div>
  </section>
);

const EmergencySection = () => (
  <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10">
    <div className="relative overflow-hidden rounded-[2.5rem] bg-[#0B1F3A] px-8 py-16 text-center lg:px-20 lg:py-24">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#24B9D7 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#24B9D7]/20 text-[#24B9D7]">
          <span className="material-symbols-outlined text-5xl">
            emergency_home
          </span>
        </div>
        <h3 className="mb-4 text-3xl font-bold text-white lg:text-5xl">
          Dental Emergency?
        </h3>
        <p className="mb-10 max-w-xl text-lg text-slate-300">
          We prioritize urgent cases. If you&apos;re experiencing severe pain or
          dental trauma, call our 24/7 hotline immediately.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-extrabold text-[#0B1F3A] transition-all hover:bg-[#24B9D7] hover:text-white"
            href="tel:+919879936039"
          >
            <span className="material-symbols-outlined">call</span>
            +91 9879936039
          </a>
          <button className="rounded-full border border-white/20 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10">
            Emergency Protocols
          </button>
        </div>
      </div>
    </div>
  </section>
);

// ─── Main Page ───────────────────────────────────────────────────────────────

export default function ContactPage() {
  return (
    <main
      className={`${manrope.className} bg-white text-[#0B1F3A] antialiased`}
    >
      <HeroSection />
      <ContactGrid />
      <InquirySection />
      <HoursSection />
      <EmergencySection />
    </main>
  );
}
