"use client";

import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

import { LanguageFlag } from "@/components/i18n/LanguageFlag";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppLanguage } from "@/i18n/language-context";
import { getLanguageOption, isAppLanguage, LANGUAGE_OPTIONS } from "@/lib/languages";

type LanguageSwitcherProps = {
  descriptionId?: string;
};

export function LanguageSwitcher({ descriptionId }: LanguageSwitcherProps) {
  const { t } = useTranslation("common");
  const { language, setLanguage, isSaving, isLanguageOverridden } = useAppLanguage();
  const currentLanguage = getLanguageOption(language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="w-full justify-start"
          disabled={isSaving || isLanguageOverridden}
          aria-describedby={descriptionId}
        >
          <div className="flex gap-2">
            <Languages className="size-5" aria-hidden="true" />
            <span className="block lg:hidden">{t("chooseLanguage")}</span>
          </div>
          <span className="sr-only">
            {t("chooseLanguage")}: {currentLanguage.label}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" aria-label={t("chooseLanguage")}>
        <DropdownMenuRadioGroup
          value={language}
          onValueChange={(value) => {
            if (isAppLanguage(value)) {
              setLanguage(value);
            }
          }}
        >
          <DropdownMenuLabel>{t("chooseLanguage")}</DropdownMenuLabel>
          {LANGUAGE_OPTIONS.map((option) => (
            <DropdownMenuRadioItem key={option.value} value={option.value}>
              <LanguageFlag countryCode={option.countryCode} />
              <span lang={option.htmlLang}>{option.label}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
