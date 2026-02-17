const solutions = [
  { icon: "auto_awesome", title: "Veneers", subtitle: "Porcelain and Composite" },
  { icon: "settings_input_component", title: "Implants", subtitle: "Digital Navigation" },
  { icon: "shield_with_heart", title: "Crown and Bridge", subtitle: "Zirconia Excellence" },
  { icon: "medical_services", title: "RCT", subtitle: "Microscopic Root Canal" },
  { icon: "ink_pen", title: "Fillings", subtitle: "Tooth Colored Bonding" },
  { icon: "clean_hands", title: "Cleaning", subtitle: "Ultrasonic Scaling" },
];

export default function SolutionsSection() {
  return (
    <section className="bg-[#f7f6f8] py-24">
      <div className="mx-auto mb-16 max-w-7xl px-6 text-center">
        <h2 className="mb-4 text-4xl font-extrabold text-[#200b3c]">
          Complete Dental Solutions
        </h2>
        <p className="mx-auto max-w-2xl font-medium text-[#200b3c]/60">
          From routine checkups to full mouth rehabilitations, we offer a
          comprehensive range of services under one roof.
        </p>
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-6 md:grid-cols-3">
        {solutions.map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl border border-[#200b3c]/5 bg-white p-8 text-center shadow-sm transition-all hover:border-[#24B9D7] hover:shadow-xl"
          >
            <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-[#24B9D7]/10 transition-all group-hover:bg-[#24B9D7]">
              <span className="material-symbols-outlined text-3xl text-[#24B9D7] group-hover:text-white">
                {item.icon}
              </span>
            </div>
            <h4 className="mb-2 text-lg font-bold">{item.title}</h4>
            <p className="text-xs text-[#200b3c]/50">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
