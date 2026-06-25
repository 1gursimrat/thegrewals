"use client";

import { motion } from "framer-motion";

const photos = [
  { title: "Engagement", height: "h-96" },
  { title: "Bride", height: "h-72" },
  { title: "Groom", height: "h-80" },
  { title: "Together", height: "h-96" },
  { title: "Family", height: "h-64" },
  { title: "Celebration", height: "h-80" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#efe3d3] px-5 py-10 text-[#30231f]">
      <section className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-xs uppercase tracking-[0.35em] text-[#6D7355]"
        >
          Wedding Gallery
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-4 text-center font-serif text-5xl"
        >
          Our Story in Pictures
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-10 overflow-hidden rounded-[2rem] bg-[#3b241f] p-4 shadow-2xl"
        >
          <div className="flex h-[420px] items-center justify-center rounded-[1.5rem] border border-[#d8b66a]/40 bg-[#4a2b24] text-[#d8b66a]">
            <p className="font-serif text-4xl">Hero Couple Photo</p>
          </div>
        </motion.div>

        <div className="mt-8 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.title}
              initial={{ opacity: 0, y: 70, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              className="mb-6 break-inside-avoid overflow-hidden rounded-[1.5rem] bg-[#fffaf1] p-3 shadow-xl"
            >
              <div
                className={`${photo.height} flex items-center justify-center rounded-[1rem] bg-[#e8d9c8]`}
              >
                <p className="font-serif text-2xl text-[#6D7355]">
                  {photo.title}
                </p>
              </div>

              <p className="mt-3 px-1 text-sm text-[#6D7355]">
                {photo.title} moment
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}