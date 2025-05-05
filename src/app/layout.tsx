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
  title: "Revery - Helping Business to Grow through Digital Presence",
  description: "Revery is a forward-thinking IT startup specializing in web development, custom software, UI/UX design, and digital strategy to help businesses thrive online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className= {`${geistSans.variable} ${geistMono.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
