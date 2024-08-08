import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const lightGrayScopes: ColorConfig = {
  color: palette.lightGray,
  targets: [
    "meta.function-call.arguments",
    "punctuation.accessor",
    "punctuation.separator",
    "variable.object",
    "variable.other",
    "variable.parameter.function-call",
  ],
};
