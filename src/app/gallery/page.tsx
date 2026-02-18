"use client";

import { useState } from "react";
import Image from "next/image";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

type CaseType = "All Cases" | "Dental Implants" | "Smile Makeovers" | "Orthodontics" | "Clinic Gallery";

const cases = [
    {
        id: 1,
        type: "Dental Implants",
        title: "Full Arch Restoration",
        tag: "Implants",
        description: "6 Month Treatment Plan utilizing advanced ceramic porcelain veneers.",
        before: "https://lh3.googleusercontent.com/aida-public/AB6AXuCeS7nx2y_MLP4W7GtbwWlLwq56eJJRNt2Su9o3Ml0JOu1xRpyjLD4zTQ__KborPMaz9ja9JiETNEsPuZbQyp535dseRyYpnz6OpqOa-eihcEnN3_GGI-TMMy10cHtAQoRe-70_kP5Hqpk6jOLePVcwBt2_lR5hG6gWLlXGa7Y4UT52boZna8dMSYlHPFqNh15G1vj30zca1WLR789VPjJm986r8m1FN2S0HKwJdZp-E-b3TEZJPoWMOpXJBGzcnTkep-5md0ZMfw",
        after: "https://lh3.googleusercontent.com/aida-public/AB6AXuBk2-2f8vNe_ocrRRnl6VzfOT8vNrEp37CUZ-Dz5doOeFUmj3XPQBWLN5qXpIYQz81YtJKUXj-_26UZm3WYlhQREmw5wsCqhCxGCyoOAbCYYeNx6m6FQD0ktPpybbLEXOEM6O6WpAez9UQ-Xvn3q00XQ5dEoB4wJrQdr-TstiJbqqfhIaUz82bhCuIUf1SFIXw8lSpnWC0HwGuvmeYruvQui9a3MUFX7Ocy9DE5x_2d4gd6eWMVNX4cPmMzplPoX6nCdQQNbAZgZA",
    },
    {
        id: 2,
        type: "Smile Makeovers",
        title: "Laser Smile Whitening",
        tag: "Cosmetic",
        description: "Deep staining removal and professional whitening in a single session.",
        before: "https://lh3.googleusercontent.com/aida-public/AB6AXuDn-ICzSUdq6A1Abg4_dzM0B7m16axOV1O5xQa9lWPPrC1bu5Sk1xmkXu-NEwbkrPYdEaPJT6oJpBtV78RRLdTvpQURFI36fMrI0gWQUEI-Z9W2atpHkipTs6PNOsR7vxjGe6qqM2zG4H8va9VfRqCvC5iGZ7IjmhARSQYDYKLYmkRa_mRsSf5RBRtjaUQSyFVa9FTcbY3_ZVbIKg2CshBHuS40dazYG1QiZ1GfSOt1dQanoaX6S_JvyAcZTSKgLZoRkfvBGCvP7w",
        after: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkS0wHASo4YxJcNZ05EMuOmzRHaMwoDI5A0Jc4RwfeYfccqhX4bX1tEpfNd5CL8qcF5bKWDxc2SbQtaq3EgCb2O2vPYhgdwZzH81xbF90unCTbjvUjffgBmYEtXsnoL5QfT8cTLQobHZvvSBOedp9b5CqD7EK4aW7dm3KbidwGZjVD2cN1hudZ3zhMLQZz4jsARn2ec-ziXBekYCIez4U4N79N3tPg_LErK6m0dU-F6RzktMk1HJUZVtuGZP5zwR7ri7SfMQgmCQ",
    },
    {
        id: 3,
        type: "Orthodontics",
        title: "Invisalign Transformation",
        tag: "Orthodontics",
        description: "Corrected severe crowding over 14 months using clear aligner therapy.",
        before: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJurY6xjuPOJOPmDUOaOGWgaPIdOGBCS2tQP-i5Dgv9U7nyL9XeBWbcugOhfBoDhpImAxy9wo14SYP8NCthuWHWdFOaxGDAT1c-y9uyApsQ9c5xJtTagqglKLjQRJeVhrerpmuzSFhuwoTVx_09leX1mZm3Dn8Prs0cNcWCG5NTpSHb7smwtWFlaxb-t0PNJLJcXcySTVGUmyf1O90UVL2Sh7WLToIDZoo3wttQE9UIW3Q6OgDimL5RPtG0gYhHebqKNMX2q4-2A",
        after: "https://lh3.googleusercontent.com/aida-public/AB6AXuBGQ1RzIQ5ZSYY5jcnF3jagSsI8rEG4FMSoOHHkd3h0DYxbPxTFi9iZvJ_DsFjywdl9mpOgSGbBhsJNYX2-_ncwGljn1HMD2wInDZC3mfNeL41cO8qRjBNqCYuEjf09CYlUY1fhEkGiit99dwPJmRQYze1YuuyI3YEPTNSS8Axe70v0ne_uZHeUMrMyd-mHxZKDXnl-ty3o8sHYK9IwWPNcyRiHMwfWSA-rPel1pEg-IGI_c1jwlf4WKayfXLXW64h-DTmFq77Rew",
    },
];

const clinicImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD0yvdjkuZyryrCChBZpHuZI1rlCqfDDEU9sXKcAjWY7stg0I7Pwp34OogZJK3TJ61KLdA131AdVKL8KPRthkW_83rmdhOfJUzAHovWl8KVpAspAp4otmkHdSFP_7IUTy0hHlXBD5vwA28uj3-XaibeRsF9T7XP6TdsKnbRuEJxAiJpESe-o8OcfQ1RI3LbIWqzYd8-wN-pQ-X48yzufOu5nrzipTGTS9v5yjPK4iA-5bW12Qd_VAAyW25uO1fQBO9PnPn_zy1WgA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC00-KEsRlrqsov8GMAx95xGSZ3NoQcb9KECzbaBpucFJC3BtsJqY6_CmJwhp8msmEh36pqaul01hCs1s4IgsYrrdX4XOhwDATBus3L6PoahW6GaCMP2Zk-2OowGASGvFIyddZhF4mnyvtG1-23WzvT3ciMn53uJYLpP4gtFH3o0lBO34I5CRs9i_v4Z2piLacOIojC1v73WCPFBnw_BF6PDnm-EazthKblz38UNRQaiV4rXL-B12UHluOgS3Xi3bTEuvZFUog1Mw",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuALpgRljmTp_DDW4jjAcbxltnJgLlLr2m0dwXTtjRjAzpxa2EqETqH2hEO544c56LDpln_dr3gI0aNYzdsHWSI2D03HtHi3Zd00g9bdhJtU982rWRVCAUSS-X2xGuWWGuzLmtZAYTw6f4y80RVreZIHz9W1oA1GhWL6zMm5pkI7ZQAKSwb5QE3JXg5_e8CQleU2FYcrfiEZS7kxYP-cDlyYQenWe-Bh35U69hVydML2zwhQ_J_OGh2OkRIbVjZYAetQ2wZu-xM2hg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBDd5yng6nOC9oRlyUByLUjCHzHzbw2Lsb909h1BUFhmvr6-kz_Zw-BIyxfsAgidL5t9QuQhog6WfLCZccGn6M09fczx_2G5lwmlbk_KeUUfFV7KuKuqdrzycnNVRdsKRRmrvNP6qoo3jgs2afsOq3dkoUa1Xyg8aG37GQhmsz9KSLxr5nENiqeuuAsuyt6ZdIrmrOQd5tTE6qYfgpGK9_ZOcr-scWGDGK5Q5BRR133UlSROvUG121Gma18x8KqsxQTqAUwtJOMZQ",
];

