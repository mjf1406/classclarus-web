import { BenefitsSection } from "@/components/layout/sections/benefits";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { ToolsSection } from "@/components/layout/sections/tools";

export const metadata = {
  title: "ClassClarus - Gamify Your Classroom",
  description:
    "Motivate students with points, behaviors, and rewards. Use ClassClarus in the cloud, or download the desktop app and self-host for free.",
  openGraph: {
    type: "website",
    url: "https://classclarus.com",
    title: "ClassClarus - Gamify Your Classroom",
    description:
      "Motivate students with points, behaviors, and rewards. Cloud, desktop, and self-host options for teachers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ClassClarus - Classroom Gamification Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://classclarus.com",
    title: "ClassClarus - Gamify Your Classroom",
    description:
      "Motivate students with points, behaviors, and rewards. Cloud, desktop, and self-host options for teachers.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ToolsSection />
      <FeaturesSection />
      <BenefitsSection />
      <FooterSection />
    </>
  );
}
