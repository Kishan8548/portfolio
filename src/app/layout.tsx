import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
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
  title: "Nishchal Chandel — CS Undergrad & AI Developer",
  description:
    "Portfolio of Nishchal Chandel (@ayanokojix21) — CS undergrad at IIIT Lucknow building multi-agent AI systems, open-source LangChain integrations, and competitive programming solutions.",
  openGraph: {
    title: "Nishchal Chandel — CS Undergrad & AI Developer",
    description:
      "CS undergrad at IIIT Lucknow building multi-agent AI systems and open-source tools.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nishchal Chandel — CS Undergrad & AI Developer",
    description:
      "CS undergrad at IIIT Lucknow building multi-agent AI systems and open-source tools.",
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
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
