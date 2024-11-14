import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const pinkScopes: ColorConfig = {
  color: palette.pink,
  targets: [
    /* Target Scopes
      - language keyword
     */
    "storage",
    "keyword",
    "storage.type.function",

    // cpp
    "storage.type.namespace",

    // groovy
    "storage.type.def",

    // js, jsx, ts, tsx
    "meta.var.expr storage.type", // var, const
    "storage.type.enum",
    "storage.type.type",

    // php
    "storage.type.interface",

    // py
    "storage.type.class",

    // r
    "entity.namespace",

    // rs
    "entity.name.namespace",
    "keyword.other storage.type", // let
  ],
};
