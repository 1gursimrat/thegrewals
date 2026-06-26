export default function ResourcesPage() {
  const contacts = [
    { name: "Kamal", phone: "585-705-1399", href: "tel:5857051399" },
    { name: "Shan", phone: "513-399-9088", href: "tel:5133999088" },
  ];

  const venueDistances = [
    ["Temple → Jaggo Venue", "30–45 min"],
    ["Temple → Reception Venue", "30–35 min"],
    ["Jaggo Venue → Reception Venue", "0 min"],
    ["CVG Airport → Reception Venue", "5-10 min"],
    ["CVG Airport → Temple", "45-50 min"],
    ["Downtown Cincinnati → Reception Venue", "20–25 min"],
    ["Downtown Cincinnati → Temple", "20–25 min"],
  ];

  const sections = [
    {
      title: "Where to Stay",
      icon: "🏨",
      text: "We recommend booking a hotel near the Jaggo and Reception venue for the easiest travel experience during the wedding weekend.",
      items: [
        "Book at the Jaggo / Reception venue",
        "Easy access to restaurants and shopping",
        "More hotel links coming soon",
      ],
    },
    {
      title: "Airports",
      icon: "✈️",
      text: "Cincinnati/Northern Kentucky International Airport (CVG) is the closest airport for guests flying in.",
      items: [
        "CVG Airport is the main airport",
        "Uber and Lyft are available",
        "Rental cars are available at the airport",
      ],
    },
    {
      title: "What to Wear",
      icon: "👗",
      text: "Traditional Indian attire is encouraged for the ceremony and Jaggo. Formal attire is recommended for the Reception.",
      items: [
        "Anand Karaj: Indian traditional / modest attire",
        "Jaggo: colorful festive outfits",
        "Reception: formal or Indian formal wear",
      ],
    },
    {
      title: "Punjabi Clothing Stores",
      icon: "🧵",
      text: "Guests are welcome to wear Punjabi suits, lehengas, sarees, kurtas, sherwanis, or formal Indian outfits.",
      items: [
        "TBD",
      ],
    },
    {
      title: "Turban Help",
      icon: "🎩",
      text: "If you need help tying a turban before the ceremony, please contact us before the wedding weekend.",
      items: [
        "Head covering is required at the temple",
        "Scarves will be available",
        "Turban help can be arranged",
      ],
    },
    {
      title: "Restaurants",
      icon: "🍽️",
      text: "Cincinnati has great food options nearby for breakfast, coffee, Indian food, and dinner.",
      items: [
        "Maplewood Kitchen",
        "Coffee Emporium",
        "Ambar India",
        "Graeter’s Ice Cream",
      ],
    },
    {
      title: "Local Guide",
      icon: "📍",
      text: "If you have extra time, explore Cincinnati and nearby Kentucky landmarks.",
      items: [
        "Bengals Stadium",
        "Downtown Cincinnati",
        "Newport on the Levee",
        "Fountain Square",
        "Smale Riverfront Park",
      ],
    },
    {
      title: "Wedding FAQ",
      icon: "❓",
      text: "Helpful answers for parking, photos, timing, kids, and wedding weekend details.",
      items: [
        "Parking is available at all venues",
        "Please arrive early for the ceremony",
        "Join WhatsApp for live updates",
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F4EE] px-6 py-12 text-[#3D2F2A]">
      <section className="mx-auto max-w-6xl align-center">
        {/* <p className="text-sm uppercase tracking-[0.35em] text-[#6D7355]">
          Guest Guide
        </p> */}

        <div className="h-24" />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="lg:col-span-2 center">
            <h1 className="font-serif text-5xl md:text-7xl center">
              Guest Resources
            </h1>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6D7355]">
              Everything you need for the wedding weekend — hotels, travel,
              outfits, venue distances, food, and helpful guest information.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#E8D9C8] bg-white/80 p-6 shadow-sm">
            <h2 className="font-serif text-3xl">Need Help?</h2>

            <p className="mt-3 text-sm leading-6 text-[#6D7355] align-center">
              Call or text us anytime during the wedding weekend.
            </p>

            <div className="mt-5 space-y-3">
              {contacts.map((contact) => (
                <a
                  key={contact.name}
                  href={contact.href}
                  className="flex items-center justify-between rounded-full bg-[#F8F4EE] px-5 py-3 text-sm transition hover:bg-[#E8D9C8]"
                >
                  <span>{contact.name}</span>
                  <span className="text-[#6D7355]">{contact.phone}</span>
                </a>
              ))}
            </div>
          </div>
          <a
            href="https://chat.whatsapp.com/GklupxftipUFeyT8zbnSOW?s=cl&p=i&mlu=1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 block rounded-full px-6 py-3 text-center text-sm font-medium text-[#25D366]transition hover:bg-[#1DA851]"
          >
            Join WhatsApp Group →
          </a>
        </div>


        <div className="mt-14 rounded-[2rem] bg-[#3D2F2A] p-8 text-white md:p-10 mt-2">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Wedding Weekend
          </p>

          <h2 className="mt-4 font-serif text-2xl p-2">Venue Information</h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.5rem] bg-white/10 p-6">
              <h3 className="font-serif text-2xl">Anand Karaj</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Sikh wedding ceremony at the temple. Please arrive early,
                remove shoes, and cover your head before entering.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white/10 p-6">
              <h3 className="font-serif text-2xl">Jaggo & Sangeet</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                A colorful night of music, dancing, family traditions, and
                celebration. Festive Punjabi outfits encouraged.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white/10 p-6">
              <h3 className="font-serif text-2xl">Reception</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Dinner, speeches, dancing, and celebration. Formal or Indian
                formal attire recommended.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#E8D9C8] bg-white/80 p-8 shadow-sm">
          <p className="text-sm uppercase tracking-[0.3em] text-[#6D7355]">
            Travel Times
          </p>

          <h2 className="mt-4 font-serif text-4xl">Venue Distances</h2>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {venueDistances.map(([route, time]) => (
              <div
                key={route}
                className="flex items-center justify-between rounded-2xl bg-[#F8F4EE] px-5 py-4"
              >
                <span className="text-sm">{route}</span>
                <span className="text-sm font-medium text-[#6D7355]">
                  {time}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm text-[#6D7355]">
            Please allow extra time during rush hour and before wedding events.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sections.map((item) => (
            <div
              key={item.title}
              className="group rounded-[2rem] border border-[#E8D9C8] bg-white/80 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{item.icon}</span>
                <h2 className="font-serif text-3xl">{item.title}</h2>
              </div>

              <p className="mt-4 text-sm leading-6 text-[#6D7355]">
                {item.text}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-[#3D2F2A]">
                {item.items.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="text-[#6D7355]">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}