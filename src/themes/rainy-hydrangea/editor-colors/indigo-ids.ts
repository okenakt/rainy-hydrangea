import { ColorConfig } from "@/types";
import { palette } from "../palette";

export const indigoIds: ColorConfig = {
  color: palette.indigo,
  targets: [
    "editorBracketHighlight.foreground3",
    "editorBracketHighlight.foreground5",
    "minimap.infoHighlight",
  ],
};
