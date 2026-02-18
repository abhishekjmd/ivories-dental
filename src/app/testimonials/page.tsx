import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";

export const metadata: Metadata = {
  title: "Patient Stories | Testimonials - Ivories Dental Clinic",
  description:
    "Read real stories from our happy patients. See how Ivories Dental Clinic has transformed smiles and lives through painless, world-class dentistry in Ahmedabad.",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
});

const stories = [
  {
    title: '"Life-Changing Painless Surgery"',
    text: '"I was terrified of dental surgery for years, which caused my oral health to deteriorate. But the team at Ivories made it completely painless. From the consultation to the final implant placement, I felt zero discomfort. The technology they use is incredible. I can finally smile and eat with confidence again!"',
    name: "Niraj Oza",
    metaLeft: "Mumbai, India",
    metaRight: "Dental Implants",
    initials: "NO",
  },
  {
    title: '"Easiest Wisdom Tooth Removal Ever"',
    text: '"I had heard horror stories about wisdom tooth extractions, but Dr. Mehra made it look like a breeze. The recovery was swift and the instructions provided were so helpful. The clinic hygiene is top-notch. Highly recommended for anyone who is nervous about dental work!"',
    name: "Devanshi Mehta",
    metaLeft: "Graphic Designer",
    metaRight: "Oral Surgery",
    photo:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYOEbeVs7DHwvKnVZUJrEN3iCqTys6uVklHbRBaPZ_Sn6viD-WEx8DWYvqh7XUGCMzGl_3e-Q470V3F3tX8Dx3EExTO8_Gb-n9dlfEOEUVMHYqgqay0skL4uLul5ZzW9DR_IUDDkpt2hM8tdg4BT43ODq5cfx4a8FT8fSWLRmAyJnQxLFdLgwT5iVA1wq3u-EOcR6ssYKglfcDhoWcXkccPPvAlk0C1lFo8IZUrHjhZpKr7sxrGE0CUF4Gi9gTrjBs1V04Xl4hag",
  },
  {
    title: '"My Smile Is Finally Perfect"',
    text: "\"I went for clear aligners at Ivories and the results exceeded my expectations. The digital scanning process was so cool, no messy impressions. 8 months later and my teeth are perfectly straight. If you're looking for cosmetic work, this is the place.\"",
    name: "Arjun Khandelwal",
    metaLeft: "Tech Professional",
    metaRight: "Orthodontics",
    photo:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB5yEaRaS6JErLdQHCWC_ZopAEmurLUq5kEsPpbVx-UPJcTjdJwvVzGwRsf4Ha-uuUhXi9wV61ni959oOdI2O0WpSyFw8-bPYmiAz_mywlJimTluT88Ws34uw_gVcWTrmUMFPjDafTZGdWyt3tYvZ5KOVhllyMVwKHz_4N8k3AF4v8_7v_vGm3vf1diuK-aCKv8hbFmvybzE3_5nG4kXzj59J50V8SZGWQGTc2xAUNsgM_DGhZypiEd3BBsCHCcnaqhC9eHITV1dA",
  },
  {
    title: '"Precision Root Canal Therapy"',
    text: '"Root canals usually sound scary, but at Ivories, they use microscopes for extreme precision. I felt nothing during the procedure and my tooth was saved. The doctor explained everything on the monitor as well. Very professional service!"',
    name: "Sonia Parekh",
    metaLeft: "Educator",
    metaRight: "Root Canal",
    initials: "SP",
  },
];

const videos = [
  {
    title: "Transformation Journey: Sarah D.",
    subtitle: "Full Mouth Restoration",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCUgKvaiUUffqP2rf0SS3yKS31_2aVqUA7Rdib8jalKsFd3dbgutRLXZJsdsLKo8VE0y0yOEX8QR7oY5Wvx14hKkEi8Y6chJNGUjuGT383qhzgO_DY10zc-PLjyIh7GmGkYJv18Us22xUE_JY3JRxaPxR_V8hF1BJ94jjr0LUFkTVU3F8BL6BUGWvuseFyyXuAnhOYCFwirMGLTwZdRwTx73p6gKH1I_IQoeB129FEbcELmtRHW4wNyGUHtcC2YOJlT8FkTgO_BkQ",
  },
  {
    title: "Painless Root Canal: My Experience",
    subtitle: "Root Canal Therapy",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA5fBxbACd4-PQ-SqrPbah_VK3xmxStbZM5GiSelYT0bE6BXvEYTTpHjG54WKT227jSEmBylNgt1wanM4LwYkjBGoROeh5PhUo-brrr2bRP8OLjFA0NARxtPv5y1hg4SBNcfXJDmtK-SNYBGMUEgCsfdA7KCrbPQ8C9_v-Dmici5BgmtB8dbynqK5LTYFDxEiH9CWcgE7RafRQjKJ_wQiiUn7uvEQdgEUdHg-9M5wCRv4BZ2UPsM72cmkObHVuTCPu2EOGc0xbKAA",
  },
  {
    title: "Getting Dental Implants Abroad",
    subtitle: "Dental Implants",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDTL_rJDInB7hL214cfPPgjZZYmuVEYIQ_4XXh0fyvL6T0tSaJdnDarL15viLLHRIv7SJyYuvE51DKlk7bRo7cUt_Xl4SfnOkvoPKkv3oGQMU6XZuIEccSQJt_Gv2FHP8yIylt_yNKpiK9k0-n8PHXHw_HrW3Q9quvwWEgEs-PMyNyHQ0weHo_1Q47KAlZMrtAypeQe7VvoH4W7mz6E7yJuakkgXaR-EK-P1KP_ANWJEpFPEWRRb2Sx63belFmoepy2X78bWidnBg",
  },
];

