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

    // js, jsx, ts, tsx
    "meta.array.literal variable.other.readwrite", // counter to indigo

    // python
    "meta.function-call.arguments", // counter to purple
  ],
};
