"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { useTranslation } from "react-i18next";

interface BenefitsProps {
  icon: string;
  titleKey:
    | "increaseEngagementTitle"
    | "saveTimeTitle"
    | "trackProgressTitle"
    | "clearExpectationsTitle"
    | "guardianAccessTitle"
    | "runItYourselfTitle";
  descriptionKey:
    | "increaseEngagementDescription"
    | "saveTimeDescription"
    | "trackProgressDescription"
    | "clearExpectationsDescription"
    | "guardianAccessDescription"
    | "runItYourselfDescription";
  audienceKey: "teachers" | "students" | "families";
}

const benefitList: BenefitsProps[] = [
  {
    icon: "TrendingUp",
    titleKey: "increaseEngagementTitle",
    descriptionKey: "increaseEngagementDescription",
    audienceKey: "teachers",
  },
  {
    icon: "Clock",
    titleKey: "saveTimeTitle",
    descriptionKey: "saveTimeDescription",
    audienceKey: "teachers",
  },
  {
    icon: "Trophy",
    titleKey: "trackProgressTitle",
    descriptionKey: "trackProgressDescription",
    audienceKey: "students",
  },
  {
    icon: "Target",
    titleKey: "clearExpectationsTitle",
    descriptionKey: "clearExpectationsDescription",
    audienceKey: "students",
  },
  {
    icon: "Shield",
    titleKey: "guardianAccessTitle",
    descriptionKey: "guardianAccessDescription",
    audienceKey: "families",
  },
  {
    icon: "Server",
    titleKey: "runItYourselfTitle",
    descriptionKey: "runItYourselfDescription",
    audienceKey: "teachers",
  },
];

export const BenefitsSection = () => {
  const { t } = useTranslation("benefits");
  const { t: tCommon } = useTranslation("common");

  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">
            {t("sectionLabel")}
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("title")}</h2>
          <p className="text-xl text-muted-foreground mb-8">{t("subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, titleKey, descriptionKey, audienceKey }) => (
            <Card
              key={titleKey}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="var(--primary)"
                    className="mb-6 text-primary"
                  />
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full h-fit">
                    {tCommon(audienceKey)}
                  </span>
                </div>

                <CardTitle>{t(titleKey)}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {t(descriptionKey)}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
