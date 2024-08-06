import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const greenScopes: ColorConfig = {
  color: palette.green,
  targets: ["constant.character.escape", "entity.name.import", "puctuation", "string"],
};
