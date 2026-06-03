import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata = {
  title: "Romanini Design · Luxury Interior Design in Tulum",
  description:
    "Boutique interior design studio crafting residential and hospitality spaces along the Riviera Maya. Where Tulum's wild beauty meets intention.",
  keywords: [
    "interior design tulum",
    "luxury interiors mexico",
    "riviera maya design studio",
    "boutique interiors",
    "romanini design",
  ],
  openGraph: {
    title: "Romanini Design · Luxury Interior Design in Tulum",
    description:
      "Boutique interior design studio crafting residential and hospitality spaces along the Riviera Maya.",
    url: "https://romaninidesign.com",
    siteName: "Romanini Design",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Romanini Design",
    description: "Luxury interiors rooted in Tulum, México.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
