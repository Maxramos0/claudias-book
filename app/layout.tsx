import type { Metadata, Viewport } from "next";
import { Allura, Caveat, Fraunces, Kalam, Outfit, Permanent_Marker } from "next/font/google";
import "./globals.css";

const allura = Allura({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-allura",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
  variable: "--font-fraunces",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-caveat",
});

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

const kalam = Kalam({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-kalam",
});

const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-marker",
});

export const metadata: Metadata = {
  title: "Claudia's Recipes",
  description: "A handmade, page-turning cookbook from home.",
};

export const viewport: Viewport = {
  themeColor: "#fff2e6",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${allura.variable} ${fraunces.variable} ${caveat.variable} ${outfit.variable} ${kalam.variable} ${marker.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
