import type { Metadata } from "next";
import { Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aura AI | Automation for Everyone",
  description: "Stop rewriting ChatGPT prompts. Aura AI automates your content, data analysis, and reflections seamlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${instrumentSans.variable} ${instrumentSerif.variable} antialiased selection:bg-lime-200 selection:text-lime-900 bg-[#FCFCF9]`}
      >
        {children}
      </body>
    </html>
  );
}
