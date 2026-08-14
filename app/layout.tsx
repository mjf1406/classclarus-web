import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { AppProviders } from "@/components/providers/app-providers";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "ClassClarus - Gamify Your Classroom",
    template: "%s | ClassClarus",
  },
  description: "Motivate students with points, behaviors, and rewards. Use ClassClarus in the cloud, or download the desktop app and self-host for free.",
  keywords: ["classroom gamification", "student motivation", "teacher tools", "classroom management", "education technology", "points system", "behavior tracking", "rewards for students"],
  authors: [{ name: "ClassClarus" }],
  creator: "ClassClarus",
  metadataBase: new URL("https://classclarus.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://classclarus.com",
    siteName: "ClassClarus",
    title: "ClassClarus - Gamify Your Classroom",
    description: "Motivate students with points, behaviors, and rewards. Cloud, desktop, and self-host options for teachers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ClassClarus - Classroom Gamification Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClassClarus - Gamify Your Classroom",
    description: "Motivate students with points, behaviors, and rewards. Cloud, desktop, and self-host options for teachers.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/brand/favicon.webp", type: "image/webp" }],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <AppProviders>
          <Navbar />

          {children}
        </AppProviders>
      </body>
    </html>
  );
}
