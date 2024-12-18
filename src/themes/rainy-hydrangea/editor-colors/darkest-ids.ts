import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const darkestIds: ColorConfig = {
  color: palette.darkest,
  targets: [
    "editorGroup.border",
    "editorWidget.border",
    "sideBarSectionHeader.background",
    "tab.inactiveBackground",
    "terminal.ansiBlack",
  ],
};
