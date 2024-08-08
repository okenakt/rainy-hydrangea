import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const lightGrayIds: ColorConfig = {
  color: palette.lightGray,
  targets: [
    "activityBar.foreground",
    "editor.foreground",
    "editorLineNumber.activeForeground",
    "foreground",
    "panelTitle.activeForeground",
    "terminal.ansiBrightWhite",
    "terminal.ansiWhite",
  ],
};
