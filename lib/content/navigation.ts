// lib/content/navigation.ts

export const desktopNavigationItems = [
  { targetId: "about", label: "About" },
  { targetId: "resume", label: "Resume" },
  { targetId: "skills", label: "Skills" },
  { targetId: "education", label: "Education" },
  { targetId: "contact", label: "Contact" },
] as const;

export const mobileNavigationItems = [
  { targetId: "about", label: "About", icon: "profile" },
  { targetId: "resume", label: "Resume", icon: "list" },
  { targetId: "skills", label: "Skills", icon: "lightbulb" },
  { targetId: "education", label: "Education", icon: "graduation" },
  { action: "contactSheet", label: "Contact", icon: "envelope" },
] as const;