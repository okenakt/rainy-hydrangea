import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const darkerIds: ColorConfig = {
  color: palette.darker,
  targets: [
    "activityBar.background",
    "editor.lineHighlightBackground",
    "editorGroupHeader.tabsBackground",
    "editorWidget.background",
    "scrollbar.shadow",
    "sideBar.background",
    "statusBar.background",
    "widget.shadow",
  ],
};
