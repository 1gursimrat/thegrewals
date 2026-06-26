"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/home", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/resources", label: "Guide" },
  { href: "/rsvp", label: "RSVP" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  if (pathname === "/" || pathname.startsWith("/invite")) return null;

  return (
    <header className="fixed top-5 left-1/2 z-50 w-[96%] max-w-7xl -translate-x-1/2">
      <nav className="rounded-3xl border border-[#d9c8b5] bg-[#fffaf1]/95 px-4 py-3 shadow-xl backdrop-blur-xl md:px-8 md:py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/home"
            className="font-serif text-2xl text-[#3D2F2A] md:text-3xl px-4 py-2"
          >
            TheGrewals
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-3 md:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-5 py-2 text-sm uppercase tracking-[0.18em] transition ${pathname === link.href
                    ? "bg-[#3D2F2A] text-white"
                    : "text-[#6D7355] hover:bg-[#efe3d3]"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="block md:hidden">
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="flex items-center justify-center rounded-full bg-[#3D2F2A] p-3 text-white"
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="mt-4 space-y-2 md:hidden"
            >
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-2xl px-5 py-4 text-center text-sm uppercase tracking-[0.2em] transition-all duration-200 ${pathname === link.href
                      ? "bg-[#3D2F2A] text-white"
                      : "text-[#6D7355] hover:bg-[#efe3d3]"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}