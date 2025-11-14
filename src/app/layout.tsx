import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Sidebar } from "../components/sidebar";
import Link from "next/link";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-app-sans",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-app-display",
});

export const metadata: Metadata = {
  title: "ValueArena",
  description:
    "EigenBench-inspired leaderboard and battle interface to compare model value alignment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${spaceGrotesk.variable} antialiased bg-slate-50 text-slate-900`}
      >
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex min-h-screen flex-1 flex-col">
            <div className="flex items-center justify-between border-b border-slate-200 bg-white/80 px-4 py-4 text-sm font-semibold text-slate-600 lg:hidden">
              <span>ValueArena</span>
              <div className="flex items-center gap-2">
                <Link
                  href="/"
                  className="rounded-full border border-slate-200 px-3 py-1"
                >
                  Leaderboard
                </Link>
                <Link
                  href="/battle"
                  className="rounded-full border border-slate-200 px-3 py-1"
                >
                  Battle
                </Link>
              </div>
            </div>
            <main className="flex-1 overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
