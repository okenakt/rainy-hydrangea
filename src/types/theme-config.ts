import { HexColor } from "./color-palette";
import { FontStyle } from "./font-style";

export type ColorConfig = {
  targets: string[];
  color: HexColor;
};

export type StyleConfig = {
  targets: string[];
  style: FontStyle;
};

export type ThemeConfig = {
  name: string;
  type: string;
  semanticHighlighting: boolean;
  editorColors: ColorConfig[];
  scopeColors: ColorConfig[];
  scopeStyles: StyleConfig[];
};
