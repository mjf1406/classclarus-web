"use client";

import { FooterSection } from "@/components/layout/sections/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { useTranslation } from "react-i18next";

export function NotFoundContent() {
  const { t } = useTranslation("notFound");
  const { t: tCommon } = useTranslation("common");

  return (
    <>
      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-8 flex justify-center">
            <Image
              src="/brand/error/404.webp"
              alt={tCommon("pageNotFoundAlt")}
              width={300}
              height={300}
              className="mx-auto"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t("code")}</h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">{t("title")}</h2>

          <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
            {t("description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/">
                <Home className="size-5 mr-2" />
                {t("goHome")}
              </Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              className="font-semibold"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="size-5 mr-2" />
              {t("goBack")}
            </Button>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
