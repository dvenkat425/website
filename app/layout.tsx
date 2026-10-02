import type { Metadata } from "next";
import "@fontsource-variable/geist";
import "@fontsource-variable/newsreader";
import "@fontsource-variable/newsreader/standard-italic.css";
import "./globals.css";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.title,
  description: site.tagline,
  metadataBase: new URL(site.url),
  openGraph: {
    title: site.title,
    description: site.tagline,
    url: site.url,
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
