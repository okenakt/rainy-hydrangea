import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const blueScopes: ColorConfig = {
  color: palette.blue,
  targets: [
    /* Target Scopes
      - class or type name
      - variables related to class
     */
    "entity",
    "keyword.type",
    "storage.type",
    "support.class",
    "support.type",
    "variable.language", // this, self, ...

    // python
    "variable.parameter.function.language.special", // cls, self in function parameter
    "meta.function.parameters", // function type annotation
  ],
};
