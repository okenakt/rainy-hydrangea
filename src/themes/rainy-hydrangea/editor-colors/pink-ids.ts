import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const pinkIds: ColorConfig = {
  color: palette.pink,
  targets: [
    "editorBracketHighlight.foreground1",
    "terminal.ansiBrightMagenta",
    "terminal.ansiMagenta",
  ],
};
