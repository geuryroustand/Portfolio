import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ReducedMotionProvider } from "@/components/reduced-motion-provider";
import ModernNav from "@/components/modern-nav";
import SiteFooter from "@/components/site-footer";
import ScrollProgress from "@/components/scroll-progress";
import ScrollToTop from "@/components/scroll-to-top";

const inter = Inter({
  subsets: ["latin"],
  display: "swap", // Optimize font loading
  variable: "--font-inter", // Allow using as CSS variable
});

export const metadata: Metadata = {
  title: "Geury Roustand | Frontend Engineer",
  description:
    "Frontend engineer specializing in modern JavaScript technologies and responsive web applications",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "manifest",
        url: "/site.webmanifest",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="bg-slate-900 text-white">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ReducedMotionProvider>
            <div className="flex min-h-screen flex-col">
              <ModernNav />
              <ScrollProgress />
              <main className="flex-1 pt-16 md:pt-20">{children}</main>
              <SiteFooter />
              <ScrollToTop />
            </div>
          </ReducedMotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
