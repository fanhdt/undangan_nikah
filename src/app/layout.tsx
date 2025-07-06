import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const KaushanScript = localFont({
  src: "./fonts/KaushanScript-Regular.ttf",
  variable: "--font-kaushan-script",
  weight: "100 900",
});

const Niramit = localFont({
  src: "./fonts/Niramit-Regular.woff",
  variable: "--font-niramit",
  weight: "100 900",
});
const Niramitbold = localFont({
  src: "./fonts/Niramit-Bold.woff",
  variable: "--font-niramit-bold",
  weight: "100 900",
});
const NiramitMedium = localFont({
  src: "./fonts/Niramit-Medium.woff",
  variable: "--font-niramit-medium",
  weight: "100 900",
});
const NiramitSemibold = localFont({
  src: "./fonts/Niramit-Medium.woff",
  variable: "--font-niramit-semibold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MelangkahDenganMu",
  description: "Pernikahan Mutiara dan Daffa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${KaushanScript.variable} ${Niramit.variable} ${Niramitbold.variable} ${NiramitSemibold.variable} ${NiramitMedium.variable} antialiased`}>{children}</body>
    </html>
  );
}
