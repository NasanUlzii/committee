import type { Metadata } from "next";
import { Cal_Sans, Audiowide, Golos_Text } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";
import Footer from "@/components/home/Footer/Footer";
import ScrollToTop from "@/components/helper/ScrollToTop";
import ClientLayout from "@/components/ClientLayout";

const audiowide = Audiowide({
  weight: "400",
  variable: "--font-audiowide",
  subsets: ["latin"],
});

const golostext = Golos_Text({
  weight: "400",
  variable: "--font-golostext",
  subsets: ["latin"],
});

const calsans = Cal_Sans({
  weight: "400",
  variable: "--font-calsans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medics - Your Health, Our Priority",
  description: "Comprehensive healthcare solutions at your fingertips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${audiowide.variable} ${golostext.variable} ${calsans.variable}`}
        >
          <ClientLayout>{children}</ClientLayout>

          <ScrollToTop />
        </body>
      </html>
    </ClerkProvider>
  );
}
