import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Cursor from "@/components/Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thegrewals.com"),

  title: {
    default: "Kamal & Shan | Wedding",
    template: "%s | Kamal & Shan",
  },

  description:
    "Celebrate the wedding of Kamal & Shan. Find event details, RSVP, venue information, travel resources, accommodations, and our wedding gallery.",

  keywords: [
    "Kamal and Shan",
    "Wedding",
    "Punjabi Wedding",
    "Sikh Wedding",
    "Cincinnati Wedding",
    "Wedding RSVP",
    "Wedding Website",
  ],

  authors: [{ name: "Kamal & Shan" }],

  openGraph: {
    title: "Kamal & Shan Wedding",
    description:
      "Join us as we celebrate our wedding. View events, RSVP, gallery, and guest resources.",
    url: "https://thegrewals.com",
    siteName: "Kamal & Shan Wedding",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kamal & Shan Wedding",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kamal & Shan Wedding",
    description:
      "Join us for our wedding celebration.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "vercel.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#F8F4EE] text-[#3D2F2A]">
        <Navbar />
        <Cursor />
        {children}
        <footer className="mt-24 py-10 text-center">
  <div className="mx-auto h-px max-w-xs bg-[#d9c8b5]" />

  <p className="mt-4 text-xs uppercase tracking-[0.35em] text-[#9a6b5f]">
    Designed & Crafted by
  </p>

  <a
    href="https://boring.llc"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block font-serif text-2xl text-[#3D2F2A] transition hover:text-[#C98C7A]"
  >
    Low fat cheese sticks
  </a>
</footer>
      </body>
      
    </html>
  );
}