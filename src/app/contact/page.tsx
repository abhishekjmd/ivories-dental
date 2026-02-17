"use client";

import { Playfair_Display } from "next/font/google";
import { useState } from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });

const timeSlots = [
  "09:00 AM",
  "10:30 AM",
  "11:45 AM",
  "02:15 PM",
  "04:00 PM",
  "05:30 PM",
];

const trustPoints = [
  {
    icon: "verified_user",
    title: "ISO 9001 Certified",
    description:
      "International standards for sterilization and patient safety protocols.",
  },
  {
    icon: "sentiment_satisfied",
    title: "Painless Procedures",
    description:
      "Advanced laser and sedation options for a stress-free experience.",
  },
  {
    icon: "medical_services",
    title: "Expert Specialists",
    description: "A team of specialists with 15+ years of clinical excellence.",
  },
];

const faqs = [
  {
    question: "What should I bring to my first visit?",
    answer:
      "Please bring a valid ID, your insurance card (if applicable), and any previous dental records or X-rays from the last 6 months. We also recommend arriving 10 minutes early to complete initial paperwork.",
  },
  {
    question: "Do you offer flexible payment plans?",
    answer: "",
  },
  {
    question: "Is parking available at the clinic?",
    answer: "",
  },
];

type FormData = {
  name: string;
  email: string;
  phone: string;
  patientType: string;
  service: string;
  doctor: string;
  date: string;
  time: string;
};

const inputClassName =
  "w-full rounded-lg border border-[#0B1F3A]/10 bg-[#0B1F3A]/5 px-4 py-3 text-sm text-[#0B1F3A] outline-none placeholder:text-[#0B1F3A]/35 transition-all focus:border-[#C6A75E] focus:ring-1 focus:ring-[#C6A75E]";

