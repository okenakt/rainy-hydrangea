import { ColorThemeGenerator } from "@/color-theme-generator";
import { RainyHydrangea } from "@/themes";
import { promises as fs } from "fs";
import { join } from "path";

export function writeFile(path: string, data: unknown): Promise<void> {
  return fs.writeFile(path, JSON.stringify(data, null, 2));
}

async function main() {
  const outDir = join(__dirname, "..", "..", "themes");

  writeFile(
    join(outDir, "rainy-hydrangea-color-theme.json"),
    await ColorThemeGenerator.generate(RainyHydrangea),
  );
}

main();
