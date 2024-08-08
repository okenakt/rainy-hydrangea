import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const blueScopes: ColorConfig = {
  color: palette.blue,
  targets: [
    "entity.name",
    "entity.other.inherited-class",
    "keyword.type",
    "meta.definition",
    "meta.function.parameters",
    "meta.import",
    "storage.type.built-in",
    "storage.type.object",
    "storage.type.primitive",
    "support.type",
    "variable.language",
  ],
};
