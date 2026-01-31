/** @format */

import { FooterSection } from "@/components/layout/sections/footer";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import PrintCostCalculator from "@/components/3d-printing/print-cost-calculator";
import { TableOfContents } from "@/components/3d-printing/table-of-contents";
import {
    Search,
    Printer,
    Clock,
    Calculator,
    FileText,
    Lightbulb,
    ExternalLink,
    AlertTriangle,
    CheckCircle2,
    Palette,
} from "lucide-react";
import ColorPalette from "@/components/3d-printing/color-palette";

export const metadata = {
    title: "3D Printing Instructions - ClassClarus",
    description:
        "Learn how to spend your points to get Mr. Michael to 3D print something for you!",
};

const steps = [
    {
        id: "makerworld",
        number: 1,
        title: "Find Your Model",
        subtitle: "Search on MakerWorld",
        icon: Search,
        color: "bg-blue-500",
    },
    {
        id: "print-profile",
        number: 2,
        title: "Select Print Profile",
        subtitle: "Choose the A1 Mini Printer",
        icon: Printer,
        color: "bg-green-500",
    },
    {
        id: "duration-filament",
        number: 3,
        title: "Check Duration & Filament",
        subtitle: "Find the Print Details",
        icon: Clock,
        color: "bg-orange-500",
    },
    {
        id: "calculate-points",
        number: 4,
        title: "Calculate Points",
        subtitle: "Use the Cost Calculator",
        icon: Calculator,
        color: "bg-purple-500",
    },
    {
        id: "choose-color",
        number: 5,
        title: "Choose Your Color",
        subtitle: "See Available Colors",
        icon: Palette,
        color: "bg-cyan-500",
    },
    {
        id: "submit-form",
        number: 6,
        title: "Submit Your Request",
        subtitle: "Fill Out the Form",
        icon: FileText,
        color: "bg-pink-500",
    },
];

