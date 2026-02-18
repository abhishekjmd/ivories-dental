"use client";

import { Playfair_Display, Manrope } from "next/font/google";
import { useState } from "react";

const playfair = Playfair_Display({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export default function BookAppointmentPage() {
    const [formData, setFormData] = useState({
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
        <main
            className={`${manrope.className} min-h-screen bg-[#F7F6F8] text-[#0B1F3A] antialiased transition-colors duration-300`}
        >
            {/* Hero Section */}
            <section className="relative h-[300px] w-full flex items-center justify-center bg-[#0B1F3A] overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img
                        alt="Modern high-end dental clinic interior with warm lighting"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpA-KI8wpE2puC4z6vjyH2GzYVSmzMtu23wVYXAHp4rlHtiAlpTTEOsLRiFsHEpZC4kNVEXyFkasEmeZVZJuO3qi-F93HrGMqZwiUZV6bBnB6J-UPs4u8AjZIPRPKGAZb8M4od4yIkv_HTlQsgX0cUKX5fFOzPMfp08twaoG9GaDNjYKMcZb6YaIyDx9ZdY4Gxwi9QlupmTT81mPXYH5QGXDdKz80pj2W_paWpvCk8AMahJwAMMJj1ED0EcAIce-wNPEiTAasFwg"
                    />
                </div>
                <div className="relative z-10 text-center px-4">
                    <h2
                        className={`${playfair.className} text-4xl md:text-5xl text-white mb-4`}
                    >
                        Book Your Transformation
                    </h2>
                    <p className="text-[#C6A75E] font-medium tracking-widest uppercase text-sm">
                        Concierge Dental Care Scheduling
                    </p>
                </div>
            </section>

            {/* Main Booking Content */}
            <div className="max-w-7xl mx-auto px-6 -mt-16 pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Sidebar: Trust Points */}
                <aside className="lg:col-span-4 order-2 lg:order-1">
                    <div className="sticky top-28 space-y-6">
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-[#0B1F3A]/5">
                            <h3
                                className={`${playfair.className} text-2xl text-[#0B1F3A] mb-6`}
                            >
                                Why Ivories Dental?
                            </h3>
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="shrink-0 h-12 w-12 rounded-full bg-[#C6A75E]/10 flex items-center justify-center text-[#C6A75E]">
                                        <span className="material-symbols-outlined text-2xl">
                                            verified_user
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0B1F3A]">ISO 9001 Certified</h4>
                                        <p className="text-sm text-[#0B1F3A]/60 leading-relaxed">
                                            International standards for sterilization and patient safety
                                            protocols.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 h-12 w-12 rounded-full bg-[#C6A75E]/10 flex items-center justify-center text-[#C6A75E]">
                                        <span className="material-symbols-outlined text-2xl">
                                            sentiment_satisfied
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0B1F3A]">
                                            Painless Procedures
                                        </h4>
                                        <p className="text-sm text-[#0B1F3A]/60 leading-relaxed">
                                            Advanced laser and sedation options for a stress-free
                                            experience.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="shrink-0 h-12 w-12 rounded-full bg-[#C6A75E]/10 flex items-center justify-center text-[#C6A75E]">
                                        <span className="material-symbols-outlined text-2xl">
                                            medical_services
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#0B1F3A]">Expert Specialists</h4>
                                        <p className="text-sm text-[#0B1F3A]/60 leading-relaxed">
                                            A team of specialists with 15+ years of clinical excellence.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-[#0B1F3A] p-8 rounded-xl text-white">
                            <h4 className={`${playfair.className} text-xl mb-2`}>Emergency?</h4>
                            <p className="text-sm text-white/70 mb-4">
                                Immediate pain relief appointments available within 2 hours.
                            </p>
                            <a
                                className="flex items-center gap-2 font-bold text-[#C6A75E] hover:text-white transition-colors"
                                href="tel:+917948000766"
                            >
                                <span className="material-symbols-outlined">call</span>
                                Call +91 79 48000766
                            </a>
                        </div>
                    </div>
                </aside>

                {/* Multi-Step Form Container */}
                <section className="lg:col-span-8 order-1 lg:order-2">
                    <div className="bg-white rounded-xl shadow-xl border border-[#0B1F3A]/5 overflow-hidden">
                        {/* Progress Bar */}
                        <div className="bg-[#0B1F3A]/5 border-b border-[#0B1F3A]/10 px-8 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <span className="h-6 w-6 rounded-full bg-[#0B1F3A] text-white text-[10px] flex items-center justify-center font-bold">
                                        1
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                                        Details
                                    </span>
                                </div>
                                <div className="h-px w-8 bg-[#0B1F3A]/20"></div>
                                <div className="flex items-center gap-2 opacity-40">
                                    <span className="h-6 w-6 rounded-full bg-[#0B1F3A]/20 text-[#0B1F3A] text-[10px] flex items-center justify-center font-bold">
                                        2
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                                        Treatment
                                    </span>
                                </div>
                                <div className="h-px w-8 bg-[#0B1F3A]/20"></div>
                                <div className="flex items-center gap-2 opacity-40">
                                    <span className="h-6 w-6 rounded-full bg-[#0B1F3A]/20 text-[#0B1F3A] text-[10px] flex items-center justify-center font-bold">
                                        3
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A]">
                                        Schedule
                                    </span>
                                </div>
                            </div>
                            <span className="text-xs font-bold text-[#C6A75E]">Step 1 of 3</span>
                        </div>
                        <div className="p-8 md:p-12">
                            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                                {/* Step 1: Personal Info */}
                                <div className="space-y-6">
                                    <h3
                                        className={`${playfair.className} text-2xl text-[#0B1F3A]`}
                                    >
                                        Patient Information
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A]/60 font-medium">
                                                Full Name
                                            </label>
                                            <input
                                                className="w-full border-[#0B1F3A]/10 rounded-lg focus:ring-[#C6A75E] focus:border-[#C6A75E] py-3.5 px-4 bg-[#0B1F3A]/5 placeholder:text-[#0B1F3A]/30 outline-none transition-all"
                                                placeholder="John Doe"
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A]/60 font-medium">
                                                Email Address
                                            </label>
                                            <input
                                                className="w-full border-[#0B1F3A]/10 rounded-lg focus:ring-[#C6A75E] focus:border-[#C6A75E] py-3.5 px-4 bg-[#0B1F3A]/5 placeholder:text-[#0B1F3A]/30 outline-none transition-all"
                                                placeholder="john@example.com"
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A]/60 font-medium">
                                                Phone Number
                                            </label>
                                            <input
                                                className="w-full border-[#0B1F3A]/10 rounded-lg focus:ring-[#C6A75E] focus:border-[#C6A75E] py-3.5 px-4 bg-[#0B1F3A]/5 placeholder:text-[#0B1F3A]/30 outline-none transition-all"
                                                placeholder="+91 00000 00000"
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A]/60 font-medium">
                                                Patient Type
                                            </label>
                                            <select
                                                className="w-full border-[#0B1F3A]/10 rounded-lg focus:ring-[#C6A75E] focus:border-[#C6A75E] py-3.5 px-4 bg-[#0B1F3A]/5 outline-none transition-all"
                                                name="patientType"
                                                value={formData.patientType}
                                                onChange={handleInputChange}
                                            >
                                                <option>New Patient</option>
                                                <option>Returning Patient</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2: Service Selection */}
                                <div className="space-y-6 pt-8 border-t border-[#0B1F3A]/10">
                                    <h3
                                        className={`${playfair.className} text-2xl text-[#0B1F3A]`}
                                    >
                                        Treatment & Doctor
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A]/60 font-medium">
                                                Select Service
                                            </label>
                                            <select
                                                className="w-full border-[#0B1F3A]/10 rounded-lg focus:ring-[#C6A75E] focus:border-[#C6A75E] py-3.5 px-4 bg-[#0B1F3A]/5 font-medium outline-none transition-all"
                                                name="service"
                                                value={formData.service}
                                                onChange={handleInputChange}
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
                                            <label className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A]/60 font-medium">
                                                Preferred Doctor
                                            </label>
                                            <select
                                                className="w-full border-[#0B1F3A]/10 rounded-lg focus:ring-[#C6A75E] focus:border-[#C6A75E] py-3.5 px-4 bg-[#0B1F3A]/5 font-medium outline-none transition-all"
                                                name="doctor"
                                                value={formData.doctor}
                                                onChange={handleInputChange}
                                            >
                                                <option>First Available Specialist</option>
                                                <option>Dr. Sarah Harrington (Implantology)</option>
                                                <option>Dr. Marcus Vane (Orthodontics)</option>
                                                <option>Dr. Elena Kozlov (General Dentistry)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3: Scheduling */}
                                <div className="space-y-6 pt-8 border-t border-[#0B1F3A]/10">
                                    <h3
                                        className={`${playfair.className} text-2xl text-[#0B1F3A]`}
                                    >
                                        Availability
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A]/60 font-medium">
                                                Preferred Date
                                            </label>
                                            <div className="relative">
                                                <input
                                                    className="w-full border-[#0B1F3A]/10 rounded-lg focus:ring-[#C6A75E] focus:border-[#C6A75E] py-3.5 px-4 bg-[#0B1F3A]/5 outline-none transition-all cursor-pointer"
                                                    type="date"
                                                    name="date"
                                                    value={formData.date}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-xs font-bold uppercase tracking-widest text-[#0B1F3A]/60 font-medium">
                                                Available Time Slots
                                            </label>
                                            <div className="grid grid-cols-3 gap-2">
                                                {[
                                                    "09:00 AM",
                                                    "10:30 AM",
                                                    "11:45 AM",
                                                    "02:15 PM",
                                                    "04:00 PM",
                                                    "05:30 PM",
                                                ].map((time) => (
                                                    <button
                                                        key={time}
                                                        type="button"
                                                        onClick={() =>
                                                            setFormData((prev) => ({ ...prev, time }))
                                                        }
                                                        className={`py-2 text-[10px] sm:text-xs font-bold border border-[#0B1F3A]/10 rounded-md transition-all ${formData.time === time
                                                            ? "bg-[#C6A75E] text-white shadow-lg shadow-[#C6A75E]/20"
                                                            : "hover:bg-[#0B1F3A] hover:text-white"
                                                            }`}
                                                    >
                                                        {time}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Final Button */}
                                <div className="pt-10 flex flex-col items-center">
                                    <a
                                        href="https://wa.me/919825571401"
                                        target="_blank"
                                        className="w-full md:w-auto min-w-[300px] bg-[#C6A75E] hover:bg-[#C6A75E]/90 text-white font-bold py-5 px-10 rounded-lg transition-all shadow-lg hover:shadow-[#C6A75E]/20 flex items-center justify-center gap-3 group"
                                    >
                                        <span>CONFIRM APPOINTMENT</span>
                                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                                            calendar_today
                                        </span>
                                    </a>
                                    <p className="mt-4 text-[10px] text-[#0B1F3A]/40 uppercase tracking-widest">
                                        By clicking confirm, you agree to our booking terms and
                                        conditions.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* FAQ Section Below Form */}
                    <div className="mt-16 space-y-8">
                        <h3
                            className={`${playfair.className} text-3xl text-[#0B1F3A] text-center`}
                        >
                            Frequently Asked Questions
                        </h3>
                        <div className="space-y-4">
                            {[
                                {
                                    q: "What should I bring to my first visit?",
                                    a: "Please bring a valid ID, your insurance card (if applicable), and any previous dental records or X-rays from the last 6 months. We also recommend arriving 10 minutes early to complete initial paperwork.",
                                },
                                { q: "Do you offer flexible payment plans?", a: "" },
                                { q: "Is parking available at the clinic?", a: "" },
                            ].map((faq, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-lg border border-[#0B1F3A]/10 p-6 shadow-sm hover:border-[#C6A75E]/30 transition-colors"
                                >
                                    <button className="w-full flex items-center justify-between group text-left">
                                        <span className="font-bold text-[#0B1F3A] group-hover:text-[#C6A75E] transition-colors">
                                            {faq.q}
                                        </span>
                                        <span className="material-symbols-outlined text-[#C6A75E] group-hover:rotate-90 transition-transform">
                                            add
                                        </span>
                                    </button>
                                    {faq.a && (
                                        <div className="mt-4 text-[#0B1F3A]/60 text-sm leading-relaxed border-t border-slate-50 pt-4">
                                            {faq.a}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
