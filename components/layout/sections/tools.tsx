"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ToolProps {
  icon: string;
  titleKey:
    | "seatLayoutsTitle"
    | "randomAssignersTitle"
    | "equitableAssignersTitle"
    | "attendanceTitle"
    | "tasksTitle"
    | "razTitle";
  descriptionKey:
    | "seatLayoutsDescription"
    | "randomAssignersDescription"
    | "equitableAssignersDescription"
    | "attendanceDescription"
    | "tasksDescription"
    | "razDescription";
}

const toolList: ToolProps[] = [
  {
    icon: "RockingChair",
    titleKey: "seatLayoutsTitle",
    descriptionKey: "seatLayoutsDescription",
  },
  {
    icon: "Dices",
    titleKey: "randomAssignersTitle",
    descriptionKey: "randomAssignersDescription",
  },
  {
    icon: "Scale",
    titleKey: "equitableAssignersTitle",
    descriptionKey: "equitableAssignersDescription",
  },
  {
    icon: "ClipboardCheck",
    titleKey: "attendanceTitle",
    descriptionKey: "attendanceDescription",
  },
  {
    icon: "ListTodo",
    titleKey: "tasksTitle",
    descriptionKey: "tasksDescription",
  },
  {
    icon: "BookOpen",
    titleKey: "razTitle",
    descriptionKey: "razDescription",
  },
];

export const ToolsSection = () => {
  const { t } = useTranslation("tools");

  return (
    <section id="tools" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        {t("sectionLabel")}
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        {t("title")}
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        {t("subtitle")}
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {toolList.map(({ icon, titleKey, descriptionKey }) => (
          <div key={titleKey}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="var(--primary)"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{t(titleKey)}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {t(descriptionKey)}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
