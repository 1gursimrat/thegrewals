"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const events = [
  "Ladies Sangeet",
  "Maiyan & Mehndi",
  "Jaago Night",
  "Anand Karaj",
  "Reception",
];

export default function RSVPPage() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#efe3d3] px-5 text-[#30231f]">
        <motion.section
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="w-full max-w-md rounded-[2rem] bg-[#fffaf1] p-8 text-center shadow-2xl"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#6D7355]">
            Boarding Confirmed
          </p>

          <h1 className="mt-6 font-serif text-5xl">Thank You</h1>

          <div className="mx-auto mt-8 flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-[#C98C7A] text-2xl font-bold text-[#C98C7A]">
            RSVP
          </div>

          <p className="mt-8 text-sm leading-7 text-[#6D7355]">
            Your RSVP has been received. We cannot wait to celebrate with you.
          </p>
        </motion.section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#efe3d3] px-5 py-10 text-[#30231f]">
      <section className="mx-auto max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[2rem] bg-[#3b241f] p-6 text-[#d8b66a] shadow-2xl"
        >
          <p className="text-center text-xs uppercase tracking-[0.35em]">
            Wedding Check-In
          </p>

          <h1 className="mt-6 text-center font-serif text-5xl">
            RSVP
          </h1>

          <p className="mt-3 text-center text-xs uppercase tracking-[0.2em]">
            Kamal & Shan • Nov 2026
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="mt-6 rounded-[2rem] bg-[#fffaf1] p-6 shadow-xl"
        >
          <label className="block text-xs uppercase tracking-[0.25em] text-[#9a6b5f]">
            Passenger Name
          </label>
          <input className="mt-2 w-full rounded-2xl border border-[#d9c8b5] bg-white px-4 py-3 outline-none" />

          <label className="mt-5 block text-xs uppercase tracking-[0.25em] text-[#9a6b5f]">
            Phone / Email
          </label>
          <input className="mt-2 w-full rounded-2xl border border-[#d9c8b5] bg-white px-4 py-3 outline-none" />

          <label className="mt-5 block text-xs uppercase tracking-[0.25em] text-[#9a6b5f]">
            Number of Travelers
          </label>
          <select className="mt-2 w-full rounded-2xl border border-[#d9c8b5] bg-white px-4 py-3 outline-none">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4+</option>
          </select>

          <div className="mt-6">
            <p className="text-xs uppercase tracking-[0.25em] text-[#9a6b5f]">
              Flight Selection
            </p>

            <div className="mt-3 space-y-3">
              {events.map((event) => (
                <label
                  key={event}
                  className="flex items-center gap-3 rounded-2xl border border-[#d9c8b5] bg-white px-4 py-3 text-sm"
                >
                  <input type="checkbox" className="h-4 w-4" />
                  {event}
                </label>
              ))}
            </div>
          </div>

          <label className="mt-5 block text-xs uppercase tracking-[0.25em] text-[#9a6b5f]">
            Dietary Restrictions
          </label>
          <textarea className="mt-2 min-h-24 w-full rounded-2xl border border-[#d9c8b5] bg-white px-4 py-3 outline-none" />

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-[#3D2F2A] px-6 py-3 text-white transition hover:bg-[#C98C7A]"
          >
            Confirm Boarding
          </button>
        </motion.form>
      </section>
    </main>
  );
}