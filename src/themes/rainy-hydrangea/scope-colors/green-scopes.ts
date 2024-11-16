import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const greenScopes: ColorConfig = {
  color: palette.green,
  targets: [
    /* Target Scopes
      - string
     */
    "entity.name.import", // puctuated import
    "puctuation",
    "string",

    // kotlin
    "entity.string",

    // python
    "storage.type.string", // fstring
  ],
};
