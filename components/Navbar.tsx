import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#E8D9C8] bg-[#F8F4EE]/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/home" className="font-serif text-2xl text-[#3D2F2A]">
          Kamal & Shan
        </Link>

        <div className="hidden gap-6 text-sm text-[#6D7355] md:flex">
          <Link href="/events">Events</Link>
          <Link href="/rsvp">RSVP</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/memories">Memory Wall</Link>
          <Link href="/resources">Resources</Link>
        </div>
      </div>
    </nav>
  );
}