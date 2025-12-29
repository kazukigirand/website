import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kazuki Girand | Japanese • Art • Math",
  description: "Personal portfolio showcasing the beautiful intersections of Japanese, Art, and Mathematics. Explore mathematical proofs, creative works, and hyperfixations.",
  keywords: ["portfolio", "mathematics", "art", "Japanese", "proofs", "generative art"],
  authors: [{ name: "Kazuki Girand" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kazukigirand.com",
    siteName: "Kazuki Girand",
    title: "Kazuki Girand | Japanese • Art • Math",
    description: "Exploring the beautiful intersections of Japanese, Art, and Mathematics.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kazuki Girand - Venn Diagram of Interests",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kazuki Girand | Japanese • Art • Math",
    description: "Exploring the beautiful intersections of Japanese, Art, and Mathematics.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
