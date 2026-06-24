import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { developerInfo } from "./data/portfolio";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: `${developerInfo.name} | ${developerInfo.role}`,
  description: developerInfo.tagline,
  keywords: ["Full Stack Developer", "React Developer", "Vivek Kushwaha", "Next.js Portfolio", "MERN Stack"],
  authors: [{ name: developerInfo.name }],
  openGraph: {
    title: `${developerInfo.name} | Portfolio`,
    description: developerInfo.tagline,
    type: "website",
    locale: "en_US",
    url: "https://vivekkushwaha14-vivek-kushwaha-port.vercel.app", // Placeholder
    siteName: `${developerInfo.name} Portfolio`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} antialiased selection:bg-accent/30 selection:text-accent`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
