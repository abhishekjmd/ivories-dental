export default function Footer() {
  return (
    <footer className="bg-[#200b3c] pt-24 pb-12 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 border-b border-white/10 px-6 pb-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-[#24B9D7] text-[#200b3c]">
              <span className="material-symbols-outlined text-3xl">dentistry</span>
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight uppercase">Ivories</h2>
              <p className="-mt-1 text-[10px] font-bold tracking-[0.2em] text-[#24B9D7]">
                DENTAL CLINIC
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            123 Dental Excellence Towers, West End Avenue, Landmark Building,
            Ahmedabad, Gujarat - 380015
          </p>
          <div className="flex gap-4">
            <a
              className="flex size-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-[#24B9D7]"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">social_leaderboard</span>
            </a>
            <a
              className="flex size-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-[#24B9D7]"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">photo_camera</span>
            </a>
            <a
              className="flex size-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-[#24B9D7]"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">link</span>
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-8 text-lg font-bold text-[#24B9D7]">Opening Hours</h4>
          <table className="w-full text-sm text-white/60">
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-2">Mon - Fri</td>
                <td className="py-2 text-right">10:00 - 20:00</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2">Saturday</td>
                <td className="py-2 text-right">10:00 - 18:00</td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-2 font-bold text-[#F7BB00]">Sunday</td>
                <td className="py-2 text-right font-bold text-[#F7BB00]">
                  Emergency Only
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h4 className="mb-8 text-lg font-bold text-[#24B9D7]">Locate Us</h4>
          <div className="relative h-40 overflow-hidden rounded-xl border border-white/10">
            <img
              className="h-full w-full object-cover opacity-50"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeX1aWpDbHjmPGIWu-vzeeCif7NdHXr2WkZaCHSadKr5pkb2R5mlSghv3Ed9ivQwv9VfsoeHVLfnL9ZklXXsBl7H6-_seGtxYFkOWELHNzZXmaErVfPxgkwNQFtpivNXZpuBkNlzyXtH9eRVY1OXumry4WxQpKw5D8yRo1qn4C_W4lx0B7ktKY7rNHZhe-fjb_gAUZ63ClRZTragjyF9RFF18Ph5sPIV6F3wxjXYRDCgMOsGmOwNun9v6KVHfc28Nvw1k6p9fpgQ"
              alt="Clinic map"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined animate-bounce text-4xl text-[#24B9D7]">
                location_on
              </span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="mb-8 text-lg font-bold text-[#24B9D7]">Quick Inquiry</h4>
          <form className="space-y-4">
            <input
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-[#24B9D7]"
              placeholder="Full Name"
              type="text"
            />
            <input
              className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm outline-none focus:border-[#24B9D7]"
              placeholder="Phone Number"
              type="tel"
            />
            <a
              href="https://wa.me/919825571401"
              target="_blank"
              className="block w-full text-center rounded-lg bg-[#24B9D7] py-3 text-sm font-bold tracking-widest text-[#200b3c] uppercase transition-all hover:bg-white"
            >
              Submit Request
            </a>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-xs text-white/40 md:flex-row">
        <p>© 2024 Ivories Dental Clinic. All Rights Reserved.</p>
        <div className="flex gap-6">
          <a className="hover:text-[#24B9D7]" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-[#24B9D7]" href="#">
            Terms of Service
          </a>
          <a className="hover:text-[#24B9D7]" href="#">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
