import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kartonglåda — Flat-pack. Second life. | IKEA",
  description:
    "Ontdek Kartonglåda: geef IKEA kartonnen verpakkingen een tweede leven met WebAR-vouwlijnen, IKEA Family-punten en de campagne Out of the box.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Kartonglåda — Flat-pack. Second life. | IKEA",
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
    <html lang="nl" className={`${notoSans.variable} h-full antialiased`}>
      <body className={`${notoSans.className} min-h-full flex flex-col bg-white text-[#111111] selection:bg-[#FFDB00] selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
