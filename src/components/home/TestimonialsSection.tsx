const testimonials = [
  {
    initials: "NO",
    name: "Niraj Oza",
    text: "Dr. Alaap and his team are simply the best. I had a complex root canal done and didn't feel a thing.",
    meta: "Patient since 2018",
  },
  {
    initials: "SP",
    name: "Sneha Patel",
    text: "Exceptional care and very professional doctors. My smile transformation with veneers exceeded all expectations.",
    meta: "Patient since 2021",
  },
  {
    initials: "AK",
    name: "Amit Khanna",
    text: "Best clinic in the city. Very modern equipment and strict hygiene protocols. Highly recommended.",
    meta: "Patient since 2020",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center gap-4">
          <img
            className="h-10 w-10"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8X7jWGDTB7rN36EJiGXq3Xp4Q1mbHpYgA9QGthzy0__ERwiQlZdzXogTWmLyFw0osVY_4QvFSjetnz0jTNZeBZCmcR5PrS7KW7zjVcEDy6rIVS3VBebId0s-4Yl6u5rsaOv0x9_6mQdoDtfINh4icPeYyGASRYu67lckq5_p_ASE5xXljKWzIRvHAxEcibeKCmAB4n6CggVQBQpMqTFwHcnDK2CzKU6LgRKBJZ9z5X6vO5w9zCpNSvPYMVEgvr_stu2uEV49JKg"
            alt="Google"
          />
          <div>
            <h3 className="text-xl leading-none font-bold">Google Reviews</h3>
            <p className="mt-1 text-xs font-bold text-[#200b3c]/50">
              4.9 | 1,200+ Reviews
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-[#200b3c]/5 bg-[#f7f6f8] p-8 shadow-sm"
            >
              <p className="mb-6 italic text-[#200b3c]/70">{item.text}</p>
              <div className="flex items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-full bg-[#200b3c]/10 font-bold text-[#200b3c]">
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-bold">{item.name}</p>
                  <p className="text-xs text-[#200b3c]/40">{item.meta}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
