"use client";

import { motion } from "framer-motion";

const memories = [
  { name: "Gurpreet", text: "So excited to celebrate with you both!", rotate: "-rotate-2" },
  { name: "Aman", text: "Wishing you a lifetime of love and laughter.", rotate: "rotate-3" },
  { name: "Simran", text: "Can’t wait for the Jaago night!", rotate: "-rotate-1" },
  { name: "Family", text: "Blessings and love always.", rotate: "rotate-2" },
  { name: "Friends", text: "Cincinnati, here we come!", rotate: "-rotate-3" },
  { name: "Cousins", text: "Reception is going to be unforgettable.", rotate: "rotate-1" },
];

export default function MemoriesPage() {
  return (
    <main className="min-h-screen bg-[#efe3d3] px-5 py-10 text-[#30231f]">
      <section className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-[#6D7355]">
            Memory Wall
          </p>

          <h1 className="mt-4 font-serif text-5xl">
            Notes & Moments
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#6D7355]">
            A wall of memories, blessings, photos, and messages from family and friends.
          </p>
        </motion.div>

        <div className="mt-12 rounded-[2rem] bg-[#7b6048] p-6 shadow-2xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {memories.map((memory, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                className={`${memory.rotate} rounded-xl bg-[#fffaf1] p-4 shadow-xl`}
              >
                <div className="h-44 rounded-lg bg-[#e8d9c8]" />

                <p className="mt-4 font-serif text-2xl">
                  “{memory.text}”
                </p>

                <p className="mt-4 text-sm text-[#6D7355]">
                  — {memory.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}