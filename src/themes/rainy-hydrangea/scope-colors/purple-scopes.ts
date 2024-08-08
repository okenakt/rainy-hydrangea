import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const purpleScopes: ColorConfig = {
  color: palette.purple,
  targets: [
    /* Target Scopes
      - function name and call
     */
    "meta.function-call",
    "entity.name.function",
    "support.function",

    // py
    "meta.function.decorator support.type.python", // counter to blue

    // cs
    "storage.type.accessor", // get, set

    // kotlin
    "storage.type.annotation",

    // bash
    "entity.name.command",

    // java
    "punctuation.definition.annotation",

    // groovy
    "meta.method-call",

    // rb
    "keyword.other.special-method",
  ],
};
