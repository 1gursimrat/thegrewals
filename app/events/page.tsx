"use client";

import { motion } from "framer-motion";

const events = [
  {
    code: "SGT",
    title: "Ladies Sangeet",
    date: "NOV 21",
    day: "SATURDAY",
    time: "4:00 PM",
    venue: "Taste of India",
    address: "3192 Sheridan Drive, Amherst, NY 14226",
  },
  {
    code: "MHD",
    title: "Maiyan & Mehndi",
    date: "NOV 23",
    day: "MONDAY",
    time: "11:00 AM",
    venue: "185 Corsica Way",
    address: "Buffalo, NY 14228",
  },
  {
    code: "JGO",
    title: "Jaago Night",
    date: "NOV 26",
    day: "THURSDAY",
    time: "4:00 PM",
    venue: "Holiday Inn CVG",
    address: "1717 Airport Exchange Blvd, Erlanger, KY 41018",
  },
  {
    code: "AKJ",
    title: "Anand Karaj",
    date: "NOV 27",
    day: "FRIDAY",
    time: "10:00 AM",
    venue: "Guru Nanak Society of Greater Cincinnati",
    address: "4394 Tylersville Road, Hamilton, OH 45011",
  },
  {
    code: "RCP",
    title: "Reception",
    date: "NOV 28",
    day: "SATURDAY",
    time: "5:00 PM",
    venue: "Holiday Inn CVG",
    address: "1717 Airport Exchange Blvd, Erlanger, KY 41018",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen overflow-visible bg-[#efe3d3] px-5 py-10 text-[#30231f]">
      <section className="mx-auto max-w-6xl overflow-visible py-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-xs uppercase tracking-[0.35em] text-[#6D7355]"
        >
          Wedding Itinerary
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-center font-serif text-5xl"
        >
          Boarding Passes
        </motion.h1>

        <div className="mt-12 grid gap-8 overflow-visible lg:grid-cols-2">
          {events.map((event, index) => (
            <motion.div
              key={event.code}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                delay: index * 0.12,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="overflow-visible"
              style={{ perspective: "1800px" }}
            >
              <BoardingPass event={event} />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

function BoardingPass({ event }: { event: (typeof events)[number] }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.15,
        y: -30,
        rotateX: 8,
        rotateY: -6,
        zIndex: 100,
      }}
      whileTap={{ scale: 1.08 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      style={{
        transformOrigin: "center center",
      }}
      className="relative overflow-hidden rounded-2xl border border-[#d9c8b5] bg-white shadow-lg transition-shadow hover:shadow-[0_35px_80px_rgba(0,0,0,0.35)]"
    >
      <div className="flex">
        <div className="flex-1 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#9a6b5f]">
                Boarding Pass
              </p>

              <h2 className="mt-2 font-serif text-3xl">
                {event.title}
              </h2>
            </div>

            <div className="rounded-full border border-[#d9c8b5] px-4 py-1 text-sm font-semibold text-[#9a6b5f]">
              {event.code}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
            <Info label="Date" value={event.date} />
            <Info label="Day" value={event.day} />
            <Info label="Time" value={event.time} />
          </div>

          <div className="mt-6 border-t border-dashed border-[#d9c8b5] pt-5">
            <Info label="Venue" value={event.venue} />
            <p className="mt-2 text-sm leading-6 text-[#6D7355]">
              {event.address}
            </p>
          </div>
        </div>

        <div className="relative hidden w-20 shrink-0 border-l border-dashed border-[#d9c8b5] bg-[#f7efe6] md:block">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="origin-center -rotate-90 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.45em] text-[#9a6b5f]">
              KAMAL • SHAN
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.2em] text-[#9a6b5f]">
        {label}
      </p>
      <p className="mt-1 font-medium">{value}</p>
    </div>
  );
}