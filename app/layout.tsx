// app/layout.tsx

import type { Metadata } from "next";
import {
  PROFILE_CANONICAL_URL,
  serializeStructuredProfileData,
} from "@/lib/ats/structuredProfile";
import "./colors.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(PROFILE_CANONICAL_URL),
  title: "Magnus Eriksson",
  description:
    "Professional profile for Magnus Eriksson, covering experience, skills, education and contact information.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Magnus Eriksson",
    description:
      "Professional profile for Magnus Eriksson, covering experience, skills, education and contact information.",
    url: "/",
    siteName: "Magnus Eriksson",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image.jpg",
        width: 1200,
        height: 627,
        alt: "Magnus Eriksson",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeStructuredProfileData() }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
