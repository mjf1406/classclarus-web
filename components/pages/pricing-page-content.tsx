"use client";

import { DownloadMenu } from "@/components/layout/download-menu";
import { FooterSection } from "@/components/layout/sections/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { APP_URL, SELF_HOST_URL } from "@/lib/config";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanConfig {
  titleKey: "planFreeTitle" | "planMonthlyTitle" | "planYearlyTitle";
  popular: PopularPlan;
  price: number;
  periodKey: "perMonth" | "perYear";
  descriptionKey:
    | "planFreeDescription"
    | "planMonthlyDescription"
    | "planYearlyDescription";
  buttonKey?: "planMonthlyButton" | "planYearlyButton";
  benefitKeys: Array<
    | "planFreeBenefit1"
    | "planFreeBenefit2"
    | "planFreeBenefit3"
    | "planFreeBenefit4"
    | "planFreeBenefit5"
    | "planFreeBenefit6"
    | "planMonthlyBenefit1"
    | "planMonthlyBenefit2"
    | "planMonthlyBenefit3"
    | "planMonthlyBenefit4"
    | "planMonthlyBenefit5"
    | "planMonthlyBenefit6"
    | "planYearlyBenefit1"
    | "planYearlyBenefit2"
    | "planYearlyBenefit3"
    | "planYearlyBenefit4"
    | "planYearlyBenefit5"
    | "planYearlyBenefit6"
  >;
  href: string;
  dualActions?: boolean;
}

const plans: PlanConfig[] = [
  {
    titleKey: "planFreeTitle",
    popular: PopularPlan.NO,
    price: 0,
    periodKey: "perMonth",
    descriptionKey: "planFreeDescription",
    benefitKeys: [
      "planFreeBenefit1",
      "planFreeBenefit2",
      "planFreeBenefit3",
      "planFreeBenefit4",
      "planFreeBenefit5",
      "planFreeBenefit6",
    ],
    href: SELF_HOST_URL,
    dualActions: true,
  },
  {
    titleKey: "planMonthlyTitle",
    popular: PopularPlan.NO,
    price: 3,
    periodKey: "perMonth",
    descriptionKey: "planMonthlyDescription",
    buttonKey: "planMonthlyButton",
    benefitKeys: [
      "planMonthlyBenefit1",
      "planMonthlyBenefit2",
      "planMonthlyBenefit3",
      "planMonthlyBenefit4",
      "planMonthlyBenefit5",
      "planMonthlyBenefit6",
    ],
    href: APP_URL,
  },
  {
    titleKey: "planYearlyTitle",
    popular: PopularPlan.YES,
    price: 30,
    periodKey: "perYear",
    descriptionKey: "planYearlyDescription",
    buttonKey: "planYearlyButton",
    benefitKeys: [
      "planYearlyBenefit1",
      "planYearlyBenefit2",
      "planYearlyBenefit3",
      "planYearlyBenefit4",
      "planYearlyBenefit5",
      "planYearlyBenefit6",
    ],
    href: APP_URL,
  },
];

export function PricingPageContent() {
  const { t } = useTranslation("pricing");
  const { t: tCommon } = useTranslation("common");

  return (
    <>
      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plans.map(
              ({
                titleKey,
                popular,
                price,
                periodKey,
                descriptionKey,
                buttonKey,
                benefitKeys,
                href,
                dualActions,
              }) => (
                <Card
                  key={titleKey}
                  className={
                    popular === PopularPlan.YES
                      ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.05]"
                      : ""
                  }
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{t(titleKey)}</CardTitle>
                      {popular === PopularPlan.YES && (
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {tCommon("twoMonthsFree")}
                        </span>
                      )}
                    </div>

                    <CardDescription className="pt-2 min-h-[48px]">
                      {t(descriptionKey)}
                    </CardDescription>

                    <div className="pt-4">
                      <span className="text-4xl font-bold">${price}</span>
                      <span className="text-muted-foreground">
                        {tCommon(periodKey)}
                      </span>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3">
                      {benefitKeys.map((benefitKey) => (
                        <span key={benefitKey} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm">{t(benefitKey)}</span>
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter>
                    {dualActions ? (
                      <div className="flex w-full items-center gap-4">
                        <DownloadMenu
                          variant="default"
                          containerClassName="flex-1"
                          className="w-full font-semibold"
                        />
                        <Button
                          asChild
                          variant="link"
                          className="h-auto px-0 text-foreground"
                        >
                          <a
                            href={SELF_HOST_URL}
                            target="_blank"
                            rel="noreferrer"
                            className="flex flex-col items-start leading-tight"
                          >
                            <span>{tCommon("selfHost")}</span>
                            <span className="text-xs font-normal text-muted-foreground">
                              {tCommon("selfHostExpertsOnly")}
                            </span>
                          </a>
                        </Button>
                      </div>
                    ) : (
                      <Button asChild variant="secondary" className="w-full">
                        <Link href={href}>{t(buttonKey!)}</Link>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              ),
            )}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground mb-4">{t("questionsPrompt")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/faq"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors"
              >
                {tCommon("viewFaq")}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-input bg-background font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {tCommon("contactSupport")}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
