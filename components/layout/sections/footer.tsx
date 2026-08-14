"use client";

import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSelect } from "@/components/i18n/LanguageSelect";
import { useAppLanguage } from "@/i18n/language-context";
import {
  APP_URL,
  CHANGELOG_URL,
  DOWNLOAD_URL,
  GITHUB_URL,
  ROADMAP_URL,
  SELF_HOST_URL,
} from "@/lib/config";

export const FooterSection = () => {
  const { t } = useTranslation("common");
  const { language, setLanguage, isSaving } = useAppLanguage();

  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="inline-flex w-fit">
              <Image
                src="/brand/logo/icon-above-text.webp"
                alt={t("appName")}
                width={140}
                height={140}
                className="h-auto w-28 sm:w-32"
              />
            </Link>
            <p className="mt-4 text-muted-foreground text-sm max-w-xs">
              {t("footerTagline")}
            </p>
            <div className="mt-4 max-w-xs">
              <LanguageSelect
                value={language}
                onValueChange={setLanguage}
                disabled={isSaving}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">{t("product")}</h3>
            <div>
              <Link href="/#features" className="opacity-60 hover:opacity-100">
                {t("features")}
              </Link>
            </div>
            <div>
              <Link href="/#tools" className="opacity-60 hover:opacity-100">
                {t("classroomTools")}
              </Link>
            </div>
            <div>
              <Link href="/pricing" className="opacity-60 hover:opacity-100">
                {t("pricing")}
              </Link>
            </div>
            <div>
              <Link href="/faq" className="opacity-60 hover:opacity-100">
                {t("faq")}
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">{t("company")}</h3>
            <div>
              <Link href="/about" className="opacity-60 hover:opacity-100">
                {t("about")}
              </Link>
            </div>
            <div>
              <Link href="/contact" className="opacity-60 hover:opacity-100">
                {t("contact")}
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">{t("legal")}</h3>
            <div>
              <Link href="/privacy-policy" className="opacity-60 hover:opacity-100">
                {t("privacyPolicy")}
              </Link>
            </div>
            <div>
              <Link
                href="/terms-and-conditions"
                className="opacity-60 hover:opacity-100"
              >
                {t("termsAndConditions")}
              </Link>
            </div>
            <div>
              <Link href="/cookie-policy" className="opacity-60 hover:opacity-100">
                {t("cookiePolicy")}
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">{t("resources")}</h3>
            <div>
              <Link
                href={APP_URL}
                target="_blank"
                className="opacity-60 hover:opacity-100 flex items-center gap-1"
              >
                {t("getStarted")}
                <ExternalLink className="size-4" />
              </Link>
            </div>
            <div>
              <Link
                href={DOWNLOAD_URL}
                target="_blank"
                className="opacity-60 hover:opacity-100 flex items-center gap-1"
              >
                {t("download")}
                <ExternalLink className="size-4" />
              </Link>
            </div>
            <div>
              <Link
                href={SELF_HOST_URL}
                target="_blank"
                className="opacity-60 hover:opacity-100 flex items-center gap-1"
              >
                {t("selfHost")}
                <ExternalLink className="size-4" />
              </Link>
            </div>
            <div>
              <Link
                href={GITHUB_URL}
                target="_blank"
                className="opacity-60 hover:opacity-100 flex items-center gap-1"
              >
                {t("github")}
                <ExternalLink className="size-4" />
              </Link>
            </div>
            <div>
              <Link
                href={CHANGELOG_URL}
                target="_blank"
                className="opacity-60 hover:opacity-100 flex items-center gap-1"
              >
                {t("changelog")}
                <ExternalLink className="size-4" />
              </Link>
            </div>
            <div>
              <Link
                href={ROADMAP_URL}
                target="_blank"
                className="opacity-60 hover:opacity-100 flex items-center gap-1"
              >
                {t("roadmap")}
                <ExternalLink className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h3>{t("copyright", { year: new Date().getFullYear() })}</h3>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link
              href="/privacy-policy"
              className="hover:text-foreground transition-colors"
            >
              {t("privacy")}
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-foreground transition-colors"
            >
              {t("terms")}
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
};
