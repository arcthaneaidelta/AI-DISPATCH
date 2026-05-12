import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "AI Dispatch | Cinematic Logistics Platform",
  description: "Next-generation AI logistics and dispatching platform for modern trucking operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen font-sans bg-background text-foreground selection:bg-brand-100 selection:text-brand-900",
          inter.variable,
          outfit.variable
        )}
      >
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
