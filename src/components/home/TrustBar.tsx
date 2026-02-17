const trustItems = [
  { value: "19+", label: "Years Excellence" },
  { value: "ISO 9001:2015", label: "Global Standards" },
  { value: "4.9 ★", label: "Google Rating" },
  { value: "10,000+", label: "Happy Patients" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#200b3c] py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
        {trustItems.map((item, index) => (
          <div
            key={item.label}
            className={`space-y-2 text-center ${
              index < trustItems.length - 1 ? "border-r border-white/10" : ""
            }`}
          >
            <p className="text-3xl font-extrabold text-[#24B9D7] md:text-4xl">
              {item.value}
            </p>
            <p className="text-sm font-bold tracking-widest text-white/70 uppercase">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
