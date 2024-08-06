import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const redIds: ColorConfig = {
  color: palette.red,
  targets: [
    "editorGutter.deletedBackground",
    "errorForeground",
    "gitDecoration.conflictingResourceForeground",
    "gitDecoration.deletedResourceForeground",
    "gitDecoration.stageDeletedResourceForeground",
    "list.errorForeground",
    "minimap.errorHighlight",
    "terminal.ansiBrightRed",
    "terminal.ansiRed",
  ],
};
