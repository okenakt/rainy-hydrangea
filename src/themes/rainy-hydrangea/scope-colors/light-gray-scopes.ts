import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const lightGrayScopes: ColorConfig = {
  color: palette.lightGray,
  targets: [
    /* Target Scopes
      - common variables
      - dot, comma
     */
    "punctuation.accessor",
    "punctuation.separator",
    "variable.other",

    // coffee
    "meta.arguments", // counter to purple

    // ts, tsx
    "meta.block meta.object variable.other.readwrite", // counter to indigo

    // py
    "meta.function-call.arguments", // counter to purple
  ],
};
