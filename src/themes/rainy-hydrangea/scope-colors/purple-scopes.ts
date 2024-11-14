import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const purpleScopes: ColorConfig = {
  color: palette.purple,
  targets: [
    /* Target Scopes
      - function name and call
     */
    "entity.name.function",
    "meta.function-call",
    "support.function",

    // py
    "meta.function.decorator support.type.python", // counter to blue

    // cs
    "storage.type.accessor", // get, set

    // kotlin
    "storage.type.annotation",

    // bash
    "entity.name.command",

    // groovy
    "meta.method-call",

    // java
    "punctuation.definition.annotation",

    // js, jsx, ts, tsx
    "variable.object.property",

    // rb
    "keyword.other.special-method",
  ],
};
