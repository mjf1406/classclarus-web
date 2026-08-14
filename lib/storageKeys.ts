const APP_SLUG = "classclarus";

/** Browser storage key scoped to the product slug (avoids clashes when multiple apps share an origin). */
export function appStorageKey(suffix: string): string {
  return `${APP_SLUG}-${suffix}`;
}

export const STORAGE_KEYS = {
  language: appStorageKey("language"),
} as const;

/** Shared language preference across classclarus.com subdomains (localStorage is origin-scoped). */
export const LANGUAGE_PREFERENCE = {
  parentDomain: ".classclarus.com",
  maxAgeSeconds: 60 * 60 * 24 * 365,
} as const;
