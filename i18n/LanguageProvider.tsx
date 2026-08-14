import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

import { isAppLanguage, type AppLanguage } from "@/lib/languages";
import { STORAGE_KEYS } from "@/lib/storageKeys";
import i18n, { ensureLocaleLoaded, getInitialLanguage, updateDocumentLanguage } from "./index";
import { LanguageContext } from "./language-context";
import { writeStoredLanguage } from "./storage";

function getI18nLanguage(): AppLanguage {
  return isAppLanguage(i18n.resolvedLanguage) ? i18n.resolvedLanguage : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [preferredLanguage, setPreferredLanguage] = useState<AppLanguage>("en");
  const [overrideLanguage, setOverrideLanguageState] = useState<AppLanguage | null>(null);
  const [isLocaleLoading, setIsLocaleLoading] = useState(false);
  const [hasBootstrapped, setHasBootstrapped] = useState(false);
  const overrideRef = useRef<AppLanguage | null>(null);
  const preferredRef = useRef(preferredLanguage);
  overrideRef.current = overrideLanguage;
  preferredRef.current = preferredLanguage;

  const applyI18nLanguage = useCallback(async (nextLanguage: AppLanguage) => {
    setIsLocaleLoading(true);
    try {
      await ensureLocaleLoaded(nextLanguage);
      await i18n.changeLanguage(nextLanguage);
    } finally {
      setIsLocaleLoading(false);
    }
  }, []);

  const setLanguage = useCallback(
    (nextLanguage: AppLanguage) => {
      writeStoredLanguage(nextLanguage);
      setPreferredLanguage(nextLanguage);
      preferredRef.current = nextLanguage;
      if (overrideRef.current === null) {
        void applyI18nLanguage(nextLanguage);
      }
    },
    [applyI18nLanguage],
  );

  const setLanguageOverride = useCallback(
    (nextLanguage: AppLanguage | null) => {
      setOverrideLanguageState(nextLanguage);
      overrideRef.current = nextLanguage;
      if (nextLanguage === null) {
        void applyI18nLanguage(preferredRef.current);
        return;
      }
      void applyI18nLanguage(nextLanguage);
    },
    [applyI18nLanguage],
  );

  const syncPreferredLanguage = useCallback(
    async (nextLanguage: AppLanguage) => {
      setPreferredLanguage(nextLanguage);
      preferredRef.current = nextLanguage;
      if (overrideRef.current === null && nextLanguage !== getI18nLanguage()) {
        await applyI18nLanguage(nextLanguage);
      }
    },
    [applyI18nLanguage],
  );

  useEffect(() => {
    const initialLanguage = getInitialLanguage();
    setPreferredLanguage(initialLanguage);
    preferredRef.current = initialLanguage;

    void (async () => {
      if (initialLanguage !== "en") {
        await applyI18nLanguage(initialLanguage);
      } else {
        updateDocumentLanguage("en");
      }
      setHasBootstrapped(true);
    })();
  }, [applyI18nLanguage]);

  useEffect(() => {
    const handleStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEYS.language || event.newValue === null) {
        return;
      }
      if (!isAppLanguage(event.newValue)) {
        return;
      }
      void syncPreferredLanguage(event.newValue);
    };

    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, [syncPreferredLanguage]);

  const language = overrideLanguage ?? preferredLanguage;

  const value = useMemo(
    () => ({
      language,
      preferredLanguage,
      setLanguage,
      setLanguageOverride,
      isLanguageOverridden: overrideLanguage !== null,
      isSaving: isLocaleLoading || !hasBootstrapped,
    }),
    [
      language,
      preferredLanguage,
      setLanguage,
      setLanguageOverride,
      overrideLanguage,
      isLocaleLoading,
      hasBootstrapped,
    ],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
