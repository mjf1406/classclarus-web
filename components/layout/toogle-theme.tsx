"use client";

import { useTheme } from "next-themes";
import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation("common");

  return (
    <Button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      size="sm"
      variant="ghost"
      className="w-full justify-start"
    >
      <div className="flex gap-2 dark:hidden">
        <Moon className="size-5" />
        <span className="block lg:hidden">{t("themeDark")}</span>
      </div>

      <div className="dark:flex gap-2 hidden">
        <Sun className="size-5" />
        <span className="block lg:hidden">{t("themeLight")}</span>
      </div>

      <span className="sr-only">{t("toggleTheme")}</span>
    </Button>
  );
};
