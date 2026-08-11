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
