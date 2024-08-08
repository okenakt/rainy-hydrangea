import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const purpleScopes: ColorConfig = {
  color: palette.purple,
  targets: [
    "entity.name.function",
    "meta.function-call",
    "meta.function.decorator support.type.python",
    "storage.type.accessor",
    "support.function",
  ],
};
