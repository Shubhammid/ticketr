import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import Header from "@/components/Header";
import SyncUserWithConvex from "@/components/SyncUserWithConvex";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ticketr | Book, Buy & Sell Event Tickets Online",
  description:
    "Book, buy, and sell tickets for concerts, sports, theater, and events with Ticketr. Secure ticket marketplace with instant booking, easy event management, and trusted payments.",
  keywords: [
    "ticket booking",
    "buy event tickets",
    "sell tickets online",
    "concert tickets",
    "sports tickets",
    "theater tickets",
    "secure ticket marketplace",
    "event ticket sales",
    "online ticket platform"
  ],
  openGraph: {
    title: "Ticketr — Your Trusted Ticket Marketplace",
    description:
      "Discover and book tickets for concerts, sports, theater, and more. Sell your tickets instantly in a secure and trusted marketplace.",
    url: "https://ticketr.com",
    siteName: "Ticketr",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ticketr - Secure Event Ticket Marketplace",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ticketr — Buy & Sell Event Tickets",
    description:
      "Book, buy, and sell event tickets online with secure payments and instant booking confirmation.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConvexClientProvider>
          <ClerkProvider>
            <Header />
             <SyncUserWithConvex />
            {children}
            <Toaster position="bottom-right" />
          </ClerkProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
