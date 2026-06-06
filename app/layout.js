import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { developerInfo } from "./data/portfolio";

const geistSans = Geist({
  variable: "--font-geist-sans",
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
    url: "https://vivekkushwaha.dev", // Placeholder
    siteName: `${developerInfo.name} Portfolio`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-accent/30 selection:text-accent`}
      >
        {children}
      </body>
    </html>
  );
}
