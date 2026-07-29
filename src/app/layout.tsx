import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
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
  title: "Kishan Garhwal — Android & AI Developer",
  description:
    "Portfolio of Kishan Garhwal (@Kishan8548) — CS undergrad at IIIT Lucknow building Android apps, multi-agent AI systems, and competitive programming solutions.",
  openGraph: {
    title: "Kishan Garhwal — Android & AI Developer",
    description:
      "CS undergrad at IIIT Lucknow building Android apps and AI systems.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kishan Garhwal — Android & AI Developer",
    description:
      "CS undergrad at IIIT Lucknow building Android apps and AI systems.",
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
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-grid">
        <CustomCursor />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
