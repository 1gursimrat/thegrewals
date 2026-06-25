"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const correctPassword = "a";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (password.toLowerCase() === correctPassword) {
      router.push("/home");
    } else {
      setError("Incorrect password. Please try again.");
    }
  }

  return (
    <main className="min-h-screen bg-[#F8F4EE] flex items-center justify-center px-6">
      <section className="w-full max-w-md rounded-[2rem] bg-white/80 p-8 shadow-xl border border-[#E8D9C8] text-center">
        <p className="text-sm tracking-[0.35em] uppercase text-[#6D7355]">
          You are invited
        </p>

        <h1 className="mt-6 text-5xl font-serif text-[#3D2F2A]">
          Kamal <span className="text-[#C98C7A]">&</span> Shan
        </h1>

        <p className="mt-4 text-[#6D7355]">
          November 27, 2026
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            type="password"
            placeholder="Enter wedding password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-full border border-[#E8D9C8] bg-[#F8F4EE] px-5 py-3 text-center text-[#3D2F2A] outline-none focus:border-[#C98C7A]"
          />

          {error && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full rounded-full bg-[#3D2F2A] px-5 py-3 text-white font-medium hover:bg-[#C98C7A] transition"
          >
            Enter Wedding Site
          </button>
        </form>
      </section>
    </main>
  );
}