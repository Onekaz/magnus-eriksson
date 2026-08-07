// lib/content/navigation.ts

import type { NavigationTargetId } from "@/lib/content/profile";

export const DESKTOP_NAVIGATION_TARGET_IDS: readonly NavigationTargetId[] = [
  "about",
  "resume",
  "skills",
  "education",
  "contact",
];

export const MOBILE_NAVIGATION_TARGET_IDS = [
  "about",
  "resume",
  "skills",
  "education",
] as const;
