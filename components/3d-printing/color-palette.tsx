/** @format */

import bambuColors from "@/lib/bambu_colors.json";

type ColorEntry = { hex: string; isOption?: boolean };
const colors = bambuColors as Record<string, ColorEntry>;

const optionColors = Object.entries(colors)
  .filter(([, entry]) => entry.isOption === true)
  .sort(([a], [b]) => a.localeCompare(b));

export function ColorPalette() {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-3">
      {optionColors.map(([name, entry]) => (
        <div
          key={name}
          className="flex flex-col items-center gap-1"
        >
          <div
            className="w-10 h-10 rounded-lg border border-border shadow-sm"
            style={{ backgroundColor: entry.hex }}
            title={name}
          />
          <span className="text-xs text-center text-muted-foreground">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
}

export default ColorPalette;
