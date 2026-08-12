// app/sitemap.ts

import type { MetadataRoute } from "next";
import { PROFILE_CANONICAL_URL } from "@/lib/ats/structuredProfile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: PROFILE_CANONICAL_URL,
    },
  ];
}
