"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DownloadMenu } from "@/components/layout/download-menu";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { APP_URL, SELF_HOST_URL } from "@/lib/config";

export const HeroSection = () => {
  const { t } = useTranslation("hero");
  const { t: tCommon } = useTranslation("common");

  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>{tCommon("free")}</Badge>
            </span>
            <span>{t("badgeDesktopFree")}</span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              {t("titlePrefix")}
              <span className="text-transparent px-2 bg-gradient-to-r from-primary to-primary bg-clip-text">
                {t("titleHighlight")}
              </span>
              {t("titleSuffix")}
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            {t("description")}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <DownloadMenu className="w-full font-bold" variant="default" />

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold group/arrow"
            >
              <Link href={APP_URL}>
                {tCommon("getStarted")}
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <a href="#tools">{t("learnMore")}</a>
            </Button>
          </div>

          <Button
            asChild
            variant="ghost"
            className="h-auto py-2 font-bold"
          >
            <a
              href={SELF_HOST_URL}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center leading-tight"
            >
              <span>{tCommon("selfHost")}</span>
              <span className="text-xs font-normal text-muted-foreground">
                {tCommon("selfHostExpertsOnly")}
              </span>
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
