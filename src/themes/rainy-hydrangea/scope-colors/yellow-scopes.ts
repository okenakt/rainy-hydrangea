import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const yellowScopes: ColorConfig = {
  color: palette.yellow,
  targets: [
    "constant.character.format.placeholder",
    "constant.other.placeholder",
    "keyword.operator",
    "storage.type.format",
  ],
};
