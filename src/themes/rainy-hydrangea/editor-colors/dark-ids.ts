import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const darkIds: ColorConfig = {
  color: palette.dark,
  targets: ["editor.background", "list.hoverBackground", "terminal.ansiBrightBlack"],
};
