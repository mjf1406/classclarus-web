/** @format */

import * as React from "react";
import { Info, Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { Input } from "./input";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./tooltip";

/** Round to step precision to avoid float noise (e.g. 0.1 + 0.2 → 0.3 not 0.30000000000000004) */
function roundToStep(value: number, step: number): number {
    if (step >= 1 || step <= 0) return Math.round(value);
    const decimals = Math.ceil(-Math.log10(step));
    const factor = 10 ** decimals;
    return Math.round(value * factor) / factor;
}

interface NumberInputProps
    extends Omit<React.ComponentProps<"input">, "type" | "step" | "onChange"> {
    value: string | number;
    onChange: (value: string) => void;
    step?: number;
    min?: number;
    max?: number;
    disabled?: boolean;
}

export function NumberInput({
    value,
    onChange,
    step = 1,
    min,
    max,
    disabled,
    className,
    ...props
}: NumberInputProps) {
    const numericValue = Number(value);
    const isValidNumber = !Number.isNaN(numericValue);

    const handleIncrement = (e: React.MouseEvent) => {
        e.preventDefault();
        if (disabled) return;

        const multiplier =
            e.ctrlKey && e.shiftKey ? 25 : e.ctrlKey ? 5 : e.shiftKey ? 10 : 1;
        const increment = step * multiplier;
        const newValue = isValidNumber ? numericValue + increment : step;
        const finalValue =
            max !== undefined ? Math.min(newValue, max) : newValue;
        onChange(String(roundToStep(finalValue, step)));
    };

    const handleDecrement = (e: React.MouseEvent) => {
        e.preventDefault();
        if (disabled) return;

        const multiplier =
            e.ctrlKey && e.shiftKey ? 25 : e.ctrlKey ? 5 : e.shiftKey ? 10 : 1;
        const decrement = step * multiplier;
        const newValue = isValidNumber ? numericValue - decrement : step;
        const finalValue =
            min !== undefined ? Math.max(newValue, min) : newValue;
        onChange(String(roundToStep(finalValue, step)));
    };

    const tooltipContent = (
        <div className="space-y-1">
            <div className="font-medium">Hotkeys</div>
            <div className="text-xs space-y-0.5">
                <div>Click: ±{step}</div>
                <div>Shift + Click: ±{step * 10}</div>
                <div>Ctrl + Click: ±{step * 5}</div>
                <div>Ctrl + Shift + Click: ±{step * 25}</div>
            </div>
        </div>
    );

    return (
        <div className={cn("flex items-center gap-1", className)}>
            <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={handleDecrement}
                disabled={
                    disabled ||
                    (min !== undefined && isValidNumber && numericValue <= min)
                }
                className="h-9 w-9 shrink-0"
            >
                <Minus className="size-4" />
                <span className="sr-only">Decrease</span>
            </Button>
            <Input
                type="number"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                step={step}
                min={min}
                max={max}
                disabled={disabled}
                className="text-center"
                {...props}
            />
            <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={handleIncrement}
                disabled={
                    disabled ||
                    (max !== undefined && isValidNumber && numericValue >= max)
                }
                className="h-9 w-9 shrink-0"
            >
                <Plus className="size-4" />
                <span className="sr-only">Increase</span>
            </Button>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            disabled={disabled}
                            className="h-8 w-8 shrink-0"
                        >
                            <Info className="size-3.5" />
                            <span className="sr-only">Show hotkeys</span>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>{tooltipContent}</TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}
