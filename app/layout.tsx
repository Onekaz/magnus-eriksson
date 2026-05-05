// app/layout.tsx

import type { Metadata } from "next";
import "./colors.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Magnus Eriksson",
  description: "Personal profile website for Magnus Eriksson.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}