import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const siteUrl = "https://zennkoa.de";
const title = "Zennkoa – Web Developer in Stralsund";
const description =
  "Zennkoa (John Delenschke) – Web Developer & Minecraft Plugin Developer based in Stralsund, Germany. Building clean, modern websites and software.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Zennkoa",
  },
  description,
  keywords: [
    "Webentwickler Stralsund",
    "Web Developer Stralsund",
    "Webdesign Stralsund",
    "Softwareentwickler Stralsund",
    "Next.js Entwickler",
    "Minecraft Plugin Developer",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Zennkoa",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 1500,
        alt: "Zennkoa",
      },
    ],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/profile.jpg"],
  },
  other: {
    "geo.placename": "Stralsund",
    "geo.region": "DE-MV",
    "geo.position": "54.3093;13.0910",
    ICBM: "54.3093, 13.0910",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-background focus:text-foreground focus:border focus:border-foreground"
          >
            Zum Inhalt springen
          </a>
          <Navbar />
          <main id="main-content">{children}</main>
          <Footer />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
