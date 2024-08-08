import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const yellowIds: ColorConfig = {
  color: palette.yellow,
  targets: [
    "editorBracketMatch.border",
    "editorCursor.foreground",
    "editorWarning.foreground",
    "list.warningForeground",
    "minimap.warningHighlight",
    "terminal.ansiBrightYellow",
    "terminal.ansiYellow",
  ],
};
