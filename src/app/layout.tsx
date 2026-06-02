import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./theme-provider";

const inter = Inter({
  subsets: ["latin"],
});

const siteUrl = "https://johnathanwwh.com";
const siteDescription =
  "Senior Technical Support Engineer with 8+ years of experience in technical support, solutions consulting, and software engineering. 4x AWS Certified. Based in Singapore.";

export const metadata: Metadata = {
  title: {
    default: "Johnathan Wong | Senior Technical Support Engineer",
    template: "%s — Johnathan Wong",
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Johnathan Wong | Senior Technical Support Engineer",
    description: siteDescription,
    url: siteUrl,
    siteName: "Johnathan Wong",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-default.png",
        width: 1200,
        height: 630,
        alt: "Johnathan Wong — Senior Technical Support Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Johnathan Wong | Senior Technical Support Engineer",
    description: siteDescription,
    images: ["/images/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  other: {
    "facebook-domain-verification": "2u7jj352xacglo22lobwqdfurhd87e",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
