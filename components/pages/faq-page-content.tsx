"use client";

import { FooterSection } from "@/components/layout/sections/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { APP_URL, SELF_HOST_URL } from "@/lib/config";

const faqItems = [
  { value: "item-start", questionKey: "qStart", answerKey: "aStart" },
  { value: "item-1", questionKey: "qWhatIs", answerKey: "aWhatIs" },
  { value: "item-2", questionKey: "qPoints", answerKey: "aPoints" },
  { value: "item-3", questionKey: "qRewards", answerKey: "aRewards" },
  { value: "item-4", questionKey: "qFree", answerKey: "aFree" },
  { value: "item-5", questionKey: "qCloudPricing", answerKey: "aCloudPricing" },
  { value: "item-6", questionKey: "qStudentAccess", answerKey: "aStudentAccess" },
  { value: "item-7", questionKey: "qData", answerKey: "aData" },
  { value: "item-8", questionKey: "qGuardians", answerKey: "aGuardians" },
  { value: "item-9", questionKey: "qTools", answerKey: "aTools" },
  { value: "item-10", questionKey: "qPrivacy", answerKey: "aPrivacy" },
  { value: "item-11", questionKey: "qMultipleClasses", answerKey: "aMultipleClasses" },
  { value: "item-12", questionKey: "qSelfHost", answerKey: "aSelfHost" },
] as const;

export function FaqPageContent() {
  const { t } = useTranslation("faq");
  const { t: tCommon } = useTranslation("common");

  return (
    <>
      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
            <p className="text-xl text-muted-foreground">
              {t("intro")}{" "}
              <Link href="/contact" className="text-primary hover:underline">
                {t("introContactLink")}
              </Link>
              .
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqItems.map(({ value, questionKey, answerKey }) => (
              <AccordionItem key={value} value={value}>
                <AccordionTrigger className="text-left">
                  {t(questionKey)}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {t(answerKey)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-16 text-center bg-primary/5 rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">{t("stillHaveQuestions")}</h2>
            <p className="text-muted-foreground mb-6">{t("stillHaveQuestionsBody")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:bg-secondary/80 transition-colors"
              >
                {tCommon("contactSupport")}
              </Link>
              <Link
                href={APP_URL}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                {tCommon("getStarted")}
              </Link>
              <a
                href={SELF_HOST_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-input bg-background font-semibold rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {tCommon("selfHostGuide")}
              </a>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
