import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Draz The Coder",
  description: "Draz's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <head><link rel="icon" href="/r.png" sizes="32x32" /></head>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
