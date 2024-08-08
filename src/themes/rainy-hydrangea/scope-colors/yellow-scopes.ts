import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const yellowScopes: ColorConfig = {
  color: palette.yellow,
  targets: [
    /* Target Scopes
      - operator
      - special characters in string
     */
    "keyword.operator",
    "constant.character.escape",

    // java
    "keyword.control.new",
  ],
};
