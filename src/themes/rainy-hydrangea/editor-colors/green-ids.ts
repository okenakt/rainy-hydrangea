import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const greenIds: ColorConfig = {
  color: palette.green,
  targets: [
    "editorGutter.addedBackground",
    "gitDecoration.addedResourceForeground",
    "gitDecoration.renamedResourceForeground",
    "gitDecoration.untrackedResourceForeground",
    "terminal.ansiBrightGreen",
    "terminal.ansiGreen",
  ],
};
