"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const eventDetails = [
  { title: "Ladies Sangeet", label: "Ladies Sangeet (Buffalo)", date: "NOV 21,2026", time: "4:00 PM", code: "SGT", venue: "Taste of India, Buffalo, NY 14226"},
  { title: "Maiyan & Mehndi", label: "Maiyan & Mehndi (Buffalo)", date: "NOV 23,2026", time: "11:00 AM", code: "MHD", venue: "Taste of India, Buffalo, NY 14226" },
  { title: "Jaago Night", label: "Jaago Night (Cincinnati)", date: "NOV 26,2026", time: "4:00 PM", code: "JGO", venue: "Holiday Inn Cincinnati Airport by IHG" },
  { title: "Anand Karaj", label: "Anand Karaj (Cincinnati)", date: "NOV 27,2026", time: "10:00 AM", code: "AKJ", venue: "Guru Nanak Society of Greater Cincinnati" },
  { title: "Reception", label: "Reception (Cincinnati)", date: "NOV 28,2026", time: "5:00 PM", code: "RCP", venue: "Holiday Inn Cincinnati Airport by IHG" },
];

export default function RSVPPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("Yes");
  const [guests, setGuests] = useState("1");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch("/api/rsvp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, attending, guests, message, selectedEvents, email, phone }),
    });

    setLoading(false);

    if (response.ok) setSubmitted(true);
    else alert("Unable to submit RSVP. Please try again.");
  };

  async function downloadPass(id: string, title: string) {
  const element = document.getElementById(id);
  if (!element) return;

  const canvas = await html2canvas(element, {
    scale: 3,
    backgroundColor: "#fffaf1",
    useCORS: true,
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: [canvas.width, canvas.height],
  });

  pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
  pdf.save(`${title.replaceAll(" ", "-")}-boarding-pass.pdf`);
}

  if (submitted) {
    const selectedPasses = eventDetails.filter((event) =>
      selectedEvents.includes(event.label)
    );

    return (
      <main className="min-h-screen bg-[#efe3d3] px-5 py-10 text-[#30231f]">
        <section className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.35em] text-[#6D7355]">
              Boarding Confirmed
            </p>
            <h1 className="mt-5 font-serif text-5xl">Thank You!</h1>
            <p className="mx-auto mt-4 max-w-xl text-[#6D7355]">
              Your RSVP has been received. Download your selected event boarding passes below.
            </p>
          </div>

          {selectedPasses.length === 0 && (
            <p className="mt-8 rounded-2xl bg-white p-5 text-center text-[#6D7355]">
              No events were selected. Your RSVP was still received.
            </p>
          )}

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {selectedPasses.map((event) => {
              const id = `pass-${event.code}`;

              return (
                <div key={event.code}>
                  <div
                    id={id}
                    className="overflow-hidden rounded-2xl border border-[#d9c8b5] bg-white shadow-xl"
                  >
                    <div className="flex">
                      <div className="flex-1 p-5">
                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#9a6b5f]">
                          Boarding Pass
                        </p>
                        <h2 className="mt-2 font-serif text-3xl">{event.title}</h2>

                        <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
                          <Info label="Guest" value={name} />
                          <Info label="Date" value={event.date} />
                          <Info label="Time" value={event.time} />
                        </div>

                        <div className="mt-6 border-t border-dashed border-[#d9c8b5] pt-5">
                          <Info label="Flight" value={`KS-${event.code}`} />
                          <p className="mt-2 text-sm text-[#6D7355]">{event.venue}</p>
                        </div>
                      </div>

                      <div className="w-20 shrink-0 border-l border-dashed border-[#d9c8b5] bg-[#f7efe6]">
  <div className="flex h-full items-center justify-center">
    <div className="flex flex-col items-center gap-1 text-[11px] font-semibold uppercase text-[#9a6b5f]">
      <span>KAMAL</span>
      <span>•</span>
      <span>SHAN</span>
    </div>
  </div>
</div>
                    </div>
                  </div>
                <button onClick={() => downloadPass(id, event.title)}>
                  Download {event.title}
                </button>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#efe3d3] px-5 py-12">
      <section className="mx-auto max-w-xl py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[2rem] bg-[#3b241f] p-8 text-center text-[#d8b66a] shadow-2xl"
        >
          <p className="text-xs uppercase tracking-[0.35em]">Wedding RSVP</p>
          <h1 className="mt-5 font-serif text-5xl">Confirm Boarding</h1>
          <p className="mt-3 text-sm">Kamal & Shan • November 2026</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 rounded-[2rem] bg-white p-8 shadow-xl"
        >
          <label className="text-xs uppercase tracking-[0.25em] text-[#9a6b5f]">
            Full Name
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            className="mt-2 w-full rounded-2xl border border-[#d9c8b5] px-4 py-3 outline-none"
          />
          <label className="mt-6 block text-xs uppercase tracking-[0.25em] text-[#9a6b5f]">
            Email
          </label>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="mt-2 w-full rounded-2xl border border-[#d9c8b5] px-4 py-3 outline-none"
          />

          <label className="mt-6 block text-xs uppercase tracking-[0.25em] text-[#9a6b5f]">
            Phone Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(555) 555-5555"
            className="mt-2 w-full rounded-2xl border border-[#d9c8b5] px-4 py-3 outline-none"
          />

          <label className="mt-6 block text-xs uppercase tracking-[0.25em] text-[#9a6b5f]">
            Will you be attending?
          </label>
          <select
            value={attending}
            onChange={(e) => setAttending(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-[#d9c8b5] px-4 py-3 outline-none"
          >
            <option value="Yes">Happily Accept</option>
            <option value="No">Regretfully Decline</option>
          </select>

          <label className="mt-6 block text-xs uppercase tracking-[0.25em] text-[#9a6b5f]">
            Number of Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="mt-2 w-full rounded-2xl border border-[#d9c8b5] px-4 py-3 outline-none"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>

          <label className="mt-6 block text-xs uppercase tracking-[0.25em] text-[#9a6b5f]">
            Events Attending
          </label>
          <div className="mt-3 space-y-3">
            {eventDetails.map((event) => (
              <label
                key={event.code}
                className="flex cursor-pointer items-center gap-3 rounded-2xl border border-[#d9c8b5] bg-white px-4 py-4 transition hover:border-[#C98C7A]"
              >
                <input
                  type="checkbox"
                  checked={selectedEvents.includes(event.label)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedEvents([...selectedEvents, event.label]);
                    } else {
                      setSelectedEvents(
                        selectedEvents.filter((x) => x !== event.label)
                      );
                    }
                  }}
                  className="h-5 w-5 accent-[#3D2F2A]"
                />
                <span>{event.label}</span>
              </label>
            ))}
          </div>

          <label className="mt-6 block text-xs uppercase tracking-[0.25em] text-[#9a6b5f]">
            Message
          </label>
          <textarea
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Leave a message for the bride & groom..."
            className="mt-2 w-full rounded-2xl border border-[#d9c8b5] px-4 py-3 outline-none"
          />

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={loading}
            className="mt-8 w-full rounded-full bg-[#3D2F2A] py-4 text-lg text-white disabled:opacity-60"
            type="submit"
          >
            {loading ? "Sending..." : "Confirm Boarding ✈️"}
          </motion.button>
        </motion.form>
      </section>
    </main>
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