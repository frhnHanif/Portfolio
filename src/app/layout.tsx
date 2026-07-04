import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Farhan Hanif Rahmansyah — Software & IoT Developer",
  description:
    "Portfolio of Farhan Hanif Rahmansyah — Electrical Engineering Student at Universitas Diponegoro, experienced in software development, IoT systems, and database management.",
  keywords: [
    "Farhan Hanif Rahmansyah",
    "Software Developer",
    "IoT Developer",
    "Electrical Engineering",
    "Universitas Diponegoro",
    "Portfolio",
    "Laravel",
    "PHP",
    "Next.js",
  ],
  authors: [{ name: "Farhan Hanif Rahmansyah" }],
  openGraph: {
    title: "Farhan Hanif Rahmansyah — Software & IoT Developer",
    description:
      "Electrical Engineering Student at Universitas Diponegoro, experienced in software development, IoT systems, and database management.",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-gray-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
