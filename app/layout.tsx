import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";

import { profile } from "@/content/profile";

import "./globals.css";

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.links.site),
  alternates: { canonical: "/" },
  title: `${profile.name} | ${profile.roles.join(" · ")}`,
  description: profile.intro,
  authors: [{ name: profile.name }],
  openGraph: {
    title: profile.name,
    description: profile.intro,
    type: "website",
    url: profile.links.site,
    siteName: profile.name,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${grotesk.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