export default function GalleryPage() {
    const [activeTab, setActiveTab] = useState<CaseType>("All Cases");

    const filteredCases =
        activeTab === "All Cases" || activeTab === "Clinic Gallery"
            ? cases
            : cases.filter((c) => c.type === activeTab);

    const tabs: CaseType[] = [
        "All Cases",
        "Dental Implants",
        "Smile Makeovers",
        "Orthodontics",
        "Clinic Gallery",
    ];

    return (
        <main className={`${manrope.className} bg-[#f7f6f8] text-[#0B1F3A]`}>
            {/* Hero Section */}
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#0B1F3A] py-32 text-center">
                <div className="pointer-events-none absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#24B9D7]/40 via-transparent to-transparent" />
                </div>
                <div className="relative z-10 mx-auto max-w-6xl px-8">
                    <span className="mb-4 block text-sm font-bold tracking-[0.2em] text-[#24B9D7] uppercase">
                        Excellence in Aesthetics
                    </span>
                    <h2 className="mb-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
                        Our Transformation{" "}
                        <span className="font-light italic text-[#24B9D7]">Gallery</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                        Witness the artistry behind every smile. We combine medical precision
                        with aesthetic excellence to create life-changing results and restore
                        patient confidence.
                    </p>
                </div>
            </section>

            {/* Filterable Gallery Section */}
            <section className="mx-auto max-w-6xl px-8 py-24">
                {/* Tabs / Filter */}
                <div className="mb-16 flex flex-wrap items-center justify-center gap-4">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`rounded-full border px-8 py-3 text-sm font-bold transition-all ${activeTab === tab
                                ? "bg-[#0B1F3A] text-white border-[#0B1F3A]"
                                : "bg-white text-[#0B1F3A] border-[#0B1F3A]/10 hover:border-[#24B9D7]"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Transformation Grid */}
                {activeTab === "Clinic Gallery" ? (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                        <div className="group aspect-[4/3] overflow-hidden rounded-xl md:col-span-2 md:row-span-2">
                            <img
                                alt="Modern dentist office with high tech equipment"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src={clinicImages[0]}
                            />
                        </div>
                        <div className="group aspect-square overflow-hidden rounded-xl">
                            <img
                                alt="Clean minimal dental reception area"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src={clinicImages[1]}
                            />
                        </div>
                        <div className="group aspect-square overflow-hidden rounded-xl">
                            <img
                                alt="Modern medical surgical lamp"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src={clinicImages[2]}
                            />
                        </div>
                        <div className="group aspect-[16/6] overflow-hidden rounded-xl md:col-span-2">
                            <img
                                alt="Modern professional office lounge space"
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                src={clinicImages[3]}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {filteredCases.map((c) => (
                            <div
                                key={c.id}
                                className="group overflow-hidden rounded-xl border border-[#0B1F3A]/5 bg-white shadow-sm transition-all hover:shadow-xl"
                            >
                                <div className="relative grid grid-cols-2 gap-0.5">
                                    <div className="relative aspect-square bg-slate-100">
                                        <img
                                            alt={`Close up of teeth before restoration`}
                                            className="h-full w-full object-cover grayscale-[30%]"
                                            src={c.before}
                                        />
                                        <span className="absolute bottom-2 left-2 rounded bg-white/90 px-2 py-1 text-[10px] font-bold tracking-wider text-[#0B1F3A] uppercase">
                                            Before
                                        </span>
                                    </div>
                                    <div className="relative aspect-square bg-slate-100">
                                        <img
                                            alt={`Close up of perfect white smile after restoration`}
                                            className="h-full w-full object-cover"
                                            src={c.after}
                                        />
                                        <span className="absolute right-2 bottom-2 rounded bg-white/90 px-2 py-1 text-[10px] font-bold tracking-wider text-[#0B1F3A] uppercase">
                                            After
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="mb-2 flex items-start justify-between">
                                        <h4 className="text-lg font-bold">{c.title}</h4>
                                        <span className="rounded bg-[#24B9D7]/10 px-2 py-1 text-xs font-bold text-[#24B9D7] uppercase">
                                            {c.tag}
                                        </span>
                                    </div>
                                    <p className="mb-4 text-sm text-[#0B1F3A]/60">
                                        {c.description}
                                    </p>
                                    <a
                                        href="https://wa.me/919825571401"
                                        target="_blank"
                                        className="flex items-center gap-2 text-sm font-bold text-[#0B1F3A] transition-colors hover:text-[#24B9D7]"
                                    >
                                        Case Details{" "}
                                        <span className="material-symbols-outlined text-sm">
                                            arrow_forward
                                        </span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* Clinical Environment Section (Only show if not in Clinic Gallery tab) */}
            {activeTab !== "Clinic Gallery" && (
                <section className="bg-[#0B1F3A]/5 py-24">
                    <div className="mx-auto max-w-6xl px-8">
                        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                            <div className="max-w-xl">
                                <h3 className="mb-4 text-3xl font-extrabold">
                                    Clinical Environment
                                </h3>
                                <p className="leading-relaxed text-[#0B1F3A]/70">
                                    Our facility is designed for maximum patient comfort, featuring
                                    cutting-edge diagnostic technology and ultra-modern sterile
                                    operating suites.
                                </p>
                            </div>
                            <button
                                onClick={() => setActiveTab("Clinic Gallery")}
                                className="border-b-2 border-[#24B9D7] pb-1 font-bold text-[#24B9D7] transition-colors hover:border-[#0B1F3A] hover:text-[#0B1F3A]"
                            >
                                Explore Facilities
                            </button>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                            <div className="group aspect-[4/3] overflow-hidden rounded-xl md:col-span-2 md:row-span-2">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    data-alt="Modern dentist office with high tech equipment"
                                    src={clinicImages[0]}
                                />
                            </div>
                            <div className="group aspect-square overflow-hidden rounded-xl">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    data-alt="Clean minimal dental reception area"
                                    src={clinicImages[1]}
                                />
                            </div>
                            <div className="group aspect-square overflow-hidden rounded-xl">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    data-alt="Modern medical surgical lamp"
                                    src={clinicImages[2]}
                                />
                            </div>
                            <div className="group aspect-[16/6] overflow-hidden rounded-xl md:col-span-2">
                                <img
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    data-alt="Modern professional office lounge space"
                                    src={clinicImages[3]}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Closing CTA */}
            <section className="py-24 text-center">
                <div className="mx-auto max-w-4xl px-6">
                    <div className="mb-6 inline-block rounded-full bg-[#24B9D7]/10 p-4 text-[#24B9D7]">
                        <span className="material-symbols-outlined text-4xl">
                            calendar_month
                        </span>
                    </div>
                    <h3 className="mb-6 text-4xl font-extrabold text-[#0B1F3A] md:text-5xl">
                        Ready for Your Transformation?
                    </h3>
                    <p className="mb-10 text-xl text-[#0B1F3A]/60">
                        Start your journey to a radiant smile with a comprehensive clinical
                        assessment by our lead specialists.
                    </p>
                    <div className="flex flex-col justify-center gap-4 sm:flex-row">
                        <a
                            href="https://wa.me/919825571401"
                            target="_blank"
                            className="rounded-xl bg-[#F7BB00] px-10 py-5 text-lg font-black text-[#0B1F3A] shadow-xl shadow-[#F7BB00]/20 transition-all hover:scale-105 active:scale-95 text-center"
                        >
                            Book My Appointment
                        </a>
                        <a
                            href="https://wa.me/919825571401"
                            target="_blank"
                            className="rounded-xl border-2 border-[#0B1F3A] bg-white px-10 py-5 text-lg font-bold text-[#0B1F3A] transition-all hover:bg-[#0B1F3A] hover:text-white text-center"
                        >
                            Contact Support
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
