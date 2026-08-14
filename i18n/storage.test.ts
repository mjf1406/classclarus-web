/// @vitest-environment jsdom

import { afterEach, beforeEach, describe, expect, test } from "vitest";

import { STORAGE_KEYS } from "@/lib/storageKeys";
import { readStoredLanguage, writeStoredLanguage } from "@/i18n/storage";

const LANGUAGE_KEY = STORAGE_KEYS.language;

function mockHostname(hostname: string): void {
  Object.defineProperty(window, "location", {
    value: { hostname },
    configurable: true,
  });
}

function mockLocalStorage(): Map<string, string> {
  const storage = new Map<string, string>();
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: (key: string) => storage.get(key) ?? null,
      setItem: (key: string, value: string) => storage.set(key, value),
      removeItem: (key: string) => storage.delete(key),
    },
    configurable: true,
  });
  return storage;
}

describe("language storage", () => {
  let storage = new Map<string, string>();
  let cookieValue = "";

  beforeEach(() => {
    storage = mockLocalStorage();
    cookieValue = "";
    Object.defineProperty(document, "cookie", {
      get: () => cookieValue,
      set: (value: string) => {
        cookieValue = value;
      },
      configurable: true,
    });
  });

  afterEach(() => {
    cookieValue = "";
  });

  test("writes to localStorage and shared cookie on production host", () => {
    mockHostname("www.classclarus.com");

    writeStoredLanguage("ja");

    expect(storage.get(LANGUAGE_KEY)).toBe("ja");
    expect(cookieValue).toContain(`${LANGUAGE_KEY}=ja`);
    expect(cookieValue).toContain("domain=.classclarus.com");
  });

  test("reads from cookie when localStorage is empty", () => {
    mockHostname("app.classclarus.com");
    cookieValue = `${LANGUAGE_KEY}=de; path=/`;

    expect(readStoredLanguage()).toBe("de");
    expect(storage.get(LANGUAGE_KEY)).toBe("de");
  });

  test("prefers localStorage over cookie", () => {
    mockHostname("classclarus.com");
    storage.set(LANGUAGE_KEY, "fr");
    cookieValue = `${LANGUAGE_KEY}=es; path=/`;

    expect(readStoredLanguage()).toBe("fr");
  });
});
