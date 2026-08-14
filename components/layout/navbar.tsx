"use client";

import { Menu, ArrowRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { ToggleTheme } from "./toogle-theme";
import { LanguageSwitcher } from "@/components/i18n/LanguageSwitcher";
import { APP_URL } from "@/lib/config";

interface RouteProps {
  href: string;
  labelKey: "pricing" | "faq" | "about" | "contact";
}

interface FeatureProps {
  titleKey: "pointsBehaviorsTitle" | "assignmentsGradingTitle" | "classroomToolsTitle";
  descriptionKey:
    | "pointsBehaviorsDescription"
    | "assignmentsGradingDescription"
    | "classroomToolsDescription";
  href: string;
}

const routeList: RouteProps[] = [
  { href: "/pricing", labelKey: "pricing" },
  { href: "/faq", labelKey: "faq" },
  { href: "/about", labelKey: "about" },
  { href: "/contact", labelKey: "contact" },
];

const featureList: FeatureProps[] = [
  {
    titleKey: "pointsBehaviorsTitle",
    descriptionKey: "pointsBehaviorsDescription",
    href: "/#features",
  },
  {
    titleKey: "assignmentsGradingTitle",
    descriptionKey: "assignmentsGradingDescription",
    href: "/#features",
  },
  {
    titleKey: "classroomToolsTitle",
    descriptionKey: "classroomToolsDescription",
    href: "/#tools",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { t } = useTranslation("common");
  const { t: tNav } = useTranslation("nav");

  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="flex shrink-0 items-center">
        <Image
          src="/brand/logo/icon-and-text-horizontal.webp"
          alt={t("appName")}
          width={169}
          height={53}
          className="h-9 w-auto"
          priority
        />
      </Link>
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="/brand/logo/icon-and-text-horizontal.webp"
                      alt={t("appName")}
                      width={169}
                      height={53}
                      className="h-9 w-auto"
                    />
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2">
                <Button
                  onClick={() => setIsOpen(false)}
                  asChild
                  variant="ghost"
                  className="justify-start text-base"
                >
                  <Link href="/#features">{t("features")}</Link>
                </Button>
                {routeList.map(({ href, labelKey }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{t(labelKey)}</Link>
                  </Button>
                ))}
                <Separator className="my-2" />
                <Button
                  onClick={() => setIsOpen(false)}
                  asChild
                  className="justify-start"
                >
                  <Link href={APP_URL}>
                    {t("getStarted")}
                    <ArrowRight className="size-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start gap-3">
              <Separator className="mb-2" />
              <div className="flex items-center gap-2">
                <ToggleTheme />
                <LanguageSwitcher />
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              {t("features")}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4">
                {featureList.map(({ titleKey, descriptionKey, href }) => (
                  <li key={titleKey}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={href}
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          {tNav(titleKey)}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {tNav(descriptionKey)}
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, labelKey }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {t(labelKey)}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex items-center gap-2">
        <ToggleTheme />
        <LanguageSwitcher />

        <Button asChild size="sm" className="font-semibold">
          <Link href={APP_URL}>
            {t("getStarted")}
            <ArrowRight className="size-4 ml-1" />
          </Link>
        </Button>
      </div>
    </header>
  );
};
