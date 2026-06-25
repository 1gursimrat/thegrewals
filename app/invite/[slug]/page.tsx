"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";

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

function formatName(slug: string) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function InvitePage() {
  const params = useParams();
  const router = useRouter();
  const guestName = formatName(params.slug as string);

  return (
    <main className="min-h-screen bg-[#efe3d3] px-4 py-8 text-[#30231f]">
      <section className="mx-auto max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-[2rem] bg-[#3b241f] p-6 text-[#d8b66a] shadow-2xl"
        >
          <div className="rounded-[1.5rem] border border-[#d8b66a]/50 p-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-xs uppercase tracking-[0.35em]"
            >
              Wedding Passport
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.75, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
              className="mx-auto mt-10 flex h-28 w-28 items-center justify-center rounded-full border border-[#d8b66a] font-serif text-4xl"
            >
              K | S
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="mt-10 font-serif text-4xl"
            >
              Kamal & Shan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-3 text-xs uppercase tracking-[0.25em]"
            >
              November 21–28, 2026
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85 }}
              className="mt-10 rounded-xl border border-[#d8b66a]/40 p-4 text-left"
            >
              <p className="text-[10px] uppercase tracking-[0.25em]">
                Passenger
              </p>
              <p className="mt-1 font-serif text-2xl">{guestName}</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 text-xs uppercase tracking-[0.25em]"
            >
              Buffalo, NY → Cincinnati, OH
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
          className="mt-6 rounded-[2rem] bg-[#fffaf1] p-5 shadow-xl"
        >
          <p className="text-center text-xs uppercase tracking-[0.35em] text-[#6D7355]">
            Boarding Passes
          </p>

          <div className="mt-5 space-y-4">
            {events.map((event, index) => (
              <motion.div
                key={event.code}
                initial={{ opacity: 0, y: 35, rotate: -1.5 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.65 + index * 0.12,
                  ease: "easeOut",
                }}
              >
                <BoardingPass event={event} guestName={guestName} />
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push("/home")}
            className="mt-8 w-full rounded-full bg-[#3D2F2A] px-6 py-3 text-white transition hover:bg-[#C98C7A]"
          >
            More Info →
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}

function BoardingPass({
  event,
  guestName,
}: {
  event: (typeof events)[number];
  guestName: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden rounded-2xl border border-[#d9c8b5] bg-white shadow-sm"
    >
      <div className="flex">
        <div className="flex-1 p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#9a6b5f]">
                Boarding Pass
              </p>
              <h2 className="mt-2 font-serif text-2xl text-[#30231f]">
                {event.title}
              </h2>
            </div>

            <div className="rounded-full border border-[#d9c8b5] px-3 py-1 text-xs font-semibold text-[#9a6b5f]">
              {event.code}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 text-left text-xs">
            <Info label="Passenger" value={guestName} />
            <Info label="Date" value={event.date} />
            <Info label="Day" value={event.day} />
            <Info label="Time" value={event.time} />
          </div>

          <div className="mt-4 border-t border-dashed border-[#d9c8b5] pt-4 text-left">
            <p className="text-[10px] uppercase tracking-[0.25em] text-[#9a6b5f]">
              Venue
            </p>
            <p className="mt-1 text-sm font-medium">{event.venue}</p>
            <p className="mt-1 text-xs leading-5 text-[#6D7355]">
              {event.address}
            </p>
          </div>
        </div>

        <div className="relative w-16 border-l border-dashed border-[#d9c8b5] bg-[#f7efe6]">
          <div className="absolute left-1/2 top-4 h-24 w-[2px] -translate-x-1/2 bg-[#30231f]/20" />
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rotate-90 whitespace-nowrap text-[10px] uppercase tracking-[0.25em] text-[#9a6b5f]">
            K & S
          </p>
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
      <p className="mt-1 font-medium text-[#30231f]">{value}</p>
    </div>
  );
}