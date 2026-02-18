export default function FloatingActions() {
  return (
    <>
      <a
        className="fixed bottom-8 left-8 z-[100] flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110"
        href="https://wa.me/919825571401"
        target="_blank"
      >
        <span className="material-symbols-outlined text-3xl">chat</span>
      </a>

      <div className="group fixed top-1/2 right-0 z-[100] flex -translate-y-1/2 flex-col">
        <a
          href="https://wa.me/919825571401"
          target="_blank"
          className="flex flex-col items-center gap-2 rounded-l-xl bg-[#24B9D7] px-3 py-6 font-bold text-[#200b3c] shadow-2xl transition-colors hover:bg-white"
        >
          <span className="material-symbols-outlined text-xl">calendar_month</span>
          <span className="rotate-180 text-[10px] tracking-[0.2em] uppercase [writing-mode:vertical-lr]">
            Book Appointment
          </span>
        </a>
      </div>
    </>
  );
}
