import { StyleConfig } from "@/types";

export const boldScopes: StyleConfig = {
  style: "bold",
  targets: [
    /* Target Scopes
      - class, type definition
      - function definition
     */
    "entity.name.type",
    "meta.definition.function entity.name.function",
    "meta.definition.variable entity.name.function",
    "meta.function.definition entity.name.function",

    // py
    "entity.name.function.python",

    // rb
    "entity.name.function.ruby",
  ],
};
