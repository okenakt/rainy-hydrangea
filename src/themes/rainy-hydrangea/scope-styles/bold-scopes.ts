import { StyleConfig } from "@/types";

export const boldScopes: StyleConfig = {
  style: "bold",
  targets: [
    "entity.name.function.python",
    "entity.name.function.ruby",
    "entity.name.type",
    "meta.definition entity.name.function",
    "meta.function.definition entity.name.function",
  ],
};