export default function TestimonialsPage() {
  return (
    <main className={`${playfair.variable} bg-[#f7f6f8] text-[#200b3c]`}>
      <section className="relative overflow-hidden bg-[#200b3c] py-20 lg:py-32">

        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-20">
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl leading-tight font-[var(--font-playfair)] text-white lg:text-6xl">
            Real Stories. <span className="text-[#24B9D7]">Real Smiles.</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80 lg:text-xl">
            See how we have transformed lives and restored confidence through
            painless, world-class dentistry.
          </p>
          <div className="mt-20 flex flex-wrap justify-center gap-4">
            <a
              href="/gallery"
              className="rounded-lg bg-[#24B9D7] px-8 py-4 font-bold text-[#200b3c] transition-transform hover:scale-105"
            >
              View Our Results
            </a>
            <a
              href="https://wa.me/919825571401"
              target="_blank"
              className="rounded-lg border border-white/20 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
            >
              Watch Patient Videos
            </a>
          </div>
        </div>
      </section>

      <section className="sticky top-20 z-40 border-b border-[#200b3c]/10 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="no-scrollbar flex gap-4 overflow-x-auto py-4 lg:gap-8">
            <button className="rounded-full bg-[#200b3c] px-4 py-2 text-sm font-bold whitespace-nowrap text-white">
              All Stories
            </button>
            <button className="rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap text-[#200b3c]/60 transition-colors hover:bg-[#200b3c]/5">
              Dental Implants
            </button>
            <button className="rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap text-[#200b3c]/60 transition-colors hover:bg-[#200b3c]/5">
              Root Canal
            </button>
            <button className="rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap text-[#200b3c]/60 transition-colors hover:bg-[#200b3c]/5">
              Cosmetic Dentistry
            </button>
            <button className="rounded-full px-4 py-2 text-sm font-semibold whitespace-nowrap text-[#200b3c]/60 transition-colors hover:bg-[#200b3c]/5">
              Orthodontics
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f8] py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="flex flex-col items-center justify-between gap-8 rounded-xl border border-[#200b3c]/5 bg-white p-8 shadow-sm lg:flex-row">
            <div className="flex items-center gap-4">
              <img
                alt="Google Logo"
                className="h-12 w-12"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo_qVGk3DKpRpNSH0YLxEvi1shwwMpXDBVTobUS3mJfUODUczAtSG_wH5g3UIwrciY8GLWvArxzZfBnKjlFxKZFGz4XJSYaEjF-nGlyCXWsChcFLr1VO-r7cqSEcS2EkkeEgFX_fCaae7TOR2XVd820qIYAmM8YdRC0lHwSC79F3V_wuSg-X1rHgIldVwh49Zssv3QtuWlPvQfDNOQ3yNg2lU3VVBypefdHTH03emr0QWErcPMepAZQnhbeL4miDQb5pxlfWGW9g"
              />
              <div>
                <p className="text-2xl font-[var(--font-playfair)] font-bold text-[#200b3c]">
                  4.9/5 Rating
                </p>
                <p className="text-[#200b3c]/60">
                  Based on 500+ verified Google reviews
                </p>
              </div>
            </div>
            <div className="flex gap-1">
              <span className="material-symbols-outlined text-3xl text-[#F7BB00]">
                star
              </span>
              <span className="material-symbols-outlined text-3xl text-[#F7BB00]">
                star
              </span>
              <span className="material-symbols-outlined text-3xl text-[#F7BB00]">
                star
              </span>
              <span className="material-symbols-outlined text-3xl text-[#F7BB00]">
                star
              </span>
              <span className="material-symbols-outlined text-3xl text-[#F7BB00]">
                star
              </span>
            </div>
            <a
              href="https://wa.me/919825571401"
              target="_blank"
              className="border-b-2 border-[#200b3c]/20 pb-1 font-bold text-[#200b3c] transition-all hover:border-[#24B9D7]"
            >
              Read All Google Reviews
            </a>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f6f8] py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {stories.map((story) => (
              <article
                key={story.title}
                className="relative flex flex-col overflow-hidden rounded-xl border border-[#200b3c]/5 bg-white p-8 shadow-sm transition-all hover:border-[#24B9D7] hover:shadow-md"
              >
                <div className="absolute top-0 left-0 h-full w-2 bg-[#24B9D7]" />
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex gap-0.5">
                    <span className="material-symbols-outlined text-lg text-[#F7BB00]">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg text-[#F7BB00]">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg text-[#F7BB00]">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg text-[#F7BB00]">
                      star
                    </span>
                    <span className="material-symbols-outlined text-lg text-[#F7BB00]">
                      star
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-[#F7BB00]/20 bg-[#F7BB00]/10 px-3 py-1">
                    <span className="material-symbols-outlined text-sm text-[#F7BB00]">
                      verified
                    </span>
                    <span className="text-[10px] font-bold tracking-wider text-[#F7BB00] uppercase">
                      Verified Review
                    </span>
                  </div>
                </div>
                <h3 className="mb-4 text-xl leading-snug font-bold font-[var(--font-playfair)]">
                  {story.title}
                </h3>
                <p className="mb-8 flex-grow leading-relaxed text-[#200b3c]/70">
                  {story.text}
                </p>
                <div className="mt-auto flex items-center gap-4">
                  {story.photo ? (
                    <div
                      className="size-14 rounded-full border-2 border-[#24B9D7]/30 bg-cover bg-center"
                      style={{ backgroundImage: `url("${story.photo}")` }}
                    />
                  ) : (
                    <div className="flex size-14 items-center justify-center rounded-full border-2 border-[#24B9D7]/30 bg-[#200b3c]/10">
                      <span className="text-lg font-bold text-[#200b3c]">
                        {story.initials}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="font-bold">{story.name}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#200b3c]/50">
                        {story.metaLeft}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-[#200b3c]/20" />
                      <span className="text-xs font-bold text-[#24B9D7]">
                        {story.metaRight}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <div className="mb-12 flex flex-col items-center text-center">
            <h2 className="mb-4 text-3xl font-[var(--font-playfair)] font-bold text-[#200b3c] lg:text-4xl">
              Watch Our Patient Stories
            </h2>
            <p className="max-w-2xl text-[#200b3c]/60">
              Hear directly from those who have experienced the Ivories
              difference through high-definition video testimonials.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {videos.map((video) => (
              <article
                key={video.title}
                className="group relative aspect-video cursor-pointer overflow-hidden rounded-xl bg-[#200b3c]/10"
              >
                <img
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={video.image}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#200b3c]/40 transition-colors group-hover:bg-[#200b3c]/30">
                  <div className="flex size-16 items-center justify-center rounded-full bg-[#24B9D7] shadow-lg transition-transform group-hover:scale-110">
                    <span className="material-symbols-outlined ml-1 text-4xl text-white">
                      play_arrow
                    </span>
                  </div>
                </div>
                <div className="absolute right-4 bottom-4 left-4">
                  <p className="text-lg leading-tight font-bold text-white drop-shadow-md">
                    {video.title}
                  </p>
                  <p className="text-sm text-white/80">{video.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#200b3c] py-20 text-center">
        <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#24B9D7] via-white/20 to-[#F7BB00]" />
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <h2 className="mb-6 text-4xl font-[var(--font-playfair)] font-bold text-white lg:text-5xl">
            Ready to Start Your Own Smile Story?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-white/70">
            Join the thousands of happy patients who chose Ivories for
            world-class, painless dentistry. Book your consultation today.
          </p>
          <a
            href="https://wa.me/919825571401"
            target="_blank"
            className="rounded-lg bg-[#24B9D7] px-12 py-6 text-lg font-black text-[#200b3c] shadow-xl transition-all hover:bg-white hover:shadow-[#24B9D7]/20 text-center"
          >
            Book Your Consultation Now
          </a>
        </div>
        <div className="pointer-events-none absolute -right-24 -bottom-24 size-64 rounded-full border border-white/5" />
      </section>
    </main>
  );
}

