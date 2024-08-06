import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const pinkScopes: ColorConfig = {
  color: palette.pink,
  targets: [
    "keyword.control",
    "keyword.operator.new",
    "keyword.other",
    "meta.function",
    "storage.modifier",
    "storage.type",
  ],
};
