'use client'
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Image from "next/image";
import a from "../images/heroH.jpg";

const weddingDate = new Date("2026-11-27T10:00:00");

function getTimeLeft() {
  const now = new Date();
  const diff = weddingDate.getTime() - now.getTime();

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}
function CountdownBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-[#d9c8b5] bg-white p-5">
      <p className="font-serif text-4xl text-[#3D2F2A]">
        {String(value)?.padStart(2, "0")}
      </p>
      <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#9a6b5f]">
        {label}
      </p>
    </div>
  );
}
export default function HomePage() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (


    <main className="min-h-screen bg-[#F8F4EE] px-6 py-10 text-[#3D2F2A]">

      <section className="mx-auto flex min-h-[90vh] max-w-5xl flex-col items-center justify-center text-center mt-4">
        <p className="text-sm uppercase tracking-[0.35em] text-[#6D7355]">
          With the blessings of Waheguru Ji, we invite you to celebrate a
          beautiful journey of love, family, and togetherness.
        </p>

        <h1 className="mt-6 font-serif text-6xl md:text-8xl">
          Kamal <span className="text-[#C98C7A]">&</span> Shan
        </h1>
        <div className="mt-4 rounded-[2rem] bg-[#fffaf1] p-8 text-center shadow-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#6D7355]">
            Countdown to Wedding Day
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            <CountdownBox label="Days" value={timeLeft?.days ?? 0} />
            <CountdownBox label="Hours" value={timeLeft?.hours ?? 0} />
            <CountdownBox label="Minutes" value={timeLeft?.minutes ?? 0} />
            <CountdownBox label="Seconds" value={timeLeft?.seconds ?? 0} />
          </div>
          <p className="mt-5 text-lg text-[#6D7355]">
            November 27, 2026 • Cincinnati, Ohio
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row flex-wrap justify-center">
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

        </div>

      </section>
    </main>
  );
}