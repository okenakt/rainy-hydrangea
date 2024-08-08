import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const grayScopes: ColorConfig = {
  color: palette.gray,
  targets: [
    /* Target Scopes 
      - comment
     */
    "comment",
    "punctuation.definition.comment",
  ],
};
