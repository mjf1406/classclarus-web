/** @format */

"use client";

import React, { useState, type FormEvent } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { NumberInput } from "@/components/ui/number-input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const FILAMENT_PRICE_PER_KG = 31000; // KRW
const MATERIAL_EFFICIENCY_FACTOR = 1.1; // percent - Accounts for filament waste
const PRINT_TIME_COST_PER_HOUR = 300; // KRW

const ADDON_COSTS = {
    spring: 5,
    keychain: 5,
    clicker: 15,
};

const PrintCostCalculator = () => {
    const [printingTime, setPrintingTime] = useState<string>("");
    const [filamentWeight, setFilamentWeight] = useState<string>("");
    const [nozzleSize, setNozzleSize] = useState<string>("0.2");
    const [quantity, setQuantity] = useState<string>("1");
    const [springQty, setSpringQty] = useState<string>("0");
    const [keychainQty, setKeychainQty] = useState<string>("0");
    const [clickerQty, setClickerQty] = useState<string>("0");
    const [result, setResult] = useState<number | null>(null);
    const [timeError, setTimeError] = useState<string>("");
    const [weightError, setWeightError] = useState<string>("");
    const [nozzleError, setNozzleError] = useState<string>("");

    const validateInputs = () => {
        let isValid = true;
        setTimeError("");
        setWeightError("");
        setNozzleError("");
        const time = parseFloat(printingTime);
        const weight = parseFloat(filamentWeight);

        // Validate printing time input
        if (printingTime.trim() === "" || isNaN(time)) {
            setTimeError("Please enter a valid printing time (in hours).");
            isValid = false;
        }

        // Validate filament weight input
        if (filamentWeight.trim() === "" || isNaN(weight)) {
            setWeightError("Please enter a valid filament weight (in grams).");
            isValid = false;
        }

        // Validate nozzle size - must be 0.4
        if (nozzleSize !== "0.4") {
            setNozzleError("Only 0.4mm nozzle size is currently supported.");
            isValid = false;
        }

        return isValid;
    };

    const computeProduct = () => {
        const time = parseFloat(printingTime);
        const weight = parseFloat(filamentWeight);
        const qty = parseInt(quantity) || 1;

        const unitCost =
            (weight / 1000) *
            FILAMENT_PRICE_PER_KG *
            MATERIAL_EFFICIENCY_FACTOR;
        const addedMachineCost = time * PRINT_TIME_COST_PER_HOUR;
        const baseCostPerUnit = unitCost + addedMachineCost;
        const basePoints = Math.round(baseCostPerUnit / 10 / 2);

        const totalBasePoints = basePoints * qty;

        const springCost = (parseInt(springQty) || 0) * ADDON_COSTS.spring;
        const keychainCost =
            (parseInt(keychainQty) || 0) * ADDON_COSTS.keychain;
        const clickerCost = (parseInt(clickerQty) || 0) * ADDON_COSTS.clicker;

        const totalPoints =
            totalBasePoints + springCost + keychainCost + clickerCost;
        setResult(totalPoints);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (validateInputs()) {
            computeProduct();
        } else {
            setResult(null);
        }
    };

    return (
        <Card className="h-full w-full shadow-lg">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">
                    3D Printing Cost Calculator
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                    Enter the printing time (in hours) and filament weight (in
                    grams)
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
                    {/* Left column: form */}
                    <div className="space-y-4">
                        {nozzleError && (
                            <Alert className="border-destructive/50 bg-destructive/10">
                                <AlertDescription className="flex items-center gap-2 text-sm text-destructive">
                                    <AlertCircle className="h-4 w-4" />{" "}
                                    {nozzleError}
                                </AlertDescription>
                            </Alert>
                        )}
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4"
                        >
                    <div>
                        <label
                            htmlFor="nozzleSize"
                            className="block text-sm font-medium mb-2"
                        >
                            Nozzle Size (mm)
                        </label>
                        <Select
                            value={nozzleSize}
                            onValueChange={setNozzleSize}
                        >
                            <SelectTrigger
                                id="nozzleSize"
                                className="bg-background"
                            >
                                <SelectValue placeholder="Select nozzle size" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="0.2">0.2</SelectItem>
                                <SelectItem value="0.4">0.4</SelectItem>
                                <SelectItem value="0.6">0.6</SelectItem>
                                <SelectItem value="0.8">0.8</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <label
                            htmlFor="printingTime"
                            className="block text-sm font-medium mb-2"
                        >
                            Printing Time (hours)
                        </label>
                        <NumberInput
                            id="printingTime"
                            step={0.1}
                            value={printingTime}
                            onChange={setPrintingTime}
                            placeholder="e.g. 1.2"
                            className="bg-background"
                        />
                        {timeError && (
                            <Alert className="mt-2 border-destructive/50 bg-destructive/10">
                                <AlertDescription className="flex items-center gap-2 text-sm text-destructive">
                                    <AlertCircle className="h-4 w-4" />{" "}
                                    {timeError}
                                </AlertDescription>
                            </Alert>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="filamentWeight"
                            className="block text-sm font-medium mb-2"
                        >
                            Filament Weight (grams)
                        </label>
                        <NumberInput
                            id="filamentWeight"
                            step={1}
                            value={filamentWeight}
                            onChange={setFilamentWeight}
                            placeholder="e.g. 150"
                            className="bg-background"
                        />
                        {weightError && (
                            <Alert className="mt-2 border-destructive/50 bg-destructive/10">
                                <AlertDescription className="flex items-center gap-2 text-sm text-destructive">
                                    <AlertCircle className="h-4 w-4" />{" "}
                                    {weightError}
                                </AlertDescription>
                            </Alert>
                        )}
                    </div>
                    <div>
                        <label
                            htmlFor="quantity"
                            className="block text-sm font-medium mb-2"
                        >
                            Quantity
                        </label>
                        <NumberInput
                            id="quantity"
                            step={1}
                            min={1}
                            value={quantity}
                            onChange={setQuantity}
                            placeholder="1"
                            className="bg-background"
                        />
                    </div>
                    <div className="space-y-3 rounded-lg border border-secondary bg-secondary/30 p-4">
                        <p className="text-sm font-medium">Optional addons</p>
                        <div className="grid gap-3 sm:grid-cols-3">
                            <div>
                                <label
                                    htmlFor="springQty"
                                    className="block text-xs text-muted-foreground mb-1"
                                >
                                    Spring (+5 pts each)
                                </label>
                                <NumberInput
                                    id="springQty"
                                    step={1}
                                    min={0}
                                    value={springQty}
                                    onChange={setSpringQty}
                                    placeholder="0"
                                    className="bg-background"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="keychainQty"
                                    className="block text-xs text-muted-foreground mb-1"
                                >
                                    Keychain (+5 pts each)
                                </label>
                                <NumberInput
                                    id="keychainQty"
                                    step={1}
                                    min={0}
                                    value={keychainQty}
                                    onChange={setKeychainQty}
                                    placeholder="0"
                                    className="bg-background"
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="clickerQty"
                                    className="block text-xs text-muted-foreground mb-1"
                                >
                                    Clicker (+15 pts each)
                                </label>
                                <NumberInput
                                    id="clickerQty"
                                    step={1}
                                    min={0}
                                    value={clickerQty}
                                    onChange={setClickerQty}
                                    placeholder="0"
                                    className="bg-background"
                                />
                            </div>
                        </div>
                    </div>
                    <Button
                        type="submit"
                        className="w-full"
                    >
                        Calculate
                    </Button>
                        </form>
                    </div>

                    {/* Right column: large points display or placeholder */}
                    <div className="flex min-h-[200px] flex-col items-center justify-center rounded-lg border border-dashed border-muted-foreground/30 bg-muted/30 px-6 py-8 lg:min-w-[200px]">
                        {result !== null ? (
                            <div className="text-center">
                                <span className="text-5xl font-bold tabular-nums tracking-tight text-primary lg:text-6xl xl:text-7xl">
                                    {result}
                                </span>
                                <p className="mt-2 text-lg font-medium text-muted-foreground">
                                    points
                                </p>
                            </div>
                        ) : (
                            <p className="text-center text-muted-foreground">
                                Calculate to see points
                            </p>
                        )}
                    </div>
                </div>
            </CardContent>
            <CardFooter />
        </Card>
    );
};

export default PrintCostCalculator;
