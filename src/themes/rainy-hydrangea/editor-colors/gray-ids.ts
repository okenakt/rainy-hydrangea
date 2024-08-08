import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const grayIds: ColorConfig = {
  color: palette.gray,
  targets: [
    "editorCodeLens.foreground",
    "editorLineNumber.foreground",
    "gitDecoration.ignoredResourceForeground",
  ],
};
