import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kartonglåda - Flat-pack. Second life. | IKEA Concept",
  description:
    "Ontdek Kartonglåda: een studentenconcept voor IKEA over circulaire verpakkingen, WebAR-vouwlijnen en karton een tweede leven geven. Minor Digital Marketing, Fontys ICT.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Kartonglåda - Flat-pack. Second life. | IKEA Concept",
    description:
      "Een IKEA doos is nooit zomaar klaar. Van verpakkingsafval naar nieuw project via WebAR en upcycling.",
    locale: "nl_NL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900 selection:bg-[#FFDA1A] selection:text-black">
        {children}
      </body>
    </html>
  );
}
