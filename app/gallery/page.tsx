"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import img001 from "../images/001.jpg";
import img002 from "../images/002.jpg";
import img003 from "../images/003.jpg";
import img004 from "../images/004.jpg";
import img005 from "../images/005.jpg";
import img006 from "../images/006.jpg";
import img007 from "../images/007.jpg";
import img008 from "../images/008.jpg";
import img009 from "../images/009.jpg";
import img010 from "../images/0010.jpg";
import img011 from "../images/0011.jpg";
import img012 from "../images/0012.jpg";

const photos = [
  img001,
  img002,
  img003,
  img004,
  img005,
  img006,
  img007,
  img008,
  img009,
  img010,
  img011,
  img012,
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#efe3d3] px-5">
      <section className="mx-auto max-w-7xl">
        <div className="h-24">

        </div>

        <div className="columns-1 gap-8 space-y-8 sm:columns-2 xl:columns-3">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.04,
              }}
              className="group relative mb-8 break-inside-avoid overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl"
            >
              <div className="overflow-hidden rounded-[1.5rem]">
                <Image
                  src={photo}
                  alt={`Memory ${index + 1}`}
                  placeholder="blur"
                  className="h-auto w-full object-cover transition-all duration-700 ease-out group-hover:scale-125"
                />
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-0 transition-all duration-500 group-hover:ring-4 group-hover:ring-white/50" />
            </motion.div>
          ))}
        </div>

      </section>
    </main>
  );
}