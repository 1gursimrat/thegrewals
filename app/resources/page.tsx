
import Navbar from "@/components/Navbar";

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-[#F8F4EE] px-6 py-12 text-[#3D2F2A]">
      <>
        <Navbar />
      </>
      <section className="mx-auto max-w-5xl">
        <p className="text-sm uppercase tracking-[0.35em] text-[#6D7355]">
          Guest Guide
        </p>

        <h1 className="mt-4 font-serif text-5xl">Guest Resources</h1>

        <p className="mt-4 max-w-2xl text-[#6D7355]">
          Helpful information for hotels, travel, outfits, food, and wedding weekend needs.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            "Where to Stay",
            "Airports",
            "What to Wear",
            "Punjabi Clothing Stores",
            "Turban Help",
            "Restaurants",
            "Wedding FAQ",
          ].map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-[#E8D9C8] bg-white/80 p-6 shadow-sm"
            >
              <h2 className="font-serif text-2xl">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-[#6D7355]">
                Add details, links, phone numbers, and maps here.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}