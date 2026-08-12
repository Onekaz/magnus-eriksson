// app/robots.ts

import type { MetadataRoute } from "next";
import { PROFILE_CANONICAL_URL } from "@/lib/ats/structuredProfile";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${PROFILE_CANONICAL_URL}/sitemap.xml`,
  };
}
