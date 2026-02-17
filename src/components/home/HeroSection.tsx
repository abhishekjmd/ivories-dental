export default function HeroSection() {
  return (
    <section className="relative h-[600px] w-full overflow-hidden bg-[#200b3c]">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCZsm2wQlZf5uBMKLIcib2r8TL15yZDHqRdu0O8SEnY63ywptAE6doqlvKstpxTTGhyHkItcYKjfZ13IZPOxuoZhNQrUe-HKqQhr9y-YH-evlxs4snwh8VYhXWYf-QSdJxL-HsUI8UfUWWul6_-rwjadbpP1UXzHrbz1PmKAZ7Aw31uP19aUxmNBH4EIT2lzYQWrlIOGgVb5HpxUbqKNvwsCfJUgj12684AGJI-bhlzx8AxzMND2jd0nsh7JbsqiiqZzOt669CFJw')",
        }}
      />
      <div className="hero-gradient absolute inset-0" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center px-6 text-white md:px-12">
        <div className="max-w-2xl space-y-6">
          <span className="inline-block rounded-full border border-[#24B9D7]/30 bg-[#24B9D7]/20 px-4 py-1 text-sm font-bold tracking-widest text-[#24B9D7] uppercase">
            Excellence in Dentistry
          </span>
          <h1 className="text-5xl leading-[1.1] font-extrabold md:text-7xl">
            Restoring <span className="text-[#24B9D7]">Smiles</span> Since 2004
          </h1>
          <p className="max-w-lg text-lg leading-relaxed font-medium text-white/80">
            Experience world-class dental care with our international-trained
            experts and state-of-the-art technology.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="rounded-lg bg-[#24B9D7] px-8 py-4 font-bold tracking-tighter text-[#200b3c] uppercase transition-all hover:bg-white">
              View Our Work
            </button>
            <button className="flex items-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 font-bold tracking-tighter text-white uppercase transition-all hover:bg-white/10">
              <span className="material-symbols-outlined">play_circle</span>
              Take a Tour
            </button>
          </div>
        </div>
      </div>

      <div className="absolute right-12 bottom-8 flex gap-4">
        <button className="flex size-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:bg-white/10">
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
        <button className="flex size-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:bg-white/10">
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </section>
  );
}
