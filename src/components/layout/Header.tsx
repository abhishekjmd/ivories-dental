import Link from "next/link";

const treatmentItems = [
  { label: "Root Canal Treatment", href: "/treatments/root-canal-treatment" },
  { label: "Dental Braces", href: "/treatments/dental-braces" },
  { label: "Invisalign Aligners", href: "#" },
  { label: "Kids Dentistry", href: "/treatments/kids-dentistry" },
  { label: "Smile Designing", href: "/treatments/smile-designing" },
  {
    label: "Teeth Cleaning and Whitening",
    href: "/treatments/teeth-cleaning-whitening",
  },
  { label: "Teeth Removal", href: "/treatments/teeth-removal" },
  { label: "Crown and Bridges", href: "/treatments/crowns-bridges" },
  { label: "Dental Implants", href: "/treatments/dental-implant" },
];

export default function Header() {
  return (
    <>
      <div className="w-full bg-[#200b3c] px-6 py-2 text-xs font-medium text-white md:px-12">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-[#24B9D7]">
                call
              </span>
              +91-XXXX-XXXXXX
            </span>
            <span className="hidden items-center gap-2 border-l border-white/20 pl-6 md:flex">
              <span className="material-symbols-outlined text-[16px] text-[#24B9D7]">
                schedule
              </span>
              Mon - Sat: 10:00 AM - 8:00 PM
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a className="transition-colors hover:text-[#24B9D7]" href="#">
              Emergency?
            </a>
            <span className="material-symbols-outlined cursor-pointer text-[18px] hover:text-[#24B9D7]">
              share
            </span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full border-b border-[#200b3c]/10 bg-white/95 shadow-sm backdrop-blur-md">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 md:px-12">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-[#200b3c] text-[#24B9D7]">
              <span className="material-symbols-outlined text-3xl">dentistry</span>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight text-[#200b3c] uppercase">
                Ivories
              </p>
              <p className="-mt-1 text-[10px] font-bold tracking-[0.2em] text-[#24B9D7]">
                DENTAL CLINIC
              </p>
            </div>
          </Link>

          <ul className="hidden items-center gap-8 text-sm font-semibold tracking-wider uppercase lg:flex">
            <li>
              <Link className="text-[#24B9D7]" href="/">
                Home
              </Link>
            </li>

            <li className="group relative">
              <button
                className="flex cursor-pointer items-center gap-1 transition-colors hover:text-[#24B9D7]"
                type="button"
              >
                Treatments
                <span className="material-symbols-outlined text-base">expand_more</span>
              </button>

              <div className="invisible absolute top-full left-1/2 mt-4 w-80 -translate-x-1/2 rounded-xl border border-[#200b3c]/10 bg-white p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <ul className="space-y-1">
                  {treatmentItems.map((item) => (
                    <li key={item.label}>
                      <Link
                        className="block rounded-lg px-4 py-2 text-xs font-semibold tracking-wide text-[#200b3c] uppercase transition-colors hover:bg-[#24B9D7]/10 hover:text-[#24B9D7]"
                        href={item.href}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li>
              <a className="transition-colors hover:text-[#24B9D7]" href="#">
                Doctors
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-[#24B9D7]" href="#">
                Technology
              </a>
            </li>
            <li>
              <a className="transition-colors hover:text-[#24B9D7]" href="#">
                Contact
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button className="hidden rounded-lg bg-[#200b3c] px-6 py-3 text-sm font-bold tracking-tight text-white uppercase shadow-lg shadow-[#200b3c]/20 transition-all hover:bg-[#200b3c]/90 md:block">
              Make an Appointment
            </button>
            <button className="text-[#200b3c] lg:hidden">
              <span className="material-symbols-outlined text-3xl">menu</span>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}