export default function ThreeDPrintingInstructionsPage() {
    return (
        <>
            <section className="container py-12 sm:py-16">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <Badge
                        variant="secondary"
                        className="mb-4"
                    >
                        Student Guide
                    </Badge>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        3D Printing Instructions
                    </h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        How to spend your points to get Mr. Michael to 3D print
                        something for you!
                    </p>
                </div>

                {/* Mobile Table of Contents */}
                <Card className="mb-8 lg:hidden">
                    <CardHeader>
                        <CardTitle className="text-lg">
                            Table of Contents
                        </CardTitle>
                        <CardDescription>
                            Navigate to any section of the instructions
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <TableOfContents items={steps} />
                    </CardContent>
                </Card>

                {/* Main Content with TOC Sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
                    {/* Instructions Cards */}
                    <div className="space-y-8">
                        {/* Step 1: MakerWorld */}
                        <Card
                            id="makerworld"
                            className="scroll-mt-24"
                        >
                            <CardHeader className="pb-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center flex-shrink-0">
                                        <Search className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Badge>Step 1</Badge>
                                        </div>
                                        <CardTitle className="text-2xl">
                                            Find Your Model
                                        </CardTitle>
                                        <CardDescription className="text-base mt-1">
                                            Search for 3D models on MakerWorld
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-1 space-y-4">
                                        <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                                            <li>
                                                Go to{" "}
                                                <Link
                                                    href="https://makerworld.com/en"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-primary hover:underline inline-flex items-center gap-1 font-semibold"
                                                >
                                                    MakerWorld
                                                    <ExternalLink className="size-4" />
                                                </Link>{" "}
                                                to search for 3D models.
                                            </li>
                                            <li>
                                                Use the search bar to search for
                                                a model you want.
                                            </li>
                                            <li>
                                                When you find what you want, go
                                                to the next step.
                                            </li>
                                        </ol>

                                        <div className="flex flex-col sm:flex-row gap-3">
                                            <Link
                                                href="https://makerworld.com/en"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                                            >
                                                <Search className="h-4 w-4" />
                                                Visit MakerWorld
                                                <ExternalLink className="size-4" />
                                            </Link>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex items-start gap-3 p-4 rounded-lg bg-destructive/10 border border-destructive/20">
                                                <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                                                <div>
                                                    <p className="font-medium text-destructive">
                                                        Important Restrictions
                                                    </p>
                                                    <ul className="text-sm text-muted-foreground mt-1 space-y-1">
                                                        <li>
                                                            • I will NOT 3D
                                                            print weapons.
                                                        </li>
                                                        <li>
                                                            • I will NOT 3D
                                                            print big things.
                                                            The biggest thing I
                                                            can print is{" "}
                                                            <strong className="text-foreground">
                                                                150 × 150 × 150
                                                                mm
                                                            </strong>
                                                            .
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="md:w-1/2 flex-shrink-0">
                                        <div className="rounded-lg border border-secondary overflow-hidden bg-secondary/20">
                                            <Image
                                                src="/3d-printing/search-bar.jpg"
                                                alt="MakerWorld search bar showing how to search for 3D models"
                                                width={1200}
                                                height={600}
                                                className="w-full h-auto"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Step 2: Print Profile */}
                        <Card
                            id="print-profile"
                            className="scroll-mt-24"
                        >
                            <CardHeader className="pb-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center flex-shrink-0">
                                        <Printer className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Badge>Step 2</Badge>
                                        </div>
                                        <CardTitle className="text-2xl">
                                            Select Print Profile
                                        </CardTitle>
                                        <CardDescription className="text-base mt-1">
                                            Choose the correct printer settings
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-1 space-y-4">
                                        <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                                            <li>
                                                Find the{" "}
                                                <strong className="text-foreground">
                                                    Print Profile
                                                </strong>{" "}
                                                card on the webpage.
                                            </li>
                                            <li>
                                                You will see lots of 3D printers
                                                to choose from: All, P1S, P1P,
                                                X1, X1 Carbon, H2D, etc.
                                            </li>
                                            <li>
                                                Find and click{" "}
                                                <strong className="text-foreground">
                                                    A1 Mini
                                                </strong>
                                                .
                                            </li>
                                            <li>
                                                Once you clicked A1 Mini, go to
                                                the next step.
                                            </li>
                                        </ol>

                                        <div className="flex items-start gap-3 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                                            <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                            <p className="text-sm text-muted-foreground">
                                                If you do not see{" "}
                                                <strong>A1 Mini</strong> in the
                                                list, the model is too big to 3D
                                                print!
                                            </p>
                                        </div>
                                    </div>

                                    <div className="md:w-1/2 flex-shrink-0">
                                        <div className="rounded-lg border border-secondary overflow-hidden bg-secondary/20">
                                            <Image
                                                src="/3d-printing/a1-mini-select.jpg"
                                                alt="Print Profile card showing different printer options including A1 Mini"
                                                width={1200}
                                                height={600}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Step 3: Duration and Filament */}
                        <Card
                            id="duration-filament"
                            className="scroll-mt-24"
                        >
                            <CardHeader className="pb-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Badge>Step 3</Badge>
                                        </div>
                                        <CardTitle className="text-2xl">
                                            Check Duration, Filament, and Nozzle
                                            Size
                                        </CardTitle>
                                        <CardDescription className="text-base mt-1">
                                            Find out how long it takes and how
                                            much material is needed
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-1 space-y-4">
                                        <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                                            <li>
                                                Make sure A1 Mini is selected.
                                            </li>
                                            <li>
                                                Look through the different
                                                models to find one that you
                                                like.
                                            </li>
                                            <li>
                                                Hover your mouse over one or
                                                click it to see its details.
                                                (The red circle in the image)
                                            </li>
                                            <li>
                                                Find the{" "}
                                                <strong className="text-foreground">
                                                    duration
                                                </strong>{" "}
                                                (how long it takes to print).
                                                E.G. 1.6 h (The blue circle in
                                                the image)
                                            </li>
                                            <li>
                                                Find the{" "}
                                                <strong className="text-foreground">
                                                    nozzle size
                                                </strong>{" "}
                                                (in mm). E.G. 0.4 mm. I can only
                                                print with 0.4 mm nozzle size.
                                                (The magenta (pink) circle in
                                                the image)
                                            </li>
                                            <li>
                                                Find the{" "}
                                                <strong className="text-foreground">
                                                    amount of filament
                                                </strong>{" "}
                                                (in grams). E.G. 36 g (The
                                                yellow circle in the image)
                                            </li>
                                            <li>
                                                Remember the duration and the
                                                filament amount for the next
                                                step!
                                            </li>
                                        </ol>

                                        <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
                                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                            <p className="text-sm text-muted-foreground">
                                                <strong className="text-foreground">
                                                    Pro tip:
                                                </strong>{" "}
                                                Write down the duration, nozzle
                                                size, and filament amount so you
                                                don&apos;t forget!
                                            </p>
                                        </div>
                                    </div>

                                    <div className="md:w-1/2 flex-shrink-0">
                                        <div className="rounded-lg border border-secondary overflow-hidden bg-secondary/20">
                                            <Image
                                                src="/3d-printing/print-profile.jpg"
                                                alt="Model page showing duration and filament amount details"
                                                width={1200}
                                                height={600}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Step 4: Calculate Points */}
                        <Card
                            id="calculate-points"
                            className="scroll-mt-24"
                        >
                            <CardHeader className="pb-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center flex-shrink-0">
                                        <Calculator className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Badge>Step 4</Badge>
                                        </div>
                                        <CardTitle className="text-2xl">
                                            Calculate Points
                                        </CardTitle>
                                        <CardDescription className="text-base mt-1">
                                            Find out how many points you need
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                                    <li>
                                        Scroll a little bit down to find the{" "}
                                        <strong className="text-foreground">
                                            3D Printing Cost Calculator
                                        </strong>{" "}
                                        card.
                                    </li>
                                    <li>
                                        Select the{" "}
                                        <strong className="text-foreground">
                                            nozzle size
                                        </strong>{" "}
                                        from the dropdown menu.
                                    </li>
                                    <li>
                                        Input the{" "}
                                        <strong className="text-foreground">
                                            duration
                                        </strong>{" "}
                                        in hours.
                                    </li>
                                    <li>
                                        Input the{" "}
                                        <strong className="text-foreground">
                                            amount of filament
                                        </strong>{" "}
                                        in grams.
                                    </li>
                                    <li>
                                        Click the{" "}
                                        <strong className="text-foreground">
                                            Calculate
                                        </strong>{" "}
                                        button or hit the Enter key.
                                    </li>
                                    <li>See the cost in points!</li>
                                </ol>

                                <div className="p-4 rounded-lg bg-secondary/50 border border-secondary">
                                    <p className="font-medium mb-2">
                                        Converting Minutes to Hours
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        If the duration is in minutes, divide by
                                        60 to get hours.
                                    </p>
                                    <div className="mt-2 p-3 rounded bg-background font-mono text-sm">
                                        Example: 49 min ÷ 60 ={" "}
                                        <strong>0.817 hours</strong>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <PrintCostCalculator />
                                </div>

                                <Link
                                    href="#calculator"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                                >
                                    <Calculator className="h-4 w-4" />
                                    Jump to Calculator
                                </Link>
                            </CardContent>
                        </Card>

                        {/* Step 5: Choose Your Color */}
                        <Card
                            id="choose-color"
                            className="scroll-mt-24"
                        >
                            <CardHeader className="pb-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-cyan-500 text-white flex items-center justify-center flex-shrink-0">
                                        <Palette className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Badge>Step 5</Badge>
                                        </div>
                                        <CardTitle className="text-2xl">
                                            Choose Your Color
                                        </CardTitle>
                                        <CardDescription className="text-base mt-1">
                                            See all available filament colors
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground">
                                    Choose your favorite color from the
                                    available options below. Make sure you
                                    select this color when you fill out the
                                    Google Form. You can also visit Mr.
                                    Michael&apos;s classroom to see the{" "}
                                    <strong>Color Bag</strong> in person!
                                </p>
                                <ColorPalette />
                            </CardContent>
                        </Card>

                        {/* Step 6: Submit Form */}
                        <Card
                            id="submit-form"
                            className="scroll-mt-24"
                        >
                            <CardHeader className="pb-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center flex-shrink-0">
                                        <FileText className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Badge>Step 6</Badge>
                                        </div>
                                        <CardTitle className="text-2xl">
                                            Submit Your Request
                                        </CardTitle>
                                        <CardDescription className="text-base mt-1">
                                            Fill out the Google Form to request
                                            your print
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
                                    <li>
                                        Fill out the{" "}
                                        <Link
                                            href="https://forms.gle/d2X5afhJutAzuMoF7"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline inline-flex items-center gap-1 font-semibold"
                                        >
                                            Google Form
                                            <ExternalLink className="size-4" />
                                        </Link>{" "}
                                        with your information and print details.
                                    </li>
                                    <li>
                                        If you have questions, bring your
                                        Chromebook to Mr. Michael to ask for
                                        help.
                                    </li>
                                </ol>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link
                                        href="https://forms.gle/d2X5afhJutAzuMoF7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                                    >
                                        <FileText className="h-4 w-4" />
                                        Open Google Form
                                        <ExternalLink className="size-4" />
                                    </Link>
                                </div>

                                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-muted-foreground">
                                        <strong className="text-foreground">
                                            You&apos;re done!
                                        </strong>{" "}
                                        Mr. Michael will review your request and
                                        let you know when your print is ready.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Tips Section */}
                        <Card
                            id="tips"
                            className="scroll-mt-24 border-yellow-500/50"
                        >
                            <CardHeader className="pb-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center flex-shrink-0">
                                        <Lightbulb className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <CardTitle className="text-2xl">
                                            Helpful Tips
                                        </CardTitle>
                                        <CardDescription className="text-base mt-1">
                                            Save points and get better prints
                                        </CardDescription>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="p-4 rounded-lg bg-secondary/50 border border-secondary">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">🎨</span>
                                            <p className="font-medium">
                                                See the Colors
                                            </p>
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-3">
                                            Want to see what colors are
                                            available? Check{" "}
                                            <Link
                                                href="#choose-color"
                                                className="text-primary hover:underline font-semibold"
                                            >
                                                Step 5: Choose Your Color
                                            </Link>{" "}
                                            above for the full palette. You can
                                            also visit Mr. Michael&apos;s
                                            classroom to see the{" "}
                                            <strong>Color Bag</strong> in
                                            person!
                                        </p>
                                        <div className="rounded-lg border border-secondary overflow-hidden bg-secondary/20">
                                            <Image
                                                src="/3d-printing/color-bag.jpg"
                                                alt="Color bag showing available filament colors"
                                                width={600}
                                                height={400}
                                                className="w-full h-auto"
                                            />
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-lg bg-secondary/50 border border-secondary">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">📏</span>
                                            <p className="font-medium">
                                                Smaller = Fewer Points
                                            </p>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            The smaller something is, the fewer
                                            points it costs. Choose wisely!
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-lg bg-secondary/50 border border-secondary">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">⏱️</span>
                                            <p className="font-medium">
                                                Shorter Time = Fewer Points
                                            </p>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            The shorter the printing time, the
                                            fewer points you need.
                                        </p>
                                    </div>

                                    <div className="p-4 rounded-lg bg-secondary/50 border border-secondary">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl">🧵</span>
                                            <p className="font-medium">
                                                Less Filament = Fewer Points
                                            </p>
                                        </div>
                                        <p className="text-sm text-muted-foreground">
                                            The less filament used, the fewer
                                            points. Simple models cost less!
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Calculator Section */}
                        <div
                            id="calculator"
                            className="scroll-mt-24"
                        >
                            <PrintCostCalculator />
                        </div>
                    </div>

                    {/* Sticky Table of Contents Sidebar */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        Table of Contents
                                    </CardTitle>
                                    <CardDescription>
                                        Navigate to any section
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <TableOfContents items={steps} />
                                </CardContent>
                            </Card>
                        </div>
                    </aside>
                </div>
            </section>
            <FooterSection />
        </>
    );
}
