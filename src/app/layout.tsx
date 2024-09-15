import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import InstallPrompt from "@/components/InstallPrompt";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Your App Name",
  description: "Description of your app",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Your App Name",
    startupImage: "/icons/512.png",
  },
  manifest: "/manifest.json",
  icons: {
    apple: [
      {
        url: "/icons/120.png",
        sizes: "120x120",
        type: "image/png",
      },
      {
        url: "/icons/152.png",
        sizes: "152x152",
        type: "image/png",
      },
      {
        url: "/icons/167.png",
        sizes: "167x167",
        type: "image/png",
      },
      {
        url: "/icons/180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    icon: [
      { url: "/icons/32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/16.png", sizes: "16x16", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SplashScreen />
        {children}
        <InstallPrompt />
      </body>
    </html>
  );
}
