import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F4EE] px-6 py-10 text-[#3D2F2A]">
      <>
        <Navbar />
      </>
      <section className="mx-auto flex min-h-[90vh] max-w-5xl flex-col items-center justify-center text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-[#6D7355]">
          Welcome to the wedding of
        </p>

        <h1 className="mt-6 font-serif text-6xl md:text-8xl">
          Kamal <span className="text-[#C98C7A]">&</span> Shan
        </h1>

        <p className="mt-5 text-lg text-[#6D7355]">
          November 27, 2026 • Cincinnati, Ohio
        </p>

        <p className="mt-8 max-w-xl text-lg leading-8 text-[#6D7355]">
          With the blessings of Waheguru Ji, we invite you to celebrate a
          beautiful journey of love, family, and togetherness.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/events"
            className="rounded-full bg-[#3D2F2A] px-8 py-3 text-white transition hover:bg-[#C98C7A]"
          >
            View Events
          </Link>

          <Link
            href="/rsvp"
            className="rounded-full border border-[#C98C7A] px-8 py-3 text-[#3D2F2A] transition hover:bg-white"
          >
            RSVP
          </Link>
        </div>
      </section>
    </main>
  );
}