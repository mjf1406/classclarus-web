"use client";

import { FooterSection } from "@/components/layout/sections/footer";
import { Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export function ContactPageContent() {
  const { t } = useTranslation("contact");

  return (
    <>
      <section className="container py-24 sm:py-32">
        <div className="mx-auto max-w-2xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
            <div className="flex items-center justify-center gap-3 mt-8">
              <Mail className="w-6 h-6 text-primary" />
              <a
                href="mailto:admin@classclarus.com"
                className="text-2xl text-primary hover:underline"
              >
                admin@classclarus.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
}
