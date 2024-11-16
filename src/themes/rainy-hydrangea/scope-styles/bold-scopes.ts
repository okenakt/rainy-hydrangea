import { StyleConfig } from "@/types";

export const boldScopes: StyleConfig = {
  style: "bold",
  targets: [
    /* Target Scopes
      - class, type definition
      - function definition
     */
    "entity.name.class",
    "entity.name.type.class",
    "entity.name.type.interface",
    "meta.definition entity.name.function",
    "meta.function entity.name.function",

    // makefile
    "entity.name.function.target.makefile",

    // python
    "entity.name.function.python",
  ],
};
