const navItems = ["Home", "Treatments", "Doctors", "Technology", "Contact"];

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
          <div className="flex items-center gap-3">
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
          </div>

          <ul className="hidden items-center gap-8 text-sm font-semibold tracking-wider uppercase lg:flex">
            {navItems.map((item, index) => (
              <li key={item}>
                <a
                  className={
                    index === 0
                      ? "text-[#24B9D7]"
                      : "transition-colors hover:text-[#24B9D7]"
                  }
                  href="#"
                >
                  {item}
                </a>
              </li>
            ))}
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
