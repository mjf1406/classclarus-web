"use client";

import { FooterSection } from "@/components/layout/sections/footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Heart,
  Lightbulb,
  Users,
  Target,
  Sparkles,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { APP_URL } from "@/lib/config";

const values = [
  {
    icon: Heart,
    titleKey: "studentCenteredTitle",
    descriptionKey: "studentCenteredDescription",
  },
  {
    icon: Lightbulb,
    titleKey: "teacherDesignedTitle",
    descriptionKey: "teacherDesignedDescription",
  },
  {
    icon: Users,
    titleKey: "communityDrivenTitle",
    descriptionKey: "communityDrivenDescription",
  },
  {
    icon: Target,
    titleKey: "simplicityFirstTitle",
    descriptionKey: "simplicityFirstDescription",
  },
] as const;

export function AboutPageContent() {
  const { t } = useTranslation("about");
  const { t: tCommon } = useTranslation("common");

  return (
    <>
      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">{t("missionTitle")}</h2>
            <div className="bg-muted/50 rounded-2xl p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t("missionBody")}
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">{t("storyTitle")}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>{t("storyParagraph1")}</p>
              <p>{t("storyParagraph2")}</p>
              <p>{t("storyParagraph3")}</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8">{t("valuesTitle")}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map(({ icon: Icon, titleKey, descriptionKey }) => (
                <Card key={titleKey} className="bg-muted/50 border-0">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">{t(titleKey)}</h3>
                        <p className="text-sm text-muted-foreground">
                          {t(descriptionKey)}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-4">{t("whoWeServeTitle")}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-muted/50 rounded-2xl">
                <Sparkles className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t("k12TeachersTitle")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("k12TeachersDescription")}
                </p>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-2xl">
                <GraduationCap className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t("anySizeClassroomsTitle")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("anySizeClassroomsDescription")}
                </p>
              </div>
              <div className="text-center p-6 bg-muted/50 rounded-2xl">
                <Heart className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">{t("studentsFamiliesTitle")}</h3>
                <p className="text-sm text-muted-foreground">
                  {t("studentsFamiliesDescription")}
                </p>
              </div>
            </div>
          </div>

          <div className="text-center bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">{t("ctaTitle")}</h2>
            <p className="text-muted-foreground mb-6">{t("ctaBody")}</p>
            <a
              href={APP_URL}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              {tCommon("getStarted")}
            </a>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
