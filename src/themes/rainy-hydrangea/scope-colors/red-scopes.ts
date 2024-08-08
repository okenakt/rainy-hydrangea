import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const redScopes: ColorConfig = {
  color: palette.red,
  targets: [
    /* Target Scopes
      - constant
      - invalid syntax
     */
    "constant",
    "invalid",

    // css
    "keyword.other.unit",
  ],
};
