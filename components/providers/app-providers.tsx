"use client";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { LanguageProvider } from "@/i18n/LanguageProvider";

import "@/i18n";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
