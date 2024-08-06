import { ColorConfig } from "@/types";
import { alpha, palette } from "../palette";

export const blueIds: ColorConfig = {
  color: palette.blue,
  targets: [
    "activityBar.activeBorder",
    "activityBarBadge.background",
    "badge.background",
    "button.hoverBackground",
    "editorBracketHighlight.foreground4",
    "editorGutter.modifiedBackground",
    "focusBorder",
    "gitDecoration.modifiedResourceForeground",
    "gitDecoration.stageModifiedResourceForeground",
    "gitDecoration.submoduleResourceForeground",
    "inputValidation.infoBorder",
    "panelTitle.activeBorder",
    "statusBarItem.remoteBackground",
    "tab.activeBorder",
    "terminal.ansiBlue",
    "terminal.ansiBrightBlue",
  ],
};

export const transparentBlueIds: ColorConfig = {
  color: `${palette.blue}${alpha}`,
  targets: [
    "button.background",
    "editor.findMatchHighlightBackground",
    "editor.selectionBackground",
    "list.activeSelectionBackground",
    "minimap.findMatchHighlight",
    "minimap.selectionHighlight",
    "selection.background",
  ],
};
