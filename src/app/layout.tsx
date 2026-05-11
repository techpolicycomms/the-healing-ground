import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Fraunces, Inter } from "next/font/google";
import { AnalyticsProvider } from "@/components/analytics/posthog-provider";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"]
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thehealinggroundgeneva.com"),
  title: {
    default: "The Healing Ground Geneva | Holistic, Mind-Body Practice",
    template: "%s | The Healing Ground Geneva"
  },
  description:
    "A grounded, trauma-informed, mind-body practice in Geneva for stress, burnout, nervous-system regulation, and persistent stress-related symptoms.",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "The Healing Ground Geneva",
    description:
      "Healing happens at the pace of safety. A grounded, mind-body practice in Geneva — English, French, Spanish.",
    url: "https://www.thehealinggroundgeneva.com",
    siteName: "The Healing Ground Geneva",
    locale: "en_GB",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const app = <AnalyticsProvider>{children}</AnalyticsProvider>;

  return (
    <html lang="en-GB" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        {process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ? (
          <ClerkProvider>{app}</ClerkProvider>
        ) : (
          app
        )}
      </body>
    </html>
  );
}