const labelClassName =
  "text-xs font-bold tracking-widest text-[#0B1F3A]/60 uppercase";

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    patientType: "New Patient",
    service: "Choose a procedure...",
    doctor: "First Available Specialist",
    date: "",
    time: "02:15 PM",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-[#F7F6F8] text-[#0B1F3A] antialiased">
      <section className="relative isolate overflow-hidden bg-[#0B1F3A] pb-20 pt-20 sm:pt-24">
        <div className="absolute inset-0 opacity-20">
          <img
            alt="Modern dental clinic interior"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpA-KI8wpE2puC4z6vjyH2GzYVSmzMtu23wVYXAHp4rlHtiAlpTTEOsLRiFsHEpZC4kNVEXyFkasEmeZVZJuO3qi-F93HrGMqZwiUZV6bBnB6J-UPs4u8AjZIPRPKGAZb8M4od4yIkv_HTlQsgX0cUKX5fFOzPMfp08twaoG9GaDNjYKMcZb6YaIyDx9ZdY4Gxwi9QlupmTT81mPXYH5QGXDdKz80pj2W_paWpvCk8AMahJwAMMJj1ED0EcAIce-wNPEiTAasFwg"
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className={`${playfair.className} mb-4 text-4xl text-white md:text-5xl`}>
            Book Your Transformation
          </h1>
          <p className="text-sm font-medium tracking-[0.28em] text-[#C6A75E] uppercase">
            Concierge Dental Care Scheduling
          </p>
        </div>
      </section>

      <section className="mx-auto -mt-12 max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 xl:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="space-y-6 xl:sticky xl:top-28">
            <div className="rounded-xl border border-[#0B1F3A]/5 bg-white p-6 shadow-sm sm:p-8">
              <h2 className={`${playfair.className} mb-6 text-3xl text-[#0B1F3A]`}>
                Why Ivories Dental?
              </h2>
              <div className="space-y-8">
                {trustPoints.map((point) => (
                  <div key={point.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#C6A75E]/10 text-[#C6A75E]">
                      <span className="material-symbols-outlined text-2xl">
                        {point.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0B1F3A]">{point.title}</h3>
                      <p className="text-sm leading-relaxed text-[#0B1F3A]/60">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-[#0B1F3A] p-6 text-white sm:p-8">
              <h2 className={`${playfair.className} mb-2 text-3xl`}>Emergency?</h2>
              <p className="mb-4 text-sm text-white/70">
                Immediate pain relief appointments available within 2 hours.
              </p>
              <a
                className="inline-flex items-center gap-2 font-bold text-[#C6A75E] transition-colors hover:text-white"
                href="tel:+917948000766"
              >
                <span className="material-symbols-outlined">call</span>
                Call +91 79 48000766
              </a>
            </div>
          </aside>

          <div className="space-y-10">
            <section className="overflow-hidden rounded-xl border border-[#0B1F3A]/5 bg-white shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#0B1F3A]/10 bg-[#0B1F3A]/5 px-6 py-4 sm:px-8">
                <div className="flex items-center gap-3 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0B1F3A] text-[10px] font-bold text-white">
                      1
                    </span>
                    <span className="text-xs font-bold tracking-wider text-[#0B1F3A] uppercase">
                      Details
                    </span>
                  </div>
                  <div className="h-px w-6 bg-[#0B1F3A]/20 sm:w-8" />
                  <div className="flex items-center gap-2 opacity-40">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0B1F3A]/20 text-[10px] font-bold text-[#0B1F3A]">
                      2
                    </span>
                    <span className="text-xs font-bold tracking-wider text-[#0B1F3A] uppercase">
                      Treatment
                    </span>
                  </div>
                  <div className="h-px w-6 bg-[#0B1F3A]/20 sm:w-8" />
                  <div className="flex items-center gap-2 opacity-40">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0B1F3A]/20 text-[10px] font-bold text-[#0B1F3A]">
                      3
                    </span>
                    <span className="text-xs font-bold tracking-wider text-[#0B1F3A] uppercase">
                      Schedule
                    </span>
                  </div>
                </div>
                <span className="text-xs font-bold text-[#C6A75E]">Step 1 of 3</span>
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-6">
                    <h2 className={`${playfair.className} text-4xl text-[#0B1F3A]`}>
                      Patient Information
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className={labelClassName}>Full Name</label>
                        <input
                          className={inputClassName}
                          name="name"
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          type="text"
                          value={formData.name}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClassName}>Email Address</label>
                        <input
                          className={inputClassName}
                          name="email"
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          type="email"
                          value={formData.email}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClassName}>Phone Number</label>
                        <input
                          className={inputClassName}
                          name="phone"
                          onChange={handleInputChange}
                          placeholder="+91 00000 00000"
                          type="tel"
                          value={formData.phone}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className={labelClassName}>Patient Type</label>
                        <select
                          className={inputClassName}
                          name="patientType"
                          onChange={handleInputChange}
                          value={formData.patientType}
                        >
                          <option>New Patient</option>
                          <option>Returning Patient</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 border-t border-[#0B1F3A]/10 pt-8">
                    <h2 className={`${playfair.className} text-4xl text-[#0B1F3A]`}>
                      Treatment &amp; Doctor
                    </h2>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className={labelClassName}>Select Service</label>
                        <select
                          className={inputClassName}
                          name="service"
                          onChange={handleInputChange}
                          value={formData.service}
                        >
                          <option disabled>Choose a procedure...</option>
                          <option>Smile Makeover (Cosmetic)</option>
                          <option>Dental Implants</option>
                          <option>Root Canal Therapy</option>
                          <option>Professional Cleaning</option>
                          <option>Orthodontics (Invisalign)</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className={labelClassName}>Preferred Doctor</label>
                        <select
                          className={inputClassName}
                          name="doctor"
                          onChange={handleInputChange}
                          value={formData.doctor}
                        >
                          <option>First Available Specialist</option>
                          <option>Dr. Sarah Harrington (Implantology)</option>
                          <option>Dr. Marcus Vane (Orthodontics)</option>
                          <option>Dr. Elena Kozlov (General Dentistry)</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 border-t border-[#0B1F3A]/10 pt-8">
                    <h2 className={`${playfair.className} text-4xl text-[#0B1F3A]`}>
                      Availability
                    </h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                      <div className="space-y-2">
                        <label className={labelClassName}>Preferred Date</label>
                        <input
                          className={inputClassName}
                          name="date"
                          onChange={handleInputChange}
                          type="date"
                          value={formData.date}
                        />
                      </div>
                      <div className="space-y-4">
                        <label className={labelClassName}>Available Time Slots</label>
                        <div className="grid grid-cols-3 gap-2">
                          {timeSlots.map((time) => (
                            <button
                              key={time}
                              className={`rounded-md border border-[#0B1F3A]/10 px-2 py-2 text-[11px] font-bold transition-all sm:text-xs ${
                                formData.time === time
                                  ? "bg-[#C6A75E] text-white"
                                  : "bg-white hover:bg-[#0B1F3A] hover:text-white"
                              }`}
                              onClick={() => setFormData((prev) => ({ ...prev, time }))}
                              type="button"
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center pt-8">
                    <button
                      className="group flex w-full items-center justify-center gap-3 rounded-lg bg-[#C6A75E] px-8 py-4 font-bold text-[#0B1F3A] shadow-lg transition-all hover:bg-[#C6A75E]/90 hover:shadow-[#C6A75E]/20 md:w-auto md:min-w-[320px]"
                      type="submit"
                    >
                      <span>CONFIRM APPOINTMENT</span>
                      <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                        calendar_today
                      </span>
                    </button>
                    <p className="mt-4 text-center text-[10px] tracking-widest text-[#0B1F3A]/40 uppercase">
                      By clicking confirm, you agree to our booking terms and
                      conditions.
                    </p>
                  </div>
                </form>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className={`${playfair.className} text-center text-5xl text-[#0B1F3A]`}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-lg border border-[#0B1F3A]/10 bg-white p-6 shadow-sm"
                  >
                    <button className="group flex w-full items-center justify-between gap-3 text-left">
                      <span className="font-bold text-[#0B1F3A] transition-colors group-hover:text-[#C6A75E]">
                        {faq.question}
                      </span>
                      <span className="material-symbols-outlined text-[#0B1F3A]">
                        add
                      </span>
                    </button>
                    {faq.answer ? (
                      <p className="mt-4 border-t border-[#0B1F3A]/10 pt-4 text-sm leading-relaxed text-[#0B1F3A]/60">
                        {faq.answer}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
