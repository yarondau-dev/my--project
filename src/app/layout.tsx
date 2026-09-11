import type { Metadata } from "next";
import { Instrument_Serif, DM_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { assetPath } from "@/lib/paths";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "ZEHARIA",
    "Yair Zeharia",
    "fine art",
    "Wear the original",
    "From Canvas to Wear",
    "where art meets design",
    "luxury fashion concept",
    "Paris",
    "New York",
  ],
  icons: {
    icon: [{ url: assetPath("/brand/logo-mono.png"), type: "image/png" }],
    apple: [{ url: assetPath("/brand/logo-mono.png") }],
  },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
    locale: "en_US",
    images: [{ url: assetPath("/concept/hero-canvas-to-wear.png") }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
